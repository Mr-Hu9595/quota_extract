const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-15',
    name: '机械压力机 设备重量250t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 141667.78,
    labor_fee: 72217.16,
    material_fee: 3576.51,
    mechanical_fee: 59110.07,
    source_screenshot: 'bandicam 2026-04-27 16-17-20-351.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:111.12, quota_price:87.1, market_price:87.1, total:9678.55},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:400.034, quota_price:134.0, market_price:134.0, total:53604.56},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:44.448, quota_price:201.0, market_price:201.0, total:8934.05}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:164.13, quota_price:4.5, market_price:4.5, total:738.59},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:146.364, quota_price:4.5, market_price:4.5, total:658.64},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.2, quota_price:20.8, market_price:20.8, total:4.16},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.9},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.133, quota_price:1930.0, market_price:1930.0, total:256.69},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.859, quota_price:1048.0, market_price:1048.0, total:900.23},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:5.1, quota_price:7.0, market_price:7.0, total:35.7},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:57.225, quota_price:8.44, market_price:8.44, total:482.98},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:11.615, quota_price:12.1, market_price:12.1, total:140.54},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:6.565, quota_price:11.2, market_price:11.2, total:73.53},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.8, quota_price:33.0, market_price:33.0, total:59.4},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.2, quota_price:12.0, market_price:12.0, total:26.4},
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
  },
  {
    code: '1-2-17',
    name: '机械压力机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 171290.58,
    labor_fee: 86818.83,
    material_fee: 5150.88,
    mechanical_fee: 22860.53,
    source_screenshot: 'bandicam 2026-04-27 16-18-03-426.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:133.588, quota_price:87.1, market_price:87.1, total:11635.51},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:480.917, quota_price:134.0, market_price:134.0, total:64442.88},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:53.435, quota_price:201.0, market_price:201.0, total:10740.44}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:250.98, quota_price:4.5, market_price:4.5, total:1129.41},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:230.08, quota_price:4.5, market_price:4.5, total:1035.36},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.28, quota_price:20.8, market_price:20.8, total:5.82},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.164, quota_price:1930.0, market_price:1930.0, total:316.52},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.203, quota_price:1048.0, market_price:1048.0, total:1260.74},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:7.14, quota_price:7.0, market_price:7.0, total:49.98},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:78.54, quota_price:8.44, market_price:8.44, total:662.88},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:15.756, quota_price:12.1, market_price:12.1, total:190.65},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:9.191, quota_price:11.2, market_price:11.2, total:102.94},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:2.5, quota_price:33.0, market_price:33.0, total:82.5},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:3.0, quota_price:12.0, market_price:12.0, total:36.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:245.27987, quota_price:1.0, market_price:1.0, total:245.28}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.0, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8.0, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-29',
    name: '液压机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 14611.63,
    labor_fee: 656.6,
    material_fee: 418.59,
    mechanical_fee: 2004.07,
    source_screenshot: 'bandicam 2026-04-27 16-23-57-146.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:0.5, quota_price:134.0, market_price:134.0, total:67.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3.4, quota_price:134.0, market_price:134.0, total:455.6},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1.0, quota_price:134.0, market_price:134.0, total:134.0},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:59.5, quota_price:139.78, market_price:139.78, total:8316.91}
    ],
    material_details: [
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.069, quota_price:1930.0, market_price:1930.0, total:133.17},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:9.45, quota_price:8.44, market_price:8.44, total:79.76},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:10.0, quota_price:0.88, market_price:0.88, total:8.8},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.35, quota_price:33.0, market_price:33.0, total:11.55},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.35, quota_price:5.1, market_price:5.1, total:1.79},
      {code:'19050201', name:'螺纹球阀', spec:'DN15', unit:'个', quantity:0.3, quota_price:26.0, market_price:26.0, total:7.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.3, quota_price:12.0, market_price:12.0, total:3.6},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:32.22958, quota_price:1.0, market_price:1.0, total:32.23}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.7, quota_price:691.24, market_price:691.24, total:1175.11},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:0.5, quota_price:1017.25, market_price:1017.25, total:508.63},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
    ]
  },
  {
    code: '1-2-30',
    name: '液压机 设备重量20t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 19668.99,
    labor_fee: 10637.31,
    material_fee: 598.79,
    mechanical_fee: 3214.47,
    source_screenshot: 'bandicam 2026-04-27 16-24-11-531.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:76.1, quota_price:139.78, market_price:139.78, total:10637.31}
    ],
    material_details: [
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.088, quota_price:1930.0, market_price:1930.0, total:169.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.57, quota_price:7.0, market_price:7.0, total:24.99},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:10.1, quota_price:12.1, market_price:12.1, total:122.21},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:15.0, quota_price:0.88, market_price:0.88, total:13.2},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.45, quota_price:33.0, market_price:33.0, total:14.85},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.35, quota_price:5.1, market_price:5.1, total:1.79},
      {code:'19050201', name:'螺纹球阀', spec:'DN15', unit:'个', quantity:0.3, quota_price:26.0, market_price:26.0, total:7.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.4, quota_price:12.0, market_price:12.0, total:4.8},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:47.30318, quota_price:1.0, market_price:1.0, total:47.3}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.7, quota_price:691.24, market_price:691.24, total:483.87},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
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