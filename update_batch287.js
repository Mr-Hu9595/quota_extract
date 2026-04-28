const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-45 with partial data (management_fee, profit, regulatory_fee, safety_culture_fee, other_measure_fee)
const quota45 = data.quotas.find(q => q.code === '1-1-45');
if (quota45) {
  quota45.management_fee = 1448.49;
  quota45.profit = 744.49;
  quota45.regulatory_fee = 764.35;
  quota45.safety_culture_fee = 587.50;
  quota45.other_measure_fee = 283.62;
  quota45.source_screenshot = 'bandicam 2026-04-27 10-44-01-068.jpg';
  console.log(`Updated 1-1-45: management_fee=${quota45.management_fee}`);
}

// Update 1-1-46 with complete data
const quota46 = data.quotas.find(q => q.code === '1-1-46');
if (quota46) {
  quota46.labor_fee = 7374.16;
  quota46.material_fee = 858.11;
  quota46.mechanical_fee = 1323.76;
  quota46.management_fee = 1614.53;
  quota46.profit = 829.84;
  quota46.regulatory_fee = 851.97;
  quota46.safety_culture_fee = 654.85;
  quota46.other_measure_fee = 316.13;
  quota46.source_screenshot = 'bandicam 2026-04-27 10-44-14-961.jpg';
  console.log(`Updated 1-1-46: labor_fee=${quota46.labor_fee}`);
}

// Update 1-1-47 with complete data
const quota47 = data.quotas.find(q => q.code === '1-1-47');
if (quota47) {
  quota47.labor_fee = 9288.12;
  quota47.material_fee = 1093.58;
  quota47.mechanical_fee = 1323.76;
  quota47.management_fee = 1970.75;
  quota47.profit = 1012.93;
  quota47.regulatory_fee = 1039.94;
  quota47.safety_culture_fee = 799.33;
  quota47.other_measure_fee = 385.88;
  quota47.source_screenshot = 'bandicam 2026-04-27 10-44-33-427.jpg';
  quota47.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:14.292, quota_price:87.1, market_price:87.1, total:1244.83},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:51.449, quota_price:134.0, market_price:134.0, total:6894.17},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.717, quota_price:201.0, market_price:201.0, total:1149.12}
  ];
  quota47.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:61.66, quota_price:4.5, market_price:4.5, total:277.47},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:58.33, quota_price:4.5, market_price:4.5, total:262.49},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.134, quota_price:1930.0, market_price:1930.0, total:258.62},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:14.7, quota_price:8.44, market_price:8.44, total:124.07},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.354, quota_price:12.1, market_price:12.1, total:4.28},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:52.08}
  ];
  quota47.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86}
  ];
  console.log(`Updated 1-1-47: labor_fee=${quota47.labor_fee}`);
}

// Update 1-1-48 with complete data
const quota48 = data.quotas.find(q => q.code === '1-1-48');
if (quota48) {
  quota48.labor_fee = 11104.59;
  quota48.material_fee = 1245.87;
  quota48.mechanical_fee = 1629.26;
  quota48.management_fee = 2310.89;
  quota48.profit = 1187.56;
  quota48.regulatory_fee = 1219.21;
  quota48.safety_culture_fee = 937.03;
  quota48.other_measure_fee = 452.28;
  quota48.source_screenshot = 'bandicam 2026-04-27 10-44-58-574.jpg';
  quota48.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.087, quota_price:87.1, market_price:87.1, total:1488.28},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:61.511, quota_price:134.0, market_price:134.0, total:8242.47},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.835, quota_price:201.0, market_price:201.0, total:1373.84}
  ];
  quota48.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:67.27, quota_price:4.5, market_price:4.5, total:302.72},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:65.62, quota_price:4.5, market_price:4.5, total:295.29},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.159, quota_price:1930.0, market_price:1930.0, total:306.87},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.714, quota_price:7.0, market_price:7.0, total:5.00},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:17.85, quota_price:8.44, market_price:8.44, total:150.65},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:59.33}
  ];
  quota48.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17}
  ];
  console.log(`Updated 1-1-48: labor_fee=${quota48.labor_fee}`);
}

// Add 1-1-49 as placeholder
const existing49 = data.quotas.find(q => q.code === '1-1-49');
if (!existing49) {
  const placeholder49 = {
    code:'1-1-49',
    name:'钻床 设备重量35t以内',
    unit:'台',
    comprehensive_price:26299.63,
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
    source_screenshot:'bandicam 2026-04-27 10-44-58-574.jpg'
  };
  data.quotas.push(placeholder49);
  console.log('Added 1-1-49 placeholder');
}

// Update processed count
data.processed_count = 314;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
