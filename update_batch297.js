const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-22 with data from 10-26-19-317.jpg
const quota22 = data.quotas.find(q => q.code === '1-1-22');
if (quota22) {
  quota22.comprehensive_price = 10456.65;
  quota22.labor_fee = 5418.50;
  quota22.material_fee = 394.88;
  quota22.mechanical_fee = 632.52;
  quota22.source_screenshot = 'bandicam 2026-04-27 10-26-19-317.jpg';
  quota22.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:8.337, quota_price:87.1, market_price:87.1, total:726.15},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:30.015, quota_price:134.0, market_price:134.0, total:4022.01},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.335, quota_price:201.0, market_price:201.0, total:670.34}
  ];
  quota22.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:11.64, quota_price:4.5, market_price:4.5, total:52.38},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:9.88, quota_price:4.5, market_price:4.5, total:44.46},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.67, quota_price:5.18, market_price:5.18, total:13.83},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.056, quota_price:1930.0, market_price:1930.0, total:108.08},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.808, quota_price:12.1, market_price:12.1, total:9.78},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:18.8, quota_price:1.0, market_price:1.0, total:18.80}
  ];
  quota22.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62}
  ];
  console.log(`Updated 1-1-22: labor_fee=${quota22.labor_fee}, comprehensive_price=${quota22.comprehensive_price}`);
}

// Update 1-1-23 with data from 10-26-24-726.jpg
const quota23 = data.quotas.find(q => q.code === '1-1-23');
if (quota23) {
  quota23.comprehensive_price = 13778.80;
  quota23.labor_fee = 7014.85;
  quota23.material_fee = 614.81;
  quota23.mechanical_fee = 978.14;
  quota23.source_screenshot = 'bandicam 2026-04-27 10-26-24-726.jpg';
  quota23.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:10.794, quota_price:87.1, market_price:87.1, total:940.16},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:38.858, quota_price:134.0, market_price:134.0, total:5206.97},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.317, quota_price:201.0, market_price:201.0, total:867.72}
  ];
  quota23.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:20.7, quota_price:4.5, market_price:4.5, total:93.15},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:18.35, quota_price:4.5, market_price:4.5, total:82.58},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.0, quota_price:5.18, market_price:5.18, total:20.72},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.083, quota_price:1930.0, market_price:1930.0, total:160.19},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.02, quota_price:7.0, market_price:7.0, total:7.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:18.9, quota_price:8.44, market_price:8.44, total:159.52},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:29.28, quota_price:1.0, market_price:1.0, total:29.28}
  ];
  quota23.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.0, quota_price:691.24, market_price:691.24, total:691.24}
  ];
  console.log(`Updated 1-1-23: labor_fee=${quota23.labor_fee}, comprehensive_price=${quota23.comprehensive_price}`);
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
