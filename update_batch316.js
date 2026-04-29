const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-44',
    name: '自动锻压机及锻机操作机 设备重量3t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 3151.97,
    labor_fee: 1702.03,
    material_fee: 187.95,
    mechanical_fee: 188.26,
    source_screenshot: 'bandicam 2026-04-27 16-28-19-984.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.618, quota_price:87.1, market_price:87.1, total:228.03},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:9.428, quota_price:134.0, market_price:134.0, total:1263.35},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.048, quota_price:201.0, market_price:201.0, total:210.65}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:10.56, quota_price:4.5, market_price:4.5, total:47.52},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:9.36, quota_price:4.5, market_price:4.5, total:42.12},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.03, quota_price:1930.0, market_price:1930.0, total:57.90},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.70},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:8.95, quota_price:1.0, market_price:1.0, total:8.95}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.4, quota_price:449.76, market_price:449.76, total:179.90},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
    ]
  },
  {
    code: '1-2-46',
    name: '自动锻压机及锻机操作机 设备重量7t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 6744.75,
    labor_fee: 2985.81,
    material_fee: 362.25,
    mechanical_fee: 1248.97,
    source_screenshot: 'bandicam 2026-04-27 16-28-45-060.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.594, quota_price:87.1, market_price:87.1, total:400.14},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:16.539, quota_price:134.0, market_price:134.0, total:2216.23},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.838, quota_price:201.0, market_price:201.0, total:369.44}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:19.66, quota_price:4.5, market_price:4.5, total:88.47},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:18.02, quota_price:4.5, market_price:4.5, total:81.09},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.0, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.058, quota_price:1930.0, market_price:1930.0, total:111.94},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048.0, market_price:1048.0, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.675, quota_price:8.44, market_price:8.44, total:31.02},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.808, quota_price:12.1, market_price:12.1, total:9.78},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.253, quota_price:11.2, market_price:11.2, total:2.83},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:17.25, quota_price:1.0, market_price:1.0, total:17.25}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.8, quota_price:691.24, market_price:691.24, total:552.99},
      {code:'990304012', name:'汽车式起重机', spec:'提升质量(t) 12', unit:'台班', quantity:0.5, quota_price:784.73, market_price:784.73, total:392.37}
    ]
  },
  {
    code: '1-2-49',
    name: '自动锻压机及锻机操作机 设备重量20t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 17316.56,
    labor_fee: 6227.84,
    material_fee: 738.36,
    mechanical_fee: 1892.85,
    source_screenshot: 'bandicam 2026-04-27 16-29-08-468.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.583, quota_price:87.1, market_price:87.1, total:834.68},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:34.498, quota_price:134.0, market_price:134.0, total:4622.73},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.833, quota_price:201.0, market_price:201.0, total:770.43}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:48.28, quota_price:4.5, market_price:4.5, total:217.26},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:44.25, quota_price:4.5, market_price:4.5, total:199.13},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3.0, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.093, quota_price:1930.0, market_price:1930.0, total:179.49},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048.0, market_price:1048.0, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7.0, market_price:7.0, total:2.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:7.35, quota_price:8.44, market_price:8.44, total:62.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:35.16, quota_price:1.0, market_price:1.0, total:35.16}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:0.5, quota_price:1017.25, market_price:1017.25, total:508.63},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
    ]
  },
  {
    code: '1-2-51',
    name: '自动锻压机及锻机操作机 设备重量35t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 29316.26,
    labor_fee: 13486.38,
    material_fee: 1447.16,
    mechanical_fee: 5478.12,
    source_screenshot: 'bandicam 2026-04-27 16-29-30-996.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:20.751, quota_price:87.1, market_price:87.1, total:1807.41},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:74.705, quota_price:134.0, market_price:134.0, total:10010.47},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.301, quota_price:201.0, market_price:201.0, total:1668.50}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:88.41, quota_price:4.5, market_price:4.5, total:397.85},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:80.39, quota_price:4.5, market_price:4.5, total:361.76},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低磷钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.225, quota_price:1930.0, market_price:1930.0, total:434.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.011, quota_price:1048.0, market_price:1048.0, total:11.53},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.612, quota_price:7.0, market_price:7.0, total:4.28},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.909, quota_price:11.2, market_price:11.2, total:10.18},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:68.91, quota_price:1.0, market_price:1.0, total:68.91}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
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