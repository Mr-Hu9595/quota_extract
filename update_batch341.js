const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-80',
    name: '剪切机及弯曲校正机 设备重量30t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 24045.61,
    labor_fee: 11068.28,
    material_fee: 1035.21,
    mechanical_fee: 4529.34,
    source_screenshot: 'bandicam 2026-04-27 16-36-19-322.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.031, quota_price:87.1, market_price:87.1, total:1483.4},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:61.311, quota_price:134, market_price:134, total:8215.67},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.812, quota_price:201, market_price:201, total:1369.21}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:48.28, quota_price:4.5, market_price:4.5, total:217.26},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:44.35, quota_price:4.5, market_price:4.5, total:199.58},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.188, quota_price:1930, market_price:1930, total:362.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048, market_price:1048, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7, market_price:7, total:2.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:10.5, quota_price:8.44, market_price:8.44, total:88.62},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.808, quota_price:12.1, market_price:12.1, total:9.78},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:0.707, quota_price:11.2, market_price:11.2, total:7.92},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:49.295335, quota_price:1, market_price:1, total:49.3}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-81',
    name: '剪切机及弯曲校正机 设备重量40t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 31067.27,
    labor_fee: 14336.57,
    material_fee: 1228.38,
    mechanical_fee: 5946.29,
    source_screenshot: 'bandicam 2026-04-27 16-36-32-989.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:null, unit:'工日', quantity:22.059, quota_price:87.1, market_price:87.1, total:1921.34},
      {code:'00010102', name:'一般技工', spec:null, unit:'工日', quantity:79.415, quota_price:134, market_price:134, total:10641.61},
      {code:'00010103', name:'高级技工', spec:null, unit:'工日', quantity:8.824, quota_price:201, market_price:201, total:1773.62}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:52.44, quota_price:4.5, market_price:4.5, total:235.98},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:47, quota_price:4.5, market_price:4.5, total:211.5},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:null, unit:'m3', quantity:0.213, quota_price:1930, market_price:1930, total:411.09},
      {code:'05010106', name:'道木', spec:null, unit:'m3', quantity:0.138, quota_price:1048, market_price:1048, total:144.62},
      {code:'14030126', name:'汽油', spec:null, unit:'kg', quantity:0.357, quota_price:7, market_price:7, total:2.5},
      {code:'14030116', name:'煤油', spec:null, unit:'kg', quantity:13.65, quota_price:8.44, market_price:8.44, total:115.21},
      {code:'14050151', name:'机油', spec:null, unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
      {code:'14090119', name:'黄油锂基脂', spec:null, unit:'kg', quantity:1.01, quota_price:11.2, market_price:11.2, total:11.31},
      {code:'QTCLF-1', name:'其他材料费', spec:null, unit:'%', quantity:58.494725, quota_price:1, market_price:1, total:58.49}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.5, quota_price:890.11, market_price:890.11, total:2225.28},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-36-19-322.jpg'] = '1-2-80';
screenshotMap['bandicam 2026-04-27 16-36-32-989.jpg'] = '1-2-81';
screenshotMap['bandicam 2026-04-27 16-36-41-606.jpg'] = 'skipped_error';
screenshotMap['bandicam 2026-04-27 16-36-50-739.jpg'] = 'skipped_error';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 341');
