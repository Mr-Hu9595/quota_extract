const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-2-3 with data from 16-13-34-696.jpg
const quota1_2_3 = data.quotas.find(q => q.code === '1-2-3');
if (quota1_2_3) {
  quota1_2_3.comprehensive_price = 5858.35;
  quota1_2_3.labor_fee = 2895.93;
  quota1_2_3.material_fee = 252.55;
  quota1_2_3.mechanical_fee = 759.35;
  quota1_2_3.source_screenshot = 'bandicam 2026-04-27 16-13-34-696.jpg';
  quota1_2_3.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.456, quota_price:87.1, market_price:87.1, total:388.12},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:16.042, quota_price:134.0, market_price:134.0, total:2149.63},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.782, quota_price:201.0, market_price:201.0, total:358.18}
  ];
  quota1_2_3.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:17.805, quota_price:4.5, market_price:4.5, total:80.12},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:14.04, quota_price:4.5, market_price:4.5, total:63.18},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.029, quota_price:1930.0, market_price:1930.0, total:55.97},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.15, quota_price:8.44, market_price:8.44, total:26.59},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:12.026, quota_price:1.0, market_price:1.0, total:12.03}
  ];
  quota1_2_3.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.5, quota_price:449.76, market_price:449.76, total:224.88},
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62}
  ];
  console.log('Updated 1-2-3');
}

// Update screenshot map
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));
screenshotMap['1-2-3'] = 'bandicam 2026-04-27 16-13-34-696.jpg';
fs.writeFileSync('screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved to JSON');