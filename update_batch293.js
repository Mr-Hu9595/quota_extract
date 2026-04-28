const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-13 with complete data
const quota13 = data.quotas.find(q => q.code === '1-1-13');
if (quota13) {
  quota13.labor_fee = 23703.81;
  quota13.material_fee = 1713.37;
  quota13.mechanical_fee = 3955.51;
  quota13.management_fee = 4097.17;
  quota13.profit = 2105.86;
  quota13.regulatory_fee = 2162.02;
  quota13.safety_culture_fee = 1661.81;
  quota13.other_measure_fee = 802.23;
  quota13.source_screenshot = 'bandicam 2026-04-27 10-22-30-399.jpg';
  console.log(`Updated 1-1-13: labor_fee=${quota13.labor_fee}`);
}

// Update 1-1-14 with complete data
const quota14 = data.quotas.find(q => q.code === '1-1-14');
if (quota14) {
  quota14.labor_fee = 25528.67;
  quota14.material_fee = 2869.18;
  quota14.mechanical_fee = 2354.01;
  quota14.management_fee = 5303.07;
  quota14.profit = 2725.67;
  quota14.regulatory_fee = 2798.36;
  quota14.safety_culture_fee = 2150.92;
  quota14.other_measure_fee = 1038.35;
  quota14.source_screenshot = 'bandicam 2026-04-27 10-22-45-812.jpg';
  quota14.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:39.28, quota_price:87.1, market_price:87.1, total:3421.29},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:141.411, quota_price:134.0, market_price:134.0, total:18949.07},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:15.713, quota_price:201.0, market_price:201.0, total:3158.31}
  ];
  quota14.material_details = [
    {code:'03210445', name:'平垫铁', spec:'综合', unit:'kg', quantity:159.44, quota_price:4.5, market_price:4.5, total:717.48},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:139.2, quota_price:4.5, market_price:4.5, total:626.40},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:3.0, quota_price:3.62, market_price:3.62, total:10.86},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.3', unit:'kg', quantity:10.0, quota_price:5.18, market_price:5.18, total:51.80},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.056, quota_price:4700.0, market_price:4700.0, total:263.20},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.5, quota_price:51.09, market_price:51.09, total:76.64},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.148, quota_price:1930.0, market_price:1930.0, total:285.64},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.275, quota_price:1048.0, market_price:1048.0, total:288.20},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.53, quota_price:7.0, market_price:7.0, total:10.71},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:42.0, quota_price:8.44, market_price:8.44, total:354.48},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.222, quota_price:12.1, market_price:12.1, total:26.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.616, quota_price:11.2, market_price:11.2, total:18.10},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:136.63, quota_price:1.0, market_price:1.0, total:136.63}
  ];
  quota14.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22}
  ];
  console.log(`Updated 1-1-14: labor_fee=${quota14.labor_fee}`);
}

// Update 1-1-15 with complete data
const quota15 = data.quotas.find(q => q.code === '1-1-15');
if (quota15) {
  quota15.labor_fee = 35615.85;
  quota15.material_fee = 3838.83;
  quota15.mechanical_fee = 3244.12;
  quota15.management_fee = 7260.29;
  quota15.profit = 3730.82;
  quota15.regulatory_fee = 3836.28;
  quota15.safety_culture_fee = 2948.41;
  quota15.other_measure_fee = 1424.25;
  quota15.source_screenshot = 'bandicam 2026-04-27 10-23-07-670.jpg';
  quota15.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:54.803, quota_price:87.1, market_price:87.1, total:4773.34},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:197.288, quota_price:134.0, market_price:134.0, total:26436.59},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:21.92, quota_price:201.0, market_price:201.0, total:4405.92}
  ];
  quota15.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:198.48, quota_price:4.5, market_price:4.5, total:893.16},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:175.56, quota_price:4.5, market_price:4.5, total:790.02},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:3.0, quota_price:3.62, market_price:3.62, total:10.86},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.3', unit:'kg', quantity:13.0, quota_price:5.18, market_price:5.18, total:67.34},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.08, quota_price:4700.0, market_price:4700.0, total:376.00},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.5, quota_price:51.09, market_price:51.09, total:76.64},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.156, quota_price:1930.0, market_price:1930.0, total:301.08},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.55, quota_price:1048.0, market_price:1048.0, total:576.40},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.04, quota_price:7.0, market_price:7.0, total:14.28},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:57.75, quota_price:8.44, market_price:8.44, total:487.41},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.333, quota_price:12.1, market_price:12.1, total:40.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.818, quota_price:11.2, market_price:11.2, total:20.36},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:182.80, quota_price:1.0, market_price:1.0, total:182.80}
  ];
  quota15.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33}
  ];
  console.log(`Updated 1-1-15: labor_fee=${quota15.labor_fee}`);
}

// Add 1-1-16 as placeholder
const existing16 = data.quotas.find(q => q.code === '1-1-16');
if (!existing16) {
  const placeholder16 = {
    code:'1-1-16',
    name:'车床 设备重量150t以内',
    unit:'台',
    comprehensive_price:93571.78,
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
    source_screenshot:'bandicam 2026-04-27 10-23-07-670.jpg'
  };
  data.quotas.push(placeholder16);
  console.log('Added 1-1-16 placeholder');
}

// Update processed count
data.processed_count = 342;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
