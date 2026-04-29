const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-68',
    name: '自由锻锤及蒸汽锤 落锤质量1t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 23475.78,
    labor_fee: 11372.49,
    material_fee: 1543.54,
    mechanical_fee: 2885.74,
    source_screenshot: 'bandicam 2026-04-27 16-33-32-975.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.499, quota_price:87.1, market_price:87.1, total:1524.16},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:62.995, quota_price:134, market_price:134, total:8441.33},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7, quota_price:201, market_price:201, total:1407}
    ],
    material_details: [
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:16, quota_price:3.25, market_price:3.25, total:52},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.5, quota_price:5.18, market_price:5.18, total:2.59},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.063, quota_price:1930, market_price:1930, total:121.59},
      {code:'05010106', name:'遵木', spec:'', unit:'m3', quantity:0.096, quota_price:1048, market_price:1048, total:100.61},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:7.65, quota_price:7, market_price:7, total:53.55},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2.2, quota_price:3.03, market_price:3.03, total:6.67},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:4.23, quota_price:33, market_price:33, total:139.59},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10', unit:'kg', quantity:2, quota_price:18.5, market_price:18.5, total:37},
      {code:'15010185', name:'石棉编绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:2.8, quota_price:16.3, market_price:16.3, total:45.64},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:0.675, quota_price:70, market_price:70, total:47.25},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:150, quota_price:3.69, market_price:3.69, total:553.5},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:25, quota_price:1.02, market_price:1.02, total:25.5},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:10, quota_price:4.6, market_price:4.6, total:46},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.26, quota_price:12, market_price:12, total:3.12},
      {code:'QTCLF-1', name:'其他材料费', spec:'5%', unit:'%', quantity:73.5111, quota_price:1, market_price:1, total:73.51}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.35, quota_price:691.24, market_price:691.24, total:1624.41},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:0.5, quota_price:1058.74, market_price:1058.74, total:529.37}
    ]
  },
  {
    code: '1-2-69',
    name: '自由锻锤及蒸汽锤 落锤质量2t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 41568.78,
    labor_fee: 19640.69,
    material_fee: 2126.5,
    mechanical_fee: 17772.28,
    source_screenshot: 'bandicam 2026-04-27 16-33-49-444.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:30.222, quota_price:87.1, market_price:87.1, total:2632.34},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:108.796, quota_price:134, market_price:134, total:14578.66},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:12.088, quota_price:201, market_price:201, total:2429.69}
    ],
    material_details: [
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:30, quota_price:3.25, market_price:3.25, total:97.5},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.6, quota_price:5.18, market_price:5.18, total:3.11},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.048, quota_price:20.8, market_price:20.8, total:1},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.07, quota_price:1930, market_price:1930, total:135.1},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.199, quota_price:1048, market_price:1048, total:208.55},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:11.22, quota_price:7, market_price:7, total:78.54},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2.4, quota_price:3.03, market_price:3.03, total:7.27},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:5.05, quota_price:11.2, market_price:11.2, total:56.56},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:5.62, quota_price:33, market_price:33, total:185.46},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10', unit:'kg', quantity:2.5, quota_price:18.5, market_price:18.5, total:46.25},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:3.2, quota_price:16.3, market_price:16.3, total:52.16},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:0.675, quota_price:70, market_price:70, total:47.25},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:200, quota_price:3.69, market_price:3.69, total:738},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:34, quota_price:1.02, market_price:1.02, total:34.68},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:15, quota_price:4.6, market_price:4.6, total:69},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.51, quota_price:12, market_price:12, total:6.12},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5, quota_price:1, market_price:1, total:101.24}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:4.1, quota_price:691.24, market_price:691.24, total:2834.08},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:0.5, quota_price:2378.65, market_price:2378.65, total:1189.33}
    ]
  },
  {
    code: '1-2-70',
    name: '自由锻锤及蒸汽锤 落锤质量3t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 60289.56,
    labor_fee: 49784.5,
    material_fee: 1048.45,
    mechanical_fee: 6574.09,
    source_screenshot: 'bandicam 2026-04-27 16-33-53-863.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:12.2, quota_price:134, market_price:134, total:1634.8},
      {code:'ZHGR', name:'综合工日', spec:'综合工日', unit:'工日', quantity:163.31, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'15010185', name:'石棉扁绳', spec:'Φ6~10 烧失量24%', unit:'kg', quantity:3.2, quota_price:16.3, market_price:16.3, total:52.16},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:0.675, quota_price:70, market_price:70, total:47.25},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:200, quota_price:3.69, market_price:3.69, total:738},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:34, quota_price:1.02, market_price:1.02, total:34.68},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:15, quota_price:4.6, market_price:4.6, total:69},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.51, quota_price:12, market_price:12, total:6.12},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:101.23817, quota_price:1, market_price:1, total:101.24}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:4.1, quota_price:691.24, market_price:691.24, total:2834.08},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:0.5, quota_price:2378.65, market_price:2378.65, total:1189.33},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:0.5, quota_price:3063.65, market_price:3063.65, total:1531.83}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-33-32-975.jpg'] = '1-2-68';
screenshotMap['bandicam 2026-04-27 16-33-37-541.jpg'] = '1-2-68';
screenshotMap['bandicam 2026-04-27 16-33-49-444.jpg'] = '1-2-69';
screenshotMap['bandicam 2026-04-27 16-33-53-863.jpg'] = '1-2-70';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 337');
