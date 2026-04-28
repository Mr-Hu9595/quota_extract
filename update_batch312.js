const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-31',
    name: '液压机 设备重量30t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 27564.52,
    labor_fee: 13293.08,
    material_fee: 1365.81,
    mechanical_fee: 8613.24,
    source_screenshot: 'bandicam 2026-04-27 16-24-21-162.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:20.454, quota_price:87.1, market_price:87.1, total:1781.54},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:73.634, quota_price:134.0, market_price:134.0, total:9866.96},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.182, quota_price:201.0, market_price:201.0, total:1644.58}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:69.43, quota_price:4.5, market_price:4.5, total:312.44},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:57.12, quota_price:4.5, market_price:4.5, total:257.04},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.1, quota_price:5.18, market_price:5.18, total:26.42},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:5.1, quota_price:7.0, market_price:7.0, total:35.70},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:16.8, quota_price:8.44, market_price:8.44, total:141.79},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:12.12, quota_price:12.1, market_price:12.1, total:146.65},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.01, quota_price:11.2, market_price:11.2, total:11.31},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:15.0, quota_price:0.88, market_price:0.88, total:13.20},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.55, quota_price:33.0, market_price:33.0, total:18.15},
      {code:'19050201', name:'螺纹球阀', spec:'DN15', unit:'个', quantity:0.5, quota_price:26.0, market_price:26.0, total:13.00},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.6, quota_price:12.0, market_price:12.0, total:7.20},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:65.04, quota_price:1.0, market_price:1.0, total:65.04}
    ],
    mechanical_details: [
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.7, quota_price:890.11, market_price:890.11, total:1513.19},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
    ]
  },
  {
    code: '1-2-32',
    name: '液压机 设备重量40t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 34801.06,
    labor_fee: 16400.13,
    material_fee: 2687.10,
    mechanical_fee: 10681.32,
    source_screenshot: 'bandicam 2026-04-27 16-24-37-033.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:25.234, quota_price:87.1, market_price:87.1, total:2197.88},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:90.846, quota_price:134.0, market_price:134.0, total:12173.36},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:10.094, quota_price:201.0, market_price:201.0, total:2028.89}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:88.41, quota_price:4.5, market_price:4.5, total:397.85},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:80.39, quota_price:4.5, market_price:4.5, total:361.76},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.2, quota_price:5.18, market_price:5.18, total:26.94},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.25, quota_price:1930.0, market_price:1930.0, total:482.50},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.138, quota_price:1048.0, market_price:1048.0, total:144.62},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:8.16, quota_price:7.0, market_price:7.0, total:57.12},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.0, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:14.14, quota_price:12.1, market_price:12.1, total:171.09},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:1.212, quota_price:11.2, market_price:11.2, total:13.57},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:18.0, quota_price:0.88, market_price:0.88, total:15.84},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.7, quota_price:33.0, market_price:33.0, total:23.10},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.63, quota_price:5.1, market_price:5.1, total:3.21},
      {code:'01290231', name:'热轧厚钢板', spec:'δ 21~30', unit:'kg', quantity:150.0, quota_price:3.33, market_price:3.33, total:499.50},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.8, quota_price:12.0, market_price:12.0, total:9.60},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:0.5, quota_price:15.0, market_price:15.0, total:7.50},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:6.12, quota_price:3.82, market_price:3.82, total:23.38},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:2.04, quota_price:8.82, market_price:8.82, total:17.99},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:0.5, quota_price:40.0, market_price:40.0, total:20.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:122.88, quota_price:1.0, market_price:1.0, total:122.88}
    ],
    mechanical_details: [
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.7, quota_price:890.11, market_price:890.11, total:1513.19},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65}
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