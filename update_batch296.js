const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-21 with data from 10-25-53-013.jpg
const quota21 = data.quotas.find(q => q.code === '1-1-21');
if (quota21) {
  quota21.comprehensive_price = 8611.95;
  quota21.labor_fee = 4440.00;
  quota21.material_fee = 303.23;
  quota21.mechanical_fee = 494.27;
  quota21.management_fee = 940.75;
  quota21.profit = 483.53;
  quota21.regulatory_fee = 496.42;
  quota21.safety_culture_fee = 381.57;
  quota21.other_measure_fee = 184.20;
  quota21.source_screenshot = 'bandicam 2026-04-27 10-25-53-013.jpg';
  quota21.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:6.832, quota_price:87.1, market_price:87.1, total:595.07},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:24.594, quota_price:134.0, market_price:134.0, total:3295.60},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.733, quota_price:201.0, market_price:201.0, total:549.33}
  ];
  quota21.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:9.7, quota_price:4.5, market_price:4.5, total:43.65},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.41, quota_price:4.5, market_price:4.5, total:33.35},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.84, quota_price:5.18, market_price:5.18, total:4.35},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.036, quota_price:1930.0, market_price:1930.0, total:69.48},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.004, quota_price:1048.0, market_price:1048.0, total:4.19},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:11.55, quota_price:8.44, market_price:8.44, total:97.48},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:14.44, quota_price:1.0, market_price:1.0, total:14.44}
  ];
  quota21.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.3, quota_price:691.24, market_price:691.24, total:207.37}
  ];
  console.log(`Updated 1-1-21: labor_fee=${quota21.labor_fee}, comprehensive_price=${quota21.comprehensive_price}`);
}

// Add 1-1-22 as placeholder
const existing22 = data.quotas.find(q => q.code === '1-1-22');
if (!existing22) {
  const placeholder22 = {
    code:'1-1-22',
    name:'立式机床 设备重量10t以内',
    unit:'台',
    comprehensive_price:10456.65,
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
    source_screenshot:'bandicam 2026-04-27 10-26-05-378.jpg'
  };
  data.quotas.push(placeholder22);
  console.log('Added 1-1-22 placeholder');
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
