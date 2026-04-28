const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-131 with complete data
const quota131 = data.quotas.find(q => q.code === '1-1-131');
if (quota131) {
  quota131.labor_fee = 3044.91; // 408.06 + 2260.18 + 376.67
  quota131.material_fee = 278.96;
  quota131.mechanical_fee = 540.23;
  quota131.management_fee = 664.96;
  quota131.profit = 341.78;
  quota131.regulatory_fee = 350.89;
  quota131.safety_culture_fee = 269.71;
  quota131.other_measure_fee = 130.2;
  quota131.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.685, quota_price:87.1, market_price:87.1, total:408.06},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:16.867, quota_price:134.0, market_price:134.0, total:2260.18},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.874, quota_price:201.0, market_price:201.0, total:376.67}
  ];
  quota131.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:13.58, quota_price:4.5, market_price:4.5, total:61.11},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:12.35, quota_price:4.5, market_price:4.5, total:55.58},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'Φ 4.0~2.3', unit:'kg', quantity:0.84, quota_price:5.18, market_price:5.18, total:4.35},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ 3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.036, quota_price:1930.0, market_price:1930.0, total:69.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.725, quota_price:8.44, market_price:8.44, total:39.88},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:13.28}
  ];
  quota131.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.35, quota_price:691.24, market_price:691.24, total:241.93},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ];
  quota131.source_screenshot = 'bandicam 2026-04-27 13-42-06-673.jpg';
  console.log(`Updated 1-1-131: labor_fee=${quota131.labor_fee}, management_fee=${quota131.management_fee}`);
} else {
  console.log('ERROR: 1-1-131 not found');
}

// Add 1-1-132 as new quota with complete data
const newQuota132 = {
  code:'1-1-132',
  name:'其他机床及金属材料试验机械 设备重量1t以内',
  unit:'台',
  comprehensive_price:1611.57,
  labor_fee:876.90,
  material_fee:82.00,
  mechanical_fee:140.63,
  management_fee:180.31,
  profit:92.68,
  regulatory_fee:95.15,
  tax:null,
  safety_culture_fee:73.14,
  other_measure_fee:35.31,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.35, quota_price:87.1, market_price:87.1, total:117.59},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:4.858, quota_price:134.0, market_price:134.0, total:650.97},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.539, quota_price:201.0, market_price:201.0, total:108.34}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:2.82, quota_price:4.5, market_price:4.5, total:12.69},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:3.06, quota_price:4.5, market_price:4.5, total:13.77},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:0.2, quota_price:3.62, market_price:3.62, total:0.72},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.3', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.9},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.1, quota_price:51.09, market_price:51.09, total:5.11},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.013, quota_price:1930.0, market_price:1930.0, total:25.09},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.02, quota_price:7.0, market_price:7.0, total:0.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.101, quota_price:11.2, market_price:11.2, total:1.13},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:4.1}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:12.658, quota_price:0.85, market_price:0.85, total:10.76},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:3.802, quota_price:0.85, market_price:0.85, total:3.23},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:13.192, quota_price:0.85, market_price:0.85, total:11.21},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:0.2, quota_price:134.0, market_price:134.0, total:26.8},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:5.468, quota_price:6.94, market_price:6.94, total:37.95},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:0.209, quota_price:0.85, market_price:0.85, total:0.18},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.043, quota_price:0.85, market_price:0.85, total:0.04},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:0.143, quota_price:0.85, market_price:0.85, total:0.12},
    {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:1.275, quota_price:0.9, market_price:0.9, total:1.15},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:6.027, quota_price:0.7, market_price:0.7, total:4.22}
  ],
  source_screenshot:'bandicam 2026-04-27 13-42-25-165.jpg'
};
data.quotas.push(newQuota132);

// Add 1-1-133 as placeholder
const placeholder133 = {
  code:'1-1-133',
  name:'其他机床及金属材料试验机械 设备重量3t以内',
  unit:'台',
  comprehensive_price:2901.67,
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
  source_screenshot:'bandicam 2026-04-27 13-42-25-165.jpg'
};
data.quotas.push(placeholder133);

// Update processed count
data.processed_count = 279;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');