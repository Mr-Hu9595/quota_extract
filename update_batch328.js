const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-13',
    name: '机械压力机 设备重量150t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 88829.04,
    labor_fee: 44173.38,
    material_fee: 669.22,
    mechanical_fee: 39340.19,
    source_screenshot: 'bandicam 2026-04-27 16-16-53-421.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:67.966, quota_price:87.1, market_price:87.1, total:5919.84},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:244.674, quota_price:134.0, market_price:134.0, total:32786.32},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:27.186, quota_price:201.0, market_price:201.0, total:5463.99}
    ],
    material_details: [
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:37.8, quota_price:8.44, market_price:8.44, total:319.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.2, quota_price:33.0, market_price:33.0, total:39.6},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:128.15245, quota_price:1.0, market_price:1.0, total:128.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:5.0, quota_price:1058.74, market_price:1058.74, total:5293.7},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-14',
    name: '机械压力机 设备重量200t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 114604.76,
    labor_fee: 57930.98,
    material_fee: 3030.41,
    mechanical_fee: 48236.48,
    source_screenshot: 'bandicam 2026-04-27 16-17-02-693.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:89.138, quota_price:87.1, market_price:87.1, total:7763.92},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:320.897, quota_price:134.0, market_price:134.0, total:43000.2},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:35.656, quota_price:201.0, market_price:201.0, total:7166.86}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:154.66, quota_price:4.5, market_price:4.5, total:695.97},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:132.96, quota_price:4.5, market_price:4.5, total:598.32},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.16, quota_price:20.8, market_price:20.8, total:3.33},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.9},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048.0, market_price:1048.0, total:721.02},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.08, quota_price:7.0, market_price:7.0, total:28.56},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:42.0, quota_price:8.44, market_price:8.44, total:354.48},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:5.05, quota_price:11.2, market_price:11.2, total:56.56},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.2, quota_price:33.0, market_price:33.0, total:39.6},
      {code:'31190117', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:144.2102, quota_price:1.0, market_price:1.0, total:144.21}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:5.0, quota_price:1058.74, market_price:1058.74, total:5293.7},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-15',
    name: '机械压力机 设备重量250t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 141667.78,
    labor_fee: 82509.68,
    material_fee: 4048.77,
    mechanical_fee: 49109.33,
    source_screenshot: 'bandicam 2026-04-27 16-17-26-325.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:126.947, quota_price:87.1, market_price:87.1, total:11057.08},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:457.007, quota_price:134.0, market_price:134.0, total:61238.94},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:50.779, quota_price:201.0, market_price:201.0, total:10206.58}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:208.64, quota_price:4.5, market_price:4.5, total:938.88},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:191.12, quota_price:4.5, market_price:4.5, total:860.04},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.2, quota_price:20.8, market_price:20.8, total:4.16},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.146, quota_price:1930.0, market_price:1930.0, total:281.78},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.874, quota_price:1048.0, market_price:1048.0, total:915.95},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.12, quota_price:7.0, market_price:7.0, total:42.84},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:55.65, quota_price:8.44, market_price:8.44, total:469.69},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:11.11, quota_price:12.1, market_price:12.1, total:134.43},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:6.06, quota_price:11.2, market_price:11.2, total:67.87},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.7, quota_price:33.0, market_price:33.0, total:56.1},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.0, quota_price:12.0, market_price:12.0, total:24.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:170.309875, quota_price:1.0, market_price:1.0, total:170.31}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.5, quota_price:890.11, market_price:890.11, total:4005.5},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6.5, quota_price:1058.74, market_price:1058.74, total:6881.81},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36}
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