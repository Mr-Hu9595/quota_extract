const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-30 with data from 10-30-16-039.jpg
const quota30 = data.quotas.find(q => q.code === '1-1-30');
if (quota30) {
  quota30.comprehensive_price = 104522.92;
  quota30.labor_fee = 55187.93;
  quota30.material_fee = 4065.73;
  quota30.mechanical_fee = 3976.08;
  quota30.source_screenshot = 'bandicam 2026-04-27 10-30-16-039.jpg';
  quota30.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:84.918, quota_price:87.1, market_price:87.1, total:7396.36},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:305.703, quota_price:134.0, market_price:134.0, total:40964.20},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:33.967, quota_price:201.0, market_price:201.0, total:6827.37}
  ];
  quota30.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:177.46, quota_price:4.5, market_price:4.5, total:798.57},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:154.12, quota_price:4.5, market_price:4.5, total:693.54},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:4.0, quota_price:3.62, market_price:3.62, total:14.48},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.12, quota_price:20.8, market_price:20.8, total:2.50},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:19.0, quota_price:5.18, market_price:5.18, total:98.42},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.0, quota_price:51.09, market_price:51.09, total:102.18},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.2, quota_price:1930.0, market_price:1930.0, total:386.00},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:5.1, quota_price:7.0, market_price:7.0, total:35.70},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:105.0, quota_price:8.44, market_price:8.44, total:886.20},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:7.07, quota_price:12.1, market_price:12.1, total:85.55},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.424, quota_price:11.2, market_price:11.2, total:27.15},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.5, quota_price:33.0, market_price:33.0, total:16.50},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:193.61, quota_price:1.0, market_price:1.0, total:193.61}
  ];
  quota30.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.5, quota_price:890.11, market_price:890.11, total:3115.39}
  ];
  console.log(`Updated 1-1-30: labor_fee=${quota30.labor_fee}, comprehensive_price=${quota30.comprehensive_price}`);
}

// Update 1-1-31 with data from 10-30-16-039.jpg
const quota31 = data.quotas.find(q => q.code === '1-1-31');
if (quota31) {
  quota31.comprehensive_price = 128347.34;
  quota31.labor_fee = 68407.36;
  quota31.material_fee = 4816.46;
  quota31.mechanical_fee = 4421.13;
  quota31.source_screenshot = 'bandicam 2026-04-27 10-30-16-039.jpg';
  quota31.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:105.258, quota_price:87.1, market_price:87.1, total:9167.97},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:378.929, quota_price:134.0, market_price:134.0, total:50776.49},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:42.104, quota_price:201.0, market_price:201.0, total:8462.90}
  ];
  quota31.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:230.85, quota_price:4.5, market_price:4.5, total:1038.83},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:205.35, quota_price:4.5, market_price:4.5, total:924.08},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:4.0, quota_price:3.62, market_price:3.62, total:14.48},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.16, quota_price:20.8, market_price:20.8, total:3.33},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:19.0, quota_price:5.18, market_price:5.18, total:98.42},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.0, quota_price:51.09, market_price:51.09, total:102.18},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.219, quota_price:1930.0, market_price:1930.0, total:422.67},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.12, quota_price:7.0, market_price:7.0, total:42.84},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:126.0, quota_price:8.44, market_price:8.44, total:1063.44},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.6, quota_price:33.0, market_price:33.0, total:19.80},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:229.35, quota_price:1.0, market_price:1.0, total:229.35}
  ];
  quota31.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.0, quota_price:890.11, market_price:890.11, total:3560.44}
  ];
  console.log(`Updated 1-1-31: labor_fee=${quota31.labor_fee}, comprehensive_price=${quota31.comprehensive_price}`);
}

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
