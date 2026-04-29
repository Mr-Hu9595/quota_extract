const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-88',
    name: '剪切机及弯曲校正机 设备重量250t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 137549.15,
    labor_fee: 70047.66,
    material_fee: 3924.18,
    mechanical_fee: 18159.56,
    source_screenshot: 'bandicam 2026-04-27 16-40-30-904.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:107.782, quota_price:87.1, market_price:87.1, total:9387.81},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:388.016, quota_price:134, market_price:134, total:51994.14},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:43.113, quota_price:201, market_price:201, total:8665.71}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:135.87, quota_price:4.5, market_price:4.5, total:611.42},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:115.29, quota_price:4.5, market_price:4.5, total:518.81},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:13.281, quota_price:5.18, market_price:5.18, total:68.8},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.313, quota_price:4.1, market_price:4.1, total:5.38},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.477, quota_price:1930, market_price:1930, total:920.61},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.859, quota_price:1048, market_price:1048, total:900.23},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.797, quota_price:7, market_price:7, total:5.58},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:59.063, quota_price:8.44, market_price:8.44, total:498.49},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:9.469, quota_price:12.1, market_price:12.1, total:114.57},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:6.313, quota_price:11.2, market_price:11.2, total:70.71},
      {code:'15130163', name:'聚酯乙烯泡沫塑料', spec:'', unit:'kg', quantity:0.859, quota_price:21.6, market_price:21.6, total:18.55},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.2, quota_price:20.8, market_price:20.8, total:4.16},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:186.865325, quota_price:1, market_price:1, total:186.87}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:7, quota_price:1058.74, market_price:1058.74, total:7411.18},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-89',
    name: '剪切机及弯曲校正机 设备重量300t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 153669.2,
    labor_fee: 78830.44,
    material_fee: 4667.6,
    mechanical_fee: 19218.3,
    source_screenshot: 'bandicam 2026-04-27 16-40-47-448.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:121.296, quota_price:87.1, market_price:87.1, total:10564.88},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:436.666, quota_price:134, market_price:134, total:58513.24},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:48.519, quota_price:201, market_price:201, total:9752.32}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:142.66, quota_price:4.5, market_price:4.5, total:641.97},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:121.05, quota_price:4.5, market_price:4.5, total:544.73},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:16.602, quota_price:5.18, market_price:5.18, total:86},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.641, quota_price:4.1, market_price:4.1, total:6.73},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.596, quota_price:1930, market_price:1930, total:1150.28},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.074, quota_price:1048, market_price:1048, total:1125.55},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.996, quota_price:7, market_price:7, total:6.97},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:73.828, quota_price:8.44, market_price:8.44, total:623.11},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:11.836, quota_price:12.1, market_price:12.1, total:143.22},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:7.891, quota_price:11.2, market_price:11.2, total:88.38},
      {code:'15130163', name:'聚酯乙烯泡沫塑料', spec:'', unit:'kg', quantity:1.074, quota_price:21.6, market_price:21.6, total:23.2},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.25, quota_price:20.8, market_price:20.8, total:5.2},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:222.266349, quota_price:1, market_price:1, total:222.26}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-40-30-904.jpg'] = '1-2-88';
screenshotMap['bandicam 2026-04-27 16-40-47-448.jpg'] = '1-2-89';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 345');
