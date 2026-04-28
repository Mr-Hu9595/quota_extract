const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';

// Read existing JSON
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-121 with labor and material details from OCR
const quota121 = data.quotas.find(q => q.code === '1-1-121');
if (quota121) {
  quota121.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:96.942, quota_price:87.1, market_price:87.1, total:8443.65},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:348.989, quota_price:134.0, market_price:134.0, total:46764.53},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:38.776, quota_price:201.0, market_price:201.0, total:7793.98}
  ];
  quota121.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:120.12, quota_price:4.5, market_price:4.5, total:540.54},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:111.6, quota_price:4.5, market_price:4.5, total:502.2},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:4.0, quota_price:3.62, market_price:3.62, total:14.48},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.16, quota_price:20.8, market_price:20.8, total:3.33},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:19.0, quota_price:5.18, market_price:5.18, total:98.42},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:2.0, quota_price:51.09, market_price:51.09, total:102.18},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.223, quota_price:1930.0, market_price:1930.0, total:430.39},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.12, quota_price:7.0, market_price:7.0, total:42.84},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:126.0, quota_price:8.44, market_price:8.44, total:1063.44},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ 1~6', unit:'kg', quantity:0.65, quota_price:33.0, market_price:33.0, total:21.45},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:183.82}
  ];
  // Calculate labor_fee from details
  quota121.labor_fee = 63002.16;
  // Add mechanical details for 1-1-121
  quota121.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
    {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:86.55, quota_price:0.85, market_price:0.85, total:110.35},
    {code:'50010', name:'检修费', spec:'', unit:'元', quantity:17.67, quota_price:0.85, market_price:0.85, total:22.53},
    {code:'50020', name:'维护费', spec:'', unit:'元', quantity:69.44, quota_price:0.85, market_price:0.85, total:88.54},
    {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1.0, quota_price:134.0, market_price:134.0, total:201.0},
    {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:40.03, quota_price:6.94, market_price:6.94, total:416.71},
    {code:'50060', name:'其他费', spec:'', unit:'元', quantity:14.37, quota_price:1.0, market_price:1.0, total:21.56}
  ];
  console.log(`Updated 1-1-121: Labor=${quota121.labor_details.length}, Material=${quota121.material_details.length}, Mechanical=${quota121.mechanical_details.length}`);
} else {
  console.log('ERROR: 1-1-121 not found');
}

// Add 1-1-122 as new quota
const newQuota = {
  code:'1-1-122',
  name:'刨床、插床、拉床 设备重量250t以内',
  unit:'台',
  comprehensive_price:146432.02,
  labor_fee:76063.82,
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
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:116.916, quota_price:87.1, market_price:87.1, total:10183.38},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:420.899, quota_price:134.0, market_price:134.0, total:56400.47},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:46.766, quota_price:201.0, market_price:201.0, total:9399.97}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:125.84, quota_price:4.5, market_price:4.5, total:566.28},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:119.04, quota_price:4.5, market_price:4.5, total:535.68},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:4.2, quota_price:3.62, market_price:3.62, total:15.2},
    {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.168, quota_price:20.8, market_price:20.8, total:3.49},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:19.95, quota_price:5.18, market_price:5.18, total:103.34},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.1, quota_price:4.1, market_price:4.1, total:4.51},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:2.1, quota_price:51.09, market_price:51.09, total:107.29},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.235, quota_price:1930.0, market_price:1930.0, total:453.55},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.723, quota_price:1048.0, market_price:1048.0, total:757.7},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.43, quota_price:7.0, market_price:7.0, total:45.01},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:132.3, quota_price:8.44, market_price:8.44, total:1116.61},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.485, quota_price:12.1, market_price:12.1, total:102.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.182, quota_price:11.2, market_price:11.2, total:35.64},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ 1~6', unit:'kg', quantity:0.683, quota_price:33.0, market_price:33.0, total:22.54},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:193.48}
  ],
  mechanical_details:[],
  source_screenshot:'bandicam 2026-04-27 11-17-53-635.jpg'
};
data.quotas.push(newQuota);

// Update processed count
data.processed_count = 255;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');