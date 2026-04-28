const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-2-1 with data from 16-12-46-980.jpg
const quota1_2_1 = data.quotas.find(q => q.code === '1-2-1');
if (quota1_2_1) {
  quota1_2_1.comprehensive_price = 1781.41;
  quota1_2_1.labor_fee = 929.58;
  quota1_2_1.material_fee = 113.10;
  quota1_2_1.mechanical_fee = 143.29;
  quota1_2_1.source_screenshot = 'bandicam 2026-04-27 16-12-46-980.jpg';
  quota1_2_1.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.431, quota_price:87.1, market_price:87.1, total:124.64},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:5.149, quota_price:134.0, market_price:134.0, total:689.97},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.572, quota_price:201.0, market_price:201.0, total:114.97}
  ];
  quota1_2_1.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:6.24, quota_price:4.5, market_price:4.5, total:28.08},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:5.3, quota_price:4.5, market_price:4.5, total:23.85},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.65, quota_price:5.18, market_price:5.18, total:3.37},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.013, quota_price:1930.0, market_price:1930.0, total:25.09},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.70},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.38581, quota_price:1.0, market_price:1.0, total:5.39}
  ];
  quota1_2_1.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.3, quota_price:449.76, market_price:449.76, total:134.93},
    {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
  ];
  console.log('Updated 1-2-1');
}

// Update 1-2-2 with data from 16-12-58-285.jpg
const quota1_2_2 = data.quotas.find(q => q.code === '1-2-2');
if (quota1_2_2) {
  quota1_2_2.comprehensive_price = 3680.76;
  quota1_2_2.labor_fee = 1837.41;
  quota1_2_2.material_fee = 165.85;
  quota1_2_2.mechanical_fee = 455.29;
  quota1_2_2.source_screenshot = 'bandicam 2026-04-27 16-12-58-285.jpg';
  quota1_2_2.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.827, quota_price:87.1, market_price:87.1, total:246.23},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:10.178, quota_price:134.0, market_price:134.0, total:1363.85},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.131, quota_price:201.0, market_price:201.0, total:227.33}
  ];
  quota1_2_2.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:10.4, quota_price:4.5, market_price:4.5, total:46.8},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.94, quota_price:4.5, market_price:4.5, total:35.73},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.02, quota_price:1930.0, market_price:1930.0, total:38.6},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.625, quota_price:8.44, market_price:8.44, total:22.16},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:7.89756, quota_price:1.0, market_price:1.0, total:7.90}
  ];
  quota1_2_2.mechanical_details = [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.4, quota_price:449.76, market_price:449.76, total:179.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.3, quota_price:890.11, market_price:890.11, total:267.03},
    {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
  ];
  console.log('Updated 1-2-2');
}

// Update screenshot map
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));
screenshotMap['1-2-1'] = 'bandicam 2026-04-27 16-12-46-980.jpg';
screenshotMap['1-2-2'] = 'bandicam 2026-04-27 16-12-58-285.jpg';
fs.writeFileSync('screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved to JSON');