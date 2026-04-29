const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-30',
    name: '液压机 设备重量20t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 19668.99,
    labor_fee: 9384.56,
    material_fee: 993.38,
    mechanical_fee: 3214.47,
    source_screenshot: 'bandicam 2026-04-27 16-24-07-993.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:14.44, quota_price:87.1, market_price:87.1, total:1257.72},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:51.984, quota_price:134, market_price:134, total:6965.86},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.776, quota_price:201, market_price:201, total:1160.98}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:44.35, quota_price:4.5, market_price:4.5, total:199.58},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:39.19, quota_price:4.5, market_price:4.5, total:176.36},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3.6, quota_price:5.18, market_price:5.18, total:18.65},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.088, quota_price:1930, market_price:1930, total:169.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048, market_price:1048, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.57, quota_price:7, market_price:7, total:24.99},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:10.1, quota_price:12.1, market_price:12.1, total:122.21},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:15, quota_price:0.88, market_price:0.88, total:13.2},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.45, quota_price:33, market_price:33, total:14.85},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.35, quota_price:5.1, market_price:5.1, total:1.79},
      {code:'19050201', name:'螺纹球阀', spec:'DN15', unit:'个', quantity:0.3, quota_price:26, market_price:26, total:7.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.4, quota_price:12, market_price:12, total:4.8},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:47.30318, quota_price:1, market_price:1, total:47.3}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.7, quota_price:691.24, market_price:691.24, total:483.87},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:5.1, quota_price:0.9, market_price:0.9, total:4.59},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:38.612, quota_price:0.7, market_price:0.7, total:27.03}
    ]
  },
  {
    code: '1-2-17',
    name: '机械压力机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 171290.58,
    labor_fee: 4623.0,
    material_fee: 5831.0,
    mechanical_fee: 152670.21,
    source_screenshot: 'bandicam 2026-04-27 16-18-09-159.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.5, quota_price:134, market_price:134, total:335},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:12, quota_price:134, market_price:134, total:1608},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:16, quota_price:134, market_price:134, total:2144},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2, quota_price:134, market_price:134, total:268},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2, quota_price:134, market_price:134, total:268},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:702.44, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:245.27987, quota_price:1, market_price:1, total:245.28},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:100.075, quota_price:6.94, market_price:6.94, total:694.52},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:215.1, quota_price:6.94, market_price:6.94, total:1492.79},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:337.12, quota_price:6.94, market_price:6.94, total:2339.61},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:62.49, quota_price:6.94, market_price:6.94, total:433.68},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:75.47, quota_price:6.94, market_price:6.94, total:523.76},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:144.795, quota_price:0.7, market_price:0.7, total:101.36}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36}
    ]
  },
  {
    code: '1-2-18',
    name: '机械压力机 设备重量450t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 214258.94,
    labor_fee: 0,
    material_fee: 291.94,
    mechanical_fee: 18858.73,
    source_screenshot: 'bandicam 2026-04-27 16-18-28-339.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:892.11, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:291.94244, quota_price:1, market_price:1, total:291.94}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:7, quota_price:890.11, market_price:890.11, total:6230.77},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:10, quota_price:1058.74, market_price:1058.74, total:10587.4},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36}
    ]
  },
  {
    code: '1-2-19',
    name: '机械压力机 设备重量550t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 255773.18,
    labor_fee: 0,
    material_fee: 0,
    mechanical_fee: 0,
    source_screenshot: 'bandicam 2026-04-27 16-18-28-339.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:0, quota_price:0, market_price:0, total:0}
    ],
    material_details: [],
    mechanical_details: []
  },
  {
    code: '1-2-21',
    name: '机械压力机 设备重量750t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 336271.55,
    labor_fee: 8107.0,
    material_fee: 9890.9,
    mechanical_fee: 38865.77,
    source_screenshot: 'bandicam 2026-04-27 16-19-26-881.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.5, quota_price:134, market_price:134, total:335},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:20, quota_price:134, market_price:134, total:2680},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:32, quota_price:134, market_price:134, total:4288},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3, quota_price:134, market_price:134, total:402},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3, quota_price:134, market_price:134, total:402},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:1407.97, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:457.856965, quota_price:1, market_price:1, total:457.86},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:100.075, quota_price:6.94, market_price:6.94, total:694.52},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:358.5, quota_price:6.94, market_price:6.94, total:2487.99},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:674.24, quota_price:6.94, market_price:6.94, total:4679.23},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:93.735, quota_price:6.94, market_price:6.94, total:650.52},
      {code:'14030106-1', name:'柴油', spec:'', unit:'kg', quantity:113.205, quota_price:6.94, market_price:6.94, total:785.64},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:193.06, quota_price:0.7, market_price:0.7, total:135.14}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:10, quota_price:890.11, market_price:890.11, total:8901.1},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:16, quota_price:1058.74, market_price:1058.74, total:16939.84},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.5, quota_price:3063.65, market_price:3063.65, total:4595.48},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.5, quota_price:4551.82, market_price:4551.82, total:6827.73},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2, quota_price:83.57, market_price:83.57, total:167.14}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
  screenshotMap[q.source_screenshot] = q.code;
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 352');