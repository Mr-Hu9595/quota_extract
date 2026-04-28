const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-125 with mechanical details
const quota125 = data.quotas.find(q => q.code === '1-1-125');
if (quota125) {
  quota125.labor_fee = 116537.58; // 17207.64 + 84064.76 + 15265.18
  quota125.management_fee = 23945.78;
  quota125.profit = 12303.63;
  quota125.regulatory_fee = null;
  quota125.safety_culture_fee = null;
  quota125.other_measure_fee = null;
  quota125.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:197.562, quota_price:87.1, market_price:87.1, total:17207.64},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:627.200, quota_price:134.0, market_price:134.0, total:84064.76},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:75.946, quota_price:201.0, market_price:201.0, total:15265.18}
  ];
  quota125.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:171.04, quota_price:4.5, market_price:4.5, total:769.68},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:158.72, quota_price:4.5, market_price:4.5, total:714.24},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:5.2, quota_price:3.62, market_price:3.62, total:18.82},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.208, quota_price:20.8, market_price:20.8, total:4.33},
    {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:24.51, quota_price:5.18, market_price:5.18, total:126.96},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.357, quota_price:4.1, market_price:4.1, total:5.56},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.58, quota_price:51.09, market_price:51.09, total:131.81},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.288, quota_price:1930.0, market_price:1930.0, total:555.84},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.888, quota_price:1048.0, market_price:1048.0, total:930.62},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:7.903, quota_price:7.0, market_price:7.0, total:55.32},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:162.72, quota_price:8.44, market_price:8.44, total:1373.36},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:10.432, quota_price:12.1, market_price:12.1, total:126.23},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.912, quota_price:11.2, market_price:11.2, total:43.81},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.84, quota_price:33.0, market_price:33.0, total:27.72},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:244.13}
  ];
  quota125.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:86.55, quota_price:0.85, market_price:0.85, total:183.92},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:17.67, quota_price:0.85, market_price:0.85, total:37.55},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:69.44, quota_price:0.85, market_price:0.85, total:147.56},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.5, quota_price:134.0, market_price:134.0, total:335.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:100.075, quota_price:6.94, market_price:6.94, total:694.52},
    {code:'50060', name:'其他费', spec:'', unit:'元', quantity:35.925, quota_price:1.0, market_price:1.0, total:35.93},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:13.0, quota_price:890.11, market_price:890.11, total:11571.43},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:2395.38, quota_price:0.85, market_price:0.85, total:2036.07},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:1079.52, quota_price:0.85, market_price:0.85, total:917.59},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:2234.57, quota_price:0.85, market_price:0.85, total:1899.38},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:26.0, quota_price:134.0, market_price:134.0, total:3484.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:466.05, quota_price:6.94, market_price:6.94, total:3234.39},
    {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:3.5, quota_price:1058.74, market_price:1058.74, total:3705.59},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:860.79, quota_price:0.85, market_price:0.85, total:731.67},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:387.94, quota_price:0.85, market_price:0.85, total:329.75},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:803.04, quota_price:0.85, market_price:0.85, total:682.58},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:7.0, quota_price:134.0, market_price:134.0, total:938.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:147.49, quota_price:6.94, market_price:6.94, total:1023.58},
    {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:863.91, quota_price:0.85, market_price:0.85, total:734.32},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:389.35, quota_price:0.85, market_price:0.85, total:330.95},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:805.95, quota_price:0.85, market_price:0.85, total:685.06},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:51.92, quota_price:6.94, market_price:6.94, total:360.32},
    {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.5, quota_price:4551.82, market_price:4551.82, total:6827.73},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:2787.42, quota_price:0.85, market_price:0.85, total:2369.31},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:1253.415, quota_price:0.85, market_price:0.85, total:1065.40},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:2594.565, quota_price:0.85, market_price:0.85, total:2205.38}
  ];
  quota125.source_screenshot = 'bandicam 2026-04-27 11-20-42-396.jpg';
  console.log(`Updated 1-1-125: labor_fee=${quota125.labor_fee}, management_fee=${quota125.management_fee}`);
} else {
  console.log('ERROR: 1-1-125 not found');
}

// Add 1-1-126 as new quota with complete data
const newQuota126 = {
  code:'1-1-126',
  name:'超声波加工及电加工机床 设备重量0.5t以内',
  unit:'台',
  comprehensive_price:576.23,
  labor_fee:287.18,
  material_fee:null,
  mechanical_fee:null,
  management_fee:59.93,
  profit:30.80,
  regulatory_fee:null,
  tax:null,
  safety_culture_fee:null,
  other_measure_fee:null,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:0.441, quota_price:87.1, market_price:87.1, total:38.41},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1.591, quota_price:134.0, market_price:134.0, total:213.19},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.177, quota_price:201.0, market_price:201.0, total:35.58}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:1.524, quota_price:4.5, market_price:4.5, total:6.86},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:2.358, quota_price:4.5, market_price:4.5, total:10.61},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:0.15, quota_price:3.62, market_price:3.62, total:0.54},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.42, quota_price:5.18, market_price:5.18, total:2.18},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.158, quota_price:4.1, market_price:4.1, total:0.65},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.075, quota_price:51.09, market_price:51.09, total:3.83},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.007, quota_price:1930.0, market_price:1930.0, total:13.51},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:1.181, quota_price:8.44, market_price:8.44, total:9.97},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.076, quota_price:12.1, market_price:12.1, total:0.92},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.076, quota_price:11.2, market_price:11.2, total:0.85},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:2.55}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.1, quota_price:449.76, market_price:449.76, total:44.98},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:6.329, quota_price:0.85, market_price:0.85, total:5.38},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:1.901, quota_price:0.85, market_price:0.85, total:1.62},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:6.596, quota_price:0.85, market_price:0.85, total:5.61},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:0.1, quota_price:134.0, market_price:134.0, total:13.4},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:2.734, quota_price:6.94, market_price:6.94, total:18.97},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.1, quota_price:57.02, market_price:57.02, total:5.7},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:0.209, quota_price:0.85, market_price:0.85, total:0.18},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.043, quota_price:0.85, market_price:0.85, total:0.04},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:0.143, quota_price:0.85, market_price:0.85, total:0.12},
    {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:1.275, quota_price:0.9, market_price:0.9, total:1.15},
    {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:6.027, quota_price:0.7, market_price:0.7, total:4.22}
  ],
  source_screenshot:'bandicam 2026-04-27 11-20-58-754.jpg'
};
data.quotas.push(newQuota126);

// Add 1-1-127 as placeholder
const placeholder127 = {
  code:'1-1-127',
  name:'超声波加工及电加工机床 设备重量1t以内',
  unit:'台',
  comprehensive_price:1040.57,
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
  source_screenshot:'bandicam 2026-04-27 11-20-58-754.jpg'
};
data.quotas.push(placeholder127);

// Update processed count
data.processed_count = 267;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');