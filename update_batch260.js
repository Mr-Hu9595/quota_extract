const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-123 with fees
const quota123 = data.quotas.find(q => q.code === '1-1-123');
if (quota123) {
  quota123.management_fee = 18596.55;
  quota123.profit = 9558.26;
  quota123.regulatory_fee = 9813.15;
  quota123.safety_culture_fee = 7542.74;
  quota123.other_measure_fee = 3641.24;
  quota123.mechanical_details = quota123.mechanical_details.concat([
    {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
    {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:1.5, quota_price:57.02, market_price:57.02, total:85.53},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:3.135, quota_price:0.85, market_price:0.85, total:2.66},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.645, quota_price:0.85, market_price:0.85, total:0.55},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:2.145, quota_price:0.85, market_price:0.85, total:1.82},
    {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:19.125, quota_price:0.9, market_price:0.9, total:17.21},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:90.405, quota_price:0.7, market_price:0.7, total:63.28}
  ]);
  console.log(`Updated 1-1-123: management_fee=${quota123.management_fee}, profit=${quota123.profit}, MechCount=${quota123.mechanical_details.length}`);
} else {
  console.log('ERROR: 1-1-123 not found');
}

// Update 1-1-124 with complete data
const quota124 = data.quotas.find(q => q.code === '1-1-124');
if (quota124) {
  quota124.labor_fee = 99721.28; // 13364.71 + 74019.99 + 12336.58
  quota124.management_fee = 20851.92;
  quota124.profit = 10717.47;
  quota124.regulatory_fee = 11003.27;
  quota124.safety_culture_fee = 8457.52;
  quota124.other_measure_fee = 4082.85;
  quota124.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:153.441, quota_price:87.1, market_price:87.1, total:13364.71},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:552.388, quota_price:134.0, market_price:134.0, total:74019.99},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:61.376, quota_price:201.0, market_price:201.0, total:12336.58}
  ];
  quota124.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:160.16, quota_price:4.5, market_price:4.5, total:720.72},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:148.8, quota_price:4.5, market_price:4.5, total:669.6},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:4.84, quota_price:3.62, market_price:3.62, total:17.52},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.194, quota_price:20.8, market_price:20.8, total:4.04},
    {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:22.99, quota_price:5.18, market_price:5.18, total:119.09},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.271, quota_price:4.1, market_price:4.1, total:5.21},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.42, quota_price:51.09, market_price:51.09, total:123.64},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.27, quota_price:1930.0, market_price:1930.0, total:521.1},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.832, quota_price:1048.0, market_price:1048.0, total:871.94},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:7.405, quota_price:7.0, market_price:7.0, total:51.84},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:152.46, quota_price:8.44, market_price:8.44, total:1286.76},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:9.777, quota_price:12.1, market_price:12.1, total:118.3},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.666, quota_price:11.2, market_price:11.2, total:41.06},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.787, quota_price:33.0, market_price:33.0, total:25.97},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:228.84}
  ];
  quota124.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:86.55, quota_price:0.85, market_price:0.85, total:183.92},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:17.67, quota_price:0.85, market_price:0.85, total:37.55},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:69.44, quota_price:0.85, market_price:0.85, total:147.56},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.5, quota_price:134.0, market_price:134.0, total:335.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:100.075, quota_price:6.94, market_price:6.94, total:694.52},
    {code:'50060', name:'其他费', spec:'', unit:'元', quantity:35.925, quota_price:1.0, market_price:1.0, total:35.93},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:11.5, quota_price:890.11, market_price:890.11, total:10236.27},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:2118.99, quota_price:0.85, market_price:0.85, total:1801.14},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:954.96, quota_price:0.85, market_price:0.85, total:811.72},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1976.735, quota_price:0.85, market_price:0.85, total:1680.22}
  ];
  quota124.source_screenshot = 'bandicam 2026-04-27 11-19-37-888.jpg + bandicam 2026-04-27 11-20-00-085.jpg';
  console.log(`Updated 1-1-124: labor_fee=${quota124.labor_fee}, management_fee=${quota124.management_fee}, profit=${quota124.profit}`);
} else {
  console.log('ERROR: 1-1-124 not found');
}

// Add 1-1-125 as new quota
const newQuota125 = {
  code:'1-1-125',
  name:'刨床、插床、拉床 设备重量400t以内',
  unit:'台',
  comprehensive_price:217348.34,
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
  source_screenshot:'bandicam 2026-04-27 11-20-00-085.jpg'
};
data.quotas.push(newQuota125);

// Update processed count
data.processed_count = 263;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');