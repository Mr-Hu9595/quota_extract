# 河南省安装定额图片识别采集设计方案

> **日期：** 2026-04-27
> **状态：** 已批准

## 目标
通过 MiniMax OCR 图片识别，从 346 张截图中提取河南省安装工程定额（1-1-1 ~ 1-1-161）的完整数据，通过重叠检测自动分组、合并拼接，存储到 `extracted_quota_data_detailed.json`。

## 规模
- **首批：** 161 个子目，346 张截图
- **远期：** 17000+ 子目
- **存储：** 单 JSON 文件，后续再分库

## 约束条件
- MiniMax 每 5 小时 150 次调用额度
- **零容错** — 单张识别失败则整个流程失败
- 截图分多次截取，同一定额不同页面有重叠

## 识别字段

### 定额主表
| 字段 | 说明 |
|------|------|
| code | 定额编号 |
| name | 定额名称 |
| unit | 单位 |
| comprehensive_price | 综合单价 |
| labor_fee | 人工费 |
| material_fee | 材料费 |
| mechanical_fee | 机械费 |
| management_fee | 管理费 |
| profit | 利润 |
| regulatory_fee | 规费 |
| tax | 税金 |
| safety_culture_fee | 安全文明施工费 |
| other_measure_fee | 其他措施费 |
| region | 地区：河南省 |
| specialty | 专业：安装 |
| source_screenshot | 来源截图 |

### 工料机明细（labor / material / mechanical）
| 字段 | 说明 |
|------|------|
| code | 编码 |
| name | 名称 |
| spec | 规格及型号（材料/机械） |
| unit | 单位 |
| quantity | 含量/数量 |
| quota_price | 定额价 |
| market_price | 市场价 |
| total | 合价 |

## 执行流程

### 1. 遍历截图
- 按文件名时间顺序读取 `screenshots/1-1/` 下 346 张图片

### 2. OCR 识别
- 每张图调用 `mcp__MiniMax__understand_image`
- 提取完整定额主表 + 工料机明细
- 零容错：单张失败则整个流程失败

### 3. 自动分组
- 根据 OCR 识别的定额编号将图片归组
- 同一定额有多张图时，通过重叠检测识别

### 4. 合并拼接
- 主表数据取最新一张
- 明细数据合并去重后拼接
- 输出每个定额一条完整记录

### 5. 统一定额取新
- JSON 已有数据 vs 本次识别数据
- 同编号：用本次识别结果覆盖旧数据

### 6. 更新 JSON
- 最终结果写入 `extracted_quota_data_detailed.json`

## 分批策略
- 每批 150 张（留余量应对重叠分组）
- 每批完成后等待额度重置
- 自动记录已处理截图，断点续传

## 进度追踪文件
| 文件 | 用途 |
|------|------|
| processed_screenshots.txt | 已处理截图列表 |
| quota_index.json | 定额编号索引 |
| batch_status.txt | 批次数、起止时间 |

## 验证方式
1. 定额编号覆盖 1-1-1 ~ 1-1-161 全部 161 个
2. 主表字段（编号、名称、单价、地区、专业）完整
3. labor/material/mechanical_details 非空
4. 处理前后数据条数对比确认

## 架构待后续讨论
- [ ] 分批策略细化
- [ ] 后续批次：避免重复处理已采集数据
