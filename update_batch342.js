const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-82',
    name: '剪切机及弯曲校正机 设备重量50t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 37009.32,
    labor_fee: 17511.2,
    material_fee: 1519.83,
    mechanical_fee: 6458.91,
    source_screenshot: 'bandicam 2026-04-27 16-36-44-602.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:26.944, quota_price:87.1, market_price:87.1, total:2346.82},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:97, quota_price:134, market_price:134, total:12998},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:10.778, quota_price:201, market_price:201, total:2166.38}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:58.44, quota_price:4.5, market_price:4.5, total:262.98},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:54.81, quota_price:4.5, market_price:4.5, total:246.65},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.288, quota_price:1930, market_price:1930, total:555.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.172, quota_price:1048, market_price:1048, total:180.26},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.408, quota_price:7, market_price:7, total:2.86},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:15.75, quota_price:8.44, market_price:8.44, total:132.93},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.515, quota_price:11.2, market_price:11.2, total:16.97},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:72.37245, quota_price:1, market_price:1, total:72.37}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1, quota_price:83.57, market_price:83.57, total:83.57},
      {code:'34110103-2', name:'机 电', spec:'', unit:'kw·h', quantity:96.53, quota_price:0.7, market_price:0.7, total:67.57}
    ]
  },
  {
    code: '1-2-83',
    name: '剪切机及弯曲校正机 设备重量70t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 48810.02,
    labor_fee: 24453.93,
    material_fee: 1620.58,
    mechanical_fee: 6903.97,
    source_screenshot: 'bandicam 2026-04-27 16-36-56-357.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:37.627, quota_price:87.1, market_price:87.1, total:3277.31},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:135.458, quota_price:134, market_price:134, total:18151.37},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:15.051, quota_price:201, market_price:201, total:3025.25}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:70.46, quota_price:4.5, market_price:4.5, total:317.07},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:62.62, quota_price:4.5, market_price:4.5, total:281.79},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.229, quota_price:1930, market_price:1930, total:441.87},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.241, quota_price:1048, market_price:1048, total:252.57},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.408, quota_price:7, market_price:7, total:2.86},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:19.95, quota_price:8.44, market_price:8.44, total:168.38},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.02, quota_price:11.2, market_price:11.2, total:22.62},
      {code:'03131515', name:'润滑粉', spec:'', unit:'kg', quantity:0.056, quota_price:20.8, market_price:20.8, total:1.16},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:77.175265, quota_price:1, market_price:1, total:77.18}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.5, quota_price:890.11, market_price:890.11, total:3115.39},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1, quota_price:83.57, market_price:83.57, total:83.57},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:96.53, quota_price:0.7, market_price:0.7, total:67.57}
    ]
  },
  {
    code: '1-2-84',
    name: '剪切机及弯曲校正机 设备重量100t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 67835.01,
    labor_fee: 32718.95,
    material_fee: 2096.89,
    mechanical_fee: 11184.2,
    source_screenshot: 'bandicam 2026-04-27 16-37-07-982.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:null, unit:'工日', quantity:50.345, quota_price:87.1, market_price:87.1, total:4385.05},
      {code:'00010102', name:'一般技工', spec:null, unit:'工日', quantity:181.24, quota_price:134, market_price:134, total:24286.16},
      {code:'00010103', name:'高级技工', spec:null, unit:'工日', quantity:20.138, quota_price:201, market_price:201, total:4047.74}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:86.33, quota_price:4.5, market_price:4.5, total:388.49},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:77.74, quota_price:4.5, market_price:4.5, total:349.83},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:7, quota_price:5.18, market_price:5.18, total:36.26},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:null, unit:'m3', quantity:0.289, quota_price:1930, market_price:1930, total:557.77},
      {code:'05010106', name:'道木', spec:null, unit:'m3', quantity:0.344, quota_price:1048, market_price:1048, total:360.51},
      {code:'14030126', name:'汽油', spec:null, unit:'kg', quantity:0.51, quota_price:7, market_price:7, total:3.57},
      {code:'14030116', name:'煤油', spec:null, unit:'kg', quantity:25.2, quota_price:8.44, market_price:8.44, total:212.69},
      {code:'14050151', name:'机油', spec:null, unit:'kg', quantity:4.04, quota_price:12.1, market_price:12.1, total:48.88},
      {code:'14090119', name:'黄油(钙基脂)', spec:null, unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'03131515', name:'润滑粉', spec:null, unit:'kg', quantity:0.08, quota_price:20.8, market_price:20.8, total:1.66},
      {code:'QTCLF-1', name:'其他材料费', spec:null, unit:'%', quantity:99.85215, quota_price:1, market_price:1, total:99.85}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:5, quota_price:1058.74, market_price:1058.74, total:5293.7},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:0.5, quota_price:4551.82, market_price:4551.82, total:2275.91},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-36-44-602.jpg'] = '1-2-82';
screenshotMap['bandicam 2026-04-27 16-36-56-357.jpg'] = '1-2-83';
screenshotMap['bandicam 2026-04-27 16-36-58-976.jpg'] = '1-2-83';
screenshotMap['bandicam 2026-04-27 16-37-07-982.jpg'] = '1-2-84';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 342');
