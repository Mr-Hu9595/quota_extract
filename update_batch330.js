const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-20',
    name: '机械压力机 设备重量650t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 291043.27,
    labor_fee: 153159.65,
    material_fee: 7776.24,
    mechanical_fee: 107107.38,
    source_screenshot: 'bandicam 2026-04-27 16-19-10-986.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:235.666, quota_price:87.1, market_price:87.1, total:20526.51},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:848.399, quota_price:134.0, market_price:134.0, total:113685.47},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:94.267, quota_price:201.0, market_price:201.0, total:18947.67}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:339.55, quota_price:4.5, market_price:4.5, total:1527.98},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:328.34, quota_price:4.5, market_price:4.5, total:1477.53},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.52, quota_price:20.8, market_price:20.8, total:10.82},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.575, quota_price:4.1, market_price:4.1, total:6.46},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.231, quota_price:1930.0, market_price:1930.0, total:445.83},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.234, quota_price:1048.0, market_price:1048.0, total:2341.23},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:13.26, quota_price:7.0, market_price:7.0, total:92.82},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:145.005, quota_price:8.44, market_price:8.44, total:1223.84},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:28.987, quota_price:12.1, market_price:12.1, total:350.74},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:16.968, quota_price:11.2, market_price:11.2, total:190.04},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:4.6, quota_price:33.0, market_price:33.0, total:151.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:5.5, quota_price:12.0, market_price:12.0, total:66.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:395.80835, quota_price:1.0, market_price:1.0, total:395.81}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:7.0, quota_price:890.11, market_price:890.11, total:6230.77},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:15.0, quota_price:1058.74, market_price:1058.74, total:15881.1},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-21',
    name: '机械压力机 设备重量750t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 336271.55,
    labor_fee: 175143.71,
    material_fee: 9615.10,
    mechanical_fee: 135414.76,
    source_screenshot: 'bandicam 2026-04-27 16-19-26-881.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:269.494, quota_price:87.1, market_price:87.1, total:23472.93},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:970.176, quota_price:134.0, market_price:134.0, total:130003.58},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:107.797, quota_price:201.0, market_price:201.0, total:21667.2}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:395.7, quota_price:4.5, market_price:4.5, total:1780.65},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:379.77, quota_price:4.5, market_price:4.5, total:1708.97},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.6, quota_price:20.8, market_price:20.8, total:12.48},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:6.0, quota_price:5.18, market_price:5.18, total:31.08},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.575, quota_price:4.1, market_price:4.1, total:6.46},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.269, quota_price:1930.0, market_price:1930.0, total:519.17},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.578, quota_price:1048.0, market_price:1048.0, total:2701.74},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:15.3, quota_price:7.0, market_price:7.0, total:107.1},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:167.37, quota_price:8.44, market_price:8.44, total:1412.6},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:33.532, quota_price:12.1, market_price:12.1, total:405.74},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:19.594, quota_price:11.2, market_price:11.2, total:219.45},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:5.3, quota_price:33.0, market_price:33.0, total:174.9},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:6.4, quota_price:12.0, market_price:12.0, total:76.8},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:457.856965, quota_price:1.0, market_price:1.0, total:457.86}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:10.0, quota_price:890.11, market_price:890.11, total:8901.1},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:16.0, quota_price:1058.74, market_price:1058.74, total:16939.84},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.5, quota_price:3063.65, market_price:3063.65, total:4595.48},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.5, quota_price:4551.82, market_price:4551.82, total:6827.73}
    ]
  },
  {
    code: '1-2-22',
    name: '机械压力机 设备重量850t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 375252.73,
    labor_fee: 223814.97,
    material_fee: 11838.58,
    mechanical_fee: 125821.49,
    source_screenshot: 'bandicam 2026-04-27 16-20-02-095.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:344.356, quota_price:87.1, market_price:87.1, total:29993.41},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1239.528, quota_price:134.0, market_price:134.0, total:166096.75},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:137.725, quota_price:201.0, market_price:201.0, total:27624.73}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:459.38, quota_price:4.5, market_price:4.5, total:2067.21},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:441.23, quota_price:4.5, market_price:4.5, total:1985.54},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.72, quota_price:20.8, market_price:20.8, total:14.98},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:6.5, quota_price:5.18, market_price:5.18, total:33.67},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.575, quota_price:4.1, market_price:4.1, total:6.46},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.323, quota_price:1930.0, market_price:1930.0, total:623.39},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:3.094, quota_price:1048.0, market_price:1048.0, total:3242.51},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:18.36, quota_price:7.0, market_price:7.0, total:128.52},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:200.88, quota_price:8.44, market_price:8.44, total:1695.43},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:40.24, quota_price:12.1, market_price:12.1, total:486.9},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:23.52, quota_price:11.2, market_price:11.2, total:263.42},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6.4, quota_price:33.0, market_price:33.0, total:211.2},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:7.7, quota_price:12.0, market_price:12.0, total:92.4},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:501.76554, quota_price:1.0, market_price:1.0, total:501.77}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:11.0, quota_price:890.11, market_price:890.11, total:9791.21},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:17.0, quota_price:1058.74, market_price:1058.74, total:17998.58},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.5, quota_price:3063.65, market_price:3063.65, total:4595.48},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.5, quota_price:4551.82, market_price:4551.82, total:6827.73},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2.0, quota_price:83.57, market_price:83.57, total:167.14}
    ]
  },
  {
    code: '1-2-23',
    name: '机械压力机 设备重量950t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 415707.02,
    labor_fee: 250636.21,
    material_fee: 13542.27,
    mechanical_fee: 137528.54,
    source_screenshot: 'bandicam 2026-04-27 16-20-31-256.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:385.595, quota_price:87.1, market_price:87.1, total:33585.32},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1388.238, quota_price:134.0, market_price:134.0, total:186023.89},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:154.248, quota_price:201.0, market_price:201.0, total:31003.85}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:516.72, quota_price:4.5, market_price:4.5, total:2325.24},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:496.5, quota_price:4.5, market_price:4.5, total:2234.25},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.84, quota_price:20.8, market_price:20.8, total:17.47},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:7.0, quota_price:5.18, market_price:5.18, total:36.26},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.89, quota_price:4.1, market_price:4.1, total:7.75},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.364, quota_price:1930.0, market_price:1930.0, total:702.52},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:3.482, quota_price:1048.0, market_price:1048.0, total:3649.14},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:20.67, quota_price:7.0, market_price:7.0, total:144.69},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:226.11, quota_price:8.44, market_price:8.44, total:1908.37},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:45.303, quota_price:12.1, market_price:12.1, total:548.17},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:26.472, quota_price:11.2, market_price:11.2, total:296.49},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:7.2, quota_price:33.0, market_price:33.0, total:237.6},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:8.7, quota_price:12.0, market_price:12.0, total:104.4},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:539.37299, quota_price:1.0, market_price:1.0, total:539.37}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:11.0, quota_price:890.11, market_price:890.11, total:9791.21},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:18.0, quota_price:1058.74, market_price:1058.74, total:19057.32},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:2.0, quota_price:3063.65, market_price:3063.65, total:6127.3},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:2.0, quota_price:4551.82, market_price:4551.82, total:9103.64},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:2.0, quota_price:83.57, market_price:83.57, total:167.14}
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