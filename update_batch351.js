const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-87',
    name: '剪切机及弯曲校正机 设备重量200t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 111347.9,
    labor_fee: 56407.25,
    material_fee: 3331.86,
    mechanical_fee: 15327.7,
    source_screenshot: 'bandicam 2026-04-27 16-38-38-926.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:86.794, quota_price:87.1, market_price:87.1, total:7559.76},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:312.458, quota_price:134, market_price:134, total:41869.37},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:34.717, quota_price:201, market_price:201, total:6978.12}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:129.87, quota_price:4.5, market_price:4.5, total:584.42},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:115.17, quota_price:4.5, market_price:4.5, total:518.27},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:10.625, quota_price:5.18, market_price:5.18, total:55.04},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.381, quota_price:1930, market_price:1930, total:735.33},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.688, quota_price:1048, market_price:1048, total:721.02},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.638, quota_price:7, market_price:7, total:4.47},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:47.25, quota_price:8.44, market_price:8.44, total:398.79},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:7.575, quota_price:12.1, market_price:12.1, total:91.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:5.05, quota_price:11.2, market_price:11.2, total:56.56},
      {code:'03131515', name:'润滑粉', spec:'', unit:'kg', quantity:0.16, quota_price:20.8, market_price:20.8, total:3.33},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:158.6589, quota_price:1.0, market_price:1.0, total:158.66}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:7.0, quota_price:1058.74, market_price:1058.74, total:7411.18},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.5, quota_price:83.57, market_price:83.57, total:125.36}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

// Update previously processed screenshots
screenshotMap['bandicam 2026-04-27 16-37-11-157.jpg'] = '1-2-84';
screenshotMap['bandicam 2026-04-27 16-37-22-110.jpg'] = '1-2-85';
screenshotMap['bandicam 2026-04-27 16-37-24-917.jpg'] = '1-2-85';
screenshotMap['bandicam 2026-04-27 16-38-12-310.jpg'] = '1-2-86';
screenshotMap['bandicam 2026-04-27 16-38-16-057.jpg'] = '1-2-86';
screenshotMap['bandicam 2026-04-27 16-38-38-926.jpg'] = '1-2-87';
screenshotMap['bandicam 2026-04-27 16-38-41-965.jpg'] = '1-2-87';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 351');
