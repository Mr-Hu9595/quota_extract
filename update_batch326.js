const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-2',
    name: '机械压力机 设备重量3t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 3680.76,
    labor_fee: 1837.41,
    material_fee: 165.85,
    mechanical_fee: 455.29,
    source_screenshot: 'bandicam 2026-04-27 16-12-58-285.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.827, quota_price:87.1, market_price:87.1, total:246.23},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:10.178, quota_price:134.0, market_price:134.0, total:1363.85},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.131, quota_price:201.0, market_price:201.0, total:227.33}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:10.4, quota_price:4.5, market_price:4.5, total:46.8},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.94, quota_price:4.5, market_price:4.5, total:35.73},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.02, quota_price:1930.0, market_price:1930.0, total:38.6},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.625, quota_price:8.44, market_price:8.44, total:22.16},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:7.89756, quota_price:1.0, market_price:1.0, total:7.9}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.4, quota_price:449.76, market_price:449.76, total:179.9},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.3, quota_price:890.11, market_price:890.11, total:267.03},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
    ]
  },
  {
    code: '1-2-6',
    name: '机械压力机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 14875.18,
    labor_fee: 7433.41,
    material_fee: 582.5,
    mechanical_fee: 1865.82,
    source_screenshot: 'bandicam 2026-04-27 16-14-32-073.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:11.438, quota_price:87.1, market_price:87.1, total:996.25},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:41.176, quota_price:134.0, market_price:134.0, total:5517.58},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.575, quota_price:201.0, market_price:201.0, total:919.58}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:35.76, quota_price:4.5, market_price:4.5, total:160.92},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:31.84, quota_price:4.5, market_price:4.5, total:143.28},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:3.0, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.063, quota_price:1930.0, market_price:1930.0, total:121.59},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.041, quota_price:1048.0, market_price:1048.0, total:42.97},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.255, quota_price:7.0, market_price:7.0, total:1.79},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.25, quota_price:8.44, market_price:8.44, total:44.31},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.2, quota_price:33.0, market_price:33.0, total:6.6},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:27.738005, quota_price:1.0, market_price:1.0, total:27.74}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:0.5, quota_price:1017.25, market_price:1017.25, total:508.63}
    ]
  },
  {
    code: '1-2-7',
    name: '机械压力机 设备重量20t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 17370.35,
    labor_fee: 9893.62,
    material_fee: 873.19,
    mechanical_fee: 6603.54,
    source_screenshot: 'bandicam 2026-04-27 16-14-51-366.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:15.22, quota_price:87.1, market_price:87.1, total:1325.66},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:54.778, quota_price:134.0, market_price:134.0, total:7340.25},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.086, quota_price:201.0, market_price:201.0, total:1227.29}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:58.08, quota_price:4.5, market_price:4.5, total:261.36},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:49.0, quota_price:4.5, market_price:4.5, total:220.5},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:3.0, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.089, quota_price:1930.0, market_price:1930.0, total:171.77},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:8.4, quota_price:8.44, market_price:8.44, total:70.9},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.5, quota_price:12.0, market_price:12.0, total:6.0},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.3, quota_price:33.0, market_price:33.0, total:9.9},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:42.77144, quota_price:1.0, market_price:1.0, total:42.77}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
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
    labor_fee: 12577.64,
    material_fee: 1138.79,
    mechanical_fee: 3735.84,
    source_screenshot: 'bandicam 2026-04-27 16-15-10-699.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:19.353, quota_price:87.1, market_price:87.1, total:1685.65},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:69.672, quota_price:134.0, market_price:134.0, total:9336.05},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.741, quota_price:201.0, market_price:201.0, total:1555.94}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:69.04, quota_price:4.5, market_price:4.5, total:310.68},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:61.64, quota_price:4.5, market_price:4.5, total:277.38},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:11.55, quota_price:8.44, market_price:8.44, total:97.48},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.0, quota_price:12.0, market_price:12.0, total:12.0},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.4, quota_price:33.0, market_price:33.0, total:13.2},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:54.228285, quota_price:1.0, market_price:1.0, total:54.23}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
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