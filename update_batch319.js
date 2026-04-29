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
    labor_fee: 43728.25,
    material_fee: 2691.21,
    mechanical_fee: 38187.87,
    source_screenshot: 'bandicam 2026-04-27 16-16-48-625.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:67.285, quota_price:87.1, market_price:87.1, total:5860.52},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:242.224, quota_price:134.0, market_price:134.0, total:32458.02},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:26.914, quota_price:201.0, market_price:201.0, total:5409.71}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:145.57, quota_price:4.5, market_price:4.5, total:655.07},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:125.904, quota_price:4.5, market_price:4.5, total:566.57},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.12, quota_price:20.8, market_price:20.8, total:2.5},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.9},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.118, quota_price:1930.0, market_price:1930.0, total:227.74},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.516, quota_price:1048.0, market_price:1048.0, total:540.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:37.8, quota_price:8.44, market_price:8.44, total:319.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.2, quota_price:33.0, market_price:33.0, total:39.6},
      {code:'31190117', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.0},
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
    code: '1-2-15',
    name: '机械压力机 设备重量250t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 141667.78,
    labor_fee: 3752.00,
    material_fee: 4731.91,
    mechanical_fee: 19090.72,
    source_screenshot: 'bandicam 2026-04-27 16-17-26-325.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:583.6, quota_price:141.33, market_price:141.33, total:82481.09}
    ],
    material_details: [
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