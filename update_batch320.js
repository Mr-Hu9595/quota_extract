const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-17',
    name: '机械压力机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 171290.58,
    labor_fee: 139893.04,
    material_fee: 245.28,
    mechanical_fee: 22985.89,
    source_screenshot: 'bandicam 2026-04-27 16-18-28-339.jpg',
    labor_details: [
      {code:'ZNGR', name:'综合工日', spec:'', unit:'工日', quantity:702.44, quota_price:199.15, market_price:199.15, total:139893.04}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:245.27987, quota_price:1.0, market_price:1.0, total:245.28}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.0, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8.0, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36}
    ]
  },
  {
    code: '1-2-19',
    name: '机械压力机 设备重量550t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 255773.18,
    labor_fee: 5963.00,
    material_fee: 337.75,
    mechanical_fee: 27695.95,
    source_screenshot: 'bandicam 2026-04-27 16-18-44-881.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.5, quota_price:134.0, market_price:134.0, total:335.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:12.0, quota_price:134.0, market_price:134.0, total:1608.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:26.0, quota_price:134.0, market_price:134.0, total:3484.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:337.749965, quota_price:1.0, market_price:1.0, total:337.75}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.0, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:13.0, quota_price:1058.74, market_price:1058.74, total:13763.62},
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