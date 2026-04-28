const fs = require('fs');
const data = JSON.parse(fs.readFileSync('extracted_quota_data_detailed.json', 'utf8'));

// 1-1-140 should be inserted after 1-1-139 (index 138)
const newQuota140 = {
  code: '1-1-140',
  name: '其他机床及金属材料试验机械 设备重量25t以内',
  unit: '台',
  quantity: 1,
  comprehensive_price: 19691.85,
  labor_fee: 9127.16,
  material_fee: 1110.64,
  mechanical_fee: 2015.00,
  source_screenshot: 'bandicam 2026-04-27 13-46-09-068.jpg',
  labor_details: [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:14.044, quota_price:87.1, market_price:87.1, total:1223.23},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:50.559, quota_price:134.0, market_price:134.0, total:6774.91},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.617, quota_price:201.0, market_price:201.0, total:1129.02}
  ],
  material_details: [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:62.92, quota_price:4.5, market_price:4.5, total:283.14},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:59.52, quota_price:4.5, market_price:4.5, total:267.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.134, quota_price:1930.0, market_price:1930.0, total:258.62},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:14.7, quota_price:8.44, market_price:8.44, total:124.07},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:52.887, quota_price:1.0, market_price:1.0, total:52.89}
  ],
  mechanical_details: [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.5, quota_price:691.24, market_price:691.24, total:1728.10}
  ]
};
data.quotas.splice(138, 0, newQuota140);

// 1-1-143
const newQuota143 = {
  code: '1-1-143',
  name: '其他机床及金属材料试验机械 设备重量40t以内',
  unit: '台',
  quantity: 1,
  comprehensive_price: 31307.22,
  labor_fee: 12030.31,
  material_fee: 1437.31,
  mechanical_fee: 6576.48,
  source_screenshot: 'bandicam 2026-04-27 13-47-15-547.jpg',
  labor_details: [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:18.505, quota_price:87.1, market_price:87.1, total:1611.79},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:66.639, quota_price:134.0, market_price:134.0, total:8929.63},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.404, quota_price:201.0, market_price:201.0, total:1488.89}
  ],
  material_details: [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:62.92, quota_price:4.5, market_price:4.5, total:283.14},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:59.52, quota_price:4.5, market_price:4.5, total:267.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.139, quota_price:1930.0, market_price:1930.0, total:268.27},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.028, quota_price:1048.0, market_price:1048.0, total:29.34},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:17.85, quota_price:8.44, market_price:8.44, total:150.65},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.606, quota_price:12.1, market_price:12.1, total:7.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.707, quota_price:11.2, market_price:11.2, total:7.92},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:64.36, quota_price:1.0, market_price:1.0, total:64.36}
  ],
  mechanical_details: [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.5, quota_price:890.11, market_price:890.11, total:2225.28},
    {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65}
  ]
};
data.quotas.splice(141, 0, newQuota143);

// 1-1-144
const newQuota144 = {
  code: '1-1-144',
  name: '其他机床及金属材料试验机械 设备重量45t以内',
  unit: '台',
  quantity: 1,
  comprehensive_price: 34680.40,
  labor_fee: 13425.91,
  material_fee: 1569.36,
  mechanical_fee: 7360.02,
  source_screenshot: 'bandicam 2026-04-27 13-47-37-613.jpg',
  labor_details: [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:20.656, quota_price:87.1, market_price:87.1, total:1799.14},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:74.369, quota_price:134.0, market_price:134.0, total:9965.45},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.263, quota_price:201.0, market_price:201.0, total:1661.32}
  ],
  material_details: [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:75.5, quota_price:4.5, market_price:4.5, total:339.75},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:71.42, quota_price:4.5, market_price:4.5, total:321.39},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:3.0, quota_price:3.62, market_price:3.62, total:10.86},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.90},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.63, quota_price:4.1, market_price:4.1, total:2.58},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.2, quota_price:51.09, market_price:51.09, total:61.31},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.156, quota_price:1930.0, market_price:1930.0, total:301.08},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.035, quota_price:1048.0, market_price:1048.0, total:36.68},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.612, quota_price:7.0, market_price:7.0, total:4.28},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.42, quota_price:8.44, market_price:8.44, total:180.78},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.727, quota_price:12.1, market_price:12.1, total:8.80},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.848, quota_price:11.2, market_price:11.2, total:9.50},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:77.26, quota_price:1.0, market_price:1.0, total:77.26}
  ],
  mechanical_details: [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
    {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65}
  ]
};
data.quotas.splice(142, 0, newQuota144);

fs.writeFileSync('extracted_quota_data_detailed.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);

const q140 = data.quotas.find(q => q.code === '1-1-140');
const q143 = data.quotas.find(q => q.code === '1-1-143');
const q144 = data.quotas.find(q => q.code === '1-1-144');
console.log('1-1-140:', q140 ? 'OK price='+q140.comprehensive_price : 'MISSING');
console.log('1-1-143:', q143 ? 'OK price='+q143.comprehensive_price : 'MISSING');
console.log('1-1-144:', q144 ? 'OK price='+q144.comprehensive_price : 'MISSING');