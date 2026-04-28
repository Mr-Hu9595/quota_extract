const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-133 with complete data from OCR
const quota133 = data.quotas.find(q => q.code === '1-1-133');
if (quota133) {
  quota133.labor_fee = 1611.89;
  quota133.material_fee = 140.73;
  quota133.mechanical_fee = 281.27;
  quota133.management_fee = 329.50;
  quota133.profit = 169.35;
  quota133.regulatory_fee = 173.87;
  quota133.safety_culture_fee = 133.64;
  quota133.other_measure_fee = 64.52;
  quota133.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.48, quota_price:87.1, market_price:87.1, total:216.01},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:8.929, quota_price:134.0, market_price:134.0, total:1196.49},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.992, quota_price:201.0, market_price:201.0, total:199.39}
  ];
  quota133.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:5.64, quota_price:4.5, market_price:4.5, total:25.38},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:6.12, quota_price:4.5, market_price:4.5, total:27.54},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:0.45, quota_price:3.62, market_price:3.62, total:1.63},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.9},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.25, quota_price:51.09, market_price:51.09, total:12.77},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.018, quota_price:1930.0, market_price:1930.0, total:34.74},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.061, quota_price:7.0, market_price:7.0, total:0.43},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.94, quota_price:8.44, market_price:8.44, total:24.81},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.101, quota_price:11.2, market_price:11.2, total:1.13},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:6.7, quota_price:1.0, market_price:1.0, total:6.7}
  ];
  quota133.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.3, quota_price:449.76, market_price:449.76, total:134.93},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:18.987, quota_price:0.85, market_price:0.85, total:16.14},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:5.703, quota_price:0.85, market_price:0.85, total:4.85},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:19.788, quota_price:0.85, market_price:0.85, total:16.82},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:0.3, quota_price:134.0, market_price:134.0, total:40.2},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:8.202, quota_price:6.94, market_price:6.94, total:56.92},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:0.209, quota_price:0.85, market_price:0.85, total:0.18},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.043, quota_price:0.85, market_price:0.85, total:0.04},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:0.143, quota_price:0.85, market_price:0.85, total:0.12},
    {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:1.275, quota_price:0.9, market_price:0.9, total:1.15},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:6.027, quota_price:0.7, market_price:0.7, total:4.22}
  ];
  quota133.source_screenshot = 'bandicam 2026-04-27 13-42-47-520.jpg';
  console.log(`Updated 1-1-133: labor_fee=${quota133.labor_fee}, management_fee=${quota133.management_fee}`);
} else {
  console.log('ERROR: 1-1-133 not found');
}

// Add 1-1-134 as new quota with complete data
const newQuota134 = {
  code:'1-1-134',
  name:'其他机床及金属材料试验机械 设备重量5t以内',
  unit:'台',
  comprehensive_price:4271.21,
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
  source_screenshot:'bandicam 2026-04-27 13-42-52-434.jpg'
};
data.quotas.push(newQuota134);

// Add 1-1-135 as new quota with complete data
const newQuota135 = {
  code:'1-1-135',
  name:'其他机床及金属材料试验机械 设备重量7t以内',
  unit:'台',
  comprehensive_price:5859.43,
  labor_fee:2125.79,
  material_fee:192.14,
  mechanical_fee:523.46,
  management_fee:null,
  profit:null,
  regulatory_fee:null,
  tax:null,
  safety_culture_fee:null,
  other_measure_fee:null,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:3.271, quota_price:87.1, market_price:87.1, total:284.9},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:11.776, quota_price:134.0, market_price:134.0, total:1577.98},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.308, quota_price:201.0, market_price:201.0, total:262.91}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:7.76, quota_price:4.5, market_price:4.5, total:34.92},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.41, quota_price:4.5, market_price:4.5, total:33.35},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.65, quota_price:3.62, market_price:3.62, total:2.35},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.84, quota_price:5.18, market_price:5.18, total:4.35},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.3, quota_price:51.09, market_price:51.09, total:15.33},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.031, quota_price:1930.0, market_price:1930.0, total:59.83},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.15, quota_price:8.44, market_price:8.44, total:26.59},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.202, quota_price:12.1, market_price:12.1, total:2.44},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:9.15, quota_price:1.0, market_price:1.0, total:9.15}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7}
  ],
  source_screenshot:'bandicam 2026-04-27 13-43-04-037.jpg'
};
data.quotas.push(newQuota135);

// Update processed count
data.processed_count = 283;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
