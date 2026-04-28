const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-24 with data from 10-27-05-306.jpg
const quota24 = data.quotas.find(q => q.code === '1-1-24');
if (quota24) {
  quota24.comprehensive_price = 18093.00;
  quota24.labor_fee = 8895.47;
  quota24.material_fee = 815.28;
  quota24.mechanical_fee = 1323.76;
  quota24.source_screenshot = 'bandicam 2026-04-27 10-27-05-306.jpg';
  quota24.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:13.687, quota_price:87.1, market_price:87.1, total:1192.14},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:49.275, quota_price:134.0, market_price:134.0, total:6602.85},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.475, quota_price:201.0, market_price:201.0, total:1100.48}
  ];
  quota24.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:34.32, quota_price:4.5, market_price:4.5, total:154.44},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:29.76, quota_price:4.5, market_price:4.5, total:133.92},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.0, quota_price:5.18, market_price:5.18, total:20.72},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.109, quota_price:1930.0, market_price:1930.0, total:210.37},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.01, quota_price:1048.0, market_price:1048.0, total:10.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.02, quota_price:7.0, market_price:7.0, total:7.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.0, quota_price:8.44, market_price:8.44, total:177.24},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:38.82, quota_price:1.0, market_price:1.0, total:38.82}
  ];
  quota24.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86}
  ];
  console.log(`Updated 1-1-24: labor_fee=${quota24.labor_fee}, comprehensive_price=${quota24.comprehensive_price}`);
}

// Update 1-1-25 with data from 10-27-11-751.jpg
const quota25 = data.quotas.find(q => q.code === '1-1-25');
if (quota25) {
  quota25.comprehensive_price = 21616.38;
  quota25.labor_fee = 10687.61;
  quota25.material_fee = 1006.24;
  quota25.mechanical_fee = 1669.38;
  quota25.source_screenshot = 'bandicam 2026-04-27 10-27-11-751.jpg';
  quota25.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:16.445, quota_price:87.1, market_price:87.1, total:1432.36},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:59.202, quota_price:134.0, market_price:134.0, total:7933.07},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.578, quota_price:201.0, market_price:201.0, total:1322.18}
  ];
  quota25.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:40.04, quota_price:4.5, market_price:4.5, total:180.18},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:37.2, quota_price:4.5, market_price:4.5, total:167.4},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.128, quota_price:1930.0, market_price:1930.0, total:247.04},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.014, quota_price:1048.0, market_price:1048.0, total:14.67},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.224, quota_price:7.0, market_price:7.0, total:8.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.818, quota_price:12.1, market_price:12.1, total:22.0},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.15, quota_price:33.0, market_price:33.0, total:4.95},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:47.92, quota_price:1.0, market_price:1.0, total:47.92}
  ];
  quota25.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.0, quota_price:691.24, market_price:691.24, total:1382.48}
  ];
  console.log(`Updated 1-1-25: labor_fee=${quota25.labor_fee}, comprehensive_price=${quota25.comprehensive_price}`);
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
