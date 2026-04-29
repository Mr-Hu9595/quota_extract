const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-23',
    name: '机械压力机 设备重量950t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 415707.02,
    labor_fee: 218770.19,
    material_fee: 11326.83,
    mechanical_fee: 165794.7,
    source_screenshot: 'bandicam 2026-04-27 16-20-27-141.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:336.666, quota_price:87.1, market_price:87.1, total:29341.21},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1211.996, quota_price:134.0, market_price:134.0, total:162407.46},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:134.666, quota_price:201.0, market_price:201.0, total:27047.46}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:488.24, quota_price:4.5, market_price:4.5, total:2197.08},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:462.88, quota_price:4.5, market_price:4.5, total:2082.96},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.72, quota_price:20.8, market_price:20.8, total:14.98},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:6.5, quota_price:5.18, market_price:5.18, total:33.67},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:2.1, quota_price:4.1, market_price:4.1, total:8.61},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.315, quota_price:1930.0, market_price:1930.0, total:607.95},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:3.183, quota_price:1048.0, market_price:1048.0, total:3338.78},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:17.16, quota_price:7.0, market_price:7.0, total:120.12},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:196.35, quota_price:8.44, market_price:8.44, total:1656.71},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:39.59, quota_price:12.1, market_price:12.1, total:479.04},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:23.23, quota_price:11.2, market_price:11.2, total:260.18},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6.3, quota_price:33.0, market_price:33.0, total:207.9},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:7.5, quota_price:12.0, market_price:12.0, total:90.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:528.842, quota_price:1.0, market_price:1.0, total:528.84}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:3.0, quota_price:573.79, market_price:573.79, total:1721.37},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:10.0, quota_price:890.11, market_price:890.11, total:8901.1},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:21.0, quota_price:1058.74, market_price:1058.74, total:22233.54},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:2.0, quota_price:4551.82, market_price:4551.82, total:9103.64},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2.0, quota_price:83.57, market_price:83.57, total:167.14},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:8.0, quota_price:3063.65, market_price:3063.65, total:24509.2},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:8.0, quota_price:2378.65, market_price:2378.65, total:19029.2}
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
