const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-64',
    name: '模锻锤 落锤质量3t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 60854.26,
    labor_fee: 29840.38,
    material_fee: 2509.19,
    mechanical_fee: 8510.32,
    source_screenshot: 'bandicam 2026-04-27 16-32-23-545.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:45.916, quota_price:87.1, market_price:87.1, total:3999.28},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:165.295, quota_price:134, market_price:134, total:22149.53},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:18.366, quota_price:201, market_price:201, total:3691.57}
    ],
    material_details: [
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.073, quota_price:1930, market_price:1930, total:140.89},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.275, quota_price:1048, market_price:1048, total:288.2},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:12.24, quota_price:7, market_price:7, total:85.68},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:31.5, quota_price:8.44, market_price:8.44, total:265.86},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:3, quota_price:3.03, market_price:3.03, total:9.09},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.04, quota_price:12.1, market_price:12.1, total:48.88},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:8.08, quota_price:11.2, market_price:11.2, total:90.5},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:7.06, quota_price:33, market_price:33, total:232.98},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10 (4...)', unit:'kg', quantity:3, quota_price:18.5, market_price:18.5, total:55.5},
      {code:'15010185', name:'石棉绳绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:3.6, quota_price:16.3, market_price:16.3, total:58.68},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:1.08, quota_price:70, market_price:70, total:75.6},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:240, quota_price:3.69, market_price:3.69, total:885.6},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:50, quota_price:1.02, market_price:1.02, total:51},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:20, quota_price:4.6, market_price:4.6, total:92},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.77, quota_price:12, market_price:12, total:9.24},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:119.485, quota_price:1, market_price:1, total:119.49}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:5.05, quota_price:691.24, market_price:691.24, total:3490.76},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  },
  {
    code: '1-2-65',
    name: '锻锤 落锤质量5t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 97256.33,
    labor_fee: 51236.67,
    material_fee: 3267.81,
    mechanical_fee: 9523.01,
    source_screenshot: 'bandicam 2026-04-27 16-32-41-207.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:78.838, quota_price:87.1, market_price:87.1, total:6866.79},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:283.816, quota_price:134.0, market_price:134.0, total:38031.34},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:31.535, quota_price:201.0, market_price:201.0, total:6338.54}
    ],
    material_details: [
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.25, quota_price:20.8, market_price:20.8, total:5.2},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.118, quota_price:1930.0, market_price:1930.0, total:227.74},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.54, quota_price:1048.0, market_price:1048.0, total:565.92},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:15.3, quota_price:7.0, market_price:7.0, total:107.1},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:39.9, quota_price:8.44, market_price:8.44, total:336.76},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:3.5, quota_price:3.03, market_price:3.03, total:10.61},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:5.05, quota_price:12.1, market_price:12.1, total:61.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:10.1, quota_price:11.2, market_price:11.2, total:113.12},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8.47, quota_price:33.0, market_price:33.0, total:279.51},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 Φ6~10 (4股)', unit:'kg', quantity:3.0, quota_price:18.5, market_price:18.5, total:55.5},
      {code:'15010185', name:'石棉绳', spec:'Φ6~10 烧失量24%', unit:'kg', quantity:4.4, quota_price:16.3, market_price:16.3, total:71.72},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:1.08, quota_price:70.0, market_price:70.0, total:75.6},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:280.0, quota_price:3.69, market_price:3.69, total:1033.2},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:65.0, quota_price:1.02, market_price:1.02, total:66.3},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:20.0, quota_price:4.6, market_price:4.6, total:92.0},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.9, quota_price:12.0, market_price:12.0, total:10.8},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:155.6088, quota_price:1.0, market_price:1.0, total:155.61}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:6.1, quota_price:691.24, market_price:691.24, total:4216.56},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-32-23-545.jpg'] = '1-2-64';
screenshotMap['bandicam 2026-04-27 16-32-26-717.jpg'] = '1-2-64';
screenshotMap['bandicam 2026-04-27 16-32-41-207.jpg'] = '1-2-65';
screenshotMap['bandicam 2026-04-27 16-32-44-004.jpg'] = 'skipped_error';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 335');
