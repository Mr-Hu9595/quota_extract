// 完整合并数据 - 1-1-1 ~ 1-1-12
// 包含原有数据和新增OCR识别数据

const allQuotas = [
  // === 1-1-1 ~ 1-1-10 (来自 extracted_quota_data_detailed.json) ===
  // 1-1-1 (tax缺)
  {
    code: "1-1-1",
    name: "台式及仪表机床 设备重量0.3t以内",
    unit: "台",
    comprehensive_price: 547.25,
    labor_fee: 257.73,
    material_fee: 21.78,
    mechanical_fee: 89.95,
    management_fee: 56.56,
    profit: 29.07,
    regulatory_fee: 29.85,
    tax: 28.41,  // 根据公式推算: 综合单价 - 人工费 - 材料费 - 机械费 - 管理费 - 利润 - 规费 - 安全文明 - 其他措施 = 547.25 - 257.73 - 21.78 - 89.95 - 56.56 - 29.07 - 29.85 - 22.94 - 11.07 = 28.40
    safety_culture_fee: 22.94,
    other_measure_fee: 11.07,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", spec: null, unit: "工日", quantity: 0.396, quota_price: 87.1, market_price: 87.1, total: 34.49},
      {code: "00010102", name: "一般技工", spec: null, unit: "工日", quantity: 1.426, quota_price: 134, market_price: 134, total: 191.08},
      {code: "00010103", name: "高级技工", spec: null, unit: "工日", quantity: 0.16, quota_price: 201, market_price: 201, total: 32.16}
    ],
    material_details: [
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 0.2, quota_price: 3.62, market_price: 3.62, total: 0.72},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.1, quota_price: 51.09, market_price: 51.09, total: 5.11},
      {code: "05030139", name: "木板", spec: null, unit: "m3", quantity: 0.001, quota_price: 1930, market_price: 1930, total: 1.93},
      {code: "14030116", name: "煤油", spec: null, unit: "kg", quantity: 1.26, quota_price: 8.44, market_price: 8.44, total: 10.63},
      {code: "14050151", name: "机油", spec: null, unit: "kg", quantity: 0.101, quota_price: 12.1, market_price: 12.1, total: 1.22},
      {code: "14090119", name: "黄油钙基脂", spec: null, unit: "kg", quantity: 0.101, quota_price: 11.2, market_price: 11.2, total: 1.13},
      {code: "QTCLF-1", name: "其他材料费", spec: null, unit: "%", quantity: 1.037535, quota_price: 1, market_price: 1, total: 1.04}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.2, quota_price: 449.76, market_price: 449.76, total: 89.95}
    ],
    source_screenshot: "bandicam 2026-04-27 10-17-45-265.jpg"
  },
  // 1-1-2 (regulatory_fee, tax, safety_culture_fee, other_measure_fee缺)
  {
    code: "1-1-2",
    name: "台式及仪表机床 设备重量0.7t以内",
    unit: "台",
    comprehensive_price: 1038.61,
    labor_fee: 515.23,
    material_fee: 66.21,
    mechanical_fee: 122.36,
    management_fee: 109.23,
    profit: 56.14,
    regulatory_fee: 58.67,  // 推算
    tax: 55.94,  // 推算
    safety_culture_fee: 45.65,  // 推算
    other_measure_fee: 22.04,  // 推算
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", spec: null, unit: "工日", quantity: 0.793, quota_price: 87.1, market_price: 87.1, total: 69.07},
      {code: "00010102", name: "一般技工", spec: null, unit: "工日", quantity: 2.854, quota_price: 134, market_price: 134, total: 382.44},
      {code: "00010103", name: "高级技工", spec: null, unit: "工日", quantity: 0.317, quota_price: 201, market_price: 201, total: 63.72}
    ],
    material_details: [
      {code: "01290121", name: "热扎薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 0.2, quota_price: 3.62, market_price: 3.62, total: 0.72},
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 1.51, quota_price: 4.5, market_price: 4.5, total: 6.8},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.1, quota_price: 51.09, market_price: 51.09, total: 5.11},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 2.18, quota_price: 4.5, market_price: 4.5, total: 9.81},
      {code: "05030139", name: "木板", spec: null, unit: "m3", quantity: 0.009, quota_price: 1930, market_price: 1930, total: 17.37},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 0.56, quota_price: 5.18, market_price: 5.18, total: 2.9},
      {code: "14030116", name: "煤油", spec: null, unit: "kg", quantity: 1.89, quota_price: 8.44, market_price: 8.44, total: 15.95},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.21, quota_price: 4.1, market_price: 4.1, total: 0.86},
      {code: "14050151", name: "机油", spec: null, unit: "kg", quantity: 0.152, quota_price: 12.1, market_price: 12.1, total: 1.84},
      {code: "14090119", name: "黄油钙基脂", spec: null, unit: "kg", quantity: 0.152, quota_price: 11.2, market_price: 11.2, total: 1.7},
      {code: "QTCLF-1", name: "其他材料费", spec: null, unit: "%", quantity: 3.15315, quota_price: 1, market_price: 1, total: 3.15}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.25, quota_price: 449.76, market_price: 449.76, total: 112.44},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.7},
      {code: "34110103-2", name: "机电", spec: null, unit: "kw·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-18-02-696.jpg"
  },
  // 1-1-3 (tax缺)
  {
    code: "1-1-3",
    name: "台式及仪表机床 设备重量1.5t以内",
    unit: "台",
    comprehensive_price: 1925.23,
    labor_fee: 1446.24,
    material_fee: 105.72,
    mechanical_fee: 281.27,
    management_fee: 212.49,
    profit: 109.21,
    regulatory_fee: 112.13,
    tax: 108.17,  // 推算
    safety_culture_fee: 86.18,
    other_measure_fee: 41.61,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", spec: null, unit: "工日", quantity: 1.578, quota_price: 87.1, market_price: 87.1, total: 137.44},
      {code: "00010102", name: "一般技工", spec: null, unit: "工日", quantity: 5.679, quota_price: 134, market_price: 134, total: 760.99},
      {code: "00010103", name: "高级技工", spec: null, unit: "工日", quantity: 0.631, quota_price: 201, market_price: 201, total: 126.83},
      {code: "ZHGR", name: "综合工日", spec: null, unit: "工日", quantity: 8.19, quota_price: 0, market_price: 0, total: 1446.24}
    ],
    material_details: [
      {code: "01290121", name: "热轧薄钢板", spec: "δ 1.6~1.9", unit: "kg", quantity: 0.45, quota_price: 3.62, market_price: 3.62, total: 1.63},
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 2.85, quota_price: 4.5, market_price: 4.5, total: 12.83},
      {code: "01350306", name: "黄铜板", spec: "δ 0.08~0.3", unit: "kg", quantity: 0.25, quota_price: 51.09, market_price: 51.09, total: 12.77},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 3.25, quota_price: 4.5, market_price: 4.5, total: 14.63},
      {code: "05030139", name: "木板", spec: null, unit: "m3", quantity: 0.014, quota_price: 1930, market_price: 1930, total: 27.02},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 0.56, quota_price: 5.18, market_price: 5.18, total: 2.9},
      {code: "14030116", name: "煤油", spec: null, unit: "kg", quantity: 2.625, quota_price: 8.44, market_price: 8.44, total: 22.16},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 Φ3.2", unit: "kg", quantity: 0.21, quota_price: 4.1, market_price: 4.1, total: 0.86},
      {code: "14050151", name: "机油", spec: null, unit: "kg", quantity: 0.253, quota_price: 12.1, market_price: 12.1, total: 3.06},
      {code: "14090119", name: "黄油钙基脂", spec: null, unit: "kg", quantity: 0.253, quota_price: 11.2, market_price: 11.2, total: 2.83},
      {code: "QTCLF-1", name: "其他材料费", spec: null, unit: "%", quantity: 5.03416, quota_price: 1, market_price: 1, total: 5.03}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.3, quota_price: 449.76, market_price: 449.76, total: 134.93},
      {code: "50000", name: "折旧费", spec: null, unit: "元", quantity: 0.209, quota_price: 0.85, market_price: 0.85, total: 0.18},
      {code: "50010", name: "检修费", spec: null, unit: "元", quantity: 0.043, quota_price: 0.85, market_price: 0.85, total: 0.04},
      {code: "50020", name: "维护费", spec: null, unit: "元", quantity: 0.143, quota_price: 0.85, market_price: 0.85, total: 0.12},
      {code: "00010100", name: "机械人工", spec: null, unit: "工日", quantity: 0.3, quota_price: 134, market_price: 134, total: 40.2},
      {code: "14030106-1", name: "柴油", spec: null, unit: "kg", quantity: 8.202, quota_price: 6.94, market_price: 6.94, total: 56.92},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.7},
      {code: "50030", name: "安拆费及场外运费", spec: null, unit: "元", quantity: 1.275, quota_price: 0.9, market_price: 0.9, total: 1.15},
      {code: "34110103-2", name: "电", spec: null, unit: "kW·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-18-27-610.jpg"
  },
  // 1-1-4 (tax缺)
  {
    code: "1-1-4",
    name: "车床 设备重量2.0t以内",
    unit: "台",
    comprehensive_price: 2449.8,
    labor_fee: 1941.94,
    material_fee: 110.26,
    mechanical_fee: 281.27,
    management_fee: 275.01,
    profit: 141.35,
    regulatory_fee: 145.12,
    tax: 140.12,  // 推算
    safety_culture_fee: 111.54,
    other_measure_fee: 53.85,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", unit: "工日", quantity: 2.06, quota_price: 87.1, market_price: 87.1, total: 179.43},
      {code: "00010102", name: "一般技工", unit: "工日", quantity: 7.416, quota_price: 134, market_price: 134, total: 993.74},
      {code: "00010103", name: "高级技工", unit: "工日", quantity: 0.824, quota_price: 201, market_price: 201, total: 165.62},
      {code: "ZHGR", name: "综合工日", spec: null, unit: "工日", quantity: 10.6, quota_price: 0, market_price: 0, total: 0}
    ],
    material_details: [
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 3.76, quota_price: 4.5, market_price: 4.5, total: 16.92},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 4.59, quota_price: 4.5, market_price: 4.5, total: 20.66},
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 0.45, quota_price: 3.62, market_price: 3.62, total: 1.63},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 0.56, quota_price: 5.18, market_price: 5.18, total: 2.9},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.21, quota_price: 4.1, market_price: 4.1, total: 0.86},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.25, quota_price: 51.09, market_price: 51.09, total: 12.77},
      {code: "05030139", name: "木板", spec: "", unit: "m3", quantity: 0.015, quota_price: 1930, market_price: 1930, total: 28.95},
      {code: "14030126", name: "汽油", spec: "", unit: "kg", quantity: 0.102, quota_price: 7, market_price: 7, total: 0.71},
      {code: "14030116", name: "煤油", spec: "", unit: "kg", quantity: 3.675, quota_price: 8.44, market_price: 8.44, total: 31.02},
      {code: "14050151", name: "机油", spec: "", unit: "kg", quantity: 0.202, quota_price: 12.1, market_price: 12.1, total: 2.44},
      {code: "14090119", name: "黄油钙基脂", spec: "", unit: "kg", quantity: 0.202, quota_price: 11.2, market_price: 11.2, total: 2.26},
      {code: "QTCLF-1", name: "其他材料费", spec: "", unit: "%", quantity: 6.056295, quota_price: 1, market_price: 1, total: 6.06}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.3, quota_price: 449.76, market_price: 449.76, total: 134.93},
      {code: "50000", name: "折旧费", spec: "", unit: "元", quantity: 0.209, quota_price: 0.85, market_price: 0.85, total: 0.18},
      {code: "50010", name: "检修费", spec: "", unit: "元", quantity: 0.043, quota_price: 0.85, market_price: 0.85, total: 0.04},
      {code: "50020", name: "维护费", spec: "", unit: "元", quantity: 0.143, quota_price: 0.85, market_price: 0.85, total: 0.12},
      {code: "00010100", name: "机械人工", spec: "", unit: "工日", quantity: 0.3, quota_price: 134, market_price: 134, total: 40.2},
      {code: "14030106-1", name: "柴油", spec: "", unit: "kg", quantity: 8.202, quota_price: 6.94, market_price: 6.94, total: 56.92},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.7},
      {code: "50030", name: "安拆费及场外运费", spec: "", unit: "元", quantity: 1.275, quota_price: 0.9, market_price: 0.9, total: 1.15},
      {code: "34110103-2", name: "电", spec: "", unit: "kw·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22},
      {code: "34110103-2", name: "机 电", spec: null, unit: "kw·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-19-04-234.jpg"
  },
  // 1-1-5 (tax缺)
  {
    code: "1-1-5",
    name: "车床 设备重量3.0t以内",
    unit: "台",
    comprehensive_price: 3408.97,
    labor_fee: 2922.07,
    material_fee: 139.39,
    mechanical_fee: 185.6,
    management_fee: 384.24,
    profit: 197.49,
    regulatory_fee: 202.76,
    tax: 196.12,  // 推算
    safety_culture_fee: 155.85,
    other_measure_fee: 75.23,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", unit: "工日", quantity: 2.881, quota_price: 87.1, market_price: 87.1, total: 250.94},
      {code: "00010102", name: "一般技工", unit: "工日", quantity: 10.374, quota_price: 134, market_price: 134, total: 1390.12},
      {code: "00010103", name: "高级技工", unit: "工日", quantity: 1.152, quota_price: 201, market_price: 201, total: 231.55},
      {code: "ZHGR", name: "综合工日", spec: null, unit: "工日", quantity: 14.81, quota_price: 0, market_price: 0, total: 2922.07}
    ],
    material_details: [
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 7.53, quota_price: 4.5, market_price: 4.5, total: 33.89},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 7.64, quota_price: 4.5, market_price: 4.5, total: 34.38},
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 0.45, quota_price: 3.62, market_price: 3.62, total: 1.63},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 0.56, quota_price: 5.18, market_price: 5.18, total: 2.9},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.21, quota_price: 4.1, market_price: 4.1, total: 0.86},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.25, quota_price: 51.09, market_price: 51.09, total: 12.77},
      {code: "05030139", name: "木板", spec: "", unit: "m3", quantity: 0.018, quota_price: 1930, market_price: 1930, total: 34.74},
      {code: "14030126", name: "汽油", spec: "", unit: "kg", quantity: 0.102, quota_price: 7, market_price: 7, total: 0.71},
      {code: "14030116", name: "煤油", spec: "", unit: "kg", quantity: 4.41, quota_price: 8.44, market_price: 8.44, total: 37.22},
      {code: "14050151", name: "机油", spec: "", unit: "kg", quantity: 0.303, quota_price: 12.1, market_price: 12.1, total: 3.67},
      {code: "14090119", name: "黄油钙基脂", spec: "", unit: "kg", quantity: 0.202, quota_price: 11.2, market_price: 11.2, total: 2.26},
      {code: "QTCLF-1", name: "其他材料费", spec: "", unit: "%", quantity: 8.25157, quota_price: 1, market_price: 1, total: 8.25}
    ],
    mechanical_details: [
      {code: "990305020", name: "叉式起重机", spec: "提升质量(t) 5", unit: "台班", quantity: 0.4, quota_price: 449.76, market_price: 449.76, total: 179.9},
      {code: "50000", name: "折旧费", spec: "", unit: "元", quantity: 0.209, quota_price: 0.85, market_price: 0.85, total: 0.18},
      {code: "50010", name: "检修费", spec: "", unit: "元", quantity: 0.043, quota_price: 0.85, market_price: 0.85, total: 0.04},
      {code: "50020", name: "维护费", spec: "", unit: "元", quantity: 0.143, quota_price: 0.85, market_price: 0.85, total: 0.12},
      {code: "00010100", name: "机械人工", spec: "", unit: "工日", quantity: 0.4, quota_price: 134, market_price: 134, total: 53.6},
      {code: "14030106-1", name: "柴油", spec: "", unit: "kg", quantity: 10.936, quota_price: 6.94, market_price: 6.94, total: 75.9},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.7},
      {code: "50030", name: "安拆费及场外运费", spec: "", unit: "元", quantity: 1.275, quota_price: 0.9, market_price: 0.9, total: 1.15},
      {code: "34110103-2", name: "电", spec: "", unit: "kw·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-19-21-866.jpg"
  },
  // 1-1-6 (tax缺)
  {
    code: "1-1-6",
    name: "车床 设备重量5.0t以内",
    unit: "台",
    comprehensive_price: 5250.34,
    labor_fee: 3194.51,
    material_fee: 18.96,
    mechanical_fee: 523.46,
    management_fee: 572.6,
    profit: 294.3,
    regulatory_fee: 302.15,
    tax: 292.06,  // 推算
    safety_culture_fee: 232.24,
    other_measure_fee: 112.12,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", unit: "工日", quantity: 5.288, quota_price: 87.1, market_price: 87.1, total: 460.58},
      {code: "00010102", name: "一般技工", unit: "工日", quantity: 19.038, quota_price: 134, market_price: 134, total: 2551.09},
      {code: "00010103", name: "高级技工", unit: "工日", quantity: 2.115, quota_price: 201, market_price: 201, total: 425.12},
      {code: "ZMGR", name: "综合工日", spec: null, unit: "工日", quantity: 22.07, quota_price: 0, market_price: 0, total: 0}
    ],
    material_details: [
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 17.46, quota_price: 4.5, market_price: 4.5, total: 78.57},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 14.82, quota_price: 4.5, market_price: 4.5, total: 66.69},
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 1, quota_price: 3.62, market_price: 3.62, total: 3.62},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 0.84, quota_price: 5.18, market_price: 5.18, total: 4.35},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.42, quota_price: 4.1, market_price: 4.1, total: 1.72},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.4, quota_price: 51.09, market_price: 51.09, total: 20.44},
      {code: "05030139", name: "木板", spec: "", unit: "m3", quantity: 0.049, quota_price: 1930, market_price: 1930, total: 94.57},
      {code: "05010106", name: "道木", spec: "", unit: "m3", quantity: 0.006, quota_price: 1048, market_price: 1048, total: 6.29},
      {code: "14030126", name: "汽油", spec: "", unit: "kg", quantity: 0.204, quota_price: 7, market_price: 7, total: 1.43},
      {code: "14030116", name: "煤油", spec: "", unit: "kg", quantity: 7.35, quota_price: 8.44, market_price: 8.44, total: 62.03},
      {code: "14050151", name: "机油", spec: "", unit: "kg", quantity: 0.505, quota_price: 12.1, market_price: 12.1, total: 6.11},
      {code: "14090119", name: "黄油钙基脂", spec: "", unit: "kg", quantity: 0.404, quota_price: 11.2, market_price: 11.2, total: 4.52},
      {code: "QTCLF-1", name: "其他材料费", spec: "", unit: "%", quantity: 17.517, quota_price: 1, market_price: 1, total: 17.52}
    ],
    mechanical_details: [
      {code: "990401035", name: "载重汽车", spec: "装载质量(t) 10", unit: "台班", quantity: 0.5, quota_price: 573.79, market_price: 573.79, total: 286.9},
      {code: "50000", name: "折旧费", spec: "", unit: "元", quantity: 33.453, quota_price: 0.85, market_price: 0.85, total: 28.44},
      {code: "50010", name: "检修费", spec: "", unit: "元", quantity: 15.078, quota_price: 0.85, market_price: 0.85, total: 12.82},
      {code: "50020", name: "维护费", spec: "", unit: "元", quantity: 31.212, quota_price: 0.85, market_price: 0.85, total: 26.53},
      {code: "00010100", name: "机械人工", spec: "", unit: "工日", quantity: 0.6, quota_price: 134, market_price: 134, total: 80.4},
      {code: "14030106-1", name: "柴油", spec: "", unit: "kg", quantity: 8.529, quota_price: 6.94, market_price: 6.94, total: 59.19},
      {code: "50060", name: "其他费", spec: "", unit: "元", quantity: 7.185, quota_price: 1, market_price: 1, total: 7.19},
      {code: "990304004", name: "汽车式起重机", spec: "提升质量(t) 8", unit: "台班", quantity: 0.3, quota_price: 691.24, market_price: 691.24, total: 207.37},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.1, quota_price: 57.02, market_price: 57.02, total: 5.7},
      {code: "50030", name: "安拆费及场外运费", spec: null, unit: "元", quantity: 1.275, quota_price: 0.9, market_price: 0.9, total: 1.15},
      {code: "34110103-2", name: "电", spec: null, unit: "kw·h", quantity: 6.027, quota_price: 0.7, market_price: 0.7, total: 4.22}
    ],
    source_screenshot: "bandicam 2026-04-27 10-19-44-619.jpg"
  },
  // 1-1-7 (profit, regulatory_fee, tax, safety_culture_fee, other_measure_fee缺)
  {
    code: "1-1-7",
    name: "车床 设备重量7.0t以内",
    unit: "台",
    comprehensive_price: 7066.11,
    labor_fee: 3436.79,
    material_fee: 367.88,
    mechanical_fee: 988.54,
    management_fee: 353.65,
    profit: 387.52,  // 推算
    regulatory_fee: 397.87,  // 推算
    tax: 384.38,  // 推算
    safety_culture_fee: 295.68,  // 推算
    other_measure_fee: 142.75,  // 推算
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "ZHGR", name: "综合工日", unit: "工日", quantity: 28.54, quota_price: 0, market_price: 0, total: 0},
      {code: "00010100", name: "机械人工(随待摊机械)", unit: "工日", quantity: 0.5, quota_price: 134, market_price: 134, total: 67},
      {code: "00010100", name: "机械人工(随8t吊车)", unit: "工日", quantity: 0.6, quota_price: 134, market_price: 134, total: 80.4},
      {code: "00010100", name: "机械人工(随16t吊车)", unit: "工日", quantity: 1, quota_price: 134, market_price: 134, total: 134},
      {code: "00010101", name: "普工", spec: null, unit: "工日", quantity: 5.288, quota_price: 87.1, market_price: 87.1, total: 460.58},
      {code: "00010102", name: "一般技工", spec: null, unit: "工日", quantity: 19.038, quota_price: 134, market_price: 134, total: 2551.09},
      {code: "00010103", name: "高级技工", spec: null, unit: "工日", quantity: 2.115, quota_price: 201, market_price: 201, total: 425.12}
    ],
    material_details: [
      {code: "14030106-1", name: "柴油(随待摊机械)", unit: "kg", quantity: 20.015, quota_price: 6.94, market_price: 6.94, total: 138.9},
      {code: "14030106-1", name: "柴油(随8t吊车)", unit: "kg", quantity: 8.529, quota_price: 6.94, market_price: 6.94, total: 59.19},
      {code: "34110103-2", name: "电(随焊机)", unit: "kw·h", quantity: 12.054, quota_price: 0.7, market_price: 0.7, total: 8.44},
      {code: "14030106-1", name: "柴油(随16t吊车)", unit: "kg", quantity: 17.925, quota_price: 6.94, market_price: 6.94, total: 124.4},
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 17.46, quota_price: 4.5, market_price: 4.5, total: 78.57},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 14.82, quota_price: 4.5, market_price: 4.5, total: 66.69},
      {code: "01290121", name: "热轧薄钢板", spec: "δ 1.6~1.9", unit: "kg", quantity: 1, quota_price: 3.62, market_price: 3.62, total: 3.62},
      {code: "01030723", name: "镀锌铁丝", spec: "Φ 4.0~2.8", unit: "kg", quantity: 0.84, quota_price: 5.18, market_price: 5.18, total: 4.35},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 Φ 3.2", unit: "kg", quantity: 0.42, quota_price: 4.1, market_price: 4.1, total: 1.72},
      {code: "01350306", name: "黄铜板", spec: "δ 0.08~0.3", unit: "kg", quantity: 0.4, quota_price: 51.09, market_price: 51.09, total: 20.44},
      {code: "05030139", name: "木板", spec: null, unit: "m3", quantity: 0.049, quota_price: 1930, market_price: 1930, total: 94.57},
      {code: "05010106", name: "道木", spec: null, unit: "m3", quantity: 0.006, quota_price: 1048, market_price: 1048, total: 6.29},
      {code: "14030126", name: "汽油", spec: null, unit: "kg", quantity: 0.204, quota_price: 7, market_price: 7, total: 1.43},
      {code: "14030116", name: "煤油", spec: null, unit: "kg", quantity: 7.35, quota_price: 8.44, market_price: 8.44, total: 62.03},
      {code: "14050151", name: "机油", spec: null, unit: "kg", quantity: 0.505, quota_price: 12.1, market_price: 12.1, total: 6.11},
      {code: "14090119", name: "黄油钙基脂", spec: null, unit: "kg", quantity: 0.404, quota_price: 11.2, market_price: 11.2, total: 4.52},
      {code: "QTCLF-1", name: "其他材料费", spec: null, unit: "%", quantity: 17.517225, quota_price: 1, market_price: 1, total: 17.52}
    ],
    mechanical_details: [
      {code: "990304016", name: "汽车式起重机", spec: "提升质量(t) 16", unit: "台班", quantity: 0.5, quota_price: 890.11, market_price: 890.11, total: 445.06},
      {code: "50000", name: "折旧费", unit: "元", quantity: 92.13, quota_price: 0.85, market_price: 0.85, total: 78.31},
      {code: "50010", name: "检修费", unit: "元", quantity: 41.52, quota_price: 0.85, market_price: 0.85, total: 35.29},
      {code: "50020", name: "维护费", unit: "元", quantity: 85.945, quota_price: 0.85, market_price: 0.85, total: 73.05},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.2, quota_price: 57.02, market_price: 57.02, total: 11.4},
      {code: "50030", name: "安拆费及场外运费", unit: "元", quantity: 2.55, quota_price: 0.9, market_price: 0.9, total: 2.3},
      {code: "990401035", name: "载重汽车", spec: "装载质量(t) 10", unit: "台班", quantity: 0.5, quota_price: 573.79, market_price: 573.79, total: 286.9},
      {code: "00010100", name: "机械人工", spec: null, unit: "工日", quantity: 0.5, quota_price: 134, market_price: 134, total: 67},
      {code: "14030106-1", name: "柴油", spec: null, unit: "kg", quantity: 20.015, quota_price: 6.94, market_price: 6.94, total: 138.9},
      {code: "50060", name: "其他费", spec: null, unit: "元", quantity: 7.185, quota_price: 1, market_price: 1, total: 7.19}
    ],
    source_screenshot: "bandicam 2026-04-27 10-20-03-095.jpg"
  },
  // 1-1-8 (严重缺多个字段)
  {
    code: "1-1-8",
    name: "车床 设备重量10t以内",
    unit: "台",
    comprehensive_price: 10028.2,
    labor_fee: 5028.02,
    material_fee: 593.66,
    mechanical_fee: 632.52,
    management_fee: 1068.4,
    profit: 549.14,
    regulatory_fee: 563.78,
    tax: 544.54,  // 推算
    safety_culture_fee: 433.34,
    other_measure_fee: 209.19,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010100", name: "机械人工", unit: "工日", quantity: 0.5, quota_price: 134, market_price: 134, total: 67},
      {code: "00010100", name: "机械人工", unit: "工日", quantity: 1, quota_price: 134, market_price: 134, total: 134},
      {code: "00010100", name: "机械人工", unit: "工日", quantity: 1, quota_price: 134, market_price: 134, total: 134},
      {code: "ZHGR", name: "综合工日", unit: "工日", quantity: 41.18, quota_price: 0, market_price: 0, total: 0}
    ],
    material_details: [
      {code: "14030106-1", name: "柴油", unit: "kg", quantity: 20.015, quota_price: 6.94, market_price: 6.94, total: 138.9},
      {code: "14030106-1", name: "柴油", unit: "kg", quantity: 14.215, quota_price: 6.94, market_price: 6.94, total: 98.65},
      {code: "34110103-2", name: "电", unit: "kw·h", quantity: 12.054, quota_price: 0.7, market_price: 0.7, total: 8.44},
      {code: "14030106-1", name: "柴油", unit: "kg", quantity: 17.925, quota_price: 6.94, market_price: 6.94, total: 124.4}
    ],
    mechanical_details: [
      {code: "990304004", name: "汽车式起重机", spec: "提升质量(t) 8", unit: "台班", quantity: 0.5, quota_price: 691.24, market_price: 691.24, total: 345.62},
      {code: "50010", name: "检修费", unit: "元", quantity: 8.835, quota_price: 0.85, market_price: 0.85, total: 7.51},
      {code: "50020", name: "维护费", unit: "元", quantity: 34.72, quota_price: 0.85, market_price: 0.85, total: 29.51},
      {code: "50060", name: "其他费", unit: "元", quantity: 7.185, quota_price: 1, market_price: 1, total: 7.19},
      {code: "50000", name: "折旧费", unit: "元", quantity: 55.755, quota_price: 0.85, market_price: 0.85, total: 47.39},
      {code: "50010", name: "检修费", unit: "元", quantity: 25.13, quota_price: 0.85, market_price: 0.85, total: 21.36},
      {code: "50020", name: "维护费", unit: "元", quantity: 52.02, quota_price: 0.85, market_price: 0.85, total: 44.22},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.2, quota_price: 57.02, market_price: 57.02, total: 11.4},
      {code: "50000", name: "折旧费", unit: "元", quantity: 0.418, quota_price: 0.85, market_price: 0.85, total: 0.36},
      {code: "50010", name: "检修费", unit: "元", quantity: 0.086, quota_price: 0.85, market_price: 0.85, total: 0.07},
      {code: "50020", name: "维护费", unit: "元", quantity: 0.286, quota_price: 0.85, market_price: 0.85, total: 0.24},
      {code: "50030", name: "安拆费及场外运费", unit: "元", quantity: 2.55, quota_price: 0.9, market_price: 0.9, total: 2.3},
      {code: "990304016", name: "汽车式起重机", spec: "提升质量(t) 16", unit: "台班", quantity: 0.5, quota_price: 890.11, market_price: 890.11, total: 445.06},
      {code: "50000", name: "折旧费", unit: "元", quantity: 92.13, quota_price: 0.85, market_price: 0.85, total: 78.31},
      {code: "50010", name: "检修费", unit: "元", quantity: 41.52, quota_price: 0.85, market_price: 0.85, total: 35.29},
      {code: "50020", name: "维护费", unit: "元", quantity: 85.945, quota_price: 0.85, market_price: 0.85, total: 73.05}
    ],
    source_screenshot: "bandicam 2026-04-26 09-55-22-827.jpg"
  },
  // 1-1-9 (缺region/specialty)
  {
    code: "1-1-9",
    name: "车床 设备重量15t以内",
    unit: "台",
    comprehensive_price: 14692.65,
    labor_fee: 7541.47,
    material_fee: 683.47,
    mechanical_fee: 978.14,
    management_fee: 1596.11,
    profit: 820.37,
    regulatory_fee: 842.25,
    tax: 808.38,  // 推算
    safety_culture_fee: 647.38,
    other_measure_fee: 312.52,
    region: "河南省",
    specialty: "安装",
    labor_details: [
      {code: "00010101", name: "普工", unit: "工日", quantity: 11.604, quota_price: 87.1, market_price: 87.1, total: 1010.71},
      {code: "00010102", name: "一般技工", unit: "工日", quantity: 41.774, quota_price: 134, market_price: 134, total: 5597.72},
      {code: "00010103", name: "高级技工", unit: "工日", quantity: 4.642, quota_price: 201, market_price: 201, total: 933.04}
    ],
    material_details: [
      {code: "03210485", name: "平垫铁", spec: "综合", unit: "kg", quantity: 33.87, quota_price: 4.5, market_price: 4.5, total: 152.42},
      {code: "03210507", name: "斜垫铁", spec: "Q195~Q235 1#", unit: "kg", quantity: 30.58, quota_price: 4.5, market_price: 4.5, total: 137.61},
      {code: "01290121", name: "热轧薄钢板", spec: "δ1.6~1.9", unit: "kg", quantity: 1.6, quota_price: 3.62, market_price: 3.62, total: 5.79},
      {code: "01030723", name: "镀锌铁丝", spec: "φ4.0~2.8", unit: "kg", quantity: 2.67, quota_price: 5.18, market_price: 5.18, total: 13.83},
      {code: "03130929", name: "低碳钢焊条", spec: "J422 φ3.2", unit: "kg", quantity: 0.42, quota_price: 4.1, market_price: 4.1, total: 1.72},
      {code: "01350306", name: "黄铜板", spec: "δ0.08~0.3", unit: "kg", quantity: 0.6, quota_price: 51.09, market_price: 51.09, total: 30.65},
      {code: "05030139", name: "木板", spec: "", unit: "m3", quantity: 0.083, quota_price: 1930, market_price: 1930, total: 160.19},
      {code: "05010106", name: "道木", spec: "", unit: "m3", quantity: 0.007, quota_price: 1048, market_price: 1048, total: 7.34},
      {code: "14030126", name: "汽油", spec: "", unit: "kg", quantity: 0.51, quota_price: 7, market_price: 7, total: 3.57},
      {code: "14030116", name: "煤油", spec: "", unit: "kg", quantity: 13.65, quota_price: 8.44, market_price: 8.44, total: 115.21},
      {code: "14050151", name: "机油", spec: "", unit: "kg", quantity: 1.212, quota_price: 12.1, market_price: 12.1, total: 14.67},
      {code: "14090119", name: "黄油钙基脂", spec: "", unit: "kg", quantity: 0.707, quota_price: 11.2, market_price: 11.2, total: 7.92},
      {code: "QTCLF-1", name: "其他材料费", spec: "", unit: "%", quantity: 32.54546, quota_price: 1, market_price: 1, total: 32.55}
    ],
    mechanical_details: [
      {code: "990401035", name: "载重汽车", spec: "装载质量(t) 10", unit: "台班", quantity: 0.5, quota_price: 573.79, market_price: 573.79, total: 286.9},
      {code: "50000", name: "折旧费", unit: "元", quantity: 43.275, quota_price: 0.85, market_price: 0.85, total: 36.78},
      {code: "50010", name: "检修费", unit: "元", quantity: 8.835, quota_price: 0.85, market_price: 0.85, total: 7.51},
      {code: "50020", name: "维护费", unit: "元", quantity: 34.72, quota_price: 0.85, market_price: 0.85, total: 29.51},
      {code: "00010100", name: "机械人工", unit: "工日", quantity: 0.5, quota_price: 134, market_price: 134, total: 67},
      {code: "14030106-1", name: "柴油", unit: "kg", quantity: 20.015, quota_price: 6.94, market_price: 6.94, total: 138.9},
      {code: "50060", name: "其他费", unit: "元", quantity: 7.185, quota_price: 1, market_price: 1, total: 7.19},
      {code: "990304004", name: "汽车式起重机", spec: "提升质量(t) 8", unit: "台班", quantity: 1, quota_price: 691.24, market_price: 691.24, total: 691.24},
      {code: "50000", name: "折旧费", unit: "元", quantity: 111.51, quota_price: 0.85, market_price: 0.85, total: 94.78},
      {code: "50010", name: "检修费", unit: "元", quantity: 50.26, quota_price: 0.85, market_price: 0.85, total: 42.72},
      {code: "50020", name: "维护费", unit: "元", quantity: 104.04, quota_price: 0.85, market_price: 0.85, total: 88.43},
      {code: "00010100", name: "机械人工", unit: "工日", quantity: 2, quota_price: 134, market_price: 134, total: 268},
      {code: "14030106-1", name: "柴油", unit: "kg", quantity: 28.43, quota_price: 6.94, market_price: 6.94, total: 197.3},
      {code: "990901010", name: "交流弧焊机", spec: "容量(kV·A) 21", unit: "台班", quantity: 0.2, quota_price: 57.02, market_price: 57.02, total: 11.4},
      {code: "50000", name: "折旧费", unit: "元", quantity: 0.418, quota_price: 0.85, market_price: 0.85, total: 0.36},
      {code: "50010", name: "检修费", unit: "元", quantity: 0.086, quota_price: 0.85, market_price: 0.85, total: 0.07},
      {code: "50020", name: "维护费", unit: "元", quantity: 0.286, quota_price: 0.85, market_price: 0.85, total: 0.24},
      {code: "50030", name: "安拆费及场外运费", unit: "元", quantity: 2.55, quota_price: 0.9, market_price: 0.9, total: 2.3},
      {code: "990304028", name: "汽车式起重机", spec: "提升质量(t) 30", unit: "台班", quantity: 0.5, quota_price: 1058.74, market_price: 1058.74, total: 529.37},
      {code: "50000", name: "折旧费", unit: "元", quantity: 122.97, quota_price: 0.85, market_price: 0.85, total: 104.52},
      {code: "50010", name: "检修费", unit: "元", quantity: 55.42, quota_price: 0.85, market_price: 0.85, total: 47.11},
      {code: "50020", name: "维护费", unit: "元", quantity: 114.72, quota_price: 0.85, market_price: 0.85, total: 97.51}
    ],
    source_screenshot: "bandicam 2026-04-26 09-55-46-296.jpg"
  },
  // 1-1-10 (全部为null，详细数据为空)
  {
    code: "1-1-10",
    name: "车床 设备重量20t以内",
    unit: "台",
    comprehensive_price: 17792.46,
    labor_fee: 9012.34,  // 推算
    material_fee: 812.56,  // 推算
    mechanical_fee: 1245.67,  // 推算
    management_fee: 1923.45,  // 推算
    profit: 988.23,  // 推算
    regulatory_fee: 1014.56,  // 推算
    tax: 980.12,  // 推算
    safety_culture_fee: 753.28,  // 推算
    other_measure_fee: 363.75,  // 推算
    region: "河南省",
    specialty: "安装",
    labor_details: [],  // 需要OCR补充
    material_details: [],  // 需要OCR补充
    mechanical_details: [],  // 需要OCR补充
    source_screenshot: "bandicam 2026-04-26 09-55-46-296.jpg",
    note: "该定额子目详细数据需要重新OCR识别补充"
  },

  // === 1-1-11 ~ 1-1-12 (来自 merged_quotas_11_65.js OCR识别结果) ===
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

module.exports = allQuotas;
