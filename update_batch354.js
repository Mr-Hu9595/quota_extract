const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-55',
    name: '自动锻压机及锻机操作机 设备重量150t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 89926.89,
    labor_fee: 70833.18,
    material_fee: 1200.17,
    mechanical_fee: 13654.7,
    source_screenshot: 'bandicam 2026-04-27 16-30-23-568.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2, quota_price:134, market_price:134, total:268},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:7, quota_price:134, market_price:134, total:938},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:9, quota_price:134, market_price:134, total:1206},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2, quota_price:134, market_price:134, total:268},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:358.12, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.516, quota_price:1048, market_price:1048, total:540.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.04, quota_price:7, market_price:7, total:14.28},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:42, quota_price:8.44, market_price:8.44, total:354.48},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.06, quota_price:12.1, market_price:12.1, total:73.33},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.12, quota_price:20.8, market_price:20.8, total:2.5},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:169.55679, quota_price:1, market_price:1, total:169.56}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.5, quota_price:890.11, market_price:890.11, total:3115.39},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:4.5, quota_price:1058.74, market_price:1058.74, total:4764.33},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:48.265, quota_price:0.7, market_price:0.7, total:33.79}
    ]
  },
  {
    code: '1-2-65',
    name: '楔锻锤 落锤质量5t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 97256.33,
    labor_fee: 52142.61,
    material_fee: 2361.84,
    mechanical_fee: 9523.01,
    source_screenshot: 'bandicam 2026-04-27 16-32-44-004.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:414.39, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:39.9, quota_price:8.44, market_price:8.44, total:336.76},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:3.5, quota_price:3.03, market_price:3.03, total:10.61},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:5.05, quota_price:12.1, market_price:12.1, total:61.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:10.1, quota_price:11.2, market_price:11.2, total:113.12},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8.47, quota_price:33, market_price:33, total:279.51},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10 (4*4)', unit:'kg', quantity:3, quota_price:18.5, market_price:18.5, total:55.5},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:4.4, quota_price:16.3, market_price:16.3, total:71.72},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:1.08, quota_price:70, market_price:70, total:75.6},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:280, quota_price:3.69, market_price:3.69, total:1033.2},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:65, quota_price:1.02, market_price:1.02, total:66.3},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:20, quota_price:4.6, market_price:4.6, total:92},
      {code:'31190116', name:'红铆纸', spec:'0.2~0.5', unit:'kg', quantity:0.9, quota_price:12, market_price:12, total:10.8},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:155.6088, quota_price:1, market_price:1, total:155.61}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:6.1, quota_price:691.24, market_price:691.24, total:4216.56},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  },
  {
    code: '1-2-88',
    name: '剪切机及弯曲校正机 设备重量250t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 137549.15,
    labor_fee: 0,
    material_fee: 186.87,
    mechanical_fee: 18326.7,
    source_screenshot: 'bandicam 2026-04-27 16-40-34-202.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:564.91, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:186.865325, quota_price:1, market_price:1, total:186.87}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:7, quota_price:1058.74, market_price:1058.74, total:7411.18},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2, quota_price:83.57, market_price:83.57, total:167.14}
    ]
  },
  {
    code: '1-2-89',
    name: '剪切机及弯曲校正机 设备重量300t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 153669.2,
    labor_fee: 0,
    material_fee: 222.27,
    mechanical_fee: 19543.53,
    source_screenshot: 'bandicam 2026-04-27 16-40-51-649.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:634.48, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:222.266349, quota_price:1, market_price:1, total:222.27}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2, quota_price:83.57, market_price:83.57, total:167.14},
      {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:25.5, quota_price:0.9, market_price:0.9, total:22.95},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:193.06, quota_price:0.7, market_price:0.7, total:135.14}
    ]
  },
  {
    code: '1-2-90',
    name: '剪切机及弯曲校正机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 170007.94,
    labor_fee: 0,
    material_fee: 266,
    mechanical_fee: 22154.43,
    source_screenshot: 'bandicam 2026-04-27 16-41-06-446.jpg',
    labor_details: [
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:697.66, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:265.995908, quota_price:1, market_price:1, total:266}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4, quota_price:890.11, market_price:890.11, total:3560.44},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:9, quota_price:1058.74, market_price:1058.74, total:9528.66},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2, quota_price:83.57, market_price:83.57, total:167.14},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:193.06, quota_price:0.7, market_price:0.7, total:135.14}
    ]
  },
  {
    code: '1-2-91',
    name: '剪切机及弯曲校正机 设备重量400t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 184521.79,
    labor_fee: 93130.89,
    material_fee: 6719.32,
    mechanical_fee: 75932.51,
    source_screenshot: 'bandicam 2026-04-27 16-41-16-996.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:143.301, quota_price:87.1, market_price:87.1, total:12481.52},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:515.881, quota_price:134, market_price:134, total:69128.05},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:57.32, quota_price:201, market_price:201, total:11521.32}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:157.29, quota_price:4.5, market_price:4.5, total:707.81},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:133.46, quota_price:4.5, market_price:4.5, total:600.57},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:25.94, quota_price:5.18, market_price:5.18, total:134.37},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:2.563, quota_price:4.1, market_price:4.1, total:10.51},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.931, quota_price:1930, market_price:1930, total:1796.83},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.678, quota_price:1048, market_price:1048, total:1758.54},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.556, quota_price:7, market_price:7, total:10.89},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:115.356, quota_price:8.44, market_price:8.44, total:973.6},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:18.494, quota_price:12.1, market_price:12.1, total:223.78},
      {code:'14090119', name:'黄油甘油', spec:'', unit:'kg', quantity:12.329, quota_price:11.2, market_price:11.2, total:138.08},
      {code:'15130163', name:'聚氯乙烯泡沫塑料', spec:'', unit:'kg', quantity:1.678, quota_price:21.6, market_price:21.6, total:36.24},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.391, quota_price:20.8, market_price:20.8, total:8.13},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:319.968147, quota_price:1, market_price:1, total:319.97}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5, quota_price:890.11, market_price:890.11, total:4450.55},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:10, quota_price:1058.74, market_price:1058.74, total:10587.4},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
  screenshotMap[q.source_screenshot] = q.code;
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 354');