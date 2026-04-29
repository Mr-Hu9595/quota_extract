const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-48',
    name: '自动锻压机及锻机操作机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 13095.52,
    labor_fee: 6227.84,
    material_fee: 738.36,
    mechanical_fee: 1832.39,
    source_screenshot: 'bandicam 2026-04-29 19-41-28-010.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.583, quota_price:87.1, market_price:87.1, total:834.68},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:34.498, quota_price:134, market_price:134, total:4622.73},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.833, quota_price:201, market_price:201, total:770.43}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:48.28, quota_price:4.5, market_price:4.5, total:217.26},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:44.25, quota_price:4.5, market_price:4.5, total:199.13},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:3, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.093, quota_price:1930, market_price:1930, total:179.49},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048, market_price:1048, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.306, quota_price:7, market_price:7, total:2.14},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:7.35, quota_price:8.44, market_price:8.44, total:62.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:1.01, quota_price:12.1, market_price:12.1, total:12.22},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.505, quota_price:11.2, market_price:11.2, total:5.66},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:35.16, quota_price:1, market_price:1, total:35.16}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:0.5, quota_price:1017.25, market_price:1017.25, total:508.63}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
  screenshotMap[q.source_screenshot] = q.code;
});

screenshotMap['bandicam 2026-04-29 19-41-28-010.jpg'] = '1-2-48';
screenshotMap['bandicam 2026-04-29 19-41-42-731.jpg'] = '1-2-48';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 358 - 1-2-48 complete set');
