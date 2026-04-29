const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-71',
    name: '自由锻锤及蒸汽锤 落锤质量5t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 90628.54,
    labor_fee: 45080.58,
    material_fee: 3483.44,
    mechanical_fee: 8108.34,
    source_screenshot: 'bandicam 2026-04-27 16-34-30-614.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:69.365, quota_price:87.1, market_price:87.1, total:6041.69},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:249.716, quota_price:134, market_price:134, total:33461.94},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:27.746, quota_price:201, market_price:201, total:5576.95}
    ],
    material_details: [
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:50, quota_price:3.25, market_price:3.25, total:162.5},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:0.9, quota_price:5.18, market_price:5.18, total:4.66},
      {code:'03131515', name:'铆焊粉', spec:'', unit:'kg', quantity:0.112, quota_price:20.8, market_price:20.8, total:2.33},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.116, quota_price:1930, market_price:1930, total:223.88},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.527, quota_price:1048, market_price:1048, total:552.3},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:28.56, quota_price:7, market_price:7, total:199.92},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:39.9, quota_price:8.44, market_price:8.44, total:336.76},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:3.5, quota_price:3.03, market_price:3.03, total:10.61},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:5.05, quota_price:12.1, market_price:12.1, total:61.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:10.1, quota_price:11.2, market_price:11.2, total:113.12},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:7.76, quota_price:33, market_price:33, total:256.08},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10', unit:'kg', quantity:3, quota_price:18.5, market_price:18.5, total:55.5},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:4, quota_price:16.3, market_price:16.3, total:65.2},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:1.08, quota_price:70, market_price:70, total:75.6},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:280, quota_price:3.69, market_price:3.69, total:1033.2},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:60, quota_price:1.02, market_price:1.02, total:61.2},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:20, quota_price:4.6, market_price:4.6, total:92},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.96, quota_price:12, market_price:12, total:11.52},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:165.87368, quota_price:1, market_price:1, total:165.87}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:6.4, quota_price:691.24, market_price:691.24, total:4423.94},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-34-16-893.jpg'] = '1-2-70';
screenshotMap['bandicam 2026-04-27 16-34-21-122.jpg'] = '1-2-70';
screenshotMap['bandicam 2026-04-27 16-34-30-614.jpg'] = '1-2-71';
screenshotMap['bandicam 2026-04-27 16-34-34-496.jpg'] = '1-2-71';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 338');
