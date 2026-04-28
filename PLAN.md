# 河南省安装定额图片识别采集任务计划

## Context
在 `E:\定额采集` 目录中，通过 MiniMax OCR 图片识别技术，从截图中按时间顺序提取河南省安装工程定额的详细数据，通过重叠检测自动分组，合并拼接后存储到 `extracted_quota_data_detailed.json`。

## 规模估算
- **首批**：161 个子目（1-1-1 ~ 1-1-161），346 张截图
- **远期总规模**：17000+ 子目
- **分批策略**：每批处理量受 MiniMax 额度限制（150次/5小时）

## 约束条件
- MiniMax 每 5 小时 150 次调用额度
- 单张识别失败即整个流程失败，不允许数据丢失
- 346 张图覆盖 161 个定额，每定额 1-4 张图片
- 图片分多次截取，同一定额不同页面有重叠

## 识别字段（按 CLAUDE.md 规定）

### 定额主表
- 定额编号 (code)
- 定额名称 (name)
- 单位 (unit)
- 综合单价 (comprehensive_price)
- 人工费 (labor_fee)
- 材料费 (material_fee)
- 机械费 (mechanical_fee)
- 管理费 (management_fee)
- 利润 (profit)
- 规费 (regulatory_fee)
- 税金 (tax)
- 安全文明施工费 (safety_culture_fee)
- 其他措施费 (other_measure_fee)
- 地区：河南省 (region)
- 专业：安装 (specialty)
- 来源截图 (source_screenshot)

### 工料机明细（labor_details / material_details / mechanical_details）
- 编码 (code)
- 名称 (name)
- 规格及型号 (spec) — 仅材料/机械
- 单位 (unit)
- 含量/数量 (quantity)
- 定额价 (quota_price)
- 市场价 (market_price)
- 合价 (total)
- 原始含量 — 仅人工

## 执行流程

### 1. 遍历截图
- 按文件名时间顺序读取 `screenshots/1-1/` 下的 346 张图片
- 输出：按序排列的截图路径列表

### 2. OCR 识别
- 每张图调用 `mcp__MiniMax__understand_image`
- Prompt 要求：提取该截图包含的**完整定额主表 + 工料机明细**
- 识别内容：定额编号、各金额字段、三类明细全量字段
- 容错：**零容错** — 单张失败则整个流程失败

### 3. 自动分组
- 根据 OCR 识别的定额编号（如 `1-1-1`）将图片归组
- 多张图属于同一定额时，通过重叠检测识别
- 输出：Map<定额编号, 图片识别结果[]>

### 4. 合并拼接
- 同一定额有多张图时，去重后拼接各图的部分数据
- 拼接优先级：主表数据取最新一张，明细数据合并去重
- 输出：每个定额一条完整记录

### 5. 统一定额取新
- JSON 已有数据 vs 本次识别数据
- 同编号：用本次识别结果覆盖旧数据
- 输出：合并后的完整数据集

### 6. 更新 JSON
- 将最终结果写入 `extracted_quota_data_detailed.json`
- 格式：主表数组 + 每条记录含三类明细

## 关键文件路径
- 截图目录：`E:\定额采集\screenshots\1-1\`
- JSON 数据：`E:\定额采集\extracted_quota_data_detailed.json`
- 数据库：`E:\定额采集\quota_collection.db`
- 计划文件：`E:\定额采集\PLAN.md`

## 验证方式
1. 处理完成后，检查 JSON 中定额编号是否覆盖 1-1-1 ~ 1-1-161 全部 161 个
2. 每个定额的主表字段（编号、名称、单价、地区、专业）完整
3. 每个定额的 labor_details / material_details / mechanical_details 非空
4. 对比处理前后数据条数，确认合并去重正确

## 架构待讨论
- [ ] 分批策略：每批处理数量、额度控制
- [ ] 存储结构：单文件还是分目录存储
- [ ] 进度追踪：状态文件设计
- [ ] 后续批次：如何避免重复处理已采集数据
