const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-66',
    name: '模锻锤 落锤质量10t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 143646.57,
    labor_fee: 77957.91,
    material_fee: 4661.92,
    mechanical_fee: 11143.18,
    source_screenshot: 'bandicam 2026-04-27 16-33-05-280.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:119.953, quota_price:87.1, market_price:87.1, total:10447.91},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:431.833, quota_price:134.0, market_price:134.0, total:57865.62},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:47.982, quota_price:201.0, market_price:201.0, total:9644.38}
    ],
    material_details: [
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.4, quota_price:20.8, market_price:20.8, total:8.32},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.164, quota_price:1930.0, market_price:1930.0, total:316.52},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.073, quota_price:1048.0, market_price:1048.0, total:1124.5},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:18.36, quota_price:7.0, market_price:7.0, total:128.52},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:57.75, quota_price:8.44, market_price:8.44, total:487.41},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:4.5, quota_price:3.03, market_price:3.03, total:13.64},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.565, quota_price:12.1, market_price:12.1, total:79.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:12.12, quota_price:11.2, market_price:11.2, total:135.74},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:10.58, quota_price:33.0, market_price:33.0, total:349.14},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10', unit:'kg', quantity:5.0, quota_price:18.5, market_price:18.5, total:92.5},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:5.8, quota_price:16.3, market_price:16.3, total:94.54},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:1.35, quota_price:70.0, market_price:70.0, total:94.5},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:350.0, quota_price:3.69, market_price:3.69, total:1291.5},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:85.0, quota_price:1.02, market_price:1.02, total:86.7},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:25.0, quota_price:4.6, market_price:4.6, total:115.0},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.79, quota_price:12.0, market_price:12.0, total:21.48},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:221.972475, quota_price:1.0, market_price:1.0, total:221.97}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:7.8, quota_price:691.24, market_price:691.24, total:5391.67},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.5, quota_price:890.11, market_price:890.11, total:2225.28},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  },
  {
    code: '1-2-67',
    name: '模锻锤 落锤质量16t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 206572.38,
    labor_fee: 112951.18,
    material_fee: 6051.08,
    mechanical_fee: 12411.4,
    source_screenshot: 'bandicam 2026-04-27 16-33-21-157.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:173.798, quota_price:87.1, market_price:87.1, total:15137.81},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:625.672, quota_price:134.0, market_price:134.0, total:83840.05},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:69.519, quota_price:201.0, market_price:201.0, total:13973.32}
    ],
    material_details: [
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.5, quota_price:20.8, market_price:20.8, total:10.4},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.194, quota_price:1930.0, market_price:1930.0, total:374.42},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.455, quota_price:1048.0, market_price:1048.0, total:1524.84},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:25.5, quota_price:7.0, market_price:7.0, total:178.5},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:73.5, quota_price:8.44, market_price:8.44, total:620.34},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:6.0, quota_price:3.03, market_price:3.03, total:18.18},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:15.15, quota_price:11.2, market_price:11.2, total:169.68},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:14.0, quota_price:33.0, market_price:33.0, total:462.0},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10', unit:'kg', quantity:8.0, quota_price:18.5, market_price:18.5, total:148.0},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:8.0, quota_price:16.3, market_price:16.3, total:130.4},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:1.35, quota_price:70.0, market_price:70.0, total:94.5},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:450.0, quota_price:3.69, market_price:3.69, total:1660.5},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:120.0, quota_price:1.02, market_price:1.02, total:122.4},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:25.0, quota_price:4.6, market_price:4.6, total:115.0},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:3.0, quota_price:12.0, market_price:12.0, total:36.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:288.1464, quota_price:1.0, market_price:1.0, total:288.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:3.0, quota_price:573.79, market_price:573.79, total:1721.37},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:11.0, quota_price:691.24, market_price:691.24, total:7603.64},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990403015', name:'平板拖车组', spec:'装载质量(t) 15', unit:'台班', quantity:0.5, quota_price:832.11, market_price:832.11, total:416.06}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-33-05-280.jpg'] = '1-2-66';
screenshotMap['bandicam 2026-04-27 16-33-08-083.jpg'] = '1-2-66';
screenshotMap['bandicam 2026-04-27 16-33-21-157.jpg'] = '1-2-67';
screenshotMap['bandicam 2026-04-27 16-33-24-943.jpg'] = '1-2-67';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 336');
