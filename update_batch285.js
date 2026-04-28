const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-160 with complete data
const quota160 = data.quotas.find(q => q.code === '1-1-160');
if (quota160) {
  quota160.labor_fee = 645.90;
  quota160.material_fee = 838.17;
  quota160.mechanical_fee = 25.66;
  quota160.management_fee = 128.94;
  quota160.profit = 66.27;
  quota160.regulatory_fee = 68.04;
  quota160.safety_culture_fee = 52.30;
  quota160.other_measure_fee = 25.25;
  quota160.source_screenshot = 'bandicam 2026-04-27 13-51-54-776.jpg';
  console.log(`Updated 1-1-160: labor_fee=${quota160.labor_fee}`);
}

// Add 1-1-161 as new quota with complete data
const newQuota161 = {
  code:'1-1-161',
  name:'带锯机保护罩制作与安装 规格 铁架圆形48英寸',
  unit:'套',
  comprehensive_price:2210.17,
  labor_fee:774.69,
  material_fee:933.56,
  mechanical_fee:66.16,
  management_fee:154.63,
  profit:79.48,
  regulatory_fee:81.60,
  tax:null,
  safety_culture_fee:62.72,
  other_measure_fee:30.28,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.192, quota_price:87.1, market_price:87.1, total:103.82},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:4.291, quota_price:134.0, market_price:134.0, total:574.99},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.477, quota_price:201.0, market_price:201.0, total:95.88}
  ],
  material_details:[
    {code:'01010105', name:'角钢', spec:'综合', unit:'kg', quantity:40.0, quota_price:8.65, market_price:8.65, total:346.00},
    {code:'01010201', name:'扁钢', spec:'综合', unit:'kg', quantity:12.0, quota_price:8.58, market_price:8.58, total:102.96},
    {code:'01090305', name:'六角螺栓带螺母', spec:'综合', unit:'套', quantity:10.0, quota_price:3.0, market_price:3.0, total:30.00},
    {code:'14050317', name:'木螺钉', spec:'', unit:'个', quantity:20.0, quota_price:1.26, market_price:1.26, total:25.20},
    {code:'03020405', name:'合页', spec:'', unit:'个', quantity:4.0, quota_price:2.90, market_price:2.90, total:11.60},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.62, quota_price:4.1, market_price:4.1, total:6.64},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.19, quota_price:1930.0, market_price:1930.0, total:366.70},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:44.46, quota_price:1.0, market_price:1.0, total:44.46}
  ],
  mechanical_details:[
    {code:'990601010', name:'立式钻床', spec:'钻孔直径(mm) 25', unit:'台班', quantity:0.1, quota_price:85.5, market_price:85.5, total:8.55},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ],
  source_screenshot:'bandicam 2026-04-27 13-52-07-954.jpg'
};
data.quotas.push(newQuota161);

// Add 1-2-1 as placeholder (start of new section)
const placeholder162 = {
  code:'1-2-1',
  name:'机械压力机 设备重量1t以内',
  unit:'台',
  comprehensive_price:1781.41,
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
  source_screenshot:'bandicam 2026-04-27 13-52-07-954.jpg'
};
data.quotas.push(placeholder162);

// Update processed count
data.processed_count = 310;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
