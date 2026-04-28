const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-16 with complete data from 10-23-32-000.jpg
const quota16 = data.quotas.find(q => q.code === '1-1-16');
if (quota16) {
  quota16.labor_fee = 49207.80;
  quota16.material_fee = 5228.18;
  quota16.mechanical_fee = 3531.02;
  quota16.management_fee = 10146.40;
  quota16.profit = 5215.05;
  quota16.regulatory_fee = 5354.12;
  quota16.safety_culture_fee = 4115.37;
  quota16.other_measure_fee = 1986.69;
  quota16.source_screenshot = 'bandicam 2026-04-27 10-23-32-000.jpg';
  quota16.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:75.716, quota_price:87.1, market_price:87.1, total:6594.86},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:272.578, quota_price:134.0, market_price:134.0, total:36525.45},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:30.286, quota_price:201.0, market_price:201.0, total:6087.49}
  ];
  quota16.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:273.51, quota_price:4.5, market_price:4.5, total:1230.80},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:244.46, quota_price:4.5, market_price:4.5, total:1100.07},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:4.0, quota_price:3.62, market_price:3.62, total:14.48},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.12, quota_price:4700.0, market_price:4700.0, total:564.00},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:19.0, quota_price:5.18, market_price:5.18, total:98.42},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.0, quota_price:51.09, market_price:51.09, total:102.18},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.225, quota_price:1930.0, market_price:1930.0, total:434.25},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.55, quota_price:7.0, market_price:7.0, total:17.85},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:73.5, quota_price:8.44, market_price:8.44, total:620.34},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.04, quota_price:12.1, market_price:12.1, total:48.88},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.02, quota_price:11.2, market_price:11.2, total:22.62},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:248.96}
  ];
  quota16.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33}
  ];
  console.log(`Updated 1-1-16: labor_fee=${quota16.labor_fee}`);
}

// Update 1-1-17 with complete data from 10-23-55-143.jpg
const quota17 = data.quotas.find(q => q.code === '1-1-17');
if (quota17) {
  quota17.labor_fee = 64554.43;
  quota17.material_fee = 6133.63;
  quota17.mechanical_fee = 4421.13;
  quota17.source_screenshot = 'bandicam 2026-04-27 10-23-55-143.jpg';
  quota17.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:99.33, quota_price:87.1, market_price:87.1, total:8651.64},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:357.587, quota_price:134.0, market_price:134.0, total:47916.66},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:39.732, quota_price:201.0, market_price:201.0, total:7986.13}
  ];
  quota17.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:328.29, quota_price:4.5, market_price:4.5, total:1477.31},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:289.22, quota_price:4.5, market_price:4.5, total:1301.49},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:4.0, quota_price:3.62, market_price:3.62, total:14.48},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.16, quota_price:4700.0, market_price:4700.0, total:752.00},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:19.0, quota_price:5.18, market_price:5.18, total:98.42},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.0, quota_price:51.09, market_price:51.09, total:102.18},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.263, quota_price:1930.0, market_price:1930.0, total:507.59},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:89.25, quota_price:8.44, market_price:8.44, total:753.27},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:5.252, quota_price:12.1, market_price:12.1, total:63.55},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.222, quota_price:11.2, market_price:11.2, total:24.89},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:292.1, quota_price:1.0, market_price:1.0, total:292.10}
  ];
  quota17.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.0, quota_price:890.11, market_price:890.11, total:3560.44}
  ];
  console.log(`Updated 1-1-17: labor_fee=${quota17.labor_fee}`);
}

// Add 1-1-18 as placeholder
const existing18 = data.quotas.find(q => q.code === '1-1-18');
if (!existing18) {
  const placeholder18 = {
    code:'1-1-18',
    name:'车床 设备重量250t以内',
    unit:'台',
    comprehensive_price:147286.73,
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
    source_screenshot:'bandicam 2026-04-27 10-23-55-143.jpg'
  };
  data.quotas.push(placeholder18);
  console.log('Added 1-1-18 placeholder');
}

// Update processed count
data.processed_count = 346;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
