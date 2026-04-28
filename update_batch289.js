const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-51 with complete data
const quota51 = data.quotas.find(q => q.code === '1-1-51');
if (quota51) {
  quota51.labor_fee = 16062.50;
  quota51.material_fee = 1963.90;
  quota51.mechanical_fee = 2799.07;
  quota51.management_fee = 3543.76;
  quota51.profit = 1821.72;
  quota51.regulatory_fee = 1870.41;
  quota51.safety_culture_fee = 1437.57;
  quota51.other_measure_fee = 694.05;
  quota51.source_screenshot = 'bandicam 2026-04-27 10-46-13-338.jpg';
  quota51.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:24.716, quota_price:87.1, market_price:87.1, total:2152.76},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:88.975, quota_price:134.0, market_price:134.0, total:11922.65},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:9.886, quota_price:201.0, market_price:201.0, total:1987.09}
  ];
  quota51.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:106.51, quota_price:4.5, market_price:4.5, total:479.30},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:102.08, quota_price:4.5, market_price:4.5, total:459.36},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:8.0, quota_price:5.18, market_price:5.18, total:41.44},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.278, quota_price:1930.0, market_price:1930.0, total:536.54},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.028, quota_price:1048.0, market_price:1048.0, total:29.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.071, quota_price:7.0, market_price:7.0, total:7.50},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:28.35, quota_price:8.44, market_price:8.44, total:239.27},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.707, quota_price:12.1, market_price:12.1, total:8.55},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:93.52}
  ];
  quota51.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.5, quota_price:890.11, market_price:890.11, total:2225.28}
  ];
  console.log(`Updated 1-1-51: labor_fee=${quota51.labor_fee}`);
}

// Update 1-1-52 with partial data
const quota52 = data.quotas.find(q => q.code === '1-1-52');
if (quota52) {
  quota52.management_fee = 4118.96;
  quota52.profit = 2117.06;
  quota52.regulatory_fee = 2173.52;
  quota52.safety_culture_fee = 1670.65;
  quota52.other_measure_fee = 806.50;
  quota52.source_screenshot = 'bandicam 2026-04-27 10-46-44-960.jpg';
  console.log(`Updated 1-1-52: management_fee=${quota52.management_fee}`);
}

// Update 1-1-53 with complete data
const quota53 = data.quotas.find(q => q.code === '1-1-53');
if (quota53) {
  quota53.labor_fee = 909.86;
  quota53.material_fee = 77.66;
  quota53.mechanical_fee = 95.65;
  quota53.management_fee = 186.80;
  quota53.profit = 96.01;
  quota53.regulatory_fee = 98.57;
  quota53.safety_culture_fee = 75.77;
  quota53.other_measure_fee = 36.58;
  quota53.source_screenshot = 'bandicam 2026-04-27 10-47-01-752.jpg';
  quota53.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.4, quota_price:87.1, market_price:87.1, total:121.94},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:5.04, quota_price:134.0, market_price:134.0, total:675.36},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.56, quota_price:201.0, market_price:201.0, total:112.56}
  ];
  quota53.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:2.82, quota_price:4.5, market_price:4.5, total:12.69},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:3.06, quota_price:4.5, market_price:4.5, total:13.77},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.203, quota_price:3.62, market_price:3.62, total:0.73},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.252, quota_price:5.18, market_price:5.18, total:1.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.095, quota_price:4.1, market_price:4.1, total:0.39},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.113, quota_price:51.09, market_price:51.09, total:5.77},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.012, quota_price:1930.0, market_price:1930.0, total:23.16},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.046, quota_price:7.0, market_price:7.0, total:0.32},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:1.654, quota_price:8.44, market_price:8.44, total:13.96},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.091, quota_price:12.1, market_price:12.1, total:1.10},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.068, quota_price:11.2, market_price:11.2, total:0.76},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:3.7, quota_price:1.0, market_price:1.0, total:3.70}
  ];
  quota53.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.70}
  ];
  console.log(`Updated 1-1-53: labor_fee=${quota53.labor_fee}`);
}

// Update 1-1-54 with complete data
const quota54 = data.quotas.find(q => q.code === '1-1-54');
if (quota54) {
  quota54.labor_fee = 2160.29;
  quota54.material_fee = 164.99;
  quota54.mechanical_fee = 140.63;
  quota54.management_fee = 438.98;
  quota54.profit = 225.63;
  quota54.regulatory_fee = 231.64;
  quota54.safety_culture_fee = 178.05;
  quota54.other_measure_fee = 85.95;
  quota54.source_screenshot = 'bandicam 2026-04-27 10-47-19-793.jpg';
  quota54.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:3.324, quota_price:87.1, market_price:87.1, total:289.52},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:11.966, quota_price:134.0, market_price:134.0, total:1603.44},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.33, quota_price:201.0, market_price:201.0, total:267.33}
  ];
  quota54.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:5.64, quota_price:4.5, market_price:4.5, total:25.38},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:6.12, quota_price:4.5, market_price:4.5, total:27.54},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.45, quota_price:3.62, market_price:3.62, total:1.63},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.90},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.25, quota_price:51.09, market_price:51.09, total:12.77},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.026, quota_price:1930.0, market_price:1930.0, total:50.18},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.675, quota_price:8.44, market_price:8.44, total:31.02},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.202, quota_price:12.1, market_price:12.1, total:2.44},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.70},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:7.86}
  ];
  quota54.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.3, quota_price:449.76, market_price:449.76, total:134.93},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.70}
  ];
  console.log(`Updated 1-1-54: labor_fee=${quota54.labor_fee}`);
}

// Add 1-1-55 as placeholder
const existing55 = data.quotas.find(q => q.code === '1-1-55');
if (!existing55) {
  const placeholder55 = {
    code:'1-1-55',
    name:'镗床 设备重量5t以内',
    unit:'台',
    comprehensive_price:6001.90,
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
    source_screenshot:'bandicam 2026-04-27 10-47-19-793.jpg'
  };
  data.quotas.push(placeholder55);
  console.log('Added 1-1-55 placeholder');
}

// Update processed count
data.processed_count = 326;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
