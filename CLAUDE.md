# 河南省安装定额图片识别采集任务

## 任务背景 (Context)
在 `E:\定额采集` 目录中，通过自动化图片识别（OCR）技术，从截图中按时间顺序提取河南省安装工程定额的详细数据。目前已成功提取出包含主表数据和工料机明细数据的结构化 JSON 文件，并需将这些高精度数据存储到数据库中。

## 现状分析 (Current Status)
- **工作目录**：`E:\定额采集`
- **截图来源**：`E:\定额采集\screenshots\` (共17张截图)
- **已提取数据**：`extracted_quota_data_detailed.json` (包含完整的定额主表与工料机明细数据)
- **数据库**：`quota_collection.db`
- **状态记录**：`collect_state.txt`, `screenshot_state.txt`, `auto_state.txt`

## 任务目标 (Objectives)
1. **数据解析** - 从已生成的详细 JSON 数据文件 (`extracted_quota_data_detailed.json`) 中读取并解析定额数据。
2. **结构化存储** - 将包含工料机明细在内的高维度定额数据完整写入 `quota_collection.db` 数据库，确保建立主表与明细表的关联。
3. **进度管理** - 更新相关状态文件，记录数据处理进度。

## 执行流程 (Execution Flow)
1. 读取并解析 `extracted_quota_data_detailed.json` 文件。
2. 建立或更新数据库表结构（需包含定额主表以及人工、材料、机械明细子表）。
3. 遍历 JSON 中的 `quotas` 数组，将各项基础属性（编号、名称、金额等）存入定额主表。
4. 将各定额下属的 `labor_details`（人工明细）、`material_details`（材料明细）、`mechanical_details`（机械明细）存入对应的明细关联表。
5. 更新处理进度至状态文件。

## 数据字段体系 (Data Fields System)

### 1. 全局与分类属性
- 采集日期 (collection_date)
- 地区 (region)
- 工程类别 (category)
- 册别 (book)
- 人工费价格指数 (labor_price_index)
- 机械费价格指数 (mechanical_price_index)
- 管理费价格指数 (management_price_index)

### 2. 定额主表数据 (Quotas)
- 定额编号 (code)
- 定额名称 (name)
- 单位 (unit)
- 单价 (unit_price)
- 综合单价 (comprehensive_price)
- 人工费 (labor_fee)
- 人工费价格指数 (labor_price_index)
- 材料费 (material_fee)
- 机械费 (mechanical_fee)
- 机械费价格指数 (mechanical_price_index)
- 管理费 (management_fee)
- 管理费价格指数 (management_price_index)
- 利润 (profit)
- 规费 (regulatory_fee)
- 税金 (tax)
- 安全文明施工费 (safety_culture_fee)
- 其他措施费 (other_measure_fee)
- 来源截图 (source_screenshot)

### 3. 工料机明细数据 (Details)
针对每项定额，包含以下三类明细的列表（每条明细包含编码、类别、名称、规格及型号、单位、含量、数量、定额价、市场价、合价、原始含量的所有详细数据）：
- **人工费明细** (`labor_details`): 如普工、一般技工、高级技工等。
- **材料费明细** (`material_details`): 如热轧薄钢板、木板、机油及其他材料费等。
- **机械费明细** (`mechanical_details`): 如叉式起重机、折旧费、柴油、电等。

## 验证方式 (Validation)
1. 检查 `quota_collection.db` 数据库表结构是否完整覆盖上述所有主表和明细字段。
2. 随机抽查某一定额（如 `1-1-1`），核对主表金额与 JSON 数据是否完全一致。
3. 关联查询验证，确保 `1-1-1` 对应的所有工料机明细数据条数与金额能准确对应。
4. 确认 **所有** 张截图对应的数据均已成功入库，无遗漏。

## 识别即记录规则（必须遵守）
每张图处理完必须立即保存，禁止批量积累后一次性汇总：
1. 维护内存中的 quota Map（key=定额编号）
2. 每识别完一张图，立即将该图的OCR结果更新到Map中
3. 同编号定额：合并去重（主表取最新，明细累加）
4. 每处理完一张图，直接将该定额写入 `extracted_quota_data_detailed.json`
5. 在 `processed_screenshots.txt` 中追加该截图文件名
6. 任何时候中断，都可以从断点恢复

## 关键文件路径 (Key Paths)
- **JSON数据源**：`E:\定额采集\extracted_quota_data_detailed.json`
- **截图目录**：`E:\定额采集\screenshots\`
- **数据库**：`E:\定额采集\quota_collection.db`
- **状态文件**：`E:\定额采集\collect_state.txt`
- **计划文件**：`E:\定额采集\PLAN.md`
- **已处理列表**：`E:\定额采集\processed_screenshots.txt`
- **进度检查点**：`E:\定额采集\checkpoint.json`