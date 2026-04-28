const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-48 with complete data
const quota48 = data.quotas.find(q => q.code === '1-1-48');
if (quota48) {
  quota48.labor_fee = 11104.59;
  quota48.material_fee = 1245.87;
  quota48.mechanical_fee = 1629.26;
  quota48.management_fee = 2333.20;
  quota48.profit = 1199.22;
  quota48.regulatory_fee = 1231.20;
  quota48.safety_culture_fee = 946.34;
  quota48.other_measure_fee = 456.84;
  quota48.source_screenshot = 'bandicam 2026-04-27 10-45-06-067.jpg';
  console.log(`Updated 1-1-48: labor_fee=${quota48.labor_fee}`);
}

// Update 1-1-49 with complete data
const quota49 = data.quotas.find(q => q.code === '1-1-49');
if (quota49) {
  quota49.labor_fee = 12574.97;
  quota49.material_fee = 1491.61;
  quota49.mechanical_fee = 1622.07;
  quota49.management_fee = 2652.83;
  quota49.profit = 1363.50;
  quota49.regulatory_fee = 1399.98;
  quota49.safety_culture_fee = 1076.06;
  quota49.other_measure_fee = 519.40;
  quota49.source_screenshot = 'bandicam 2026-04-27 10-45-20-946.jpg';
  quota49.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:19.35, quota_price:87.1, market_price:87.1, total:1685.39},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:69.657, quota_price:134.0, market_price:134.0, total:9334.04},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.739, quota_price:201.0, market_price:201.0, total:1555.54}
  ];
  quota49.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:78.48, quota_price:4.5, market_price:4.5, total:353.16},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:72.91, quota_price:4.5, market_price:4.5, total:328.10},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.225, quota_price:1930.0, market_price:1930.0, total:434.25},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.025, quota_price:1048.0, market_price:1048.0, total:26.20},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.755, quota_price:7.0, market_price:7.0, total:5.29},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:19.95, quota_price:8.44, market_price:8.44, total:168.38},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.556, quota_price:12.1, market_price:12.1, total:6.73},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.455, quota_price:11.2, market_price:11.2, total:5.10},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:71.03}
  ];
  quota49.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17}
  ];
  console.log(`Updated 1-1-49: labor_fee=${quota49.labor_fee}`);
}

// Update 1-1-50 with complete data
const quota50 = data.quotas.find(q => q.code === '1-1-50');
if (quota50) {
  quota50.labor_fee = 14128.08;
  quota50.material_fee = 1707.07;
  quota50.mechanical_fee = 1908.96;
  quota50.management_fee = 2969.90;
  quota50.profit = 1526.61;
  quota50.regulatory_fee = 1567.57;
  quota50.safety_culture_fee = 1204.91;
  quota50.other_measure_fee = 581.67;
  quota50.source_screenshot = 'bandicam 2026-04-27 10-45-50-364.jpg';
  quota50.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:21.739, quota_price:87.1, market_price:87.1, total:1893.47},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:78.259, quota_price:134.0, market_price:134.0, total:10486.71},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.696, quota_price:201.0, market_price:201.0, total:1747.90}
  ];
  quota50.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:95.3, quota_price:4.5, market_price:4.5, total:428.85},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:87.49, quota_price:4.5, market_price:4.5, total:393.71},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:8.0, quota_price:5.18, market_price:5.18, total:41.44},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.238, quota_price:1930.0, market_price:1930.0, total:459.34},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.025, quota_price:1048.0, market_price:1048.0, total:26.20},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.857, quota_price:7.0, market_price:7.0, total:6.00},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:23.1, quota_price:8.44, market_price:8.44, total:194.96},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.606, quota_price:12.1, market_price:12.1, total:7.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:81.29}
  ];
  quota50.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17}
  ];
  console.log(`Updated 1-1-50: labor_fee=${quota50.labor_fee}`);
}

// Add 1-1-51 as placeholder
const existing51 = data.quotas.find(q => q.code === '1-1-51');
if (!existing51) {
  const placeholder51 = {
    code:'1-1-51',
    name:'钻床 设备重量50t以内',
    unit:'台',
    comprehensive_price:34506.89,
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
    source_screenshot:'bandicam 2026-04-27 10-45-50-364.jpg'
  };
  data.quotas.push(placeholder51);
  console.log('Added 1-1-51 placeholder');
}

// Update processed count
data.processed_count = 318;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
