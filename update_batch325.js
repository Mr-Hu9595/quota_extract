const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-31',
    name: '液压机 设备重量30t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 27564.52,
    labor_fee: 790.6,
    material_fee: 796.33,
    mechanical_fee: 4239.20,
    source_screenshot: 'bandicam 2026-04-27 16-24-24-208.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3.4, quota_price:134.0, market_price:134.0, total:455.6},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:0.5, quota_price:134.0, market_price:134.0, total:67.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0}
    ],
    material_details: [
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.1, quota_price:5.18, market_price:5.18, total:26.42},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:5.1, quota_price:7.0, market_price:7.0, total:35.7},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:16.8, quota_price:8.44, market_price:8.44, total:141.79},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:12.12, quota_price:12.1, market_price:12.1, total:146.65},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.01, quota_price:11.2, market_price:11.2, total:11.31},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:15.0, quota_price:0.88, market_price:0.88, total:13.2},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.55, quota_price:33.0, market_price:33.0, total:18.15},
      {code:'19050201', name:'螺纹球阀', spec:'DN15', unit:'个', quantity:0.5, quota_price:26.0, market_price:26.0, total:13.0},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.6, quota_price:12.0, market_price:12.0, total:7.2},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:65.0383, quota_price:1.0, market_price:1.0, total:65.04}
    ],
    mechanical_details: [
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.7, quota_price:890.11, market_price:890.11, total:1513.19},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
    ]
  },
  {
    code: '1-2-32',
    name: '液压机 设备重量40t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 34801.06,
    labor_fee: 17875.22,
    material_fee: 1104.88,
    mechanical_fee: 5192.42,
    source_screenshot: 'bandicam 2026-04-27 16-24-40-567.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3.4, quota_price:134.0, market_price:134.0, total:455.6},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1.0, quota_price:134.0, market_price:134.0, total:134.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:94.86, quota_price:141.33, market_price:141.33, total:13407.62}
    ],
    material_details: [
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.0, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:14.14, quota_price:12.1, market_price:12.1, total:171.09},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.212, quota_price:11.2, market_price:11.2, total:13.57},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:18.0, quota_price:0.88, market_price:0.88, total:15.84},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.7, quota_price:33.0, market_price:33.0, total:23.1},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:0.63, quota_price:5.1, market_price:5.1, total:3.21},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:150.0, quota_price:3.33, market_price:3.33, total:499.5},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.8, quota_price:12.0, market_price:12.0, total:9.6},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'10套', quantity:0.5, quota_price:15.0, market_price:15.0, total:7.5},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:6.12, quota_price:3.82, market_price:3.82, total:23.38},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:2.04, quota_price:8.82, market_price:8.82, total:17.99},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:0.5, quota_price:40.0, market_price:40.0, total:20.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:122.85588, quota_price:1.0, market_price:1.0, total:122.86}
    ],
    mechanical_details: [
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.7, quota_price:890.11, market_price:890.11, total:1513.19},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65}
    ]
  },
  {
    code: '1-2-34',
    name: '液压机 设备重量70t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 57327.49,
    labor_fee: 1862.6,
    material_fee: 441.84,
    mechanical_fee: 9030.62,
    source_screenshot: 'bandicam 2026-04-27 16-25-18-717.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1.5, quota_price:134.0, market_price:134.0, total:201.0},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:4.2, quota_price:134.0, market_price:134.0, total:562.8},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:6.2, quota_price:134.0, market_price:134.0, total:830.8},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2.0, quota_price:134.0, market_price:134.0, total:268.0},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:221.66, quota_price:141.33, market_price:141.33, total:31328.46}
    ],
    material_details: [
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:52.77, quota_price:3.4, market_price:3.4, total:179.42},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:1.63, quota_price:5.72, market_price:5.72, total:9.32},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'10套', quantity:1.0, quota_price:15.0, market_price:15.0, total:15.0},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:8.16, quota_price:3.82, market_price:3.82, total:31.17},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:2.72, quota_price:8.82, market_price:8.82, total:23.99},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:0.5, quota_price:40.0, market_price:40.0, total:20.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:162.935425, quota_price:1.0, market_price:1.0, total:162.94}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.1, quota_price:890.11, market_price:890.11, total:1869.23},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:3.1, quota_price:1017.25, market_price:1017.25, total:3153.48},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
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