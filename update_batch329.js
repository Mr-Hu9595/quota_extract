const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-16',
    name: '机械压力机 设备重量300t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 159820.84,
    labor_fee: 82451.99,
    material_fee: 4396.06,
    mechanical_fee: 65194.52,
    source_screenshot: 'bandicam 2026-04-27 16-17-52-516.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:126.869, quota_price:87.1, market_price:87.1, total:11050.29},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:456.728, quota_price:134.0, market_price:134.0, total:61201.55},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:50.747, quota_price:201.0, market_price:201.0, total:10200.15}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:229.79, quota_price:4.5, market_price:4.5, total:1034.06},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:217.95, quota_price:4.5, market_price:4.5, total:980.78},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.24, quota_price:20.8, market_price:20.8, total:4.99},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.164, quota_price:1930.0, market_price:1930.0, total:316.52},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.031, quota_price:1048.0, market_price:1048.0, total:1080.49},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.12, quota_price:7.0, market_price:7.0, total:42.84},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:66.15, quota_price:8.44, market_price:8.44, total:558.31},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:13.13, quota_price:12.1, market_price:12.1, total:158.87},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:7.777, quota_price:11.2, market_price:11.2, total:87.1},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:2.1, quota_price:33.0, market_price:33.0, total:69.3},
      {code:'31190119', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.5, quota_price:12.0, market_price:12.0, total:30.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:219.80232, quota_price:1.0, market_price:1.0, total:219.8}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.5, quota_price:890.11, market_price:890.11, total:4005.5},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6.5, quota_price:1058.74, market_price:1058.74, total:6881.81},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-20',
    name: '机械压力机 设备重量650t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 291043.27,
    labor_fee: 153159.65,
    material_fee: 7776.24,
    mechanical_fee: 107107.38,
    source_screenshot: 'bandicam 2026-04-27 16-19-06-300.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:235.666, quota_price:87.1, market_price:87.1, total:20526.51},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:848.399, quota_price:134.0, market_price:134.0, total:113685.47},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:94.267, quota_price:201.0, market_price:201.0, total:18947.67}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:339.55, quota_price:4.5, market_price:4.5, total:1527.98},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:328.34, quota_price:4.5, market_price:4.5, total:1477.53},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.52, quota_price:20.8, market_price:20.8, total:10.82},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.575, quota_price:4.1, market_price:4.1, total:6.46},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.231, quota_price:1930.0, market_price:1930.0, total:445.83},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.234, quota_price:1048.0, market_price:1048.0, total:2341.23},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:13.26, quota_price:7.0, market_price:7.0, total:92.82},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:145.005, quota_price:8.44, market_price:8.44, total:1223.84},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:28.987, quota_price:12.1, market_price:12.1, total:350.74},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:16.968, quota_price:11.2, market_price:11.2, total:190.04},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:4.6, quota_price:33.0, market_price:33.0, total:151.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:5.5, quota_price:12.0, market_price:12.0, total:66.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:395.80835, quota_price:1.0, market_price:1.0, total:395.81}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:7.0, quota_price:890.11, market_price:890.11, total:6230.77},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:15.0, quota_price:1058.74, market_price:1058.74, total:15881.1},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('1-2 count:', data.quotas.filter(q => q.code.startsWith('1-2')).length);
console.log('Saved');