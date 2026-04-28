const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-149 with complete data from earlier OCR
const quota149 = data.quotas.find(q => q.code === '1-1-149');
if (quota149) {
  quota149.labor_fee = 3446.47;
  quota149.material_fee = 320.52;
  quota149.mechanical_fee = 965.88;
  quota149.management_fee = 708.64;
  quota149.profit = 364.17;
  quota149.regulatory_fee = 373.96;
  quota149.safety_culture_fee = 287.36;
  quota149.other_measure_fee = 138.69;
  quota149.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.303, quota_price:87.1, market_price:87.1, total:461.89},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:19.09, quota_price:134.0, market_price:134.0, total:2558.06},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.122, quota_price:201.0, market_price:201.0, total:426.52}
  ];
  quota149.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:13.58, quota_price:4.5, market_price:4.5, total:61.11},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:12.35, quota_price:4.5, market_price:4.5, total:55.58},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.12, quota_price:5.18, market_price:5.18, total:5.8},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.036, quota_price:1930.0, market_price:1930.0, total:69.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:9.45, quota_price:8.44, market_price:8.44, total:79.76},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:15.26, quota_price:1.0, market_price:1.0, total:15.26}
  ];
  quota149.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.75, quota_price:890.11, market_price:890.11, total:667.58},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7}
  ];
  quota149.source_screenshot = 'bandicam 2026-04-27 13-48-50-739.jpg';
  console.log(`Updated 1-1-149: labor_fee=${quota149.labor_fee}`);
}

// Add 1-1-150 as new quota with complete data
const newQuota150 = {
  code:'1-1-150',
  name:'木工机械 设备重量10t以内',
  unit:'台',
  comprehensive_price:9540.04,
  labor_fee:4819.56,
  material_fee:451.40,
  mechanical_fee:1088.0,
  management_fee:1018.63,
  profit:523.44,
  regulatory_fee:537.53,
  tax:null,
  safety_culture_fee:413.10,
  other_measure_fee:199.36,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:7.416, quota_price:87.1, market_price:87.1, total:645.93},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:26.696, quota_price:134.0, market_price:134.0, total:3577.26},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.967, quota_price:201.0, market_price:201.0, total:596.37}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:17.46, quota_price:4.5, market_price:4.5, total:78.57},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:14.82, quota_price:4.5, market_price:4.5, total:66.69},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.8, quota_price:5.18, market_price:5.18, total:9.32},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.069, quota_price:1930.0, market_price:1930.0, total:133.17},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:11.55, quota_price:8.44, market_price:8.44, total:97.48},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.404, quota_price:12.1, market_price:12.1, total:4.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:21.5, quota_price:1.0, market_price:1.0, total:21.5}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.9, quota_price:890.11, market_price:890.11, total:801.10}
  ],
  source_screenshot:'bandicam 2026-04-27 13-49-06-749.jpg'
};
data.quotas.push(newQuota150);

// Add 1-1-151 as placeholder
const placeholder151 = {
  code:'1-1-151',
  name:'跑车带锯机 设备重量3t以内',
  unit:'台',
  comprehensive_price:5044.78,
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
  source_screenshot:'bandicam 2026-04-27 13-49-06-749.jpg'
};
data.quotas.push(placeholder151);

// Update processed count
data.processed_count = 300;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
