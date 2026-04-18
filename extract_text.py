#!/usr/bin/env python3
"""
定额数据库提取脚本 - 文本层直接提取
利用 PDF 的可搜索文本层，无需 OCR

流程：
1. 直接提取 PDF 文本层的定额数据
2. 解析结构化数据
3. 保存为 JSON/TXT/Excel
"""
import os
import sys
import io
import re
import json
import datetime
from pathlib import Path
from typing import Optional, List, Dict
from dataclasses import dataclass, asdict

# 中文编码修复
if sys.platform == "win32":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")
    os.environ["PYTHONIOENCODING"] = "utf-8"

import pypdfium2

# ============ 配置 ============
WORK_DIR = Path("/mnt/e/quota_extract")
OUTPUT_DIR = WORK_DIR / "output"
TEMP_DIR = WORK_DIR / "temp"
LOG_DIR = WORK_DIR / "logs"

# PDF 路径
PDF_BASE = Path("/mnt/e/work/定额库/河南省安装定额-可复制检索")
TXT_PATH = Path("/mnt/e/work/定额库/河南省通用安装工程预算定额2016.txt")
EXCEL_DIR = Path("/mnt/e/work/定额库/Excel导出/111111/单项工程/安装工程")

# ============ 日志 ============
def log(msg: str, end: str = "\n"):
    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line, end=end, flush=True)
    try:
        LOG_DIR.mkdir(parents=True, exist_ok=True)
        with open(LOG_DIR / f"extract_{datetime.date.today()}.log", "a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass

# ============ 数据结构 ============
@dataclass
class QuotaRecord:
    book: int          # 册号
    page: int          # 页码
    code: str          # 定额编号 如 "1-1-10"
    unit: str          # 单位
    labor_fee: float   # 人工费
    material_fee: float # 材料费
    machinery_fee: float # 机械费
    management_fee: float # 管理费
    profit: float      # 利润
    safety_fee: float  # 安文费
    total_price: float # 综合单价
    raw_text: str      # 原始文本行

# ============ PDF 解析 ============
def get_pdf_map():
    """获取 PDF 文件映射"""
    pdf_files = list(PDF_BASE.glob("*.pdf"))
    pdf_map = {}

    cn_num_map = {'一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
                  '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
                  '十一': 11, '十二': 12}

    for f in pdf_files:
        name = f.stem
        if name == "十二册":
            pdf_map[12] = f
            continue
        match = re.search(r'^第(.+?)册', name)
        if match:
            num_str = match.group(1)
            try:
                num = int(num_str)
                pdf_map[num] = f
            except:
                if num_str in cn_num_map:
                    pdf_map[cn_num_map[num_str]] = f
                elif num_str.startswith('十') and len(num_str) <= 2:
                    if num_str == '十':
                        pdf_map[10] = f
                    elif num_str[1] in cn_num_map:
                        pdf_map[10 + cn_num_map[num_str[1]]] = f
    return pdf_map


def is_quota_table_page(text: str) -> bool:
    """判断页面是否包含定额表格"""
    # 定额编号格式: X-X-XXX
    if re.search(r'\b\d+-\d+-\d+\b', text):
        # 检查是否有费用数据 (数字格式)
        if re.search(r'\d+\.\d{2}', text):  # 如 1765.24
            return True
    return False


def parse_quota_table(text: str, book: int, page_num: int) -> List[QuotaRecord]:
    """解析定额表格文本 - 提取所有费用字段

    PDF 表格结构:
    - 行包含定额编号: "定额编号 1-2-24 1-2-25 1-2-26"
    - 行包含综合单价: "价(元) 1765.24 3518.74 ..." (在同一行)
    - 费用头行(无值): "人工 费(元)", "材 料 费(元)", etc.
    - 费用值行(每行5个值，5列对应5个定额编号)

    顺序: 代码行 -> 重量行 -> 综合单价行 -> 费用头行 -> 费用值行
    """
    records = []
    lines = text.split('\n')

    # ========== 第一步：提取定额编号 ==========
    quota_codes = []
    code_line_idx = -1
    for idx, line in enumerate(lines):
        codes = re.findall(r'\d+-\d+-\d+', line)
        if codes:
            quota_codes = codes
            code_line_idx = idx
            break

    if not quota_codes:
        return []

    num_codes = len(quota_codes)

    # ========== 第二步：提取单位 ==========
    unit = ""
    for line in lines:
        if "单位" in line:
            unit_match = re.search(r'单位[：:]\s*(\S+)', line)
            if unit_match:
                unit = unit_match.group(1)
                break

    # ========== 第三步：提取综合单价 ==========
    col_total_prices = [0.0] * num_codes
    for idx, line in enumerate(lines):
        if '价(元)' in line or '价 (元)' in line:
            # 提取"价(元)"后面的所有数值
            # 处理 "价(元) 1765.24 3518.74 ..." 格式
            parts = line.split('价')
            if len(parts) >= 2:
                value_part = parts[-1]  # 取最后一部分 "(元) 1765.24 ..."
                value_part = re.sub(r'^[^\d]*', '', value_part)  # 去掉非数字前缀
                prices = re.findall(r'[\d,]+\.\d+', value_part)
                for i, p in enumerate(prices[:num_codes]):
                    try:
                        col_total_prices[i] = float(p.replace(',', ''))
                    except:
                        pass
            break

    # ========== 第四步：提取费用头行和值行 ==========
    # 费用字段映射 (按PDF中的顺序)
    fee_field_names = ['labor_fee', 'material_fee', 'machinery_fee',
                        'management_fee', 'profit', 'safety_fee']

    # 找费用头行 - 包含"费"和"元"但没有小数点的行
    header_start_idx = -1
    for idx in range(code_line_idx + 1, len(lines)):
        line = lines[idx].strip()
        # 跳过重量行等 - 只有数字和空格的行
        if re.match(r'^[\d\s]+$', line):
            continue
        # 找到费用头行
        if '费' in line and '元' in line and not re.search(r'\d+\.\d', line):
            header_start_idx = idx
            break

    if header_start_idx < 0:
        # 没有找到费用头行，无法提取费用数据
        header_start_idx = code_line_idx + 10  # 默认跳过一些行

    # 找费用值行的起始位置 - 在头行之后，第一个只包含数字的行
    first_value_idx = -1
    for idx in range(header_start_idx, min(header_start_idx + 30, len(lines))):
        line = lines[idx].strip()
        if not line:
            continue
        # 值行：只有数字、小数点，空格，且包含小数
        if re.match(r'^[\d\s.,]+$', line) and re.search(r'\d+\.\d', line):
            first_value_idx = idx
            break

    # 收集费用值行
    # PDF 结构：每个fee type有num_codes个值，分布在连续的num_codes行中
    # 例如：5个定额编号，6种费用类型 = 30行值
    # 行0-4是第一种费用的5个值，行5-9是第二种费用的5个值，等等
    all_fee_values = []  # [[fee1_val1, fee1_val2, ...], [fee2_val1, fee2_val2, ...], ...]
    if first_value_idx >= 0:
        # 从第一个值行开始收集
        value_lines = []
        for idx in range(first_value_idx, min(first_value_idx + 60, len(lines))):
            line = lines[idx].strip()
            if not line:
                break
            # 检查是否是值行
            if re.match(r'^[\d\s.,]+$', line) and re.search(r'\d+\.\d', line):
                # 提取数值
                nums = re.findall(r'[\d,]+\.\d+', line)
                if nums:
                    value_lines.append(nums)
                else:
                    # 尝试另一种提取方式
                    nums_alt = re.findall(r'\d+\.\d+', line.replace(' ', ''))
                    if nums_alt:
                        value_lines.append(nums_alt)
            else:
                # 非值行，停止
                break

        # 将值行转换为费用分组
        # value_lines 是按行存储的，每行1个值（或多个但这里只有1个）
        # 我们需要将其转换为按费用类型分组的结构
        # value_lines[0:num_codes] = 第一种费用的所有值
        # value_lines[num_codes:2*num_codes] = 第二种费用的所有值
        for i in range(0, len(value_lines), num_codes):
            group = value_lines[i:i+num_codes]
            if len(group) == num_codes:
                all_fee_values.append(group)

    # ========== 第五步：创建记录 ==========
    for col_idx in range(num_codes):
        fee_values = {}
        for fee_idx, field_name in enumerate(fee_field_names):
            if fee_idx < len(all_fee_values) and col_idx < len(all_fee_values[fee_idx]):
                try:
                    # all_fee_values[fee_idx][col_idx] is like ['1006.52']
                    val_str = all_fee_values[fee_idx][col_idx][0] if isinstance(all_fee_values[fee_idx][col_idx], list) else all_fee_values[fee_idx][col_idx]
                    val = float(val_str.replace(',', ''))
                    fee_values[field_name] = val
                except:
                    pass

        record = QuotaRecord(
            book=book,
            page=page_num + 1,
            code=quota_codes[col_idx],
            unit=unit,
            labor_fee=fee_values.get('labor_fee', 0),
            material_fee=fee_values.get('material_fee', 0),
            machinery_fee=fee_values.get('machinery_fee', 0),
            management_fee=fee_values.get('management_fee', 0),
            profit=fee_values.get('profit', 0),
            safety_fee=fee_values.get('safety_fee', 0),
            total_price=col_total_prices[col_idx] if col_idx < len(col_total_prices) else 0,
            raw_text=""
        )
        records.append(record)

    return records


def extract_book(book_num: int) -> List[QuotaRecord]:
    """提取单册所有定额数据"""
    log(f"\n{'='*60}")
    log(f"提取第 {book_num} 册")
    log(f"{'='*60}")

    pdf_map = get_pdf_map()
    if book_num not in pdf_map:
        log(f"错误: 找不到第 {book_num} 册 PDF")
        return []

    pdf_path = pdf_map[book_num]
    log(f"PDF: {pdf_path.name}")

    doc = pypdfium2.PdfDocument(str(pdf_path))
    total_pages = len(doc)
    log(f"总页数: {total_pages}")

    all_records = []
    quota_pages = 0
    processed_pages = 0

    for page_num in range(total_pages):
        processed_pages += 1

        page = doc[page_num]
        textpage = page.get_textpage()
        text = textpage.get_text_bounded()

        # 进度显示
        if processed_pages % 50 == 0:
            log(f"[{book_num}册] 进度: {processed_pages}/{total_pages} 页 | 已提取: {quota_pages} 页 | 记录: {len(all_records)} 条")

        # 检查是否包含定额表格
        if not is_quota_table_page(text):
            continue

        quota_pages += 1

        # 解析定额数据
        records = parse_quota_table(text, book_num, page_num)
        all_records.extend(records)

        if records:
            log(f"  第 {page_num+1} 页: 提取到 {len(records)} 条记录 (如: {records[0].code})")

    log(f"\n第 {book_num} 册完成: 共 {len(all_records)} 条记录")
    return all_records


def save_records(records: List[QuotaRecord], book_num: int):
    """保存提取结果"""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # JSON
    json_path = OUTPUT_DIR / f"book_{book_num:02d}_records.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump([asdict(r) for r in records], f, ensure_ascii=False, indent=2)
    log(f"已保存: {json_path}")

    # TXT (简化格式)
    txt_path = OUTPUT_DIR / f"book_{book_num:02d}_raw.txt"
    with open(txt_path, "w", encoding="utf-8") as f:
        for r in records:
            f.write(f"{r.code} {r.unit} {r.total_price:.2f}\n")
    log(f"已保存: {txt_path}")


def main():
    """主函数"""
    log("="*60)
    log("定额数据库提取 - 文本层直接提取")
    log("="*60)

    # 确保目录存在
    for d in [OUTPUT_DIR, TEMP_DIR, LOG_DIR]:
        d.mkdir(parents=True, exist_ok=True)

    # 提取所有 12 册
    total_records = 0
    for book_num in range(1, 13):
        records = extract_book(book_num)
        if records:
            save_records(records, book_num)
            total_records += len(records)

    log(f"\n{'='*60}")
    log(f"全部完成! 共提取 {total_records} 条记录")
    log(f"{'='*60}")


if __name__ == "__main__":
    main()
