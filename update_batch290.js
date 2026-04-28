const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-55 with complete data
const quota55 = data.quotas.find(q => q.code === '1-1-55');
if (quota55) {
  quota55.labor_fee = 3178.37;
  quota55.material_fee = 233.82;
  quota55.mechanical_fee = 523.46;
  quota55.management_fee = 668.07;
  quota55.profit = 343.38;
  quota55.regulatory_fee = 352.53;
  quota55.safety_culture_fee = 270.97;
  quota55.other_measure_fee = 130.81;
  quota55.source_screenshot = 'bandicam 2026-04-27 10-47-52-949.jpg';
  quota55.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.891, quota_price:87.1, market_price:87.1, total:426.01},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:17.606, quota_price:134.0, market_price:134.0, total:2359.20},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.956, quota_price:201.0, market_price:201.0, total:393.16}
  ];
  quota55.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:11.64, quota_price:4.5, market_price:4.5, total:52.38},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:9.88, quota_price:4.5, market_price:4.5, total:44.46},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.65, quota_price:3.62, market_price:3.62, total:2.35},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.3', unit:'kg', quantity:0.56, quota_price:5.18, market_price:5.18, total:2.90},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.21, quota_price:4.1, market_price:4.1, total:0.86},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.3, quota_price:51.09, market_price:51.09, total:15.33},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.031, quota_price:1930.0, market_price:1930.0, total:59.83},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.41, quota_price:8.44, market_price:8.44, total:37.22},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:11.13}
  ];
  quota55.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.70}
  ];
  console.log(`Updated 1-1-55: labor_fee=${quota55.labor_fee}`);
}

// Update 1-1-56 with complete data
const quota56 = data.quotas.find(q => q.code === '1-1-56');
if (quota56) {
  quota56.labor_fee = 4213.29;
  quota56.material_fee = 318.98;
  quota56.mechanical_fee = 563.40;
  quota56.management_fee = 900.80;
  quota56.profit = 462.99;
  quota56.regulatory_fee = 475.34;
  quota56.safety_culture_fee = 365.36;
  quota56.other_measure_fee = 176.38;
  quota56.source_screenshot = 'bandicam 2026-04-27 10-48-31-506.jpg';
  quota56.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:6.483, quota_price:87.1, market_price:87.1, total:564.67},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:23.339, quota_price:134.0, market_price:134.0, total:3127.43},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.593, quota_price:201.0, market_price:201.0, total:521.19}
  ];
  quota56.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:13.58, quota_price:4.5, market_price:4.5, total:61.11},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:12.35, quota_price:4.5, market_price:4.5, total:55.58},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.84, quota_price:5.18, market_price:5.18, total:4.35},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.049, quota_price:1930.0, market_price:1930.0, total:94.57},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048.0, market_price:1048.0, total:6.29},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.775, quota_price:8.44, market_price:8.44, total:48.74},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:15.19}
  ];
  quota56.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.4, quota_price:691.24, market_price:691.24, total:276.50}
  ];
  console.log(`Updated 1-1-56: labor_fee=${quota56.labor_fee}`);
}

// Update 1-1-57 with complete data
const quota57 = data.quotas.find(q => q.code === '1-1-57');
if (quota57) {
  quota57.labor_fee = 6004.59;
  quota57.material_fee = 446.54;
  quota57.mechanical_fee = 701.64;
  quota57.management_fee = 1268.69;
  quota57.profit = 652.08;
  quota57.regulatory_fee = 669.47;
  quota57.safety_culture_fee = 514.58;
  quota57.other_measure_fee = 248.41;
  quota57.source_screenshot = 'bandicam 2026-04-27 10-48-54-468.jpg';
  quota57.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.239, quota_price:87.1, market_price:87.1, total:804.72},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:33.261, quota_price:134.0, market_price:134.0, total:4456.97},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.696, quota_price:201.0, market_price:201.0, total:742.90}
  ];
  quota57.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:24.19, quota_price:4.5, market_price:4.5, total:108.86},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:22.93, quota_price:4.5, market_price:4.5, total:103.19},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.67, quota_price:5.18, market_price:5.18, total:13.83},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.075, quota_price:1930.0, market_price:1930.0, total:144.75},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.404, quota_price:12.1, market_price:12.1, total:4.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:26.03, quota_price:1.0, market_price:1.0, total:26.03}
  ];
  quota57.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.6, quota_price:691.24, market_price:691.24, total:414.74}
  ];
  console.log(`Updated 1-1-57: labor_fee=${quota57.labor_fee}`);
}

// Update 1-1-58 with complete data
const quota58 = data.quotas.find(q => q.code === '1-1-58');
if (quota58) {
  quota58.labor_fee = 8693.86;
  quota58.material_fee = 660.94;
  quota58.mechanical_fee = 1047.26;
  quota58.management_fee = 1831.43;
  quota58.profit = 941.32;
  quota58.regulatory_fee = 966.42;
  quota58.safety_culture_fee = 742.83;
  quota58.other_measure_fee = 358.60;
  quota58.source_screenshot = 'bandicam 2026-04-27 10-49-35-931.jpg';
  quota58.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:13.377, quota_price:87.1, market_price:87.1, total:1165.14},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:48.158, quota_price:134.0, market_price:134.0, total:6453.17},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.351, quota_price:201.0, market_price:201.0, total:1075.55}
  ];
  quota58.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:31.05, quota_price:4.5, market_price:4.5, total:139.73},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:27.51, quota_price:4.5, market_price:4.5, total:123.80},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.67, quota_price:5.18, market_price:5.18, total:13.83},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.083, quota_price:1930.0, market_price:1930.0, total:160.19},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.408, quota_price:7.0, market_price:7.0, total:2.86},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:15.75, quota_price:8.44, market_price:8.44, total:132.93},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:31.47}
  ];
  quota58.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.1, quota_price:691.24, market_price:691.24, total:760.36}
  ];
  console.log(`Updated 1-1-58: labor_fee=${quota58.labor_fee}`);
}

// Add 1-1-59 as placeholder
const existing59 = data.quotas.find(q => q.code === '1-1-59');
if (!existing59) {
  const placeholder59 = {
    code:'1-1-59',
    name:'镗床 设备重量20t以内',
    unit:'台',
    comprehensive_price:21063.16,
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
    source_screenshot:'bandicam 2026-04-27 10-49-35-931.jpg'
  };
  data.quotas.push(placeholder59);
  console.log('Added 1-1-59 placeholder');
}

// Update processed count
data.processed_count = 330;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
