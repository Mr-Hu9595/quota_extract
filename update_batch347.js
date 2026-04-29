const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-94',
    name: '锻造水压机 公称压力800t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 162415.34,
    labor_fee: 75758.29,
    material_fee: 16971.23,
    mechanical_fee: 69685.82,
    source_screenshot: 'bandicam 2026-04-27 16-42-50-094.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:116.569, quota_price:87.1, market_price:87.1, total:10153.16},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:419.65, quota_price:134, market_price:134, total:56233.1},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:46.627, quota_price:201, market_price:201, total:9372.03}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:431.02, quota_price:4.5, market_price:4.5, total:1939.59},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:422.42, quota_price:4.5, market_price:4.5, total:1900.89},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:75, quota_price:5.18, market_price:5.18, total:388.5},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:126, quota_price:4.1, market_price:4.1, total:516.6},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.375, quota_price:1930, market_price:1930, total:723.75},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.265, quota_price:1048, market_price:1048, total:1325.72},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:15.3, quota_price:7, market_price:7, total:107.1},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:89.25, quota_price:8.44, market_price:8.44, total:753.27},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:45.45, quota_price:12.1, market_price:12.1, total:549.95},
      {code:'14090119', name:'黄油锂基脂', spec:'', unit:'kg', quantity:25.25, quota_price:11.2, market_price:11.2, total:282.8},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:700, quota_price:4.29, market_price:4.29, total:3003},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:150, quota_price:3.25, market_price:3.25, total:487.5},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:5, quota_price:3.62, market_price:3.62, total:18.1},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:15, quota_price:2.98, market_price:2.98, total:44.7},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:20, quota_price:3.36, market_price:3.36, total:67.2},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:60, quota_price:3.33, market_price:3.33, total:199.8},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:120, quota_price:3.04, market_price:3.04, total:364.8},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:200, quota_price:3.4, market_price:3.4, total:680},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:8, quota_price:22.5, market_price:22.5, total:180},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:2, quota_price:30.9, market_price:30.9, total:61.8},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:4, quota_price:5.72, market_price:5.72, total:22.88},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:11.8, quota_price:5, market_price:5, total:59},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:10, quota_price:6.85, market_price:6.85, total:68.5},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 Φ3.2', unit:'kg', quantity:1, quota_price:84.1, market_price:84.1, total:84.1},
      {code:'03130973', name:'碳钢气焊条', spec:'Φ2以内', unit:'kg', quantity:15, quota_price:22, market_price:22, total:330},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.156, quota_price:20.8, market_price:20.8, total:3.24},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2, quota_price:51.09, market_price:51.09, total:102.18},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:6, quota_price:7.5, market_price:7.5, total:45},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:80, quota_price:0.88, market_price:0.88, total:70.4},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:18, quota_price:2.05, market_price:2.05, total:36.9},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:70, quota_price:2.8, market_price:2.8, total:196},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:153, quota_price:3.82, market_price:3.82, total:584.46},
      {code:'14310131', name:'马路托品', spec:'', unit:'kg', quantity:2, quota_price:12.1, market_price:12.1, total:24.2},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:51, quota_price:8.82, market_price:8.82, total:449.82},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:2.5, quota_price:8.5, market_price:8.5, total:21.25},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:32.5, quota_price:15, market_price:15, total:487.5},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:15, quota_price:16.3, market_price:16.3, total:244.5},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:1.5, quota_price:16, market_price:16, total:24},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:10, quota_price:33, market_price:33, total:330},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:18, quota_price:8.54, market_price:8.54, total:153.72},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:181.395, quota_price:0.47, market_price:0.47, total:85.26},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.06, quota_price:287.5, market_price:287.5, total:17.25}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:10, quota_price:1058.74, market_price:1058.74, total:10587.4},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:26, quota_price:83.57, market_price:83.57, total:2172.82},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:8, quota_price:207.03, market_price:207.03, total:1656.24},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:5, quota_price:39.06, market_price:39.06, total:195.3}
    ]
  },
  {
    code: '1-2-95',
    name: '锻造水压机 公称压力1600t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 311242.08,
    labor_fee: 155097.46,
    material_fee: 23708.77,
    mechanical_fee: 132435.85,
    source_screenshot: 'bandicam 2026-04-27 16-43-24-828.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:238.648, quota_price:87.1, market_price:87.1, total:20786.24},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:859.134, quota_price:134, market_price:134, total:115123.96},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:95.459, quota_price:201, market_price:201, total:19187.26}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:454.15, quota_price:4.5, market_price:4.5, total:2043.68},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:448.13, quota_price:4.5, market_price:4.5, total:2016.59},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:100, quota_price:5.18, market_price:5.18, total:518},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:204.75, quota_price:4.1, market_price:4.1, total:839.48},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.856, quota_price:1930, market_price:1930, total:1652.08},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.65, quota_price:1048, market_price:1048, total:1729.2},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:22.44, quota_price:7, market_price:7, total:157.08},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:126, quota_price:8.44, market_price:8.44, total:1063.44},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:60.6, quota_price:12.1, market_price:12.1, total:733.26},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:35.35, quota_price:11.2, market_price:11.2, total:395.92},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:1100, quota_price:4.29, market_price:4.29, total:4719},
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:200, quota_price:3.25, market_price:3.25, total:650},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:5, quota_price:3.62, market_price:3.62, total:18.1},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:15, quota_price:2.98, market_price:2.98, total:44.7},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:25, quota_price:3.36, market_price:3.36, total:84},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:75, quota_price:3.33, market_price:3.33, total:249.75},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:180, quota_price:3.04, market_price:3.04, total:547.2},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:300, quota_price:3.4, market_price:3.4, total:1020},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:12, quota_price:22.5, market_price:22.5, total:270},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:3, quota_price:30.9, market_price:30.9, total:92.7},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:8, quota_price:5.72, market_price:5.72, total:45.76},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:15.3, quota_price:5, market_price:5, total:76.5},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:15, quota_price:6.85, market_price:6.85, total:102.75},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 φ3.2', unit:'kg', quantity:2, quota_price:84.1, market_price:84.1, total:168.2},
      {code:'03130973', name:'碳钢气焊条', spec:'φ2以内', unit:'kg', quantity:20, quota_price:22, market_price:22, total:440},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.384, quota_price:20.8, market_price:20.8, total:7.99},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:2.5, quota_price:51.09, market_price:51.09, total:127.73},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:8, quota_price:7.5, market_price:7.5, total:60},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:100, quota_price:0.88, market_price:0.88, total:88},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:20, quota_price:2.05, market_price:2.05, total:41},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:80, quota_price:2.8, market_price:2.8, total:224},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:204, quota_price:3.82, market_price:3.82, total:779.28},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:2.1, quota_price:12.1, market_price:12.1, total:25.41},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:68, quota_price:8.82, market_price:8.82, total:599.76},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:3, quota_price:8.5, market_price:8.5, total:25.5},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:50, quota_price:15, market_price:15, total:750},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:20, quota_price:16.3, market_price:16.3, total:326},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:2, quota_price:16, market_price:16, total:32},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:15, quota_price:33, market_price:33, total:495},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:30, quota_price:8.54, market_price:8.54, total:256.2},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:362.79, quota_price:0.47, market_price:0.47, total:170.51},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.08, quota_price:287.5, market_price:287.5, total:23}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:3, quota_price:573.79, market_price:573.79, total:1721.37},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:9, quota_price:890.11, market_price:890.11, total:8010.99},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:14, quota_price:1058.74, market_price:1058.74, total:14822.36},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:2, quota_price:2378.65, market_price:2378.65, total:4757.3},
      {code:'990728020', name:'摇臂钻床', spec:'钻孔直径(mm) 50', unit:'台班', quantity:20, quota_price:20.8, market_price:20.8, total:416},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:50, quota_price:83.57, market_price:83.57, total:4178.5},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:15, quota_price:207.03, market_price:207.03, total:3105.45},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:10, quota_price:39.06, market_price:39.06, total:390.6}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-42-50-094.jpg'] = '1-2-94';
screenshotMap['bandicam 2026-04-27 16-43-24-828.jpg'] = '1-2-95';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 347');
