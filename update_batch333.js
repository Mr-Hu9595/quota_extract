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
    labor_fee: 4623.0,
    material_fee: 5831.0,
    mechanical_fee: 12777.14,
    source_screenshot: 'bandicam 2026-04-27 16-18-09-159.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.5, quota_price:134.0, market_price:134.0, total:335.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:12.0, quota_price:134.0, market_price:134.0, total:1608.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:16.0, quota_price:134.0, market_price:134.0, total:2144.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0}
    ],
    material_details: [
      {code:'QTC LF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.0, quota_price:1.0, market_price:1.0, total:245.28},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:100.075, quota_price:6.94, market_price:6.94, total:694.52},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:215.1, quota_price:6.94, market_price:6.94, total:1492.79},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:337.12, quota_price:6.94, market_price:6.94, total:2339.61},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:62.49, quota_price:6.94, market_price:6.94, total:433.68},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:75.47, quota_price:6.94, market_price:6.94, total:523.76},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:144.795, quota_price:0.7, market_price:0.7, total:101.36}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:216.375, quota_price:0.85, market_price:0.85, total:183.92},
      {code:'50010', name:'检修费', spec:'', unit:'元', quantity:44.175, quota_price:0.85, market_price:0.85, total:37.55},
      {code:'50020', name:'维护费', spec:'', unit:'元', quantity:173.6, quota_price:0.85, market_price:0.85, total:147.56},
      {code:'50060', name:'其他费', spec:'', unit:'元', quantity:35.925, quota_price:1.0, market_price:1.0, total:35.93},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.0, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1105.56, quota_price:0.85, market_price:0.85, total:939.73},
      {code:'50010', name:'检修费', spec:'', unit:'元', quantity:498.24, quota_price:0.85, market_price:0.85, total:423.5},
      {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1031.34, quota_price:0.85, market_price:0.85, total:876.64},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8.0, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1967.52, quota_price:0.85, market_price:0.85, total:1672.39},
      {code:'50010', name:'检修费', spec:'', unit:'元', quantity:886.72, quota_price:0.85, market_price:0.85, total:753.71},
      {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1835.52, quota_price:0.85, market_price:0.85, total:1560.19},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1167.32, quota_price:0.85, market_price:0.85, total:992.22},
      {code:'50010', name:'检修费', spec:'', unit:'元', quantity:524.91, quota_price:0.85, market_price:0.85, total:446.17},
      {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1086.56, quota_price:0.85, market_price:0.85, total:923.58},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:1858.28, quota_price:0.85, market_price:0.85, total:1579.54},
      {code:'50010', name:'检修费', spec:'', unit:'元', quantity:835.61, quota_price:0.85, market_price:0.85, total:710.27},
      {code:'50020', name:'维护费', spec:'', unit:'元', quantity:1729.71, quota_price:0.85, market_price:0.85, total:1470.25},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36},
      {code:'50000', name:'折旧费', spec:'', unit:'元', quantity:4.275, quota_price:0.85, market_price:0.85, total:3.63},
      {code:'50010', name:'检修费', spec:'', unit:'元', quantity:0.855, quota_price:0.85, market_price:0.85, total:0.73},
      {code:'50020', name:'维护费', spec:'', unit:'元', quantity:2.85, quota_price:0.85, market_price:0.85, total:2.42},
      {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:19.125, quota_price:0.9, market_price:0.9, total:17.21}
    ]
  },
  {
    code: '1-2-18',
    name: '机械压力机 设备重量450t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 214258.94,
    labor_fee: 0,
    material_fee: 0,
    mechanical_fee: 0,
    source_screenshot: 'bandicam 2026-04-27 16-18-09-159.jpg',
    labor_details: [],
    material_details: [],
    mechanical_details: []
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
