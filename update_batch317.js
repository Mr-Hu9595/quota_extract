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
    source_screenshot: 'bandicam 2026-04-27 16-13-08-069.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.827, quota_price:87.1, market_price:87.1, total:246.23},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:10.178, quota_price:134.0, market_price:134.0, total:1363.85},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.131, quota_price:201.0, market_price:201.0, total:227.33}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:10.4, quota_price:4.5, market_price:4.5, total:46.8},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:7.94, quota_price:4.5, market_price:4.5, total:35.73},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
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
    code: '1-2-4',
    name: '机械压力机 设备重量7t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 7869.86,
    labor_fee: 3703.26,
    material_fee: 335.71,
    mechanical_fee: 1248.97,
    source_screenshot: 'bandicam 2026-04-27 16-13-53-206.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.698, quota_price:87.1, market_price:87.1, total:496.3},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:20.514, quota_price:134.0, market_price:134.0, total:2748.88},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.279, quota_price:201.0, market_price:201.0, total:458.08}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:19.04, quota_price:4.5, market_price:4.5, total:85.68},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:16.12, quota_price:4.5, market_price:4.5, total:72.54},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.0, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.043, quota_price:1930.0, market_price:1930.0, total:82.99},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.021, quota_price:1048.0, market_price:1048.0, total:22.01},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.675, quota_price:8.44, market_price:8.44, total:31.02},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.808, quota_price:12.1, market_price:12.1, total:9.78},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.253, quota_price:11.2, market_price:11.2, total:2.83},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:15.985585, quota_price:1.0, market_price:1.0, total:15.99}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.8, quota_price:691.24, market_price:691.24, total:552.99},
      {code:'990304012', name:'汽车式起重机', spec:'提升质量(t) 12', unit:'台班', quantity:0.5, quota_price:784.73, market_price:784.73, total:392.37}
    ]
  },
  {
    code: '1-2-6',
    name: '机械压力机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 14875.18,
    labor_fee: 919.58,
    material_fee: 582.50,
    mechanical_fee: 1865.82,
    source_screenshot: 'bandicam 2026-04-27 16-14-34-653.jpg',
    labor_details: [
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.575, quota_price:201.0, market_price:201.0, total:919.58}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:35.76, quota_price:4.5, market_price:4.5, total:160.92},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:31.84, quota_price:4.5, market_price:4.5, total:143.28},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3.0, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.063, quota_price:1930.0, market_price:1930.0, total:121.59},
      {code:'05010106', name:'椴木', spec:'', unit:'m3', quantity:0.041, quota_price:1048.0, market_price:1048.0, total:42.97},
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
    code: '1-2-8',
    name: '机械压力机 设备重量30t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 25669.11,
    labor_fee: 19563.59,
    material_fee: 1138.79,
    mechanical_fee: 3762.87,
    source_screenshot: 'bandicam 2026-04-27 16-15-14-016.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:102.27, quota_price:191.29, market_price:191.29, total:19563.59}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:69.04, quota_price:4.5, market_price:4.5, total:310.68},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:61.64, quota_price:4.5, market_price:4.5, total:277.38},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
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
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:38.612, quota_price:0.7, market_price:0.7, total:27.03}
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