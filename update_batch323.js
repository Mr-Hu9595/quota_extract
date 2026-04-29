const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-12',
    name: '机械压力机 设备重量100t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 64712.4,
    labor_fee: 30820.62,
    material_fee: 2184.34,
    mechanical_fee: 20981.42,
    source_screenshot: 'bandicam 2026-04-27 16-16-06-561.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:47.424, quota_price:87.1, market_price:87.1, total:4130.63},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:170.724, quota_price:134.0, market_price:134.0, total:22877.02},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:18.97, quota_price:201.0, market_price:201.0, total:3812.97}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:135.56, quota_price:4.5, market_price:4.5, total:610.02},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:113.76, quota_price:4.5, market_price:4.5, total:511.92},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.9},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.08, quota_price:20.8, market_price:20.8, total:1.66},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.094, quota_price:1930.0, market_price:1930.0, total:181.42},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.344, quota_price:1048.0, market_price:1048.0, total:360.51},
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
  },
  {
    code: '1-2-14',
    name: '机械压力机 设备重量200t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 114604.76,
    labor_fee: 43728.25,
    material_fee: 2691.41,
    mechanical_fee: 13747.0,
    source_screenshot: 'bandicam 2026-04-27 16-16-21-159.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:67.285, quota_price:87.1, market_price:87.1, total:5860.52},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:242.224, quota_price:134.0, market_price:134.0, total:32458.02},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:26.914, quota_price:201.0, market_price:201.0, total:5409.71}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:145.57, quota_price:4.5, market_price:4.5, total:655.07},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:125.904, quota_price:4.5, market_price:4.5, total:566.57},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.12, quota_price:20.8, market_price:20.8, total:2.5},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.9},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.118, quota_price:1930.0, market_price:1930.0, total:227.74},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.516, quota_price:1048.0, market_price:1048.0, total:540.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:37.8, quota_price:8.44, market_price:8.44, total:319.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.2, quota_price:33.0, market_price:33.0, total:39.6},
      {code:'31190117', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:128.15245, quota_price:1.0, market_price:1.0, total:128.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:5.0, quota_price:1058.74, market_price:1058.74, total:5293.7},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
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