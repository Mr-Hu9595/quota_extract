const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-21',
    name: '机械压力机 设备重量750t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 336271.55,
    labor_fee: null,
    material_fee: null,
    mechanical_fee: null,
    source_screenshot: 'bandicam 2026-04-27 16-19-06-300.jpg',
    labor_details: [],
    material_details: [],
    mechanical_details: []
  },
  {
    code: '1-2-22',
    name: '机械压力机 设备重量850t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 375252.73,
    labor_fee: 197365.99,
    material_fee: 10537.09,
    mechanical_fee: 40647.48,
    source_screenshot: 'bandicam 2026-04-27 16-19-57-370.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:303.687, quota_price:87.1, market_price:87.1, total:26451.14},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1093.273, quota_price:134.0, market_price:134.0, total:146498.58},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:121.474, quota_price:201.0, market_price:201.0, total:24416.27}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:401.53, quota_price:4.5, market_price:4.5, total:1806.89},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:384.71, quota_price:4.5, market_price:4.5, total:1731.20},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.68, quota_price:20.8, market_price:20.8, total:14.14},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.5, quota_price:5.18, market_price:5.18, total:33.67},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.1, quota_price:4.1, market_price:4.1, total:8.61},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.344, quota_price:1930.0, market_price:1930.0, total:663.92},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.922, quota_price:1048.0, market_price:1048.0, total:3062.26},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:17.34, quota_price:7.0, market_price:7.0, total:121.38},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:189.63, quota_price:8.44, market_price:8.44, total:1600.48},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:37.976, quota_price:12.1, market_price:12.1, total:459.51},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:22.22, quota_price:11.2, market_price:11.2, total:248.86},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6.0, quota_price:33.0, market_price:33.0, total:198.00},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:7.2, quota_price:12.0, market_price:12.0, total:86.40},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:501.77, quota_price:1.0, market_price:1.0, total:501.77}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:11.0, quota_price:890.11, market_price:890.11, total:9791.21},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:17.0, quota_price:1058.74, market_price:1058.74, total:17998.58},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.5, quota_price:3063.65, market_price:3063.65, total:4595.48},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.5, quota_price:4551.82, market_price:4551.82, total:6827.73}
    ]
  },
  {
    code: '1-2-23',
    name: '机械压力机 设备重量950t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 415707.02,
    labor_fee: 218770.19,
    material_fee: 11326.83,
    mechanical_fee: 165794.70,
    source_screenshot: 'bandicam 2026-04-27 16-20-27-141.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:336.622, quota_price:87.1, market_price:87.1, total:29319.78},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1211.837, quota_price:134.0, market_price:134.0, total:162386.16},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:134.648, quota_price:201.0, market_price:201.0, total:27064.25}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:409.72, quota_price:4.5, market_price:4.5, total:1843.74},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:392.56, quota_price:4.5, market_price:4.5, total:1766.52},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.76, quota_price:20.8, market_price:20.8, total:15.81},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.5, quota_price:5.18, market_price:5.18, total:33.67},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.1, quota_price:4.1, market_price:4.1, total:8.61},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.344, quota_price:1930.0, market_price:1930.0, total:663.92},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:3.266, quota_price:1048.0, market_price:1048.0, total:3422.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:19.38, quota_price:7.0, market_price:7.0, total:135.66},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:211.995, quota_price:8.44, market_price:8.44, total:1789.24},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:42.42, quota_price:12.1, market_price:12.1, total:513.28},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:24.745, quota_price:11.2, market_price:11.2, total:277.14},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6.7, quota_price:33.0, market_price:33.0, total:221.10},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:8.0, quota_price:12.0, market_price:12.0, total:96.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:539.37, quota_price:1.0, market_price:1.0, total:539.37}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:11.0, quota_price:890.11, market_price:890.11, total:9791.21},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:18.0, quota_price:1058.74, market_price:1058.74, total:19057.32},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:2.0, quota_price:3063.65, market_price:3063.65, total:6127.30},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:2.0, quota_price:4551.82, market_price:4551.82, total:9103.64}
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
