const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-129 with complete data from OCR
const quota129 = data.quotas.find(q => q.code === '1-1-129');
if (quota129) {
  quota129.labor_fee = 1449.19; // 194.15 + 1075.75 + 179.29
  quota129.management_fee = 298.36;
  quota129.profit = 153.35;
  quota129.regulatory_fee = 157.44;
  quota129.safety_culture_fee = 121.02;
  quota129.other_measure_fee = 58.42;
  quota129.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.229, quota_price:87.1, market_price:87.1, total:194.15},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:8.028, quota_price:134.0, market_price:134.0, total:1075.75},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.892, quota_price:201.0, market_price:201.0, total:179.29}
  ];
  quota129.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:5.64, quota_price:4.5, market_price:4.5, total:25.38},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:6.12, quota_price:4.5, market_price:4.5, total:27.54},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.45, quota_price:3.62, market_price:3.62, total:1.63},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.3', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.9},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.25, quota_price:51.09, market_price:51.09, total:12.77},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.015, quota_price:1930.0, market_price:1930.0, total:28.95},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.625, quota_price:8.44, market_price:8.44, total:22.16},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.7},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:6.36}
  ];
  quota129.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.35, quota_price:449.76, market_price:449.76, total:157.42},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:22.1515, quota_price:0.85, market_price:0.85, total:18.83},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:6.6535, quota_price:0.85, market_price:0.85, total:5.66},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:23.086, quota_price:0.85, market_price:0.85, total:19.62},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:0.35, quota_price:134.0, market_price:134.0, total:46.9},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:9.569, quota_price:6.94, market_price:6.94, total:66.41},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:0.209, quota_price:0.85, market_price:0.85, total:0.18},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.043, quota_price:0.85, market_price:0.85, total:0.04},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:0.143, quota_price:0.85, market_price:0.85, total:0.12},
    {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:1.275, quota_price:0.9, market_price:0.9, total:1.15},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:6.027, quota_price:0.7, market_price:0.7, total:4.22}
  ];
  quota129.source_screenshot = 'bandicam 2026-04-27 13-41-29-755.jpg';
  console.log(`Updated 1-1-129: labor_fee=${quota129.labor_fee}, management_fee=${quota129.management_fee}`);
} else {
  console.log('ERROR: 1-1-129 not found');
}

// Add 1-1-130 as new quota with complete data
const newQuota130 = {
  code:'1-1-130',
  name:'超声波加工及电加工机床 设备重量5t以内',
  unit:'台',
  comprehensive_price:4231.5,
  labor_fee:2097.24,
  material_fee:198.29,
  mechanical_fee:523.46,
  management_fee:452.47,
  profit:232.56,
  regulatory_fee:238.76,
  tax:null,
  safety_culture_fee:183.52,
  other_measure_fee:88.6,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:3.227, quota_price:87.1, market_price:87.1, total:281.07},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:11.617, quota_price:134.0, market_price:134.0, total:1556.68},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.291, quota_price:201.0, market_price:201.0, total:259.49}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:7.53, quota_price:4.5, market_price:4.5, total:33.89},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.64, quota_price:4.5, market_price:4.5, total:34.38},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:0.65, quota_price:3.62, market_price:3.62, total:2.35},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:0.84, quota_price:5.18, market_price:5.18, total:4.35},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.30, quota_price:51.09, market_price:51.09, total:15.33},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.031, quota_price:1930.0, market_price:1930.0, total:59.83},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.675, quota_price:8.44, market_price:8.44, total:31.02},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.202, quota_price:12.1, market_price:12.1, total:2.44},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:9.44}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:6.027, quota_price:0.7, market_price:0.7, total:4.22}
  ],
  source_screenshot:'bandicam 2026-04-27 13-41-49-945.jpg'
};
data.quotas.push(newQuota130);

// Add 1-1-131 as placeholder
const placeholder131 = {
  code:'1-1-131',
  name:'超声波加工及电加工机床 设备重量8t以内',
  unit:'台',
  comprehensive_price:6394.09,
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
  source_screenshot:'bandicam 2026-04-27 13-41-49-945.jpg'
};
data.quotas.push(placeholder131);

// Update processed count
data.processed_count = 275;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');