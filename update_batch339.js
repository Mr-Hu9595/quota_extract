const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-72',
    name: '剪切机及弯曲校正机 设备重量1t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 1563.19,
    labor_fee: 826.6,
    material_fee: 107.65,
    mechanical_fee: 106.66,
    source_screenshot: 'bandicam 2026-04-27 16-34-45-035.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.271, quota_price:87.1, market_price:87.1, total:110.7},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:4.579, quota_price:134, market_price:134, total:613.59},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.509, quota_price:201, market_price:201, total:102.31}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:6.24, quota_price:4.5, market_price:4.5, total:28.08},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:5.3, quota_price:4.5, market_price:4.5, total:23.85},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.65, quota_price:5.18, market_price:5.18, total:3.37},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.013, quota_price:1930, market_price:1930, total:25.09},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.051, quota_price:7, market_price:7, total:0.36},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.101, quota_price:11.2, market_price:11.2, total:1.13},
      {code:'QTCLF-1', name:'其他材料费', spec:'%', unit:'', quantity:5.125835, quota_price:1, market_price:1, total:5.13}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71}
    ]
  },
  {
    code: '1-2-73',
    name: '剪切机及弯曲校正机 设备重量3t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 3431.64,
    labor_fee: 1873.98,
    material_fee: 210.76,
    mechanical_fee: 174.13,
    source_screenshot: 'bandicam 2026-04-27 16-34-55-420.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.883, quota_price:87.1, market_price:87.1, total:251.11},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:10.38, quota_price:134.0, market_price:134.0, total:1390.92},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.154, quota_price:201.0, market_price:201.0, total:231.95}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:14.36, quota_price:4.5, market_price:4.5, total:64.62},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:13.05, quota_price:4.5, market_price:4.5, total:58.73},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.026, quota_price:1930.0, market_price:1930.0, total:50.18},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.7},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:10.036345, quota_price:1.0, market_price:1.0, total:10.04}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.35, quota_price:449.76, market_price:449.76, total:157.42},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71}
    ]
  },
  {
    code: '1-2-74',
    name: '剪切机及弯曲校正机 设备重量5t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 5263.5,
    labor_fee: 2518.99,
    material_fee: 269.28,
    mechanical_fee: 741.84,
    source_screenshot: 'bandicam 2026-04-27 16-35-02-872.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:null, unit:'工日', quantity:3.876, quota_price:87.1, market_price:87.1, total:337.6},
      {code:'00010102', name:'一般技工', spec:null, unit:'工日', quantity:13.954, quota_price:134, market_price:134, total:1869.84},
      {code:'00010103', name:'高级技工', spec:null, unit:'工日', quantity:1.55, quota_price:201, market_price:201, total:311.55}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:19.158, quota_price:4.5, market_price:4.5, total:86.21},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:16.39, quota_price:4.5, market_price:4.5, total:73.76},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:null, unit:'m3', quantity:0.031, quota_price:1930, market_price:1930, total:59.83},
      {code:'14030126', name:'汽油', spec:null, unit:'kg', quantity:0.102, quota_price:7, market_price:7, total:0.71},
      {code:'14030116', name:'煤油', spec:null, unit:'kg', quantity:3.15, quota_price:8.44, market_price:8.44, total:26.59},
      {code:'14050151', name:'机油', spec:null, unit:'kg', quantity:0.202, quota_price:12.1, market_price:12.1, total:2.44},
      {code:'14090119', name:'黄油钙基脂', spec:null, unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.7},
      {code:'QTCLF-1', name:'其他材料费', spec:null, unit:'%', quantity:12.823245, quota_price:1, market_price:1, total:12.82}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.8, quota_price:691.24, market_price:691.24, total:552.99},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71}
    ]
  },
  {
    code: '1-2-75',
    name: '剪切机及弯曲校正机 设备重量7t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 7100.1,
    labor_fee: 3060.62,
    material_fee: 345.58,
    mechanical_fee: 1483.66,
    source_screenshot: 'bandicam 2026-04-27 16-35-31-390.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.71, quota_price:87.1, market_price:87.1, total:410.24},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:16.953, quota_price:134.0, market_price:134.0, total:2271.7},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.884, quota_price:201.0, market_price:201.0, total:378.68}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:21.12, quota_price:4.5, market_price:4.5, total:95.04},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:19.07, quota_price:4.5, market_price:4.5, total:85.82},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:2.0, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.05, quota_price:1930.0, market_price:1930.0, total:96.5},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.15, quota_price:8.44, market_price:8.44, total:26.59},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.253, quota_price:12.1, market_price:12.1, total:3.06},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:16.4555, quota_price:1.0, market_price:1.0, total:16.46}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.0, quota_price:691.24, market_price:691.24, total:691.24},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:38.612, quota_price:0.7, market_price:0.7, total:27.03},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-34-45-035.jpg'] = '1-2-72';
screenshotMap['bandicam 2026-04-27 16-34-55-420.jpg'] = '1-2-73';
screenshotMap['bandicam 2026-04-27 16-35-02-872.jpg'] = '1-2-74';
screenshotMap['bandicam 2026-04-27 16-35-31-390.jpg'] = '1-2-75';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 339');
