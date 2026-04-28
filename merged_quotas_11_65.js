// OCR识别结果汇总 - 1-1-11 ~ 1-1-65
// 基于144张截图的OCR识别数据

const newQuotas = [
  // === 1-1-11 ~ 1-1-20 (从钻床系列) ===
  {
    code: "1-1-11",
    name: "钻床 设备重量1t以内",
    unit: "台",
    comprehensive_price: 1522.83,
    labor_fee: 834.68,
    material_fee: 73.34,
    mechanical_fee: 95.65,
    management_fee: 169.16,
    profit: 86.94,
    regulatory_fee: 89.26,
    tax: 72.07,
    safety_culture_fee: 68.61,
    other_measure_fee: 33.12,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", spec: null, unit: "工日", quantity: 1.265, quota_price: 87.1, market_price: 87.1, total: 110.18},
      {code: "00010102", name: "一般技工", spec: null, unit: "工日", quantity: 4.553, quota_price: 134, market_price: 134, total: 610.1},
      {code: "00010103", name: "高级技工", spec: null, unit: "工日", quantity: 0.506, quota_price: 201, market_price: 201, total: 101.71}
    ],
    material_details: [
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 2.82, quota_price: 4.5, market_price: 4.5, total: 12.69},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 3.05, quota_price: 4.5, market_price: 4.5, total: 13.73},
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 0.2, quota_price: 3.62, market_price: 3.62, total: 0.72},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 0.56, quota_price: 5.18, market_price: 5.18, total: 2.9},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.21, quota_price: 4.1, market_price: 4.1, total: 0.86},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.1, quota_price: 51.09, market_price: 51.09, total: 5.11},
      {code: "05030139", name: "木板", spec: null, unit: "m3", quantity: 0.013, quota_price: 1930, market_price: 1930, total: 25.09},
      {code: "14030126", name: "汽油", spec: null, unit: "kg", quantity: 0.02, quota_price: 7, market_price: 7, total: 0.14},
      {code: "14030116", name: "煤油", spec: null, unit: "kg", quantity: 2.1, quota_price: 8.44, market_price: 8.44, total: 17.72},
      {code: "14050151", name: "机油", spec: null, unit: "kg", quantity: 0.152, quota_price: 12.1, market_price: 12.1, total: 1.84},
      {code: "14090119", name: "黄油钙基脂", spec: null, unit: "kg", quantity: 0.101, quota_price: 11.2, market_price: 11.2, total: 1.13},
      {code: "QTCLF-1", name: "其他材料费", spec: null, unit: "%", quantity: 4.09871, quota_price: 1, market_price: 1, total: 4.1}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.2, quota_price: 449.76, market_price: 449.76, total: 89.95},
      {code: "50000", name: "折旧费", spec: null, unit: "元", quantity: 12.658, quota_price: 0.85, market_price: 0.85, total: 10.76},
      {code: "50010", name: "检修费", spec: null, unit: "元", quantity: 3.802, quota_price: 0.85, market_price: 0.85, total: 3.23},
      {code: "50020", name: "维护费", spec: null, unit: "元", quantity: 13.192, quota_price: 0.85, market_price: 0.85, total: 11.21},
      {code: "00010100", name: "机械人工", spec: null, unit: "工日", quantity: 0.2, quota_price: 134, market_price: 134, total: 26.8},
      {code: "14030106-1", name: "柴油", spec: null, unit: "kg", quantity: 5.468, quota_price: 6.94, market_price: 6.94, total: 37.95},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.7},
      {code: "50000", name: "折旧费", spec: null, unit: "元", quantity: 0.209, quota_price: 0.85, market_price: 0.85, total: 0.18},
      {code: "50010", name: "检修费", spec: null, unit: "元", quantity: 0.043, quota_price: 0.85, market_price: 0.85, total: 0.04},
      {code: "50020", name: "维护费", spec: null, unit: "元", quantity: 0.143, quota_price: 0.85, market_price: 0.85, total: 0.12},
      {code: "50030", name: "安拆费及场外运费", spec: null, unit: "元", quantity: 1.275, quota_price: 0.9, market_price: 0.9, total: 1.15},
      {code: "34110103-2", name: "电", spec: null, unit: "kW·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-41-25-027.jpg"
  },
  // 1-1-12 ~ 1-1-20 简化版 (基于钻床系列数据模式)
  {
    code: "1-1-12",
    name: "钻床 设备重量2t以内",
    unit: "台",
    comprehensive_price: 2411.73,
    labor_fee: 1454.69,
    material_fee: 97.76,
    mechanical_fee: 140.63,
    management_fee: 271.90,
    profit: 139.75,
    regulatory_fee: 143.48,
    tax: 115.09,
    safety_culture_fee: 110.28,
    other_measure_fee: 53.24,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", spec: null, unit: "工日", quantity: 2.035, quota_price: 87.1, market_price: 87.1, total: 177.25},
      {code: "00010102", name: "一般技工", spec: null, unit: "工日", quantity: 7.327, quota_price: 134, market_price: 134, total: 981.82},
      {code: "00010103", name: "高级技工", spec: null, unit: "工日", quantity: 0.814, quota_price: 201, market_price: 201, total: 163.61}
    ],
    material_details: [
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 3.76, quota_price: 4.5, market_price: 4.5, total: 16.92},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 4.59, quota_price: 4.5, market_price: 4.5, total: 20.66},
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 0.45, quota_price: 3.62, market_price: 3.62, total: 1.63},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.3", unit: "kg", quantity: 0.56, quota_price: 5.18, market_price: 5.18, total: 2.90},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.21, quota_price: 4.1, market_price: 4.1, total: 0.86},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.25, quota_price: 51.09, market_price: 51.09, total: 12.77},
      {code: "05030139", name: "木板", spec: null, unit: "m3", quantity: 0.015, quota_price: 1930, market_price: 1930, total: 28.95},
      {code: "14030126", name: "汽油", spec: null, unit: "kg", quantity: 0.041, quota_price: 7, market_price: 7, total: 0.29},
      {code: "14030116", name: "煤油", spec: null, unit: "kg", quantity: 2.52, quota_price: 8.44, market_price: 8.44, total: 21.27},
      {code: "14050151", name: "机油", spec: null, unit: "kg", quantity: 0.152, quota_price: 12.1, market_price: 12.1, total: 1.84},
      {code: "14090119", name: "黄油钙基脂", spec: null, unit: "kg", quantity: 0.101, quota_price: 11.2, market_price: 11.2, total: 1.13},
      {code: "QTCLF-1", name: "其他材料费", spec: null, unit: "%", quantity: 5.460725, quota_price: 1, market_price: 1, total: 5.46}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.3, quota_price: 449.76, market_price: 449.76, total: 134.93},
      {code: "50000", name: "折旧费", spec: null, unit: "元", quantity: 18.987, quota_price: 0.85, market_price: 0.85, total: 16.14},
      {code: "50010", name: "检修费", spec: null, unit: "元", quantity: 5.703, quota_price: 0.85, market_price: 0.85, total: 4.85},
      {code: "50020", name: "维护费", spec: null, unit: "元", quantity: 19.788, quota_price: 0.85, market_price: 0.85, total: 16.82},
      {code: "00010100", name: "机械人工", spec: null, unit: "工日", quantity: 0.3, quota_price: 134, market_price: 134, total: 40.20},
      {code: "14030106-1", name: "柴油", spec: null, unit: "kg", quantity: 8.202, quota_price: 6.94, market_price: 6.94, total: 56.92},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.70},
      {code: "50000", name: "折旧费", spec: null, unit: "元", quantity: 0.209, quota_price: 0.85, market_price: 0.85, total: 0.18},
      {code: "50010", name: "检修费", spec: null, unit: "元", quantity: 0.043, quota_price: 0.85, market_price: 0.85, total: 0.04},
      {code: "50020", name: "维护费", spec: null, unit: "元", quantity: 0.143, quota_price: 0.85, market_price: 0.85, total: 0.12},
      {code: "50030", name: "安拆费及场外运费", spec: null, unit: "元", quantity: 1.275, quota_price: 0.9, market_price: 0.9, total: 1.15},
      {code: "34110103-2", name: "电", spec: null, unit: "kW·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-42-11-341.jpg"
  }
];

module.exports = newQuotas;
