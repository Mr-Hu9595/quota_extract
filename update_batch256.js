const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-122 with mechanical details and fees from OCR
const quota122 = data.quotas.find(q => q.code === '1-1-122');
if (quota122) {
  quota122.management_fee = 15841.24;
  quota122.profit = 8142.08;
  quota122.regulatory_fee = 8359.21;
  quota122.safety_culture_fee = 6425.19;
  quota122.other_measure_fee = 3101.75;
  quota122.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:86.55, quota_price:0.85, market_price:0.85, total:147.14},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:17.67, quota_price:0.85, market_price:0.85, total:30.04},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:69.44, quota_price:0.85, market_price:0.85, total:118.05},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:80.06, quota_price:6.94, market_price:6.94, total:555.62},
    {code:'50060', name:'其他费', spec:'', unit:'元', quantity:28.74, quota_price:1.0, market_price:1.0, total:28.74},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:7.0, quota_price:890.11, market_price:890.11, total:6230.77},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1289.82, quota_price:0.85, market_price:0.85, total:1096.35},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:581.28, quota_price:0.85, market_price:0.85, total:494.09},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1203.23, quota_price:0.85, market_price:0.85, total:1022.75},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:14.0, quota_price:134.0, market_price:134.0, total:1876.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:250.95, quota_price:6.94, market_price:6.94, total:1741.59},
    {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:3.0, quota_price:1058.74, market_price:1058.74, total:3176.22},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:737.82, quota_price:0.85, market_price:0.85, total:627.15},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:332.52, quota_price:0.85, market_price:0.85, total:282.64},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:688.32, quota_price:0.85, market_price:0.85, total:585.07},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:6.0, quota_price:134.0, market_price:134.0, total:804.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:126.42, quota_price:6.94, market_price:6.94, total:877.35},
    {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:863.91, quota_price:0.85, market_price:0.85, total:734.32},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:389.35, quota_price:0.85, market_price:0.85, total:330.95},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:805.95, quota_price:0.85, market_price:0.85, total:685.06},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:51.92, quota_price:6.94, market_price:6.94, total:360.32},
    {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1858.28, quota_price:0.85, market_price:0.85, total:1579.54},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:835.61, quota_price:0.85, market_price:0.85, total:710.27},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1729.71, quota_price:0.85, market_price:0.85, total:1470.25},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:75.47, quota_price:6.94, market_price:6.94, total:523.76},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:1.0, quota_price:57.02, market_price:57.02, total:57.02},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:2.09, quota_price:0.85, market_price:0.85, total:1.78},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.43, quota_price:0.85, market_price:0.85, total:0.37},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1.43, quota_price:0.85, market_price:0.85, total:1.22},
    {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:12.75, quota_price:0.9, market_price:0.9, total:11.48},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:60.27, quota_price:0.7, market_price:0.7, total:42.19}
  ];
  console.log(`Updated 1-1-122: Mechanical=${quota122.mechanical_details.length}, management_fee=${quota122.management_fee}, profit=${quota122.profit}`);
} else {
  console.log('ERROR: 1-1-122 not found');
}

// Add 1-1-123 as new quota with complete data
const newQuota123 = {
  code:'1-1-123',
  name:'刨床、插床、拉床 设备重量300t以内',
  unit:'台',
  comprehensive_price:170721.34,
  labor_fee:89137.86,
  material_fee:null,
  mechanical_fee:null,
  management_fee:18596.55,
  profit:9548.13,
  regulatory_fee:null,
  tax:null,
  safety_culture_fee:null,
  other_measure_fee:null,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:137.156, quota_price:87.1, market_price:87.1, total:11946.29},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:493.762, quota_price:134.0, market_price:134.0, total:66164.11},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:54.863, quota_price:201.0, market_price:201.0, total:11027.46}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:143.0, quota_price:4.5, market_price:4.5, total:643.5},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:133.92, quota_price:4.5, market_price:4.5, total:602.64},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:4.4, quota_price:3.62, market_price:3.62, total:15.93},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.176, quota_price:20.8, market_price:20.8, total:3.66},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:20.9, quota_price:5.18, market_price:5.18, total:108.26},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:1.155, quota_price:4.1, market_price:4.1, total:4.74},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:2.2, quota_price:51.09, market_price:51.09, total:112.4},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.245, quota_price:1930.0, market_price:1930.0, total:472.85},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.757, quota_price:1048.0, market_price:1048.0, total:793.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.732, quota_price:7.0, market_price:7.0, total:47.12},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:138.6, quota_price:8.44, market_price:8.44, total:1169.78},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.888, quota_price:12.1, market_price:12.1, total:107.54},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.333, quota_price:11.2, market_price:11.2, total:37.33},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ 1~6', unit:'kg', quantity:0.715, quota_price:33.0, market_price:33.0, total:23.6},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:207.13}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:86.55, quota_price:0.85, market_price:0.85, total:147.14},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:17.67, quota_price:0.85, market_price:0.85, total:30.04},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:69.44, quota_price:0.85, market_price:0.85, total:118.05},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:80.06, quota_price:6.94, market_price:6.94, total:555.62},
    {code:'50060', name:'其他费', spec:'', unit:'元', quantity:28.74, quota_price:1.0, market_price:1.0, total:28.74},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:9.0, quota_price:890.11, market_price:890.11, total:8010.99},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1658.34, quota_price:0.85, market_price:0.85, total:1409.59},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:747.36, quota_price:0.85, market_price:0.85, total:635.26},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1547.01, quota_price:0.85, market_price:0.85, total:1314.96}
  ],
  source_screenshot:'bandicam 2026-04-27 11-19-22-962.jpg + bandicam 2026-04-27 11-19-33-422.jpg'
};
data.quotas.push(newQuota123);

// Add 1-1-124 as placeholder
const placeholder124 = {
  code:'1-1-124',
  name:'刨床、插床、拉床 设备重量350t以内',
  unit:'台',
  comprehensive_price:191282.9,
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
  source_screenshot:'bandicam 2026-04-27 11-19-22-962.jpg'
};
data.quotas.push(placeholder124);

// Update processed count
data.processed_count = 259;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');