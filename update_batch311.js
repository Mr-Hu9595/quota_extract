const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-27',
    name: '液压机 设备重量7t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 7630.83,
    labor_fee: 3538.98,
    material_fee: 360.11,
    mechanical_fee: 1248.97,
    source_screenshot: 'bandicam 2026-04-27 16-23-19-385.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.445, quota_price:87.1, market_price:87.1, total:474.26},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:19.604, quota_price:134.0, market_price:134.0, total:2626.94},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.178, quota_price:201.0, market_price:201.0, total:437.78}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:19.99, quota_price:4.5, market_price:4.5, total:89.96},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:16.93, quota_price:4.5, market_price:4.5, total:76.19},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.0, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.043, quota_price:1930.0, market_price:1930.0, total:82.99},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.836, quota_price:7.0, market_price:7.0, total:12.85},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.675, quota_price:8.44, market_price:8.44, total:31.02},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:17.15, quota_price:1.0, market_price:1.0, total:17.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.8, quota_price:691.24, market_price:691.24, total:552.99},
      {code:'990304012', name:'汽车式起重机', spec:'提升质量(t) 12', unit:'台班', quantity:0.5, quota_price:784.73, market_price:784.73, total:392.37}
    ]
  },
  {
    code: '1-2-28',
    name: '液压机 设备重量10t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 10328.47,
    labor_fee: 5015.52,
    material_fee: 452.68,
    mechanical_fee: 1453.42,
    source_screenshot: 'bandicam 2026-04-27 16-23-43-164.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:7.718, quota_price:87.1, market_price:87.1, total:672.24},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:27.782, quota_price:134.0, market_price:134.0, total:3722.79},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.087, quota_price:201.0, market_price:201.0, total:620.49}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:25.2, quota_price:4.5, market_price:4.5, total:113.40},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:22.93, quota_price:4.5, market_price:4.5, total:103.19},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.0, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.048, quota_price:1930.0, market_price:1930.0, total:92.64},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.04, quota_price:7.0, market_price:7.0, total:14.28},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.25, quota_price:8.44, market_price:8.44, total:44.31},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:21.56, quota_price:1.0, market_price:1.0, total:21.56}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.0, quota_price:691.24, market_price:691.24, total:691.24}
    ]
  },
  {
    code: '1-2-29',
    name: '液压机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 14611.63,
    labor_fee: 7097.04,
    material_fee: 656.85,
    mechanical_fee: 2035.69,
    source_screenshot: 'bandicam 2026-04-27 16-23-53-506.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:10.92, quota_price:87.1, market_price:87.1, total:951.13},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:39.313, quota_price:134.0, market_price:134.0, total:5267.94},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.368, quota_price:201.0, market_price:201.0, total:877.97}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:28.41, quota_price:4.5, market_price:4.5, total:127.85},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:24.95, quota_price:4.5, market_price:4.5, total:112.28},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3.5, quota_price:5.18, market_price:5.18, total:18.13},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.069, quota_price:1930.0, market_price:1930.0, total:133.17},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:9.45, quota_price:8.44, market_price:8.44, total:79.76},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:10.0, quota_price:0.88, market_price:0.88, total:8.80},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.35, quota_price:33.0, market_price:33.0, total:11.55},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.35, quota_price:5.1, market_price:5.1, total:1.79},
      {code:'19050201', name:'螺纹球阀', spec:'DN15', unit:'个', quantity:0.3, quota_price:26.0, market_price:26.0, total:7.80},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.3, quota_price:12.0, market_price:12.0, total:3.60},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:32.23, quota_price:1.0, market_price:1.0, total:32.23}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
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
    labor_fee: 9384.56,
    material_fee: 993.38,
    mechanical_fee: 6426.87,
    source_screenshot: 'bandicam 2026-04-27 16-24-07-993.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:14.44, quota_price:87.1, market_price:87.1, total:1257.72},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:51.984, quota_price:134.0, market_price:134.0, total:6965.86},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.776, quota_price:201.0, market_price:201.0, total:1160.98}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:44.35, quota_price:4.5, market_price:4.5, total:199.58},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:39.19, quota_price:4.5, market_price:4.5, total:176.36},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3.6, quota_price:5.18, market_price:5.18, total:18.65},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.088, quota_price:1930.0, market_price:1930.0, total:169.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.57, quota_price:7.0, market_price:7.0, total:24.99},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:10.1, quota_price:12.1, market_price:12.1, total:122.21},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:0.808, quota_price:11.2, market_price:11.2, total:9.05},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:15.0, quota_price:0.88, market_price:0.88, total:13.20},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.45, quota_price:33.0, market_price:33.0, total:14.85},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.35, quota_price:5.1, market_price:5.1, total:1.79},
      {code:'19050201', name:'螺纹钢阀', spec:'DN15', unit:'个', quantity:0.3, quota_price:26.0, market_price:26.0, total:7.80},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.4, quota_price:12.0, market_price:12.0, total:4.80},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:47.30, quota_price:1.0, market_price:1.0, total:47.30}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
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