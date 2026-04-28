/**
 * OCR 采集任务状态管理器
 * 负责追踪截图处理进度、存储定额数据、维护索引
 */

const fs = require('fs');
const path = require('path');

// ==================== 路径配置常量 ====================
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots', '1-1');
const OUTPUT_FILE = path.join(__dirname, 'extracted_quota_data_detailed.json');
const PROCESSED_FILE = path.join(__dirname, 'processed_screenshots.txt');
const INDEX_FILE = path.join(__dirname, 'quota_index.json');
const BATCH_STATUS_FILE = path.join(__dirname, 'batch_status.txt');

// ==================== 状态数据 ====================
let existingData = loadExistingData();
let quotaIndex = loadIndex();
rebuildIndex(); // 从已有数据重建索引

// ==================== 数据加载函数 ====================

function loadExistingData() {
  try {
    if (fs.existsSync(OUTPUT_FILE)) {
      const content = fs.readFileSync(OUTPUT_FILE, 'utf8');
      const data = JSON.parse(content);
      console.log(`[collect_batch] 已加载 ${data.quotas?.length || 0} 条已有定额数据`);
      return data;
    }
  } catch (err) {
    console.warn('[collect_batch] 加载已有数据失败:', err.message);
  }
  return { quotas: [] };
}

function loadIndex() {
  try {
    if (fs.existsSync(INDEX_FILE)) {
      const content = fs.readFileSync(INDEX_FILE, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.warn('[collect_batch] 加载索引失败:', err.message);
  }
  return {};
}

// 从已有数据重建索引
function rebuildIndex() {
  for (const q of existingData.quotas) {
    if (q.code) {
      quotaIndex[q.code] = {
        code: q.code,
        name: q.name,
        unit: q.unit,
        comprehensive_price: q.comprehensive_price,
        updated: new Date().toISOString()
      };
    }
  }
}

// ==================== 截图列表函数 ====================

/**
 * 读取截图目录，返回 .jpg/.png 文件列表，按文件名排序
 */
function getScreenshotList() {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    console.warn(`[collect_batch] 截图目录不存在: ${SCREENSHOT_DIR}`);
    return [];
  }
  const files = fs.readdirSync(SCREENSHOT_DIR)
    .filter(f => /\.(jpg|png|jpeg)$/i.test(f))
    .sort();
  return files;
}

/**
 * 返回未处理的截图列表
 */
function getUnprocessedList() {
  const all = getScreenshotList();
  const processed = getProcessedList();
  return all.filter(f => !processed.includes(f));
}

/**
 * 读取 processed_screenshots.txt 返回已处理列表
 */
function getProcessedList() {
  try {
    if (fs.existsSync(PROCESSED_FILE)) {
      const content = fs.readFileSync(PROCESSED_FILE, 'utf8');
      return content.split('\n').map(s => s.trim()).filter(s => s);
    }
  } catch (err) {
    console.warn('[collect_batch] 读取已处理列表失败:', err.message);
  }
  return [];
}

// ==================== 进度追踪函数 ====================

/**
 * 追加 filename 到 processed_screenshots.txt
 */
function markProcessed(filename) {
  fs.appendFileSync(PROCESSED_FILE, filename + '\n', 'utf8');
}

/**
 * 追加批次状态到 batch_status.txt
 * 格式: [时间戳] 批次N: 开始时间, 结束时间, 处理数量
 */
function updateBatchStatus(batchNum, startTime, endTime, count) {
  const line = `[${new Date().toISOString()}] 批次${batchNum}: start=${startTime}, end=${endTime}, count=${count}\n`;
  fs.appendFileSync(BATCH_STATUS_FILE, line, 'utf8');
}

/**
 * 保存 quotaIndex 到 quota_index.json
 */
function saveIndex() {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(quotaIndex, null, 2), 'utf8');
}

/**
 * 保存 existingData 到 extracted_quota_data_detailed.json
 */
function saveResults() {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(existingData, null, 2), 'utf8');
}

// ==================== 数据合并函数 ====================

/**
 * 合并单张图片识别结果
 * @param {string} filename - 截图文件名
 * @param {object} data - 识别结果数据（单条定额或包含 quotas 数组的对象）
 */
function mergeSingleResult(filename, data) {
  if (!data) return;

  // 处理 MiniMax 返回格式：可能是单条定额对象或包含 quotas 数组的对象
  let quotaList;
  if (Array.isArray(data)) {
    quotaList = data;
  } else if (data.quotas && Array.isArray(data.quotas)) {
    quotaList = data.quotas;
  } else if (data.code) {
    // 单条定额对象（没有 quotas 包装）
    quotaList = [data];
  } else {
    console.warn('[collect_batch] 无法解析识别结果格式:', Object.keys(data));
    return;
  }

  for (const newRec of quotaList) {
    if (!newRec.code) {
      console.warn('[collect_batch] 识别结果缺少 code 字段，跳过');
      continue;
    }

    // 补充 region 和 specialty
    newRec.region = newRec.region || '河南省';
    newRec.specialty = newRec.specialty || '安装';
    newRec.source_screenshot = filename;

    if (quotaIndex[newRec.code]) {
      // 已存在，合并明细
      const oldRec = existingData.quotas.find(q => q.code === newRec.code);
      if (oldRec) {
        const merged = mergeQuotaRecords(oldRec, newRec);
        // 替换旧记录
        const idx = existingData.quotas.findIndex(q => q.code === newRec.code);
        existingData.quotas[idx] = merged;
      }
    } else {
      // 不存在，追加新记录
      existingData.quotas.push(newRec);
    }

    // 更新索引
    quotaIndex[newRec.code] = {
      code: newRec.code,
      name: newRec.name,
      unit: newRec.unit,
      comprehensive_price: newRec.comprehensive_price,
      updated: new Date().toISOString()
    };
  }

  saveResults();
  saveIndex();
}

/**
 * 合并同编号的两个定额记录
 */
function mergeQuotaRecords(oldRec, newRec) {
  return {
    ...oldRec,
    ...newRec,
    // 合并明细数组
    labor_details: mergeDetails(oldRec.labor_details, newRec.labor_details, 'name'),
    material_details: mergeDetails(oldRec.material_details, newRec.material_details, 'name'),
    mechanical_details: mergeDetails(oldRec.mechanical_details, newRec.mechanical_details, 'name')
  };
}

/**
 * 按 key 去重合并明细数组
 */
function mergeDetails(arr1 = [], arr2 = [], key) {
  const map = new Map();
  for (const item of arr1) {
    if (item[key]) map.set(item[key], item);
  }
  for (const item of arr2) {
    if (item[key]) {
      if (!map.has(item[key])) {
        map.set(item[key], item);
      }
    }
  }
  return Array.from(map.values());
}

// ==================== 进度报告函数 ====================

/**
 * 返回进度信息
 */
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

/**
 * 打印进度到控制台
 */
function printProgress() {
  const { total, processed, remaining, quotaCount } = getProgress();
  console.log('\n========== 采集进度 ==========');
  console.log(`截图总数: ${total}`);
  console.log(`已处理: ${processed}`);
  console.log(`剩余: ${remaining}`);
  console.log(`定额数量: ${quotaCount}`);
  console.log('==============================\n');
}

// ==================== 导出 ====================

module.exports = {
  // 常量
  SCREENSHOT_DIR,
  OUTPUT_FILE,
  PROCESSED_FILE,
  INDEX_FILE,
  BATCH_STATUS_FILE,
  // 数据访问
  get existingData() { return existingData; },
  // 截图列表函数
  getScreenshotList,
  getUnprocessedList,
  getProcessedList,
  // 进度追踪函数
  markProcessed,
  updateBatchStatus,
  saveIndex,
  saveResults,
  // 数据合并函数
  mergeSingleResult,
  mergeQuotaRecords,
  mergeDetails,
  // 进度报告函数
  getProgress,
  printProgress
};
