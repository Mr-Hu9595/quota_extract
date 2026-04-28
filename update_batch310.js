const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-24',
    name: '液压机 设备重量1t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 1851.64,
    labor_fee: 1006.52,
    material_fee: 115.94,
    mechanical_fee: 196.62,
    source_screenshot: 'bandicam 2026-04-27 16-22-42-348.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.549, quota_price:87.1, market_price:87.1, total:134.92},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:5.576, quota_price:134.0, market_price:134.0, total:747.18},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.619, quota_price:201.0, market_price:201.0, total:124.42}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:6.24, quota_price:4.5, market_price:4.5, total:28.08},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:5.3, quota_price:4.5, market_price:4.5, total:23.85},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.65, quota_price:5.18, market_price:5.18, total:3.37},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.013, quota_price:1930.0, market_price:1930.0, total:25.09},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.408, quota_price:7.0, market_price:7.0, total:2.86},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.52, quota_price:1.0, market_price:1.0, total:5.52}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
    ]
  },
  {
    code: '1-2-25',
    name: '液压机 设备重量3t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 3703.58,
    labor_fee: 1848.26,
    material_fee: 171.50,
    mechanical_fee: 455.29,
    source_screenshot: 'bandicam 2026-04-27 16-22-56-904.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.843, quota_price:87.1, market_price:87.1, total:247.63},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:10.238, quota_price:134.0, market_price:134.0, total:1371.89},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.138, quota_price:201.0, market_price:201.0, total:228.74}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:8.32, quota_price:4.5, market_price:4.5, total:37.44},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.94, quota_price:4.5, market_price:4.5, total:35.73},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.02, quota_price:1930.0, market_price:1930.0, total:38.60},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.224, quota_price:7.0, market_price:7.0, total:8.57},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.625, quota_price:8.44, market_price:8.44, total:22.16},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.303, quota_price:11.2, market_price:11.2, total:3.39},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:8.17, quota_price:1.0, market_price:1.0, total:8.17}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.4, quota_price:449.76, market_price:449.76, total:179.90},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.3, quota_price:890.11, market_price:890.11, total:267.03},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
    ]
  },
  {
    code: '1-2-26',
    name: '液压机 设备重量5t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 5887.06,
    labor_fee: 2912.86,
    material_fee: 254.11,
    mechanical_fee: 759.35,
    source_screenshot: 'bandicam 2026-04-27 16-23-07-623.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.482, quota_price:87.1, market_price:87.1, total:390.38},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:16.135, quota_price:134.0, market_price:134.0, total:2162.09},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.793, quota_price:201.0, market_price:201.0, total:360.39}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:14.41, quota_price:4.5, market_price:4.5, total:64.85},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:11.308, quota_price:4.5, market_price:4.5, total:50.89},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.031, quota_price:1930.0, market_price:1930.0, total:59.83},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.53, quota_price:7.0, market_price:7.0, total:10.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.15, quota_price:8.44, market_price:8.44, total:26.59},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.515, quota_price:12.1, market_price:12.1, total:18.33},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.404, quota_price:11.2, market_price:11.2, total:4.52},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:12.10, quota_price:1.0, market_price:1.0, total:12.10}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.5, quota_price:449.76, market_price:449.76, total:224.88},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62}
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