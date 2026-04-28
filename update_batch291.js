const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-59 with complete data
const quota59 = data.quotas.find(q => q.code === '1-1-59');
if (quota59) {
  quota59.labor_fee = 11087.70;
  quota59.material_fee = 815.14;
  quota59.mechanical_fee = 1392.88;
  quota59.management_fee = 2335.01;
  quota59.profit = 1200.15;
  quota59.regulatory_fee = 1232.15;
  quota59.safety_culture_fee = 947.08;
  quota59.other_measure_fee = 457.20;
  quota59.source_screenshot = 'bandicam 2026-04-27 10-50-00-134.jpg';
  quota59.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.06, quota_price:87.1, market_price:87.1, total:1485.93},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:61.419, quota_price:134.0, market_price:134.0, total:8230.15},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.824, quota_price:201.0, market_price:201.0, total:1371.62}
  ];
  quota59.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:36.63, quota_price:4.5, market_price:4.5, total:164.84},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:28.16, quota_price:4.5, market_price:4.5, total:126.72},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.0, quota_price:5.18, market_price:5.18, total:20.72},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.121, quota_price:1930.0, market_price:1930.0, total:233.53},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.01, quota_price:1048.0, market_price:1048.0, total:10.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.408, quota_price:7.0, market_price:7.0, total:2.86},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:19.95, quota_price:8.44, market_price:8.44, total:168.38},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:38.82}
  ];
  quota59.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.6, quota_price:691.24, market_price:691.24, total:1105.98}
  ];
  console.log(`Updated 1-1-59: labor_fee=${quota59.labor_fee}`);
}

// Update 1-1-60 with complete data
const quota60 = data.quotas.find(q => q.code === '1-1-60');
if (quota60) {
  quota60.labor_fee = 12729.39;
  quota60.material_fee = 971.21;
  quota60.mechanical_fee = 1392.88;
  quota60.management_fee = 2662.69;
  quota60.profit = 1368.57;
  quota60.regulatory_fee = 1405.07;
  quota60.safety_culture_fee = 1079.99;
  quota60.other_measure_fee = 521.36;
  quota60.source_screenshot = 'bandicam 2026-04-27 10-50-29-484.jpg';
  quota60.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:19.586, quota_price:87.1, market_price:87.1, total:1705.94},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:70.512, quota_price:134.0, market_price:134.0, total:9448.61},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.835, quota_price:201.0, market_price:201.0, total:1574.84}
  ];
  quota60.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:39.23, quota_price:4.5, market_price:4.5, total:176.54},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:36.46, quota_price:4.5, market_price:4.5, total:164.07},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.134, quota_price:1930.0, market_price:1930.0, total:258.62},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:23.1, quota_price:8.44, market_price:8.44, total:194.96},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.606, quota_price:12.1, market_price:12.1, total:7.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.2, quota_price:33.0, market_price:33.0, total:6.60},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:46.25, quota_price:1.0, market_price:1.0, total:46.25}
  ];
  quota60.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.6, quota_price:691.24, market_price:691.24, total:1105.98}
  ];
  console.log(`Updated 1-1-60: labor_fee=${quota60.labor_fee}`);
}

// Update 1-1-61 with complete data
const quota61 = data.quotas.find(q => q.code === '1-1-61');
if (quota61) {
  quota61.labor_fee = 14682.55;
  quota61.material_fee = 1159.27;
  quota61.mechanical_fee = 1711.08;
  quota61.management_fee = 3052.64;
  quota61.profit = 1569.00;
  quota61.regulatory_fee = 1610.84;
  quota61.safety_culture_fee = 1238.15;
  quota61.other_measure_fee = 597.71;
  quota61.source_screenshot = 'bandicam 2026-04-27 10-51-04-326.jpg';
  quota61.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:22.592, quota_price:87.1, market_price:87.1, total:1967.76},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:81.331, quota_price:134.0, market_price:134.0, total:10898.35},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:9.037, quota_price:201.0, market_price:201.0, total:1816.44}
  ];
  quota61.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:53.16, quota_price:4.5, market_price:4.5, total:239.22},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:43.43, quota_price:4.5, market_price:4.5, total:195.44},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.159, quota_price:1930.0, market_price:1930.0, total:306.87},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.808, quota_price:12.1, market_price:12.1, total:9.78},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.2, quota_price:33.0, market_price:33.0, total:6.60},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:55.2, quota_price:1.0, market_price:1.0, total:55.20}
  ];
  quota61.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.6, quota_price:890.11, market_price:890.11, total:1424.18}
  ];
  console.log(`Updated 1-1-61: labor_fee=${quota61.labor_fee}`);
}

// Update 1-1-62 with partial data
const quota62 = data.quotas.find(q => q.code === '1-1-62');
if (quota62) {
  quota62.mechanical_fee = 3223.23;
  quota62.management_fee = 3246.70;
  quota62.profit = 1668.74;
  quota62.regulatory_fee = 1713.24;
  quota62.safety_culture_fee = 1316.86;
  quota62.other_measure_fee = 635.71;
  quota62.source_screenshot = 'bandicam 2026-04-27 10-51-13-011.jpg';
  console.log(`Updated 1-1-62: management_fee=${quota62.management_fee}`);
}

// Add 1-1-63 as placeholder
const existing63 = data.quotas.find(q => q.code === '1-1-63');
if (!existing63) {
  const placeholder63 = {
    code:'1-1-63',
    name:'镗床 设备重量40t以内',
    unit:'台',
    comprehensive_price:34075.15,
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
    source_screenshot:'bandicam 2026-04-27 10-51-13-011.jpg'
  };
  data.quotas.push(placeholder63);
  console.log('Added 1-1-63 placeholder');
}

// Update processed count
data.processed_count = 334;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
