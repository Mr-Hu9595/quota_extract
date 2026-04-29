const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-96',
    name: '锻造水压机 公称压力2000t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 377497.97,
    labor_fee: 186254.58,
    material_fee: 28884.28,
    mechanical_fee: 162359.11,
    source_screenshot: 'bandicam 2026-04-27 16-44-12-706.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:286.59, quota_price:87.1, market_price:87.1, total:24961.99},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1031.722, quota_price:134, market_price:134, total:138250.75},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:114.636, quota_price:201, market_price:201, total:23041.84}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:535.22, quota_price:4.5, market_price:4.5, total:2408.49},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:528.49, quota_price:4.5, market_price:4.5, total:2378.21},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:120, quota_price:5.18, market_price:5.18, total:621.6},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:294, quota_price:4.1, market_price:4.1, total:1205.4},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:1.031, quota_price:1930, market_price:1930, total:1989.83},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.035, quota_price:1048, market_price:1048, total:2132.68},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:30.6, quota_price:7, market_price:7, total:214.2},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:189, quota_price:8.44, market_price:8.44, total:1595.16},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:101, quota_price:12.1, market_price:12.1, total:1222.1},
      {code:'14090119', name:'黄油特基脂', spec:'', unit:'kg', quantity:40.4, quota_price:11.2, market_price:11.2, total:452.48},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:1200, quota_price:4.29, market_price:4.29, total:5148},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:250, quota_price:3.25, market_price:3.25, total:812.5},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:10, quota_price:3.62, market_price:3.62, total:36.2},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:20, quota_price:2.98, market_price:2.98, total:59.6},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:30, quota_price:3.36, market_price:3.36, total:100.8},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:85, quota_price:3.33, market_price:3.33, total:283.05},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:300, quota_price:3.04, market_price:3.04, total:912},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:500, quota_price:3.4, market_price:3.4, total:1700},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:15, quota_price:22.5, market_price:22.5, total:337.5},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:4.5, quota_price:30.9, market_price:30.9, total:139.05},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:8, quota_price:5.72, market_price:5.72, total:45.76},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:18.8, quota_price:5, market_price:5, total:94},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:20, quota_price:6.85, market_price:6.85, total:137},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 Φ3.2', unit:'kg', quantity:2.5, quota_price:84.1, market_price:84.1, total:210.25},
      {code:'03130973', name:'碳钢气焊条', spec:'Φ2以内', unit:'kg', quantity:30, quota_price:22, market_price:22, total:660},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.57, quota_price:20.8, market_price:20.8, total:11.86},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.5, quota_price:51.09, market_price:51.09, total:127.73},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:9, quota_price:7.5, market_price:7.5, total:67.5},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:150, quota_price:0.88, market_price:0.88, total:132},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:30, quota_price:2.05, market_price:2.05, total:61.5},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:120, quota_price:2.8, market_price:2.8, total:336},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:255, quota_price:3.82, market_price:3.82, total:974.1},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:3.2, quota_price:12.1, market_price:12.1, total:38.72},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:85, quota_price:8.82, market_price:8.82, total:749.7},
      {code:'13010261', name:'铝油', spec:'(厚漆)', unit:'kg', quantity:5, quota_price:8.5, market_price:8.5, total:42.5},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:70, quota_price:15, market_price:15, total:1050},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:25, quota_price:16.3, market_price:16.3, total:407.5},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:2.5, quota_price:16, market_price:16, total:40},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:22, quota_price:33, market_price:33, total:726},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:40, quota_price:8.54, market_price:8.54, total:341.6},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:483.72, quota_price:0.47, market_price:0.47, total:227.35},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.09, quota_price:287.5, market_price:287.5, total:25.88}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:3, quota_price:573.79, market_price:573.79, total:1721.37},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:10, quota_price:890.11, market_price:890.11, total:8901.1},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:16, quota_price:1058.74, market_price:1058.74, total:16939.84},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:2, quota_price:2378.65, market_price:2378.65, total:4757.3},
      {code:'990728020', name:'摇臂钻床', spec:'钻孔直径(mm) 50', unit:'台班', quantity:24, quota_price:20.8, market_price:20.8, total:499.2},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:60, quota_price:83.57, market_price:83.57, total:5014.2},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:18, quota_price:207.03, market_price:207.03, total:3726.54},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:12, quota_price:39.06, market_price:39.06, total:468.72}
    ]
  },
  {
    code: '1-2-97',
    name: '锻造水压机 公称压力2500t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 439207.97,
    labor_fee: 216298.68,
    material_fee: 33816.64,
    mechanical_fee: 189092.65,
    source_screenshot: 'bandicam 2026-04-27 16-44-49-627.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:332.818, quota_price:87.1, market_price:87.1, total:28988.45},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1198.147, quota_price:134, market_price:134, total:160551.7},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:133.127, quota_price:201, market_price:201, total:26758.53}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:617.24, quota_price:4.5, market_price:4.5, total:2777.58},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:608.15, quota_price:4.5, market_price:4.5, total:2736.68},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:140, quota_price:5.18, market_price:5.18, total:725.2},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:378, quota_price:4.1, market_price:4.1, total:1549.8},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:1.156, quota_price:1930, market_price:1930, total:2231.08},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.42, quota_price:1048, market_price:1048, total:2536.16},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:36.72, quota_price:7, market_price:7, total:257.04},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:252, quota_price:8.44, market_price:8.44, total:2126.88},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:121.2, quota_price:12.1, market_price:12.1, total:1466.52},
      {code:'14090119', name:'黄油特型脂', spec:'', unit:'kg', quantity:60.6, quota_price:11.2, market_price:11.2, total:678.72},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:1400, quota_price:4.29, market_price:4.29, total:6006},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:300, quota_price:3.25, market_price:3.25, total:975},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:10, quota_price:3.62, market_price:3.62, total:36.2},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:20, quota_price:2.98, market_price:2.98, total:59.6},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:35, quota_price:3.36, market_price:3.36, total:117.6},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:100, quota_price:3.33, market_price:3.33, total:333},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:400, quota_price:3.04, market_price:3.04, total:1216},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:600, quota_price:3.4, market_price:3.4, total:2040},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:18, quota_price:22.5, market_price:22.5, total:405},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:5, quota_price:30.9, market_price:30.9, total:154.5},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:10, quota_price:5.72, market_price:5.72, total:57.2},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:21.2, quota_price:5, market_price:5, total:106},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:25, quota_price:6.85, market_price:6.85, total:171.25},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 Φ3.2', unit:'kg', quantity:3, quota_price:84.1, market_price:84.1, total:252.3},
      {code:'03130973', name:'碳钢气焊条', spec:'Φ2以内', unit:'kg', quantity:35, quota_price:22, market_price:22, total:770},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.7, quota_price:20.8, market_price:20.8, total:14.56},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:3, quota_price:51.09, market_price:51.09, total:153.27},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:12, quota_price:7.5, market_price:7.5, total:90},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:180, quota_price:0.88, market_price:0.88, total:158.4},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:36, quota_price:2.05, market_price:2.05, total:73.8},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:145, quota_price:2.8, market_price:2.8, total:406},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:357, quota_price:3.82, market_price:3.82, total:1363.74},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:4, quota_price:12.1, market_price:12.1, total:48.4},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:119, quota_price:8.82, market_price:8.82, total:1049.58},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:6, quota_price:8.5, market_price:8.5, total:51},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:80, quota_price:15, market_price:15, total:1200},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:30, quota_price:16.3, market_price:16.3, total:489},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:3, quota_price:16, market_price:16, total:48},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:26, quota_price:33, market_price:33, total:858},
      {code:'02010113', name:'橡胶板', spec:'δ 5~10', unit:'kg', quantity:40, quota_price:8.54, market_price:8.54, total:341.6},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:483.72, quota_price:0.47, market_price:0.47, total:227.35},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.1, quota_price:287.5, market_price:287.5, total:28.75}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:3, quota_price:573.79, market_price:573.79, total:1721.37},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:12, quota_price:890.11, market_price:890.11, total:10681.32},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:18, quota_price:1058.74, market_price:1058.74, total:19057.32},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:2, quota_price:2378.65, market_price:2378.65, total:4757.3},
      {code:'990728020', name:'摇臂钻床', spec:'钻孔直径(mm) 50', unit:'台班', quantity:28, quota_price:20.8, market_price:20.8, total:582.4},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:80, quota_price:83.57, market_price:83.57, total:6685.6},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:20, quota_price:207.03, market_price:207.03, total:4140.6},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:14, quota_price:39.06, market_price:39.06, total:546.84}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-44-12-706.jpg'] = '1-2-96';
screenshotMap['bandicam 2026-04-27 16-44-49-627.jpg'] = '1-2-97';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 348');
