const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-100',
    name: '锻造水压机 公称压力8000t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 1470821.77,
    labor_fee: 798946.36,
    material_fee: 67305.15,
    mechanical_fee: 604570.26,
    source_screenshot: 'bandicam 2026-04-27 16-46-14-115.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1229.563, quota_price:87.1, market_price:87.1, total:107094.94},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:4426.024, quota_price:134, market_price:134, total:593087.22},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:491.78, quota_price:201, market_price:201, total:98764.2}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:838.85, quota_price:4.5, market_price:4.5, total:3774.83},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:819.0, quota_price:4.5, market_price:4.5, total:3685.5},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:253.5, quota_price:5.18, market_price:5.18, total:1313.13},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:798.525, quota_price:4.1, market_price:4.1, total:3273.95},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:2.278, quota_price:1930, market_price:1930, total:4396.54},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:4.787, quota_price:1048, market_price:1048, total:5016.78},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:68.952, quota_price:7, market_price:7, total:482.66},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:496.86, quota_price:8.44, market_price:8.44, total:4193.5},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:238.966, quota_price:12.1, market_price:12.1, total:2891.49},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:145.086, quota_price:11.2, market_price:11.2, total:1624.96},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:2704.0, quota_price:4.29, market_price:4.29, total:11600.16},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:760.5, quota_price:3.25, market_price:3.25, total:2471.63},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:25.35, quota_price:3.62, market_price:3.62, total:91.77},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:42.25, quota_price:2.98, market_price:2.98, total:125.91},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:67.6, quota_price:3.36, market_price:3.36, total:227.14},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:219.7, quota_price:3.33, market_price:3.33, total:731.6},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:811.2, quota_price:3.04, market_price:3.04, total:2466.05},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:1183.0, quota_price:3.4, market_price:3.4, total:4022.2},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:33.8, quota_price:22.5, market_price:22.5, total:760.5},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:8.45, quota_price:30.9, market_price:30.9, total:261.11},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:16.9, quota_price:5.72, market_price:5.72, total:96.67},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:39.715, quota_price:5, market_price:5, total:198.58},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:67.6, quota_price:6.85, market_price:6.85, total:463.06},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 Φ3.2', unit:'kg', quantity:5.915, quota_price:84.1, market_price:84.1, total:497.45},
      {code:'03130973', name:'碳钢气焊条', spec:'Φ2以内', unit:'kg', quantity:67.6, quota_price:22, market_price:22, total:1487.2},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:1.47, quota_price:20.8, market_price:20.8, total:30.58},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:5.07, quota_price:51.09, market_price:51.09, total:259.03},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:25.35, quota_price:7.5, market_price:7.5, total:190.13},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:338.0, quota_price:0.88, market_price:0.88, total:297.44},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:67.6, quota_price:2.05, market_price:2.05, total:138.58},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:270.4, quota_price:2.8, market_price:2.8, total:757.12},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:775.71, quota_price:3.82, market_price:3.82, total:2963.21},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:6.76, quota_price:12.1, market_price:12.1, total:81.8},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:258.57, quota_price:8.82, market_price:8.82, total:2280.59},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:10.14, quota_price:8.5, market_price:8.5, total:86.19},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:167.3, quota_price:15, market_price:15, total:2509.5},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:67.6, quota_price:16.3, market_price:16.3, total:1101.88},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:5.915, quota_price:16, market_price:16, total:94.64},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:47.32, quota_price:33, market_price:33, total:1561.56},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:76.05, quota_price:8.54, market_price:8.54, total:649.47},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:1021.859, quota_price:0.47, market_price:0.47, total:480.27},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.169, quota_price:287.5, market_price:287.5, total:48.59}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:6, quota_price:573.79, market_price:573.79, total:3442.74},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:28, quota_price:890.11, market_price:890.11, total:24923.08},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:42, quota_price:1058.74, market_price:1058.74, total:44467.08},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:5, quota_price:2378.65, market_price:2378.65, total:11893.25},
      {code:'990728030', name:'摇臂钻床', spec:'钻孔直径(mm) 63', unit:'台班', quantity:65, quota_price:40.73, market_price:40.73, total:2647.45},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:200, quota_price:83.57, market_price:83.57, total:16714},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:45, quota_price:207.03, market_price:207.03, total:9316.35},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:30, quota_price:39.06, market_price:39.06, total:1171.8}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-46-14-115.jpg'] = '1-2-100';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 350');
