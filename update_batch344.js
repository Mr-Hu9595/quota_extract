const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-85',
    name: '剪切机及弯曲校正机 设备重量140t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 91346.26,
    labor_fee: 45563.52,
    material_fee: 2560.34,
    mechanical_fee: 13174.84,
    source_screenshot: 'bandicam 2026-04-27 16-37-22-110.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:70.109, quota_price:87.1, market_price:87.1, total:6106.49},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:252.391, quota_price:134, market_price:134, total:33820.39},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:28.043, quota_price:201, market_price:201, total:5636.64}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:107.39, quota_price:4.5, market_price:4.5, total:483.26},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:92.02, quota_price:4.5, market_price:4.5, total:414.09},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:7, quota_price:5.18, market_price:5.18, total:36.26},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.305, quota_price:1930, market_price:1930, total:588.65},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.481, quota_price:1048, market_price:1048, total:504.09},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7, market_price:7, total:3.57},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:33.6, quota_price:8.44, market_price:8.44, total:283.58},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.06, quota_price:12.1, market_price:12.1, total:73.33},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'03131515', name:'润滑粉', spec:'', unit:'kg', quantity:0.112, quota_price:20.8, market_price:20.8, total:2.33},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:121.89223, quota_price:1, market_price:1, total:121.89}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4, quota_price:890.11, market_price:890.11, total:3560.44},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6, quota_price:1058.74, market_price:1058.74, total:6352.44},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:0.5, quota_price:4551.82, market_price:4551.82, total:2275.91},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36}
    ]
  },
  {
    code: '1-2-86',
    name: '剪切机及弯曲校正机 设备重量180t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 100649.88,
    labor_fee: 50882.34,
    material_fee: 2781.28,
    mechanical_fee: 14286.17,
    source_screenshot: 'bandicam 2026-04-27 16-38-12-310.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:78.293, quota_price:87.1, market_price:87.1, total:6819.32},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:281.853, quota_price:134, market_price:134, total:37768.3},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:31.317, quota_price:201, market_price:201, total:6294.72}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:116.89, quota_price:4.5, market_price:4.5, total:526.01},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:103.66, quota_price:4.5, market_price:4.5, total:466.47},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:8.5, quota_price:5.18, market_price:5.18, total:44.03},
      {code:'03130929', name:'低磷钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.305, quota_price:1930, market_price:1930, total:588.65},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.55, quota_price:1048, market_price:1048, total:576.4},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7, market_price:7, total:3.57},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:37.8, quota_price:8.44, market_price:8.44, total:319.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.06, quota_price:12.1, market_price:12.1, total:73.33},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'03131515', name:'调和漆', spec:'', unit:'kg', quantity:0.128, quota_price:20.8, market_price:20.8, total:2.66},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:132.44187, quota_price:1, market_price:1, total:132.44}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6, quota_price:1058.74, market_price:1058.74, total:6352.44},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV.A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36},
      {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:19.125, quota_price:0.9, market_price:0.9, total:17.21}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-37-11-157.jpg'] = '1-2-84';
screenshotMap['bandicam 2026-04-27 16-37-22-110.jpg'] = '1-2-85';
screenshotMap['bandicam 2026-04-27 16-37-24-917.jpg'] = '1-2-85';
screenshotMap['bandicam 2026-04-27 16-38-12-310.jpg'] = '1-2-86';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 344');
