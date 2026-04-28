# 河南省安装定额图片识别采集 - 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**目标：** 通过 MiniMax OCR 从 346 张截图中提取 161 个定额数据，存储到 JSON 文件

**架构：** Node.js 脚本作为状态管理器，Claude Code 直接调用 MiniMax MCP 工具处理每张截图

**技术栈：** Node.js, MiniMax MCP (mcp__MiniMax__understand_image)

---

## 文件结构

```
E:\定额采集\
├── collect_batch.js          # 状态管理器（追踪进度、存储结果）
├── processed_screenshots.txt # 已处理截图列表
├── quota_index.json          # 定额编号索引
├── batch_status.txt          # 批次状态记录
├── extracted_quota_data_detailed.json  # 输出数据（已存在）
├── screenshots/1-1/         # 截图目录（346张）
└── docs/superpowers/plans/  # 本计划
```

---

## Task 1: 创建 Node.js 状态管理器

**Files:**
- Create: `E:\定额采集\collect_batch.js`

- [ ] **Step 1: 创建状态管理器基础结构**

```javascript
const fs = require('fs');
const path = require('path');

// 路径配置
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots', '1-1');
const OUTPUT_FILE = path.join(__dirname, 'extracted_quota_data_detailed.json');
const PROCESSED_FILE = path.join(__dirname, 'processed_screenshots.txt');
const INDEX_FILE = path.join(__dirname, 'quota_index.json');
const BATCH_STATUS_FILE = path.join(__dirname, 'batch_status.txt');

// 现有数据
let existingData = { quotas: [] };
let quotaIndex = {};

// 初始化
function init() {
  if (fs.existsSync(OUTPUT_FILE)) {
    existingData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
  }
  if (fs.existsSync(INDEX_FILE)) {
    quotaIndex = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));
  }
  if (!fs.existsSync(PROCESSED_FILE)) {
    fs.writeFileSync(PROCESSED_FILE, '', 'utf-8');
  }
  console.log(`[初始化] 已加载 ${existingData.quotas.length} 条定额`);
}

init();
```

- [ ] **Step 2: 添加截图列表和进度追踪函数**

```javascript
// 获取截图列表（按时间顺序）
function getScreenshotList() {
  return fs.readdirSync(SCREENSHOT_DIR)
    .filter(f => f.endsWith('.jpg') || f.endsWith('.png'))
    .sort();
}

// 获取未处理截图
function getUnprocessedList() {
  const processed = getProcessedList();
  const all = getScreenshotList();
  return all.filter(f => !processed.includes(f));
}

// 获取已处理列表
function getProcessedList() {
  if (!fs.existsSync(PROCESSED_FILE)) return [];
  return fs.readFileSync(PROCESSED_FILE, 'utf-8')
    .split('\n')
    .filter(l => l.trim());
}

// 标记已处理
function markProcessed(filename) {
  fs.appendFileSync(PROCESSED_FILE, filename + '\n', 'utf-8');
}

// 更新批次状态
function updateBatchStatus(batchNum, startTime, endTime, count) {
  const status = `Batch #${batchNum}\nStart: ${startTime}\nEnd: ${endTime}\nCount: ${count}\n---\n`;
  fs.appendFileSync(BATCH_STATUS_FILE, status, 'utf-8');
}

// 保存索引
function saveIndex() {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(quotaIndex, null, 2), 'utf-8');
}

// 保存结果
function saveResults() {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(existingData, null, 2), 'utf-8');
}
```

- [ ] **Step 3: 添加数据合并函数**

```javascript
// 合并单张图片的识别结果
function mergeSingleResult(filename, data) {
  const code = data.code;
  if (!code) {
    console.warn(`[警告] ${filename} 缺少定额编号，跳过`);
    return;
  }

  // 构建完整记录
  const record = {
    ...data,
    region: data.region || '河南省',
    specialty: data.specialty || '安装',
    source_screenshot: filename
  };

  // 查找是否已存在
  const idx = existingData.quotas.findIndex(q => q.code === code);

  if (idx >= 0) {
    // 已存在：合并明细（去重），主表用新数据
    const existing = existingData.quotas[idx];
    existingData.quotas[idx] = mergeQuotaRecords(existing, record);
  } else {
    existingData.quotas.push(record);
  }

  // 更新索引
  quotaIndex[code] = {
    code,
    name: record.name,
    unit: record.unit,
    comprehensive_price: record.comprehensive_price,
    updated: new Date().toISOString()
  };

  saveResults();
  saveIndex();
}

// 合并两个同编号的定额记录
function mergeQuotaRecords(oldRec, newRec) {
  const merged = { ...newRec };

  // 合并三类明细（去重）
  merged.labor_details = mergeDetails(
    oldRec.labor_details || [],
    newRec.labor_details || [],
    'code'
  );
  merged.material_details = mergeDetails(
    oldRec.material_details || [],
    newRec.material_details || [],
    'code'
  );
  merged.mechanical_details = mergeDetails(
    oldRec.mechanical_details || [],
    newRec.mechanical_details || [],
    'code'
  );

  return merged;
}

// 合并明细数组（按指定 key 去重）
function mergeDetails(arr1, arr2, key) {
  const map = new Map();
  for (const item of arr1) {
    map.set(item[key], item);
  }
  for (const item of arr2) {
    map.set(item[key], item);
  }
  return Array.from(map.values());
}
```

- [ ] **Step 4: 添加进度报告函数**

```javascript
// 获取当前进度
function getProgress() {
  const all = getScreenshotList();
  const processed = getProcessedList();
  return {
    total: all.length,
    processed: processed.length,
    remaining: all.length - processed.length,
    quotaCount: existingData.quotas.length
  };
}

// 打印进度
function printProgress() {
  const p = getProgress();
  console.log(`[进度] ${p.processed}/${p.total} 张截图已处理，${p.quotaCount} 条定额`);
  return p;
}

module.exports = {
  getScreenshotList,
  getUnprocessedList,
  getProcessedList,
  markProcessed,
  updateBatchStatus,
  mergeSingleResult,
  saveResults,
  getProgress,
  printProgress,
  existingData: () => existingData
};
```

---

## Task 2: 执行截图识别（Claude Code 交互式处理）

**说明：** 本任务通过 Claude Code 交互式执行，每张截图调用 MiniMax MCP 工具

**流程：**
1. Claude Code 读取截图路径
2. 调用 `mcp__MiniMax__understand_image` 识别
3. 解析返回的 JSON
4. 调用 Node.js 状态管理器的 `mergeSingleResult` 写入数据
5. 标记已处理

- [ ] **Step 1: 确定待处理截图列表**

在 Claude Code 中执行：
```javascript
const { getUnprocessedList, printProgress } = require('./collect_batch');
const list = getUnprocessedList();
console.log(`待处理: ${list.length} 张`);
console.log('前10张:', list.slice(0, 10));
```

- [ ] **Step 2: 分批处理（每批 140 张）**

循环调用 MiniMax：

```javascript
// 处理单张
async function processOne(filename) {
  const result = await mcp__MiniMax__understand_image({
    image_source: `E:\\定额采集\\screenshots\\1-1\\${filename}`,
    prompt: `你是河南省安装工程定额数据提取专家。请从截图中提取定额数据，输出JSON格式包含：code(编号), name(名称), unit(单位), comprehensive_price(综合单价), labor_fee, material_fee, mechanical_fee, management_fee, profit, regulatory_fee, tax, safety_culture_fee, other_measure_fee, region="河南省", specialty="安装", source_screenshot, labor_details[], material_details[], mechanical_details[]（每项含code,name,spec,unit,quantity,quota_price,market_price,total）。只返回有效JSON。`
  });

  const data = JSON.parse(result);
  const { mergeSingleResult } = require('./collect_batch');
  mergeSingleResult(filename, data);
  return data;
}

// 批量处理（等待额度重置）
async function processBatch(filenames, batchNum) {
  const startTime = new Date().toISOString();
  console.log(`[批次${batchNum}] 开始 ${filenames.length} 张`);

  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    console.log(`[${i+1}/${filenames.length}] ${filename}`);
    await processOne(filename);
  }

  const endTime = new Date().toISOString();
  const { updateBatchStatus } = require('./collect_batch');
  updateBatchStatus(batchNum, startTime, endTime, filenames.length);
  console.log(`[批次${batchNum}] 完成`);
}

// 执行第一批
const list = getUnprocessedList();
await processBatch(list.slice(0, 140), 1);
```

**注意：** 零容错 — 单张识别失败则整个流程停止

- [ ] **Step 3: 等待额度重置后继续**

如果还有未处理截图，等待 5 小时后继续：

```javascript
// 检查剩余
const { getUnprocessedList, printProgress } = require('./collect_batch');
printProgress();

// 继续下一批
const remaining = getUnprocessedList();
if (remaining.length > 0) {
  console.log('等待5小时后继续...');
  // 实际等待可通过 Claude Code 的 /loop 或手动触发
}
```

---

## Task 3: 验证结果

**Files:**
- Verify: `E:\定额采集\extracted_quota_data_detailed.json`

- [ ] **Step 1: 检查定额数量**

```javascript
const { existingData } = require('./collect_batch');
const quotas = existingData().quotas;
console.log(`定额总数: ${quotas.length}`);

// 检查是否覆盖 1-1-1 ~ 1-1-161
const codes = quotas.map(q => q.code).sort();
console.log('前10个:', codes.slice(0, 10));
console.log('后10个:', codes.slice(-10));
```

- [ ] **Step 2: 验证数据完整性**

```javascript
const quotas = existingData().quotas;

// 检查主表字段
for (const q of quotas) {
  const required = ['code', 'name', 'unit', 'comprehensive_price', 'region', 'specialty'];
  for (const field of required) {
    if (q[field] === undefined) {
      console.warn(`[警告] ${q.code} 缺少字段: ${field}`);
    }
  }
}

// 检查明细
for (const q of quotas) {
  if (!Array.isArray(q.labor_details)) console.warn(`${q.code} labor_details 不是数组`);
  if (!Array.isArray(q.material_details)) console.warn(`${q.code} material_details 不是数组`);
  if (!Array.isArray(q.mechanical_details)) console.warn(`${q.code} mechanical_details 不是数组`);
}

console.log('[验证] 检查完成');
```

- [ ] **Step 3: 对比已有数据**

如果 JSON 原有数据，检查覆盖情况：
```javascript
// 原有 10 条，新处理应该覆盖或新增
const { existingData } = require('./collect_batch');
console.log(`最终定额数: ${existingData().quotas.length}`);
```

---

## Task 4: 更新状态文件

**Files:**
- Modify: `E:\定额采集\PLAN.md`

- [ ] **Step 1: 标记首批采集完成**

---

## 验证检查清单

- [ ] processed_screenshots.txt 有 346 行
- [ ] extracted_quota_data_detailed.json 包含 161 个定额
- [ ] 每个定额主表字段完整（code, name, unit, region=河南省, specialty=安装）
- [ ] 每个定额有三类明细数组
- [ ] quota_index.json 索引正确
- [ ] batch_status.txt 记录所有批次
