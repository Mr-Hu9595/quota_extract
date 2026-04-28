const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Add new 1-2 quotas (1-2-5 through 1-2-8 don't exist yet)
const newQuotas = [
  {
    code: '1-2-5',
    name: '机械压力机 设备重量10t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 10384.69,
    labor_fee: 5097.16,
    material_fee: 377.73,
    mechanical_fee: 1439.91,
    source_screenshot: 'bandicam 2026-04-27 16-14-15-048.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:7.843, quota_price:87.1, market_price:87.1, total:683.13},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:28.235, quota_price:134.0, market_price:134.0, total:3783.49},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.137, quota_price:201.0, market_price:201.0, total:630.54}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:21.88, quota_price:4.5, market_price:4.5, total:98.46},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:18.06, quota_price:4.5, market_price:4.5, total:81.27},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.0, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.048, quota_price:1930.0, market_price:1930.0, total:92.64},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.725, quota_price:8.44, market_price:8.44, total:39.88},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.808, quota_price:12.1, market_price:12.1, total:9.78},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.253, quota_price:11.2, market_price:11.2, total:2.83},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:17.987, quota_price:1.0, market_price:1.0, total:17.99}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.0, quota_price:691.24, market_price:691.24, total:691.24}
    ]
  },
  {
    code: '1-2-6',
    name: '机械压力机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 14875.18,
    labor_fee: 7417.55,
    material_fee: 533.52,
    mechanical_fee: 2277.02,
    source_screenshot: 'bandicam 2026-04-27 16-14-32-073.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:11.412, quota_price:87.1, market_price:87.1, total:994.00},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:41.08, quota_price:134.0, market_price:134.0, total:5504.72},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.564, quota_price:201.0, market_price:201.0, total:918.83}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:35.76, quota_price:4.5, market_price:4.5, total:160.92},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:30.08, quota_price:4.5, market_price:4.5, total:135.36},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.5, quota_price:5.18, market_price:5.18, total:12.95},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.062, quota_price:1930.0, market_price:1930.0, total:119.66},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.035, quota_price:1048.0, market_price:1048.0, total:36.68},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:7.35, quota_price:8.44, market_price:8.44, total:62.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:25.84, quota_price:1.0, market_price:1.0, total:25.84}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.0, quota_price:691.24, market_price:691.24, total:1382.48},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.3, quota_price:83.57, market_price:83.57, total:25.07},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:0.5, quota_price:1058.74, market_price:1058.74, total:529.37}
    ]
  },
  {
    code: '1-2-7',
    name: '机械压力机 设备重量20t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 17370.35,
    labor_fee: 9020.77,
    material_fee: 830.20,
    mechanical_fee: 2642.00,
    source_screenshot: 'bandicam 2026-04-27 16-14-44-974.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:13.875, quota_price:87.1, market_price:87.1, total:1208.51},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:49.947, quota_price:134.0, market_price:134.0, total:6692.90},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.549, quota_price:201.0, market_price:201.0, total:1119.36}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:58.08, quota_price:4.5, market_price:4.5, total:261.36},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:49.0, quota_price:4.5, market_price:4.5, total:220.50},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3.0, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.089, quota_price:1930.0, market_price:1930.0, total:171.77},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:8.4, quota_price:8.44, market_price:8.44, total:70.90},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.5, quota_price:12.0, market_price:12.0, total:6.00},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.3, quota_price:33.0, market_price:33.0, total:9.90},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:42.77, quota_price:1.0, market_price:1.0, total:42.77}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.0, quota_price:1058.74, market_price:1058.74, total:1058.74},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
    ]
  },
  {
    code: '1-2-8',
    name: '机械压力机 设备重量30t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 25669.11,
    labor_fee: 13455.00,
    material_fee: 1222.00,
    mechanical_fee: 3788.00,
    source_screenshot: 'bandicam 2026-04-27 16-14-51-366.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:20.7, quota_price:87.1, market_price:87.1, total:1802.97},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:74.52, quota_price:134.0, market_price:134.0, total:9985.68},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.28, quota_price:201.0, market_price:201.0, total:1664.28}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:87.12, quota_price:4.5, market_price:4.5, total:392.04},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:73.5, quota_price:4.5, market_price:4.5, total:330.75},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.788, quota_price:4.1, market_price:4.1, total:3.23},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.133, quota_price:1930.0, market_price:1930.0, total:256.69},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.104, quota_price:1048.0, market_price:1048.0, total:108.99},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.459, quota_price:7.0, market_price:7.0, total:3.21},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.273, quota_price:12.1, market_price:12.1, total:27.50},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.75, quota_price:12.0, market_price:12.0, total:9.00},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.45, quota_price:33.0, market_price:33.0, total:14.85},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:64.15, quota_price:1.0, market_price:1.0, total:64.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.0, quota_price:691.24, market_price:691.24, total:1382.48},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.5, quota_price:1058.74, market_price:1058.74, total:1588.11},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
    ]
  }
];

// Push new quotas
newQuotas.forEach(q => data.quotas.push(q));

// Update screenshot map
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));
newQuotas.forEach(q => {
  screenshotMap[q.code] = q.source_screenshot;
});

// Save
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('1-2 count:', data.quotas.filter(q => q.code.startsWith('1-2')).length);
console.log('Saved');