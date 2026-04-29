const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-33',
    name: '液压机 设备重量50t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 42224.98,
    labor_fee: 21888.66,
    material_fee: 1211.87,
    mechanical_fee: 16013.69,
    source_screenshot: 'bandicam 2026-04-27 16-24-57-297.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:33.674, quota_price:87.1, market_price:87.1, total:2933.01},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:121.222, quota_price:134.0, market_price:134.0, total:16243.75},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:13.469, quota_price:201.0, market_price:201.0, total:2707.27}
    ],
    material_details: [
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:25.2, quota_price:8.44, market_price:8.44, total:212.69},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:15.15, quota_price:12.1, market_price:12.1, total:183.32},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.515, quota_price:11.2, market_price:11.2, total:16.97},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:18.0, quota_price:0.88, market_price:0.88, total:15.84},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.8, quota_price:33.0, market_price:33.0, total:26.4},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:1.3, quota_price:5.1, market_price:5.1, total:6.63},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:160.0, quota_price:3.33, market_price:3.33, total:532.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.9, quota_price:12.0, market_price:12.0, total:10.8},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'10套', quantity:0.6, quota_price:15.0, market_price:15.0, total:9.0},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:6.12, quota_price:3.82, market_price:3.82, total:23.38},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:2.04, quota_price:8.82, market_price:8.82, total:17.99},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:0.5, quota_price:40.0, market_price:40.0, total:20.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:136.05491, quota_price:1.0, market_price:1.0, total:136.05}
    ],
    mechanical_details: [
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.2, quota_price:890.11, market_price:890.11, total:1958.24},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
    ]
  },
  {
    code: '1-2-34',
    name: '液压机 设备重量70t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 57327.49,
    labor_fee: 27004.1,
    material_fee: 4418.93,
    mechanical_fee: 15910.02,
    source_screenshot: 'bandicam 2026-04-27 16-25-13-863.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:41.551, quota_price:87.1, market_price:87.1, total:3619.09},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:149.585, quota_price:134.0, market_price:134.0, total:20044.39},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:16.62, quota_price:201.0, market_price:201.0, total:3340.62}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:116.89, quota_price:4.5, market_price:4.5, total:526.01},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:103.66, quota_price:4.5, market_price:4.5, total:466.47},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:8.3, quota_price:5.18, market_price:5.18, total:42.99},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:1.575, quota_price:4.1, market_price:4.1, total:6.46},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.075, quota_price:1930.0, market_price:1930.0, total:144.75},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.241, quota_price:1048.0, market_price:1048.0, total:252.57},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:15.3, quota_price:7.0, market_price:7.0, total:107.1},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:33.6, quota_price:8.44, market_price:8.44, total:283.58},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:18.18, quota_price:12.1, market_price:12.1, total:219.98},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.02, quota_price:11.2, market_price:11.2, total:22.62},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:20.0, quota_price:0.88, market_price:0.88, total:17.6},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.06, quota_price:33.0, market_price:33.0, total:34.98},
      {code:'17010171', name:'焊接钢管', spec:'DN15', unit:'m', quantity:1.3, quota_price:5.1, market_price:5.1, total:6.63},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:250.0, quota_price:3.33, market_price:3.33, total:832.5},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.2, quota_price:12.0, market_price:12.0, total:14.4},
      {code:'03131515', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.056, quota_price:20.8, market_price:20.8, total:1.16},
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
  },
  {
    code: '1-2-35',
    name: '液压机 设备重量100t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 76393.5,
    labor_fee: 41162.24,
    material_fee: 5112.65,
    mechanical_fee: 24387.44,
    source_screenshot: 'bandicam 2026-04-27 16-25-37-573.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:63.332, quota_price:87.1, market_price:87.1, total:5516.22},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:227.996, quota_price:134.0, market_price:134.0, total:30551.46},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:25.333, quota_price:201.0, market_price:201.0, total:5091.93}
    ],
    material_details: [
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:75.38, quota_price:3.4, market_price:3.4, total:256.29},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:2.0, quota_price:5.72, market_price:5.72, total:11.44},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'10套', quantity:1.4, quota_price:15.0, market_price:15.0, total:21.0},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:9.18, quota_price:3.82, market_price:3.82, total:35.07},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:3.06, quota_price:8.82, market_price:8.82, total:26.99},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:0.8, quota_price:40.0, market_price:40.0, total:32.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:212.60597, quota_price:1.0, market_price:1.0, total:212.61}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.0, quota_price:890.11, market_price:890.11, total:3560.44},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:5.5, quota_price:1017.25, market_price:1017.25, total:5594.88},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-36',
    name: '液压机 设备重量150t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 107202.77,
    labor_fee: 34855.72,
    material_fee: 4464.72,
    mechanical_fee: 13119.81,
    source_screenshot: 'bandicam 2026-04-27 16-25-28-717.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:53.632, quota_price:87.1, market_price:87.1, total:4671.35},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:193.077, quota_price:134.0, market_price:134.0, total:25872.32},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:21.453, quota_price:201.0, market_price:201.0, total:4312.05}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:120.92, quota_price:4.5, market_price:4.5, total:544.14},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:108.95, quota_price:4.5, market_price:4.5, total:490.28},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:8.9, quota_price:5.18, market_price:5.18, total:46.1},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:2.1, quota_price:4.1, market_price:4.1, total:8.61},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.09, quota_price:1930.0, market_price:1930.0, total:173.7},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.344, quota_price:1048.0, market_price:1048.0, total:360.51},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:24.48, quota_price:7.0, market_price:7.0, total:171.36},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:47.25, quota_price:8.44, market_price:8.44, total:398.79},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:24.24, quota_price:12.1, market_price:12.1, total:293.3},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.828, quota_price:11.2, market_price:11.2, total:31.67},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:25.0, quota_price:0.88, market_price:0.88, total:22.0},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.4, quota_price:33.0, market_price:33.0, total:46.2},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.3, quota_price:12.0, market_price:12.0, total:15.6},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:380.0, quota_price:3.33, market_price:3.33, total:1265.4},
      {code:'03131515', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.08, quota_price:20.8, market_price:20.8, total:1.66},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:75.38, quota_price:3.4, market_price:3.4, total:256.29},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:2.0, quota_price:5.72, market_price:5.72, total:11.44},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'10套', quantity:1.4, quota_price:15.0, market_price:15.0, total:21.0},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:9.18, quota_price:3.82, market_price:3.82, total:35.07},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:3.06, quota_price:8.82, market_price:8.82, total:26.99},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:0.8, quota_price:40.0, market_price:40.0, total:32.0},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:212.60597, quota_price:1.0, market_price:1.0, total:212.61}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.0, quota_price:890.11, market_price:890.11, total:3560.44},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:5.5, quota_price:1017.25, market_price:1017.25, total:5594.88},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65}
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