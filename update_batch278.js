const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-134 with complete data from OCR
const quota134 = data.quotas.find(q => q.code === '1-1-134');
if (quota134) {
  quota134.labor_fee = 3484.29;
  quota134.material_fee = 40.44;
  quota134.mechanical_fee = 527.68;
  quota134.management_fee = 458.18;
  quota134.profit = 235.50;
  quota134.regulatory_fee = 241.78;
  quota134.safety_culture_fee = 185.84;
  quota134.other_measure_fee = 89.71;
  quota134.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:3.271, quota_price:87.1, market_price:87.1, total:284.9},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:11.776, quota_price:134.0, market_price:134.0, total:1577.98},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.308, quota_price:201.0, market_price:201.0, total:262.91}
  ];
  quota134.material_details = [
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
  ];
  quota134.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:6.027, quota_price:0.7, market_price:0.7, total:4.22}
  ];
  quota134.source_screenshot = 'bandicam 2026-04-27 13-43-08-411.jpg';
  console.log(`Updated 1-1-134: labor_fee=${quota134.labor_fee}, management_fee=${quota134.management_fee}`);
} else {
  console.log('ERROR: 1-1-134 not found');
}

// Update 1-1-135 with complete data
const quota135 = data.quotas.find(q => q.code === '1-1-135');
if (quota135) {
  quota135.labor_fee = 2713.96;
  quota135.material_fee = 275.82;
  quota135.mechanical_fee = 1069.05;
  quota135.management_fee = 598.80;
  quota135.profit = 307.77;
  quota135.regulatory_fee = 315.98;
  quota135.safety_culture_fee = 242.87;
  quota135.other_measure_fee = 117.25;
  quota135.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.176, quota_price:87.1, market_price:87.1, total:363.73},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:15.033, quota_price:134.0, market_price:134.0, total:2014.56},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.67, quota_price:201.0, market_price:201.0, total:335.67}
  ];
  quota135.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:11.0, quota_price:4.5, market_price:4.5, total:49.5},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:10.0, quota_price:4.5, market_price:4.5, total:45.0},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.8, quota_price:3.62, market_price:3.62, total:2.9},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.0, quota_price:5.18, market_price:5.18, total:5.18},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.045, quota_price:1930.0, market_price:1930.0, total:86.85},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.725, quota_price:8.44, market_price:8.44, total:39.88},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:15.26, quota_price:1.0, market_price:1.0, total:15.26}
  ];
  quota135.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.35, quota_price:691.24, market_price:691.24, total:241.93},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ];
  quota135.source_screenshot = 'bandicam 2026-04-27 13-43-20-451.jpg';
  console.log(`Updated 1-1-135: labor_fee=${quota135.labor_fee}, management_fee=${quota135.management_fee}`);
} else {
  console.log('ERROR: 1-1-135 not found');
}

// Add 1-1-136 as new quota with complete data
const newQuota136 = {
  code:'1-1-136',
  name:'其他机床及金属材料试验机械 设备重量9t以内',
  unit:'台',
  comprehensive_price:7852.92,
  labor_fee:3715.36,
  material_fee:315.79,
  mechanical_fee:821.05,
  management_fee:804.87,
  profit:413.70,
  regulatory_fee:424.83,
  tax:null,
  safety_culture_fee:326.53,
  other_measure_fee:157.59,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.717, quota_price:87.1, market_price:87.1, total:497.95},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:20.58, quota_price:134.0, market_price:134.0, total:2757.72},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.287, quota_price:201.0, market_price:201.0, total:459.69}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:13.58, quota_price:4.5, market_price:4.5, total:61.11},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:12.35, quota_price:4.5, market_price:4.5, total:55.58},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.12, quota_price:5.18, market_price:5.18, total:5.8},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.054, quota_price:1930.0, market_price:1930.0, total:104.22},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.184, quota_price:7.0, market_price:7.0, total:1.29},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.25, quota_price:8.44, market_price:8.44, total:44.31},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:15.26, quota_price:1.0, market_price:1.0, total:15.26}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.8, quota_price:573.79, market_price:573.79, total:459.03},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.4}
  ],
  source_screenshot:'bandicam 2026-04-27 13-43-46-869.jpg'
};
data.quotas.push(newQuota136);

// Add 1-1-137 as placeholder
const placeholder137 = {
  code:'1-1-137',
  name:'其他机床及金属材料试验机械 设备重量12t以内',
  unit:'台',
  comprehensive_price:10270.93,
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
  source_screenshot:'bandicam 2026-04-27 13-43-46-869.jpg'
};
data.quotas.push(placeholder137);

// Update processed count
data.processed_count = 287;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
