const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-98',
    name: '锻造水压机 公称压力3150t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 629827.69,
    labor_fee: 324141.01,
    material_fee: 42420.96,
    mechanical_fee: 263265.72,
    source_screenshot: 'bandicam 2026-04-27 16-45-25-887.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:498.755, quota_price:87.1, market_price:87.1, total:43441.56},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:1795.519, quota_price:134, market_price:134, total:240599.55},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:199.502, quota_price:201, market_price:201, total:40099.9}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:629.16, quota_price:4.5, market_price:4.5, total:2831.22},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:615.5, quota_price:4.5, market_price:4.5, total:2769.75},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:150, quota_price:5.18, market_price:5.18, total:777},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:472.5, quota_price:4.1, market_price:4.1, total:1937.25},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:1.348, quota_price:1930, market_price:1930, total:2601.64},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.833, quota_price:1048, market_price:1048, total:2968.98},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:40.8, quota_price:7, market_price:7, total:285.6},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:294, quota_price:8.44, market_price:8.44, total:2481.36},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:141.4, quota_price:12.1, market_price:12.1, total:1710.94},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:85.85, quota_price:11.2, market_price:11.2, total:961.52},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:1600, quota_price:4.29, market_price:4.29, total:6864},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:450, quota_price:3.25, market_price:3.25, total:1462.5},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:15, quota_price:3.62, market_price:3.62, total:54.3},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:25, quota_price:2.98, market_price:2.98, total:74.5},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:40, quota_price:3.36, market_price:3.36, total:134.4},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:130, quota_price:3.33, market_price:3.33, total:432.9},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:480, quota_price:3.04, market_price:3.04, total:1459.2},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:700, quota_price:3.4, market_price:3.4, total:2380},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:20, quota_price:22.5, market_price:22.5, total:450},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:5, quota_price:30.9, market_price:30.9, total:154.5},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:10, quota_price:5.72, market_price:5.72, total:57.2},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:23.5, quota_price:5, market_price:5, total:117.5},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:40, quota_price:6.85, market_price:6.85, total:274},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 Φ3.2', unit:'kg', quantity:3.5, quota_price:84.1, market_price:84.1, total:294.35},
      {code:'03130973', name:'碳钢气焊条', spec:'Φ2以内', unit:'kg', quantity:40, quota_price:22, market_price:22, total:880},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.87, quota_price:20.8, market_price:20.8, total:18.1},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:3, quota_price:51.09, market_price:51.09, total:153.27},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:15, quota_price:7.5, market_price:7.5, total:112.5},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:200, quota_price:0.88, market_price:0.88, total:176},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:40, quota_price:2.05, market_price:2.05, total:82},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:160, quota_price:2.8, market_price:2.8, total:448},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:459, quota_price:3.82, market_price:3.82, total:1753.38},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:4, quota_price:12.1, market_price:12.1, total:48.4},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:153, quota_price:8.82, market_price:8.82, total:1349.46},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:6, quota_price:8.5, market_price:8.5, total:51},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:99, quota_price:15, market_price:15, total:1485},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:40, quota_price:16.3, market_price:16.3, total:652},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:3.5, quota_price:16, market_price:16, total:56},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:28, quota_price:33, market_price:33, total:924},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:45, quota_price:8.54, market_price:8.54, total:384.3},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:604.65, quota_price:0.47, market_price:0.47, total:284.19},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.1, quota_price:287.5, market_price:287.5, total:28.75}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:4, quota_price:573.79, market_price:573.79, total:2295.16},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:15, quota_price:890.11, market_price:890.11, total:13351.65},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:22, quota_price:1058.74, market_price:1058.74, total:23292.28},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:2, quota_price:2378.65, market_price:2378.65, total:4757.3},
      {code:'990728030', name:'摇臂钻床', spec:'钻孔直径(mm) 63', unit:'台班', quantity:30, quota_price:40.73, market_price:40.73, total:1221.9},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:100, quota_price:83.57, market_price:83.57, total:8357},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:24, quota_price:207.03, market_price:207.03, total:4968.72},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:16, quota_price:39.06, market_price:39.06, total:624.96}
    ]
  },
  {
    code: '1-2-99',
    name: '锻造水压机 公称压力6000t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 1257159.58,
    labor_fee: 691781.14,
    material_fee: 62719.22,
    mechanical_fee: 502659.22,
    source_screenshot: 'bandicam 2026-04-27 16-46-00-381.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1064.442, quota_price:87.1, market_price:87.1, total:92712.9},
      {code:'00010102', name:'一级技工', spec:'', unit:'工日', quantity:3831.993, quota_price:134, market_price:134, total:513487.06},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:425.777, quota_price:201, market_price:201, total:85581.18}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:645.27, quota_price:4.5, market_price:4.5, total:2903.72},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:630.0, quota_price:4.5, market_price:4.5, total:2835.0},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:195.0, quota_price:5.18, market_price:5.18, total:1010.1},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:614.25, quota_price:4.1, market_price:4.1, total:2518.43},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:1.752, quota_price:1930, market_price:1930, total:3381.36},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:3.683, quota_price:1048, market_price:1048, total:3859.78},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:53.04, quota_price:7, market_price:7, total:371.28},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:382.2, quota_price:8.44, market_price:8.44, total:3225.77},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:183.82, quota_price:12.1, market_price:12.1, total:2224.22},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:111.605, quota_price:11.2, market_price:11.2, total:1249.98},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:2080.0, quota_price:4.29, market_price:4.29, total:8923.2},
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:585.0, quota_price:3.25, market_price:3.25, total:1901.25},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:19.5, quota_price:3.62, market_price:3.62, total:70.59},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:32.5, quota_price:2.98, market_price:2.98, total:96.85},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:52.0, quota_price:3.36, market_price:3.36, total:174.72},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:169.0, quota_price:3.33, market_price:3.33, total:562.77},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:624.0, quota_price:3.04, market_price:3.04, total:1896.96},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:910.0, quota_price:3.4, market_price:3.4, total:3094.0},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:26.0, quota_price:22.5, market_price:22.5, total:585.0},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:6.5, quota_price:30.9, market_price:30.9, total:200.85},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:13.0, quota_price:5.72, market_price:5.72, total:74.36},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:30.55, quota_price:5.0, market_price:5.0, total:152.75},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:52.0, quota_price:6.85, market_price:6.85, total:356.2},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 φ3.2', unit:'kg', quantity:4.55, quota_price:84.1, market_price:84.1, total:382.66},
      {code:'03130973', name:'碳钢气焊条', spec:'φ2以内', unit:'kg', quantity:52.0, quota_price:22.0, market_price:22.0, total:1144.0},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:1.131, quota_price:20.8, market_price:20.8, total:23.52},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:3.9, quota_price:51.09, market_price:51.09, total:199.25},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:19.5, quota_price:7.5, market_price:7.5, total:146.25},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:260.0, quota_price:0.88, market_price:0.88, total:228.8},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:52.0, quota_price:2.05, market_price:2.05, total:106.6},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:208.0, quota_price:2.8, market_price:2.8, total:582.4},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:596.7, quota_price:3.82, market_price:3.82, total:2279.39},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:5.2, quota_price:12.1, market_price:12.1, total:62.92},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:198.9, quota_price:8.82, market_price:8.82, total:1754.3},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:7.8, quota_price:8.5, market_price:8.5, total:66.3},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:128.7, quota_price:15, market_price:15, total:1930.5},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:52.0, quota_price:16.3, market_price:16.3, total:847.6},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:4.55, quota_price:16, market_price:16, total:72.8},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:36.4, quota_price:33, market_price:33, total:1201.2},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:58.5, quota_price:8.54, market_price:8.54, total:499.59},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:786.045, quota_price:0.47, market_price:0.47, total:369.44},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.13, quota_price:287.5, market_price:287.5, total:37.38}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:6, quota_price:573.79, market_price:573.79, total:3442.74},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:22, quota_price:890.11, market_price:890.11, total:19582.42},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:32, quota_price:1058.74, market_price:1058.74, total:33879.68},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:4, quota_price:2378.65, market_price:2378.65, total:9514.6},
      {code:'990728030', name:'摇臂钻床', spec:'钻孔直径(mm) 63', unit:'台班', quantity:50, quota_price:40.73, market_price:40.73, total:2036.5},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:160, quota_price:83.57, market_price:83.57, total:13371.2},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:35, quota_price:207.03, market_price:207.03, total:7246.05},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:24, quota_price:39.06, market_price:39.06, total:937.44}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-45-25-887.jpg'] = '1-2-98';
screenshotMap['bandicam 2026-04-27 16-46-00-381.jpg'] = '1-2-99';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 349');
