const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-26 with data from 10-27-51-452.jpg
const quota26 = data.quotas.find(q => q.code === '1-1-26');
if (quota26) {
  quota26.comprehensive_price = 28404.54;
  quota26.labor_fee = 14355.45;
  quota26.material_fee = 1362.83;
  quota26.mechanical_fee = 1889.10;
  quota26.source_screenshot = 'bandicam 2026-04-27 10-27-51-452.jpg';
  quota26.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:22.088, quota_price:87.1, market_price:87.1, total:1923.86},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:79.519, quota_price:134.0, market_price:134.0, total:10655.55},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.836, quota_price:201.0, market_price:201.0, total:1776.04}
  ];
  quota26.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:51.48, quota_price:4.5, market_price:4.5, total:231.66},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:44.64, quota_price:4.5, market_price:4.5, total:200.88},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.203, quota_price:1930.0, market_price:1930.0, total:391.79},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.014, quota_price:1048.0, market_price:1048.0, total:14.67},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.836, quota_price:7.0, market_price:7.0, total:12.85},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:36.75, quota_price:8.44, market_price:8.44, total:310.17},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.222, quota_price:12.1, market_price:12.1, total:26.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.2, quota_price:33.0, market_price:33.0, total:6.60},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:64.9, quota_price:1.0, market_price:1.0, total:64.90}
  ];
  quota26.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.8, quota_price:890.11, market_price:890.11, total:1602.20}
  ];
  console.log(`Updated 1-1-26: labor_fee=${quota26.labor_fee}, comprehensive_price=${quota26.comprehensive_price}`);
}

// Update 1-1-27 with data from 10-28-13-105.jpg
const quota27 = data.quotas.find(q => q.code === '1-1-27');
if (quota27) {
  quota27.comprehensive_price = 39934.26;
  quota27.labor_fee = 19928.69;
  quota27.material_fee = 1740.61;
  quota27.mechanical_fee = 2354.01;
  quota27.source_screenshot = 'bandicam 2026-04-27 10-28-13-105.jpg';
  quota27.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:30.664, quota_price:87.1, market_price:87.1, total:2670.83},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:110.391, quota_price:134.0, market_price:134.0, total:14792.39},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:12.266, quota_price:201.0, market_price:201.0, total:2465.47}
  ];
  quota27.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:62.92, quota_price:4.5, market_price:4.5, total:283.14},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:59.52, quota_price:4.5, market_price:4.5, total:267.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.6, quota_price:20.8, market_price:20.8, total:12.48},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:8.0, quota_price:5.18, market_price:5.18, total:41.44},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.253, quota_price:1930.0, market_price:1930.0, total:488.29},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.028, quota_price:1048.0, market_price:1048.0, total:29.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.346, quota_price:7.0, market_price:7.0, total:16.42},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:47.25, quota_price:8.44, market_price:8.44, total:398.79},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.828, quota_price:12.1, market_price:12.1, total:34.22},
    {code:'14090119', name:'黄油钠钙基脂', spec:'', unit:'kg', quantity:1.212, quota_price:11.2, market_price:11.2, total:13.57},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.3, quota_price:33.0, market_price:33.0, total:9.90},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:82.89, quota_price:1.0, market_price:1.0, total:82.89}
  ];
  quota27.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22}
  ];
  console.log(`Updated 1-1-27: labor_fee=${quota27.labor_fee}, comprehensive_price=${quota27.comprehensive_price}`);
}

// Update 1-1-28 with data from 10-28-38-737.jpg
const quota28 = data.quotas.find(q => q.code === '1-1-28');
if (quota28) {
  quota28.comprehensive_price = 53383.00;
  quota28.labor_fee = 26902.34;
  quota28.material_fee = 2150.43;
  quota28.mechanical_fee = 4306.14;
  quota28.source_screenshot = 'bandicam 2026-04-27 10-28-38-737.jpg';
  quota28.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:41.395, quota_price:87.1, market_price:87.1, total:3605.50},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:149.02, quota_price:134.0, market_price:134.0, total:19968.68},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:16.558, quota_price:201.0, market_price:201.0, total:3328.16}
  ];
  quota28.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:85.84, quota_price:4.5, market_price:4.5, total:386.28},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:80.64, quota_price:4.5, market_price:4.5, total:362.88},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:3.0, quota_price:3.62, market_price:3.62, total:10.86},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.06, quota_price:20.8, market_price:20.8, total:1.25},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:10.0, quota_price:5.18, market_price:5.18, total:51.80},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.5, quota_price:51.09, market_price:51.09, total:76.64},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.15, quota_price:1930.0, market_price:1930.0, total:289.50},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.275, quota_price:1048.0, market_price:1048.0, total:288.20},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:57.75, quota_price:8.44, market_price:8.44, total:487.41},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.535, quota_price:12.1, market_price:12.1, total:42.77},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.515, quota_price:11.2, market_price:11.2, total:16.97},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.3, quota_price:33.0, market_price:33.0, total:9.90},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:102.40, quota_price:1.0, market_price:1.0, total:102.40}
  ];
  quota28.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.5, quota_price:890.11, market_price:890.11, total:2225.28}
  ];
  console.log(`Updated 1-1-28: labor_fee=${quota28.labor_fee}, comprehensive_price=${quota28.comprehensive_price}`);
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
