const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-9',
    name: '机械压力机 设备重量40t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 29435.17,
    labor_fee: 13922.39,
    material_fee: 1413.15,
    mechanical_fee: 5014.40,
    source_screenshot: 'bandicam 2026-04-27 16-15-23-413.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:21.423, quota_price:87.1, market_price:87.1, total:1865.94},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:77.12, quota_price:134.0, market_price:134.0, total:10334.08},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.569, quota_price:201.0, market_price:201.0, total:1722.37}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:78.08, quota_price:4.5, market_price:4.5, total:351.36},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:72.72, quota_price:4.5, market_price:4.5, total:327.24},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.15, quota_price:1930.0, market_price:1930.0, total:289.5},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.138, quota_price:1048.0, market_price:1048.0, total:144.62},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.02, quota_price:7.0, market_price:7.0, total:7.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:14.7, quota_price:8.44, market_price:8.44, total:124.07},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.01, quota_price:11.2, market_price:11.2, total:11.31},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.0, quota_price:12.0, market_price:12.0, total:12.0},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.5, quota_price:33.0, market_price:33.0, total:16.5},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:67.293475, quota_price:1.0, market_price:1.0, total:67.29}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990301020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
    ]
  },
  {
    code: '1-2-10',
    name: '机械压力机 设备重量50t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 35250.77,
    labor_fee: 17070.72,
    material_fee: 1620.2,
    mechanical_fee: 5459.45,
    source_screenshot: 'bandicam 2026-04-27 16-15-37-643.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:26.266, quota_price:87.1, market_price:87.1, total:2287.77},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:94.56, quota_price:134.0, market_price:134.0, total:12671.04},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:10.507, quota_price:201.0, market_price:201.0, total:2111.91}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:87.32, quota_price:4.5, market_price:4.5, total:392.94},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:76.56, quota_price:4.5, market_price:4.5, total:344.52},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.188, quota_price:1930.0, market_price:1930.0, total:362.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.172, quota_price:1048.0, market_price:1048.0, total:180.26},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.53, quota_price:7.0, market_price:7.0, total:10.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:16.8, quota_price:8.44, market_price:8.44, total:141.79},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.515, quota_price:11.2, market_price:11.2, total:16.97},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.2, quota_price:12.0, market_price:12.0, total:14.4},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.5, quota_price:33.0, market_price:33.0, total:16.5},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:77.152575, quota_price:1.0, market_price:1.0, total:77.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
    ]
  },
  {
    code: '1-2-11',
    name: '机械压力机 设备重量70t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 47407.85,
    labor_fee: 26451.39,
    material_fee: 383.93,
    mechanical_fee: 7736.98,
    source_screenshot: 'bandicam 2026-04-27 16-15-58-124.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:187.18, quota_price:141.33, market_price:141.33, total:26451.39}
    ],
    material_details: [
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.04, quota_price:7.0, market_price:7.0, total:14.28},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.0, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.04, quota_price:12.1, market_price:12.1, total:48.88},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.02, quota_price:11.2, market_price:11.2, total:22.62},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.2, quota_price:12.0, market_price:12.0, total:14.4},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.7, quota_price:33.0, market_price:33.0, total:23.1},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:83.406665, quota_price:1.0, market_price:1.0, total:83.41}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.0, quota_price:1058.74, market_price:1058.74, total:1058.74},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-12',
    name: '机械压力机 设备重量100t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 64712.4,
    labor_fee: 2479.0,
    material_fee: 489.47,
    mechanical_fee: 11100.05,
    source_screenshot: 'bandicam 2026-04-27 16-16-11-507.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:255.62, quota_price:141.33, market_price:141.33, total:36126.00}
    ],
    material_details: [
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.55, quota_price:7.0, market_price:7.0, total:17.85},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:5.05, quota_price:12.1, market_price:12.1, total:61.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.0},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.0, quota_price:33.0, market_price:33.0, total:33.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:104.01605, quota_price:1.0, market_price:1.0, total:104.02}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5.5, quota_price:890.11, market_price:890.11, total:4895.61},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:2.0, quota_price:1058.74, market_price:1058.74, total:2117.48},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
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