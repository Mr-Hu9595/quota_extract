const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-40',
    name: '液压机 设备重量500t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 294286.16,
    labor_fee: 154636.39,
    material_fee: 13015.43,
    mechanical_fee: 23362.47,
    source_screenshot: 'bandicam 2026-04-27 16-27-05-556.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:237.939, quota_price:87.1, market_price:87.1, total:20724.49},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:856.58, quota_price:134.0, market_price:134.0, total:114781.72},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:95.175, quota_price:201.0, market_price:201.0, total:19130.18}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:249.77, quota_price:4.5, market_price:4.5, total:1123.97},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:220.0, quota_price:4.5, market_price:4.5, total:990.00},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:12.0, quota_price:5.18, market_price:5.18, total:62.16},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.625, quota_price:4.1, market_price:4.1, total:10.76},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.188, quota_price:1930.0, market_price:1930.0, total:362.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.719, quota_price:1048.0, market_price:1048.0, total:1801.51},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:118.453, quota_price:7.0, market_price:7.0, total:829.17},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:237.353, quota_price:8.44, market_price:8.44, total:2003.26},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:123.765, quota_price:12.1, market_price:12.1, total:1497.56},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:14.231, quota_price:11.2, market_price:11.2, total:159.39},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:130.33, quota_price:0.88, market_price:0.88, total:114.69},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:7.17, quota_price:33.0, market_price:33.0, total:236.61},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:7.12, quota_price:12.0, market_price:12.0, total:85.44},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:450.0, quota_price:3.33, market_price:3.33, total:1498.50},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.4, quota_price:20.8, market_price:20.8, total:8.32},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:376.92, quota_price:3.4, market_price:3.4, total:1281.53},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:3.0, quota_price:5.72, market_price:5.72, total:17.16},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:2.2, quota_price:15.0, market_price:15.0, total:33.00},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:33.66, quota_price:3.82, market_price:3.82, total:128.58},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:11.22, quota_price:8.82, market_price:8.82, total:98.96},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:1.5, quota_price:40.0, market_price:40.0, total:60.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:620.17, quota_price:1.0, market_price:1.0, total:620.17}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.5, quota_price:890.11, market_price:890.11, total:5785.72},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:13.0, quota_price:1058.74, market_price:1058.74, total:13763.62},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  },
  {
    code: '1-2-41',
    name: '液压机 设备重量700t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 397081.49,
    labor_fee: 208392.54,
    material_fee: 17596.34,
    mechanical_fee: 28361.27,
    source_screenshot: 'bandicam 2026-04-27 16-27-23-348.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:320.512, quota_price:87.1, market_price:87.1, total:27916.59},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1153.842, quota_price:134.0, market_price:134.0, total:154614.83},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:128.205, quota_price:201.0, market_price:201.0, total:25761.20}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:274.89, quota_price:4.5, market_price:4.5, total:1237.01},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:240.54, quota_price:4.5, market_price:4.5, total:1082.43},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:13.2, quota_price:5.18, market_price:5.18, total:68.38},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:3.15, quota_price:4.1, market_price:4.1, total:12.92},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.225, quota_price:1930.0, market_price:1930.0, total:434.25},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.062, quota_price:1048.0, market_price:1048.0, total:2160.98},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:142.19, quota_price:7.0, market_price:7.0, total:995.33},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:284.81, quota_price:8.44, market_price:8.44, total:2404.20},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:148.49, quota_price:12.1, market_price:12.1, total:1796.73},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:17.07, quota_price:11.2, market_price:11.2, total:191.18},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:156.42, quota_price:0.88, market_price:0.88, total:137.65},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8.61, quota_price:33.0, market_price:33.0, total:284.13},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:8.54, quota_price:12.0, market_price:12.0, total:102.48},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:465.0, quota_price:3.33, market_price:3.33, total:1548.45},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.48, quota_price:20.8, market_price:20.8, total:9.98},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:452.35, quota_price:3.4, market_price:3.4, total:1537.99},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:3.25, quota_price:5.72, market_price:5.72, total:18.59},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:2.4, quota_price:15.0, market_price:15.0, total:36.00},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:39.78, quota_price:3.82, market_price:3.82, total:151.96},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:13.26, quota_price:8.82, market_price:8.82, total:116.95},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:1.75, quota_price:40.0, market_price:40.0, total:70.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:739.0, quota_price:1.0, market_price:1.0, total:739.00}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:7.0, quota_price:890.11, market_price:890.11, total:6230.77},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:15.0, quota_price:1058.74, market_price:1058.74, total:15881.10},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.5, quota_price:3063.65, market_price:3063.65, total:4595.48},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-42',
    name: '液压机 设备重量950t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 515184.66,
    labor_fee: 276206.33,
    material_fee: 21938.96,
    mechanical_fee: 33739.98,
    source_screenshot: 'bandicam 2026-04-27 16-27-42-696.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:424.998, quota_price:87.1, market_price:87.1, total:37017.33},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1529.994, quota_price:134.0, market_price:134.0, total:205019.20},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:169.999, quota_price:201.0, market_price:201.0, total:34169.80}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:319.2, quota_price:4.5, market_price:4.5, total:1436.40},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:277.03, quota_price:4.5, market_price:4.5, total:1246.64},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:18.0, quota_price:5.18, market_price:5.18, total:93.24},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:3.15, quota_price:4.1, market_price:4.1, total:12.92},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.338, quota_price:1930.0, market_price:1930.0, total:652.34},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:3.266, quota_price:1048.0, market_price:1048.0, total:3422.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:225.134, quota_price:7.0, market_price:7.0, total:1575.94},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:451.259, quota_price:8.44, market_price:8.44, total:3808.63},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:235.098, quota_price:12.1, market_price:12.1, total:2844.69},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:27.038, quota_price:11.2, market_price:11.2, total:302.83},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:247.52, quota_price:0.88, market_price:0.88, total:217.82},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:13.62, quota_price:33.0, market_price:33.0, total:449.46},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:13.51, quota_price:12.0, market_price:12.0, total:162.12},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:500.0, quota_price:3.33, market_price:3.33, total:1665.00},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.76, quota_price:20.8, market_price:20.8, total:15.81},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:716.15, quota_price:3.4, market_price:3.4, total:2434.91},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:3.5, quota_price:5.72, market_price:5.72, total:20.02},
      {code:'03011819', name:'六角螺栓带螺母', spec:'M12*75以下', unit:'套', quantity:2.6, quota_price:15.0, market_price:15.0, total:39.00},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:61.2, quota_price:3.82, market_price:3.82, total:233.78},
      {code:'14390141', name:'乙炔气', spec:'', unit:'m3', quantity:20.4, quota_price:8.82, market_price:8.82, total:179.93},
      {code:'19050206', name:'螺纹球阀', spec:'DN20', unit:'个', quantity:2.0, quota_price:40.0, market_price:40.0, total:80.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:1044.71, quota_price:1.0, market_price:1.0, total:1044.71}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:8.0, quota_price:890.11, market_price:890.11, total:7120.88},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:18.0, quota_price:1058.74, market_price:1058.74, total:19057.32},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:2.0, quota_price:3063.65, market_price:3063.65, total:6127.30}
    ]
  },
  {
    code: '1-2-43',
    name: '自动锻压机及锻机操作机 设备重量1t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 1537.50,
    labor_fee: 811.20,
    material_fee: 115.12,
    mechanical_fee: 105.07,
    source_screenshot: 'bandicam 2026-04-27 16-28-13-323.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.248, quota_price:87.1, market_price:87.1, total:108.70},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:4.494, quota_price:134.0, market_price:134.0, total:602.20},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.499, quota_price:201.0, market_price:201.0, total:100.30}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:6.24, quota_price:4.5, market_price:4.5, total:28.08},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:5.3, quota_price:4.5, market_price:4.5, total:23.85},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.65, quota_price:5.18, market_price:5.18, total:3.37},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.014, quota_price:1930.0, market_price:1930.0, total:27.02},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.102, quota_price:7.0, market_price:7.0, total:0.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:2.1, quota_price:8.44, market_price:8.44, total:17.72},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.70},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5.48, quota_price:1.0, market_price:1.0, total:5.48}
    ],
    mechanical_details: [
      {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.1, quota_price:83.57, market_price:83.57, total:8.36}
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