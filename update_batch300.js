const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-29 with data from 10-29-06-715.jpg
const quota29 = data.quotas.find(q => q.code === '1-1-29');
if (quota29) {
  quota29.comprehensive_price = 73481.00;
  quota29.labor_fee = 38276.98;
  quota29.material_fee = 2796.52;
  quota29.mechanical_fee = 3976.08;
  quota29.source_screenshot = 'bandicam 2026-04-27 10-29-06-715.jpg';
  quota29.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:58.897, quota_price:87.1, market_price:87.1, total:5129.93},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:212.029, quota_price:134.0, market_price:134.0, total:28411.89},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:23.558, quota_price:201.0, market_price:201.0, total:4735.16}
  ];
  quota29.material_details = [
    {code:'03210487', name:'平垫铁', spec:'综合', unit:'kg', quantity:103.0, quota_price:4.5, market_price:4.5, total:463.50},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:95.52, quota_price:4.5, market_price:4.5, total:429.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:3.0, quota_price:3.62, market_price:3.62, total:10.86},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.08, quota_price:20.8, market_price:20.8, total:1.66},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:13.0, quota_price:5.18, market_price:5.18, total:67.34},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.5, quota_price:51.09, market_price:51.09, total:76.64},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.156, quota_price:1930.0, market_price:1930.0, total:301.08},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.55, quota_price:1048.0, market_price:1048.0, total:576.40},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.57, quota_price:7.0, market_price:7.0, total:24.99},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:73.5, quota_price:8.44, market_price:8.44, total:620.34},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.545, quota_price:12.1, market_price:12.1, total:54.99},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.818, quota_price:11.2, market_price:11.2, total:20.36},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.4, quota_price:33.0, market_price:33.0, total:13.20},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:133.17, quota_price:1.0, market_price:1.0, total:133.17}
  ];
  quota29.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.5, quota_price:890.11, market_price:890.11, total:3115.39}
  ];
  console.log(`Updated 1-1-29: labor_fee=${quota29.labor_fee}, comprehensive_price=${quota29.comprehensive_price}`);
}

// Update 1-1-30 with data from 10-29-24-590.jpg
const quota30 = data.quotas.find(q => q.code === '1-1-30');
if (quota30) {
  quota30.comprehensive_price = 104522.92;
  quota30.labor_fee = 1474.00;
  quota30.material_fee = 1592.45;
  quota30.mechanical_fee = 3892.53;
  quota30.source_screenshot = 'bandicam 2026-04-27 10-29-24-590.jpg';
  quota30.labor_details = [
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:7.0, quota_price:134.0, market_price:134.0, total:938.00},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3.0, quota_price:134.0, market_price:134.0, total:402.00},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1.0, quota_price:134.0, market_price:134.0, total:134.00}
  ];
  quota30.material_details = [
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:125.475, quota_price:6.94, market_price:6.94, total:870.80},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:63.21, quota_price:6.94, market_price:6.94, total:438.68},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:37.735, quota_price:6.94, market_price:6.94, total:261.88},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:30.135, quota_price:0.7, market_price:0.7, total:21.09}
  ];
  quota30.mechanical_details = [
    {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.5, quota_price:1058.74, market_price:1058.74, total:1588.11},
    {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:0.5, quota_price:4551.82, market_price:4551.82, total:2275.91},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.5, quota_price:57.02, market_price:57.02, total:28.51}
  ];
  console.log(`Updated 1-1-30: labor_fee=${quota30.labor_fee}, comprehensive_price=${quota30.comprehensive_price}`);
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
