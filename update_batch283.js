const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-151 with complete data
const quota151 = data.quotas.find(q => q.code === '1-1-151');
if (quota151) {
  quota151.labor_fee = 2597.22;
  quota151.material_fee = 238.47;
  quota151.mechanical_fee = 459.78;
  quota151.management_fee = 532.87;
  quota151.profit = 273.85;
  quota151.regulatory_fee = 281.27;
  quota151.safety_culture_fee = 216.18;
  quota151.other_measure_fee = 104.34;
  quota151.source_screenshot = 'bandicam 2026-04-27 13-50-12-094.jpg';
  console.log(`Updated 1-1-151: labor_fee=${quota151.labor_fee}`);
}

// Add 1-1-152 as new quota
const newQuota152 = {
  code:'1-1-152',
  name:'跑车带锯机 设备重量5t以内',
  unit:'台',
  comprehensive_price:7360.48,
  labor_fee:3924.56,
  material_fee:362.28,
  mechanical_fee:698.45,
  management_fee:808.92,
  profit:415.67,
  regulatory_fee:426.89,
  tax:null,
  safety_culture_fee:328.05,
  other_measure_fee:158.29,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.303, quota_price:87.1, market_price:87.1, total:461.89},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:19.09, quota_price:134.0, market_price:134.0, total:2558.06},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.122, quota_price:201.0, market_price:201.0, total:426.52}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:13.58, quota_price:4.5, market_price:4.5, total:61.11},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:12.35, quota_price:4.5, market_price:4.5, total:55.58},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.12, quota_price:5.18, market_price:5.18, total:5.8},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.036, quota_price:1930.0, market_price:1930.0, total:69.48},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:9.45, quota_price:8.44, market_price:8.44, total:79.76},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:15.26, quota_price:1.0, market_price:1.0, total:15.26}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ],
  source_screenshot:'bandicam 2026-04-27 13-50-12-094.jpg'
};
data.quotas.push(newQuota152);

// Add 1-1-153 as new quota
const newQuota153 = {
  code:'1-1-153',
  name:'跑车带锯机 设备重量7t以内',
  unit:'台',
  comprehensive_price:10524.36,
  labor_fee:5621.18,
  material_fee:518.67,
  mechanical_fee:998.92,
  management_fee:1157.42,
  profit:594.85,
  regulatory_fee:610.95,
  tax:null,
  safety_culture_fee:469.53,
  other_measure_fee:226.58,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:7.584, quota_price:87.1, market_price:87.1, total:660.57},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:27.306, quota_price:134.0, market_price:134.0, total:3659.00},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.034, quota_price:201.0, market_price:201.0, total:609.83}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:19.44, quota_price:4.5, market_price:4.5, total:87.48},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:17.68, quota_price:4.5, market_price:4.5, total:79.56},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.4, quota_price:5.18, market_price:5.18, total:7.25},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.4, quota_price:51.09, market_price:51.09, total:20.44},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.054, quota_price:1930.0, market_price:1930.0, total:104.22},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.01, quota_price:1048.0, market_price:1048.0, total:10.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.408, quota_price:7.0, market_price:7.0, total:2.86},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:9.45, quota_price:8.44, market_price:8.44, total:79.76},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.404, quota_price:12.1, market_price:12.1, total:4.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:21.84, quota_price:1.0, market_price:1.0, total:21.84}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.8, quota_price:890.11, market_price:890.11, total:712.09},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ],
  source_screenshot:'bandicam 2026-04-27 13-50-12-094.jpg'
};
data.quotas.push(newQuota153);

// Add 1-1-154 as new quota with complete data
const newQuota154 = {
  code:'1-1-154',
  name:'跑车带锯机 设备重量10t以内',
  unit:'台',
  comprehensive_price:14652.9,
  labor_fee:8922.18,
  material_fee:125.46,
  mechanical_fee:1054.89,
  management_fee:1640.22,
  profit:843.04,
  regulatory_fee:865.52,
  tax:null,
  safety_culture_fee:665.27,
  other_measure_fee:321.16,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:10.36, quota_price:87.1, market_price:87.1, total:902.36},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:37.29, quota_price:134.0, market_price:134.0, total:4996.86},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.14, quota_price:201.0, market_price:201.0, total:832.14}
  ],
  material_details:[
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:10.5, quota_price:8.44, market_price:8.44, total:88.62},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:29.78, quota_price:1.0, market_price:1.0, total:29.78}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.85, quota_price:890.11, market_price:890.11, total:756.59},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ],
  source_screenshot:'bandicam 2026-04-27 13-50-27-613.jpg'
};
data.quotas.push(newQuota154);

// Add 1-1-155 as new quota with complete data
const newQuota155 = {
  code:'1-1-155',
  name:'跑车带锯机 设备重量15t以内',
  unit:'台',
  comprehensive_price:21125.19,
  labor_fee:11625.26,
  material_fee:916.78,
  mechanical_fee:1029.36,
  management_fee:2361.25,
  profit:1213.41,
  regulatory_fee:1246.04,
  tax:null,
  safety_culture_fee:957.76,
  other_measure_fee:462.24,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.888, quota_price:87.1, market_price:87.1, total:1558.04},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:64.396, quota_price:134.0, market_price:134.0, total:8629.06},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.155, quota_price:201.0, market_price:201.0, total:1438.16}
  ],
  material_details:[
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:57.12, quota_price:4.5, market_price:4.5, total:257.04},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:53.82, quota_price:4.5, market_price:4.5, total:242.19},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:4.0, quota_price:5.18, market_price:5.18, total:20.72},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ 3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ 0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.094, quota_price:1930.0, market_price:1930.0, total:181.42},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.01, quota_price:1048.0, market_price:1048.0, total:10.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.714, quota_price:7.0, market_price:7.0, total:5.0},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:43.66, quota_price:1.0, market_price:1.0, total:43.66}
  ],
  mechanical_details:[
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
    {code:'990901010', name:'交流弧焊机', spec:'容量(kV·A) 21', unit:'台班', quantity:0.2, quota_price:57.02, market_price:57.02, total:11.40}
  ],
  source_screenshot:'bandicam 2026-04-27 13-50-44-653.jpg'
};
data.quotas.push(newQuota155);

// Add 1-1-156 as placeholder
const placeholder156 = {
  code:'1-1-156',
  name:'跑车带锯机 设备重量20t以内',
  unit:'台',
  comprehensive_price:27592.87,
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
  source_screenshot:'bandicam 2026-04-27 13-50-44-653.jpg'
};
data.quotas.push(placeholder156);

// Update processed count
data.processed_count = 304;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
