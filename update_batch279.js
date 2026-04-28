const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-136 with complete data
const quota136 = data.quotas.find(q => q.code === '1-1-136');
if (quota136) {
  quota136.labor_fee = 3715.36;
  quota136.material_fee = 315.79;
  quota136.mechanical_fee = 821.05;
  quota136.management_fee = 814.14;
  quota136.profit = 418.45;
  quota136.regulatory_fee = 429.61;
  quota136.safety_culture_fee = 330.21;
  quota136.other_measure_fee = 159.41;
  quota136.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.717, quota_price:87.1, market_price:87.1, total:497.95},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:20.58, quota_price:134.0, market_price:134.0, total:2757.72},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.287, quota_price:201.0, market_price:201.0, total:459.69}
  ];
  quota136.material_details = [
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
  ];
  quota136.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.8, quota_price:573.79, market_price:573.79, total:459.03},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.4},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06}
  ];
  quota136.source_screenshot = 'bandicam 2026-04-27 13-43-55-731.jpg';
  console.log(`Updated 1-1-136: labor_fee=${quota136.labor_fee}, management_fee=${quota136.management_fee}`);
} else {
  console.log('ERROR: 1-1-136 not found');
}

// Update 1-1-137 with complete data
const quota137 = data.quotas.find(q => q.code === '1-1-137');
if (quota137) {
  quota137.labor_fee = 6089.30;
  quota137.material_fee = 614.64;
  quota137.mechanical_fee = 1323.76;
  quota137.management_fee = 1309.29;
  quota137.profit = 672.99;
  quota137.regulatory_fee = 691.05;
  quota137.safety_culture_fee = 531.13;
  quota137.other_measure_fee = 256.28;
  quota137.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.37, quota_price:87.1, market_price:87.1, total:816.13},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:33.73, quota_price:134.0, market_price:134.0, total:4519.82},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.748, quota_price:201.0, market_price:201.0, total:753.35}
  ];
  quota137.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:31.05, quota_price:4.5, market_price:4.5, total:139.73},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:27.52, quota_price:4.5, market_price:4.5, total:123.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.4, quota_price:5.18, market_price:5.18, total:12.43},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.094, quota_price:1930.0, market_price:1930.0, total:181.42},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:8.4, quota_price:8.44, market_price:8.44, total:70.90},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.404, quota_price:12.1, market_price:12.1, total:4.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:29.27, quota_price:1.0, market_price:1.0, total:29.27}
  ];
  quota137.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86}
  ];
  quota137.source_screenshot = 'bandicam 2026-04-27 13-44-35-542.jpg';
  console.log(`Updated 1-1-137: labor_fee=${quota137.labor_fee}, management_fee=${quota137.management_fee}`);
} else {
  console.log('ERROR: 1-1-137 not found');
}

// Add 1-1-138 as new quota with complete data
const newQuota138 = {
  code:'1-1-138',
  name:'其他机床及金属材料试验机械 设备重量15t以内',
  unit:'台',
  comprehensive_price:12748.54,
  labor_fee:6089.30,
  material_fee:614.64,
  mechanical_fee:1323.76,
  management_fee:1309.29,
  profit:672.99,
  regulatory_fee:691.05,
  tax:null,
  safety_culture_fee:531.13,
  other_measure_fee:256.28,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.37, quota_price:87.1, market_price:87.1, total:816.13},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:33.73, quota_price:134.0, market_price:134.0, total:4519.82},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.748, quota_price:201.0, market_price:201.0, total:753.35}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:31.05, quota_price:4.5, market_price:4.5, total:139.73},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:27.52, quota_price:4.5, market_price:4.5, total:123.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.4, quota_price:5.18, market_price:5.18, total:12.43},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.094, quota_price:1930.0, market_price:1930.0, total:181.42},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:8.4, quota_price:8.44, market_price:8.44, total:70.90},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.404, quota_price:12.1, market_price:12.1, total:4.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:29.27, quota_price:1.0, market_price:1.0, total:29.27}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86}
  ],
  source_screenshot:'bandicam 2026-04-27 13-44-35-542.jpg'
};
data.quotas.push(newQuota138);

// Add 1-1-139 as placeholder
const placeholder139 = {
  code:'1-1-139',
  name:'其他机床及金属材料试验机械 设备重量20t以内',
  unit:'台',
  comprehensive_price:16052.50,
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
  source_screenshot:'bandicam 2026-04-27 13-44-35-542.jpg'
};
data.quotas.push(placeholder139);

// Update processed count
data.processed_count = 291;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
