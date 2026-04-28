const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-139 with complete data
const quota139 = data.quotas.find(q => q.code === '1-1-139');
if (quota139) {
  quota139.labor_fee = 7363.01;
  quota139.material_fee = 758.46;
  quota139.mechanical_fee = 1669.38;
  quota139.management_fee = 1612.46;
  quota139.profit = 828.77;
  quota139.regulatory_fee = 850.87;
  quota139.safety_culture_fee = 654.01;
  quota139.other_measure_fee = 315.72;
  quota139.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:11.33, quota_price:87.1, market_price:87.1, total:986.76},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:40.786, quota_price:134.0, market_price:134.0, total:5465.32},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.532, quota_price:201.0, market_price:201.0, total:910.93}
  ];
  quota139.source_screenshot = 'bandicam 2026-04-27 13-45-06-954.jpg';
  console.log(`Updated 1-1-139: labor_fee=${quota139.labor_fee}, management_fee=${quota139.management_fee}`);
} else {
  console.log('ERROR: 1-1-139 not found');
}

// Update 1-1-140 with data from placeholder
const quota140 = data.quotas.find(q => q.code === '1-1-140');
if (quota140) {
  quota140.labor_fee = 9032.86;
  quota140.material_fee = 920.12;
  quota140.mechanical_fee = 2036.52;
  quota140.management_fee = 1975.87;
  quota140.profit = 1015.61;
  quota140.regulatory_fee = 1043.23;
  quota140.safety_culture_fee = 801.68;
  quota140.other_measure_fee = 386.94;
  quota140.source_screenshot = 'bandicam 2026-04-27 13-45-06-954.jpg';
  console.log(`Updated 1-1-140: labor_fee=${quota140.labor_fee}`);
} else {
  console.log('ERROR: 1-1-140 not found');
}

// Add 1-1-141 as new quota with complete data
const newQuota141 = {
  code:'1-1-141',
  name:'其他机床及金属材料试验机械 设备重量30t以内',
  unit:'台',
  comprehensive_price:23925.75,
  labor_fee:10884.51,
  material_fee:1282.23,
  mechanical_fee:2067.12,
  management_fee:2458.32,
  profit:1263.96,
  regulatory_fee:1297.79,
  tax:null,
  safety_culture_fee:997.29,
  other_measure_fee:481.39,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:16.748, quota_price:87.1, market_price:87.1, total:1458.75},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:60.293, quota_price:134.0, market_price:134.0, total:8079.26},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.699, quota_price:201.0, market_price:201.0, total:1346.5}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:72.2, quota_price:4.5, market_price:4.5, total:324.9},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:67.63, quota_price:4.5, market_price:4.5, total:304.34},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.159, quota_price:1930.0, market_price:1930.0, total:306.87},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.714, quota_price:7.0, market_price:7.0, total:5.0},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:17.85, quota_price:8.44, market_price:8.44, total:150.65},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.707, quota_price:11.2, market_price:11.2, total:7.92},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:61.06, quota_price:1.0, market_price:1.0, total:61.06}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22}
  ],
  source_screenshot:'bandicam 2026-04-27 13-46-30-045.jpg'
};
data.quotas.push(newQuota141);

// Add 1-1-142 as placeholder
const placeholder142 = {
  code:'1-1-142',
  name:'其他机床及金属材料试验机械 设备重量35t以内',
  unit:'台',
  comprehensive_price:27709.63,
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
  source_screenshot:'bandicam 2026-04-27 13-46-30-045.jpg'
};
data.quotas.push(placeholder142);

// Update processed count
data.processed_count = 295;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
