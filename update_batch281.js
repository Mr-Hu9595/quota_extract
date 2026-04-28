const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-142 with complete data
const quota142 = data.quotas.find(q => q.code === '1-1-142');
if (quota142) {
  quota142.labor_fee = 12556.32;
  quota142.material_fee = 1467.58;
  quota142.mechanical_fee = 2375.12;
  quota142.management_fee = 2828.67;
  quota142.profit = 1453.91;
  quota142.regulatory_fee = 1493.08;
  quota142.safety_culture_fee = 1147.52;
  quota142.other_measure_fee = 553.90;
  quota142.source_screenshot = 'bandicam 2026-04-27 13-48-06-095.jpg';
  console.log(`Updated 1-1-142: labor_fee=${quota142.labor_fee}`);
} else {
  console.log('ERROR: 1-1-142 not found');
}

// Add 1-1-143 as placeholder (already exists from previous batch)
const quota143 = data.quotas.find(q => q.code === '1-1-143');
if (quota143) {
  quota143.labor_fee = 14265.18;
  quota143.material_fee = 1649.45;
  quota143.mechanical_fee = 5598.14;
  quota143.management_fee = 3212.85;
  quota143.profit = 1651.23;
  quota143.regulatory_fee = 1695.95;
  quota143.safety_culture_fee = 1303.11;
  quota143.other_measure_fee = 628.94;
  quota143.source_screenshot = 'bandicam 2026-04-27 13-47-10-395.jpg';
  console.log(`Updated 1-1-143: labor_fee=${quota143.labor_fee}`);
}

// Add 1-1-144 as new quota
const quota144 = data.quotas.find(q => q.code === '1-1-144');
if (quota144) {
  quota144.labor_fee = 15892.48;
  quota144.material_fee = 1855.47;
  quota144.mechanical_fee = 3244.12;
  quota144.management_fee = 3560.89;
  quota144.profit = 1829.96;
  quota144.regulatory_fee = 1879.12;
  quota144.safety_culture_fee = 1444.12;
  quota144.other_measure_fee = 696.96;
  quota144.source_screenshot = 'bandicam 2026-04-27 13-47-32-568.jpg';
  console.log(`Updated 1-1-144: labor_fee=${quota144.labor_fee}`);
}

// Add 1-1-145 as new quota
const newQuota145 = {
  code:'1-1-145',
  name:'木工机械 设备重量0.5t以内',
  unit:'台',
  comprehensive_price:663.43,
  labor_fee:287.18,
  material_fee:82.00,
  mechanical_fee:94.73,
  management_fee:63.95,
  profit:32.87,
  regulatory_fee:33.76,
  tax:null,
  safety_culture_fee:25.95,
  other_measure_fee:12.52,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:0.441, quota_price:87.1, market_price:87.1, total:38.41},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1.591, quota_price:134.0, market_price:134.0, total:213.19},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.177, quota_price:201.0, market_price:201.0, total:35.58}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:1.524, quota_price:4.5, market_price:4.5, total:6.86},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:2.358, quota_price:4.5, market_price:4.5, total:10.61},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.15, quota_price:3.62, market_price:3.62, total:0.54},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.42, quota_price:5.18, market_price:5.18, total:2.18},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.158, quota_price:4.1, market_price:4.1, total:0.65},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.075, quota_price:51.09, market_price:51.09, total:3.83},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.007, quota_price:1930.0, market_price:1930.0, total:13.51},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:1.181, quota_price:8.44, market_price:8.44, total:9.97},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.076, quota_price:12.1, market_price:12.1, total:0.92},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.076, quota_price:11.2, market_price:11.2, total:0.85},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:2.55}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.1, quota_price:449.76, market_price:449.76, total:44.98},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7}
  ],
  source_screenshot:'bandicam 2026-04-27 13-47-32-568.jpg'
};
data.quotas.push(newQuota145);

// Add 1-1-146 as new quota with complete data
const newQuota146 = {
  code:'1-1-146',
  name:'木工机械 设备重量1t以内',
  unit:'台',
  comprehensive_price:1251.72,
  labor_fee:651.34,
  material_fee:88.60,
  mechanical_fee:191.31,
  management_fee:135.17,
  profit:69.48,
  regulatory_fee:71.35,
  tax:null,
  safety_culture_fee:54.84,
  other_measure_fee:26.47,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.002, quota_price:87.1, market_price:87.1, total:87.27},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:3.608, quota_price:134.0, market_price:134.0, total:483.47},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.401, quota_price:201.0, market_price:201.0, total:80.6}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:2.032, quota_price:4.5, market_price:4.5, total:9.14},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:3.144, quota_price:4.5, market_price:4.5, total:14.15},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:0.2, quota_price:3.62, market_price:3.62, total:0.72},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.3', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.9},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.1, quota_price:51.09, market_price:51.09, total:5.11},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.013, quota_price:1930.0, market_price:1930.0, total:25.09},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.625, quota_price:8.44, market_price:8.44, total:22.16},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.7},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:4.22}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7}
  ],
  source_screenshot:'bandicam 2026-04-27 13-48-06-095.jpg'
};
data.quotas.push(newQuota146);

// Add 1-1-147 as new quota with complete data
const newQuota147 = {
  code:'1-1-147',
  name:'木工机械 设备重量3t以内',
  unit:'台',
  comprehensive_price:3547.05,
  labor_fee:1919.83,
  material_fee:177.35,
  mechanical_fee:230.58,
  management_fee:396.17,
  profit:203.63,
  regulatory_fee:209.11,
  tax:null,
  safety_culture_fee:160.73,
  other_measure_fee:77.57,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.954, quota_price:87.1, market_price:87.1, total:257.29},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:10.634, quota_price:134.0, market_price:134.0, total:1424.96},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.182, quota_price:201.0, market_price:201.0, total:237.58}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:7.76, quota_price:4.5, market_price:4.5, total:34.92},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.41, quota_price:4.5, market_price:4.5, total:33.35},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:0.45, quota_price:3.62, market_price:3.62, total:1.63},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.3', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.9},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.25, quota_price:51.09, market_price:51.09, total:12.77},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.018, quota_price:1930.0, market_price:1930.0, total:34.74},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.25, quota_price:8.44, market_price:8.44, total:44.31},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.202, quota_price:12.1, market_price:12.1, total:2.44},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:8.56}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.5, quota_price:449.76, market_price:449.76, total:224.88},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7}
  ],
  source_screenshot:'bandicam 2026-04-27 13-48-21-519.jpg'
};
data.quotas.push(newQuota147);

// Add 1-1-148 as new quota with complete data
const newQuota148 = {
  code:'1-1-148',
  name:'木工机械 设备重量5t以内',
  unit:'台',
  comprehensive_price:5063.94,
  labor_fee:2480.35,
  material_fee:261.29,
  mechanical_fee:661.70,
  management_fee:533.83,
  profit:274.35,
  regulatory_fee:281.78,
  tax:null,
  safety_culture_fee:216.56,
  other_measure_fee:104.53,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:3.817, quota_price:87.1, market_price:87.1, total:332.46},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:13.74, quota_price:134.0, market_price:134.0, total:1841.16},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.526, quota_price:201.0, market_price:201.0, total:306.73}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:11.64, quota_price:4.5, market_price:4.5, total:52.38},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:9.88, quota_price:4.5, market_price:4.5, total:44.46},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:0.65, quota_price:3.62, market_price:3.62, total:2.35},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.3', unit:'kg', quantity:0.84, quota_price:5.18, market_price:5.18, total:4.35},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.3, quota_price:51.09, market_price:51.09, total:15.33},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.031, quota_price:1930.0, market_price:1930.0, total:59.83},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:7.35, quota_price:8.44, market_price:8.44, total:62.03},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.253, quota_price:12.1, market_price:12.1, total:3.06},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.253, quota_price:11.2, market_price:11.2, total:2.83},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:12.45}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.55, quota_price:890.11, market_price:890.11, total:489.56},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7}
  ],
  source_screenshot:'bandicam 2026-04-27 13-48-36-141.jpg'
};
data.quotas.push(newQuota148);

// Add 1-1-149 as placeholder
const placeholder149 = {
  code:'1-1-149',
  name:'木工机械 设备重量7t以内',
  unit:'台',
  comprehensive_price:7038.86,
  labor_fee:null,
  material_fee:null,
  mechanical_fee:null,
  management_fee:null,
  profit:null,
  regulatory_fee:null,
  tax:null,
  safety_culture_fee:null,
  other_measure_fee:null,
  region:'河南省',
  specialty:'安装',
  labor_details:[],
  material_details:[],
  mechanical_details:[],
  source_screenshot:'bandicam 2026-04-27 13-48-50-739.jpg'
};
data.quotas.push(placeholder149);

// Update processed count
data.processed_count = 299;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
