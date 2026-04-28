const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-9 with partial data
const quota9 = data.quotas.find(q => q.code === '1-1-9');
if (quota9) {
  quota9.management_fee = 1596.11;
  quota9.profit = 820.37;
  quota9.regulatory_fee = 842.25;
  quota9.safety_culture_fee = 647.38;
  quota9.other_measure_fee = 312.52;
  quota9.source_screenshot = 'bandicam 2026-04-27 10-21-01-043.jpg';
  console.log(`Updated 1-1-9: management_fee=${quota9.management_fee}`);
}

// Update 1-1-10 with complete data
const quota10 = data.quotas.find(q => q.code === '1-1-10');
if (quota10) {
  quota10.labor_fee = 9029.79;
  quota10.material_fee = 938.70;
  quota10.mechanical_fee = 1323.76;
  quota10.management_fee = 1919.12;
  quota10.profit = 986.39;
  quota10.regulatory_fee = 1012.69;
  quota10.safety_culture_fee = 778.39;
  quota10.other_measure_fee = 375.77;
  quota10.source_screenshot = 'bandicam 2026-04-27 10-21-17-304.jpg';
  quota10.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:13.893, quota_price:87.1, market_price:87.1, total:1210.08},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:50.019, quota_price:134.0, market_price:134.0, total:6702.55},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.558, quota_price:201.0, market_price:201.0, total:1117.16}
  ];
  quota10.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:48.64, quota_price:4.5, market_price:4.5, total:218.88},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:47.76, quota_price:4.5, market_price:4.5, total:214.92},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:1.6, quota_price:3.62, market_price:3.62, total:5.79},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.0, quota_price:5.18, market_price:5.18, total:20.72},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.42, quota_price:4.1, market_price:4.1, total:1.72},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:0.6, quota_price:51.09, market_price:51.09, total:30.65},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.109, quota_price:1930.0, market_price:1930.0, total:210.37},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.01, quota_price:1048.0, market_price:1048.0, total:10.48},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:17.85, quota_price:8.44, market_price:8.44, total:150.65},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.707, quota_price:11.2, market_price:11.2, total:7.92},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:44.7, quota_price:1.0, market_price:1.0, total:44.70}
  ];
  quota10.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86}
  ];
  console.log(`Updated 1-1-10: labor_fee=${quota10.labor_fee}`);
}

// Update 1-1-11 with complete data
const quota11 = data.quotas.find(q => q.code === '1-1-11');
if (quota11) {
  quota11.labor_fee = 10902.43;
  quota11.material_fee = 1090.16;
  quota11.mechanical_fee = 1323.76;
  quota11.management_fee = 2292.98;
  quota11.profit = 1178.55;
  quota11.regulatory_fee = 1209.98;
  quota11.safety_culture_fee = 930.03;
  quota11.other_measure_fee = 448.97;
  quota11.source_screenshot = 'bandicam 2026-04-27 10-21-38-888.jpg';
  quota11.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:16.776, quota_price:87.1, market_price:87.1, total:1461.19},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:60.392, quota_price:134.0, market_price:134.0, total:8092.53},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.71, quota_price:201.0, market_price:201.0, total:1348.71}
  ];
  quota11.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:57.24, quota_price:4.5, market_price:4.5, total:257.58},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:50.88, quota_price:4.5, market_price:4.5, total:228.96},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.121, quota_price:1930.0, market_price:1930.0, total:233.53},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.714, quota_price:7.0, market_price:7.0, total:5.00},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.0, quota_price:8.44, market_price:8.44, total:177.24},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:51.86, quota_price:1.0, market_price:1.0, total:51.86}
  ];
  quota11.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86}
  ];
  console.log(`Updated 1-1-11: labor_fee=${quota11.labor_fee}`);
}

// Update 1-1-12 with complete data
const quota12 = data.quotas.find(q => q.code === '1-1-12');
if (quota12) {
  quota12.labor_fee = 14538.13;
  quota12.material_fee = 1287.16;
  quota12.mechanical_fee = 1622.07;
  quota12.management_fee = 3018.65;
  quota12.profit = 1551.53;
  quota12.regulatory_fee = 1592.90;
  quota12.safety_culture_fee = 1224.36;
  quota12.other_measure_fee = 591.06;
  quota12.source_screenshot = 'bandicam 2026-04-27 10-21-59-951.jpg';
  quota12.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:22.37, quota_price:87.1, market_price:87.1, total:1948.43},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:80.531, quota_price:134.0, market_price:134.0, total:10791.15},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.948, quota_price:201.0, market_price:201.0, total:1798.55}
  ];
  quota12.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:68.68, quota_price:4.5, market_price:4.5, total:309.06},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:65.76, quota_price:4.5, market_price:4.5, total:295.92},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.02, quota_price:7.0, market_price:7.0, total:7.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.818, quota_price:12.1, market_price:12.1, total:22.00},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.212, quota_price:11.2, market_price:11.2, total:13.57},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:61.29}
  ];
  quota12.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17}
  ];
  console.log(`Updated 1-1-12: labor_fee=${quota12.labor_fee}`);
}

// Update 1-1-13 with complete data
const quota13 = data.quotas.find(q => q.code === '1-1-13');
if (quota13) {
  quota13.labor_fee = 19617.02;
  quota13.material_fee = 1713.37;
  quota13.mechanical_fee = 1908.96;
  quota13.management_fee = 4058.08;
  quota13.profit = 2088.01;
  quota13.regulatory_fee = 2145.36;
  quota13.safety_culture_fee = 1651.03;
  quota13.other_measure_fee = 797.39;
  quota13.source_screenshot = 'bandicam 2026-04-27 10-22-23-485.jpg';
  quota13.labor_details = [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:30.185, quota_price:87.1, market_price:87.1, total:2629.11},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:108.666, quota_price:134.0, market_price:134.0, total:14561.24},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:12.073, quota_price:201.0, market_price:201.0, total:2426.67}
  ];
  quota13.material_details = [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:103.0, quota_price:4.5, market_price:4.5, total:463.50},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:95.52, quota_price:4.5, market_price:4.5, total:429.84},
    {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:2.5, quota_price:3.62, market_price:3.62, total:9.05},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:8.0, quota_price:5.18, market_price:5.18, total:41.44},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.0, quota_price:51.09, market_price:51.09, total:51.09},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.128, quota_price:1930.0, market_price:1930.0, total:247.04},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.025, quota_price:1048.0, market_price:1048.0, total:26.20},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.224, quota_price:7.0, market_price:7.0, total:8.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:36.75, quota_price:8.44, market_price:8.44, total:310.17},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.222, quota_price:12.1, market_price:12.1, total:26.89},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.414, quota_price:11.2, market_price:11.2, total:15.84},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:81.59}
  ];
  quota13.mechanical_details = [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17}
  ];
  console.log(`Updated 1-1-13: labor_fee=${quota13.labor_fee}`);
}

// Add 1-1-14 as placeholder
const existing14 = data.quotas.find(q => q.code === '1-1-14');
if (!existing14) {
  const placeholder14 = {
    code:'1-1-14',
    name:'车床 设备重量70t以内',
    unit:'台',
    comprehensive_price:50443.93,
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
    source_screenshot:'bandicam 2026-04-27 10-22-23-485.jpg'
  };
  data.quotas.push(placeholder14);
  console.log('Added 1-1-14 placeholder');
}

// Update processed count
data.processed_count = 338;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
