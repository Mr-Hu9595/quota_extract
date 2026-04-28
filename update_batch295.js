const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-18 with data from 10-24-34-721.jpg
const quota18 = data.quotas.find(q => q.code === '1-1-18');
if (quota18) {
  quota18.labor_fee = 69294.01;
  quota18.material_fee = 6943.95;
  quota18.mechanical_fee = 3976.08;
  quota18.management_fee = 16348.20;
  quota18.profit = 8402.65;
  quota18.regulatory_fee = 8626.72;
  quota18.safety_culture_fee = 6630.81;
  quota18.other_measure_fee = 3201.01;
  quota18.source_screenshot = 'bandicam 2026-04-27 10-24-34-721.jpg';
  quota18.labor_details = [
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:443.246, quota_price:134.0, market_price:134.0, total:59394.96},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:49.249, quota_price:201.0, market_price:201.0, total:9899.05}
  ];
  quota18.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:363.8, quota_price:4.5, market_price:4.5, total:1637.10},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:322.8, quota_price:4.5, market_price:4.5, total:1452.60},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:6.0, quota_price:3.62, market_price:3.62, total:21.72},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.2, quota_price:4700.0, market_price:4700.0, total:940.00},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:25.0, quota_price:5.18, market_price:5.18, total:129.50},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:3.2, quota_price:51.09, market_price:51.09, total:163.49},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.275, quota_price:1930.0, market_price:1930.0, total:530.75},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.57, quota_price:7.0, market_price:7.0, total:24.99},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:105.0, quota_price:8.44, market_price:8.44, total:886.20},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.06, quota_price:12.1, market_price:12.1, total:73.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.525, quota_price:11.2, market_price:11.2, total:28.28},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:330.66}
  ];
  quota18.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.5, quota_price:890.11, market_price:890.11, total:3115.39}
  ];
  console.log(`Updated 1-1-18: labor_fee=${quota18.labor_fee}`);
}

// Update 1-1-19 with data from 10-24-54-079.jpg
const quota19 = data.quotas.find(q => q.code === '1-1-19');
if (quota19) {
  quota19.labor_fee = 110341.12;
  quota19.material_fee = 8274.34;
  quota19.mechanical_fee = 73229.00;
  quota19.source_screenshot = 'bandicam 2026-04-27 10-24-54-079.jpg';
  quota19.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:169.781, quota_price:87.1, market_price:87.1, total:14787.93},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:611.214, quota_price:134.0, market_price:134.0, total:81902.68},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:67.913, quota_price:201.0, market_price:201.0, total:13650.51}
  ];
  quota19.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:392.2, quota_price:4.5, market_price:4.5, total:1764.90},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:345.18, quota_price:4.5, market_price:4.5, total:1553.31},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:6.0, quota_price:3.62, market_price:3.62, total:21.72},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.28, quota_price:4700.0, market_price:4700.0, total:1316.00},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:35.0, quota_price:5.18, market_price:5.18, total:181.30},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:3.2, quota_price:51.09, market_price:51.09, total:163.49},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.313, quota_price:1930.0, market_price:1930.0, total:604.09},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.825, quota_price:1048.0, market_price:1048.0, total:864.60},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.08, quota_price:7.0, market_price:7.0, total:28.56},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:147.0, quota_price:8.44, market_price:8.44, total:1240.68},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.535, quota_price:11.2, market_price:11.2, total:39.59},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:394.02, quota_price:1.0, market_price:1.0, total:394.02}
  ];
  quota19.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5.0, quota_price:890.11, market_price:890.11, total:4450.55}
  ];
  console.log(`Updated 1-1-19: labor_fee=${quota19.labor_fee}`);
}

// Update 1-1-20 with data from 10-25-23-650.jpg
const quota20 = data.quotas.find(q => q.code === '1-1-20');
if (quota20) {
  quota20.labor_fee = 139677.63;
  quota20.material_fee = 9537.13;
  quota20.mechanical_fee = 6775.14;
  quota20.source_screenshot = 'bandicam 2026-04-27 10-25-23-650.jpg';
  quota20.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:214.922, quota_price:87.1, market_price:87.1, total:18719.71},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:773.719, quota_price:134.0, market_price:134.0, total:103678.35},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:85.968, quota_price:201.0, market_price:201.0, total:17279.57}
  ];
  quota20.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:419.59, quota_price:4.5, market_price:4.5, total:1888.16},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:367.56, quota_price:4.5, market_price:4.5, total:1654.02},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:8.0, quota_price:3.62, market_price:3.62, total:28.96},
    {code:'37010303', name:'重轨', spec:'38kg/m', unit:'t', quantity:0.36, quota_price:4700.0, market_price:4700.0, total:1692.00},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:35.0, quota_price:5.18, market_price:5.18, total:181.30},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:4.0, quota_price:51.09, market_price:51.09, total:204.36},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.338, quota_price:1930.0, market_price:1930.0, total:652.34},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.963, quota_price:1048.0, market_price:1048.0, total:1009.22},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.59, quota_price:7.0, market_price:7.0, total:32.13},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:183.75, quota_price:8.44, market_price:8.44, total:1550.85},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:11.11, quota_price:12.1, market_price:12.1, total:134.43},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.545, quota_price:11.2, market_price:11.2, total:50.90},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:454.15}
  ];
  quota20.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.0, quota_price:890.11, market_price:890.11, total:5340.66}
  ];
  console.log(`Updated 1-1-20: labor_fee=${quota20.labor_fee}`);
}

// Add 1-1-21 as placeholder
const existing21 = data.quotas.find(q => q.code === '1-1-21');
if (!existing21) {
  const placeholder21 = {
    code:'1-1-21',
    name:'车床 设备重量500t以内',
    unit:'台',
    comprehensive_price:null,
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
    source_screenshot:'bandicam 2026-04-27 10-25-23-650.jpg'
  };
  data.quotas.push(placeholder21);
  console.log('Added 1-1-21 placeholder');
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
