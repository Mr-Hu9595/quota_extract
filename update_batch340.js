const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-76',
    name: '剪切机及弯曲校正机 设备重量10t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 9266.8,
    labor_fee: 4094.64,
    material_fee: 397.29,
    mechanical_fee: 1829.28,
    source_screenshot: 'bandicam 2026-04-27 16-35-42-491.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:6.3, quota_price:87.1, market_price:87.1, total:548.73},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:22.682, quota_price:134, market_price:134, total:3039.39},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.52, quota_price:201, market_price:201, total:506.52}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:24.48, quota_price:4.5, market_price:4.5, total:110.16},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:22.28, quota_price:4.5, market_price:4.5, total:100.26},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:2, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.055, quota_price:1930, market_price:1930, total:106.15},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048, market_price:1048, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7, market_price:7, total:1.07},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.2, quota_price:8.44, market_price:8.44, total:35.45},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.303, quota_price:12.1, market_price:12.1, total:3.67},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.253, quota_price:11.2, market_price:11.2, total:2.83},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:18.91816, quota_price:1, market_price:1, total:18.92}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:38.612, quota_price:0.7, market_price:0.7, total:27.03}
    ]
  },
  {
    code: '1-2-77',
    name: '剪切机及弯曲校正机 设备重量12t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 10720,
    labor_fee: 4758.45,
    material_fee: 464.28,
    mechanical_fee: 2067.73,
    source_screenshot: 'bandicam 2026-04-27 16-35-51-075.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:7.322, quota_price:87.1, market_price:87.1, total:637.75},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:26.358, quota_price:134, market_price:134, total:3531.97},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.929, quota_price:201, market_price:201, total:588.73}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:26.93, quota_price:4.5, market_price:4.5, total:121.19},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:24.51, quota_price:4.5, market_price:4.5, total:110.3},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.5, quota_price:5.18, market_price:5.18, total:12.95},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.329, quota_price:4.1, market_price:4.1, total:1.35},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.069, quota_price:1930, market_price:1930, total:133.17},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.009, quota_price:1048, market_price:1048, total:9.43},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.191, quota_price:7, market_price:7, total:1.34},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.25, quota_price:8.44, market_price:8.44, total:44.31},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.379, quota_price:12.1, market_price:12.1, total:4.59},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:0.316, quota_price:11.2, market_price:11.2, total:3.54},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:22.10765, quota_price:1, market_price:1, total:22.11}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.75, quota_price:691.24, market_price:691.24, total:1209.67},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:0.5, quota_price:1058.74, market_price:1058.74, total:529.37},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:48.265, quota_price:0.7, market_price:0.7, total:33.79}
    ]
  },
  {
    code: '1-2-78',
    name: '剪切机及弯曲校正机 设备重量15t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 13146.58,
    labor_fee: 6108.43,
    material_fee: 495.79,
    mechanical_fee: 2240.54,
    source_screenshot: 'bandicam 2026-04-27 16-36-00-901.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.399, quota_price:87.1, market_price:87.1, total:818.65},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:33.836, quota_price:134, market_price:134, total:4534.02},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.76, quota_price:201, market_price:201, total:755.76}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:28.92, quota_price:4.5, market_price:4.5, total:130.14},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:26.4, quota_price:4.5, market_price:4.5, total:118.8},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:3.0, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.075, quota_price:1930.0, market_price:1930.0, total:144.75},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.007, quota_price:1048.0, market_price:1048.0, total:7.34},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.204, quota_price:7.0, market_price:7.0, total:1.43},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.25, quota_price:8.44, market_price:8.44, total:44.31},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.404, quota_price:12.1, market_price:12.1, total:4.89},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:0.253, quota_price:11.2, market_price:11.2, total:2.83},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:23.608925, quota_price:1.0, market_price:1.0, total:23.61}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.0, quota_price:691.24, market_price:691.24, total:1382.48},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:0.5, quota_price:1058.74, market_price:1058.74, total:529.37},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
    ]
  },
  {
    code: '1-2-79',
    name: '剪切机及弯曲校正机 设备重量20t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 16100.58,
    labor_fee: 7380.71,
    material_fee: 748.19,
    mechanical_fee: 2940.03,
    source_screenshot: 'bandicam 2026-04-27 16-36-10-264.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:11.356, quota_price:87.1, market_price:87.1, total:989.11},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:40.884, quota_price:134, market_price:134, total:5478.46},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:4.543, quota_price:201, market_price:201, total:913.14}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:36.56, quota_price:4.5, market_price:4.5, total:164.52},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:33.2, quota_price:4.5, market_price:4.5, total:149.4},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:3, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930, market_price:1930, total:241.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048, market_price:1048, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.255, quota_price:7, market_price:7, total:1.79},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:6.3, quota_price:8.44, market_price:8.44, total:53.17},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.606, quota_price:12.1, market_price:12.1, total:7.33},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.455, quota_price:11.2, market_price:11.2, total:5.1},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:35.628005, quota_price:1, market_price:1, total:35.63}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2, quota_price:691.24, market_price:691.24, total:1382.48},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:0.5, quota_price:2378.65, market_price:2378.65, total:1189.33},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'50030', name:'安拆费及场外运费', spec:'', unit:'元', quantity:6.375, quota_price:0.9, market_price:0.9, total:5.74},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:48.265, quota_price:0.7, market_price:0.7, total:33.79}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-35-42-491.jpg'] = '1-2-76';
screenshotMap['bandicam 2026-04-27 16-35-51-075.jpg'] = '1-2-77';
screenshotMap['bandicam 2026-04-27 16-36-00-901.jpg'] = '1-2-78';
screenshotMap['bandicam 2026-04-27 16-36-10-264.jpg'] = '1-2-79';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 340');
