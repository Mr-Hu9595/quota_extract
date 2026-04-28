const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-37',
    name: '液压机 设备重量200t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 135663.34,
    labor_fee: 68492.16,
    material_fee: 6928.35,
    mechanical_fee: 20138.41,
    source_screenshot: 'bandicam 2026-04-27 16-25-50-938.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:105.365, quota_price:87.1, market_price:87.1, total:9177.29},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:379.313, quota_price:134.0, market_price:134.0, total:50828.54},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:42.146, quota_price:201.0, market_price:201.0, total:8481.35}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:169.59, quota_price:4.5, market_price:4.5, total:763.16},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:147.54, quota_price:4.5, market_price:4.5, total:663.93},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:9.5, quota_price:5.18, market_price:5.18, total:49.21},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.1, quota_price:4.1, market_price:4.1, total:8.61},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.603, quota_price:1048.0, market_price:1048.0, total:631.94},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:45.645, quota_price:7.0, market_price:7.0, total:319.52},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:93.555, quota_price:8.44, market_price:8.44, total:789.60},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:49.028, quota_price:12.1, market_price:12.1, total:593.24},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:5.557, quota_price:11.2, market_price:11.2, total:62.24},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:50.0, quota_price:0.88, market_price:0.88, total:44.00},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:2.83, quota_price:33.0, market_price:33.0, total:93.39},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.85, quota_price:12.0, market_price:12.0, total:34.20},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:500.0, quota_price:3.33, market_price:3.33, total:1665.00},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.16, quota_price:20.8, market_price:20.8, total:3.33},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:150.77, quota_price:3.4, market_price:3.4, total:512.62},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:2.5, quota_price:5.72, market_price:5.72, total:14.30},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:1.8, quota_price:15.0, market_price:15.0, total:27.00},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:14.28, quota_price:3.82, market_price:3.82, total:54.55},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:4.76, quota_price:8.82, market_price:8.82, total:41.98},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:1.0, quota_price:40.0, market_price:40.0, total:40.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:329.0, quota_price:1.0, market_price:1.0, total:329.00}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5.0, quota_price:890.11, market_price:890.11, total:4450.55},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:8.0, quota_price:1017.25, market_price:1017.25, total:8138.00},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-38',
    name: '液压机 设备重量280t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 174998.27,
    labor_fee: 90118.12,
    material_fee: 7893.85,
    mechanical_fee: 18354.24,
    source_screenshot: 'bandicam 2026-04-27 16-26-15-495.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:138.639, quota_price:87.1, market_price:87.1, total:12075.46},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:499.061, quota_price:134.0, market_price:134.0, total:66874.17},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:55.451, quota_price:201.0, market_price:201.0, total:11146.65}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:193.27, quota_price:4.5, market_price:4.5, total:869.72},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:168.23, quota_price:4.5, market_price:4.5, total:757.04},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:10.4, quota_price:5.18, market_price:5.18, total:53.87},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.625, quota_price:4.1, market_price:4.1, total:10.76},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.128, quota_price:1930.0, market_price:1930.0, total:247.04},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.859, quota_price:1048.0, market_price:1048.0, total:900.23},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:59.109, quota_price:7.0, market_price:7.0, total:413.76},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:118.713, quota_price:8.44, market_price:8.44, total:1001.94},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:61.964, quota_price:12.1, market_price:12.1, total:749.76},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:7.121, quota_price:11.2, market_price:11.2, total:79.76},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:65.33, quota_price:0.88, market_price:0.88, total:57.49},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:3.59, quota_price:33.0, market_price:33.0, total:118.47},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:3.58, quota_price:12.0, market_price:12.0, total:42.96},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:450.0, quota_price:3.33, market_price:3.33, total:1498.50},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.2, quota_price:20.8, market_price:20.8, total:4.16},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:188.46, quota_price:3.4, market_price:3.4, total:640.76},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:2.5, quota_price:5.72, market_price:5.72, total:14.30},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:1.8, quota_price:15.0, market_price:15.0, total:27.00},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:18.36, quota_price:3.82, market_price:3.82, total:70.14},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:6.12, quota_price:8.82, market_price:8.82, total:53.98},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:1.0, quota_price:40.0, market_price:40.0, total:40.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:380.88, quota_price:1.0, market_price:1.0, total:380.88}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5.0, quota_price:890.11, market_price:890.11, total:4450.55},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:8.0, quota_price:1017.25, market_price:1017.25, total:8138.00},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-39',
    name: '液压机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 218977.44,
    labor_fee: 111955.29,
    material_fee: 9461.59,
    mechanical_fee: 20186.25,
    source_screenshot: 'bandicam 2026-04-27 16-26-49-922.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:172.265, quota_price:87.1, market_price:87.1, total:15004.28},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:620.156, quota_price:134.0, market_price:134.0, total:83100.90},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:68.906, quota_price:201.0, market_price:201.0, total:13850.11}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:230.79, quota_price:4.5, market_price:4.5, total:1038.56},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:196.73, quota_price:4.5, market_price:4.5, total:885.29},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:11.1, quota_price:5.18, market_price:5.18, total:57.50},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.625, quota_price:4.1, market_price:4.1, total:10.76},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.158, quota_price:1930.0, market_price:1930.0, total:304.94},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.203, quota_price:1048.0, market_price:1048.0, total:1260.74},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:83.038, quota_price:7.0, market_price:7.0, total:581.27},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:166.11, quota_price:8.44, market_price:8.44, total:1401.97},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:86.557, quota_price:12.1, market_price:12.1, total:1047.34},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:9.959, quota_price:11.2, market_price:11.2, total:111.54},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:91.07, quota_price:0.88, market_price:0.88, total:80.14},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:5.02, quota_price:33.0, market_price:33.0, total:165.66},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:4.96, quota_price:12.0, market_price:12.0, total:59.52},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:420.0, quota_price:3.33, market_price:3.33, total:1398.60},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.28, quota_price:20.8, market_price:20.8, total:5.82},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:263.85, quota_price:3.4, market_price:3.4, total:897.09},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:3.0, quota_price:5.72, market_price:5.72, total:17.16},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:2.2, quota_price:15.0, market_price:15.0, total:33.00},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:24.48, quota_price:3.82, market_price:3.82, total:93.51},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:8.16, quota_price:8.82, market_price:8.82, total:71.97},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:1.5, quota_price:40.0, market_price:40.0, total:60.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:479.12, quota_price:1.0, market_price:1.0, total:479.12}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.5, quota_price:890.11, market_price:890.11, total:5785.72},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:10.0, quota_price:1058.74, market_price:1058.74, total:10587.40},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65}
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