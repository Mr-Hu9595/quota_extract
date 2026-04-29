const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-92',
    name: '剪切机及弯曲校正机 设备重量450t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 194210.54,
    labor_fee: 96698.98,
    material_fee: 8123.45,
    mechanical_fee: 80206.59,
    source_screenshot: 'bandicam 2026-04-27 16-41-32-178.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:148.791, quota_price:87.1, market_price:87.1, total:12959.7},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:535.646, quota_price:134, market_price:134, total:71776.56},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:59.516, quota_price:201, market_price:201, total:11962.72}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:165.15, quota_price:4.5, market_price:4.5, total:743.18},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:140.14, quota_price:4.5, market_price:4.5, total:630.63},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:32.425, quota_price:5.18, market_price:5.18, total:167.96},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:3.204, quota_price:4.1, market_price:4.1, total:13.14},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:1.163, quota_price:1930, market_price:1930, total:2244.59},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.098, quota_price:1048, market_price:1048, total:2198.7},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.945, quota_price:7, market_price:7, total:13.62},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:144.196, quota_price:8.44, market_price:8.44, total:1217.01},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:23.117, quota_price:12.1, market_price:12.1, total:279.72},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:15.411, quota_price:11.2, market_price:11.2, total:172.6},
      {code:'15130163', name:'聚四氟乙烯泡沫塑料', spec:'', unit:'kg', quantity:2.098, quota_price:21.6, market_price:21.6, total:45.32},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.488, quota_price:20.8, market_price:20.8, total:10.15},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:386.830612, quota_price:1, market_price:1, total:386.83}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5, quota_price:890.11, market_price:890.11, total:4450.55},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:12, quota_price:1058.74, market_price:1058.74, total:12704.88},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-93',
    name: '锻造水压机 公称压力500t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 129769.68,
    labor_fee: 61443.76,
    material_fee: 12224.69,
    mechanical_fee: 0,
    source_screenshot: 'bandicam 2026-04-27 16-42-16-750.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:94.543, quota_price:87.1, market_price:87.1, total:8234.7},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:340.357, quota_price:134, market_price:134, total:45607.84},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:37.817, quota_price:201, market_price:201, total:7601.22}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:412.31, quota_price:4.5, market_price:4.5, total:1855.4},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:396.7, quota_price:4.5, market_price:4.5, total:1785.15},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:60, quota_price:5.18, market_price:5.18, total:310.8},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:78.75, quota_price:4.1, market_price:4.1, total:322.88},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.306, quota_price:1930, market_price:1930, total:590.58},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.88, quota_price:1048, market_price:1048, total:922.24},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:12.24, quota_price:7, market_price:7, total:85.68},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:73.5, quota_price:8.44, market_price:8.44, total:620.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:30.3, quota_price:12.1, market_price:12.1, total:366.63},
      {code:'14090119', name:'黄油特压脂', spec:'', unit:'kg', quantity:18.18, quota_price:11.2, market_price:11.2, total:203.62},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:400, quota_price:4.29, market_price:4.29, total:1716},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:100, quota_price:3.25, market_price:3.25, total:325},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:5, quota_price:3.62, market_price:3.62, total:18.1},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:10, quota_price:2.98, market_price:2.98, total:29.8},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:15, quota_price:3.36, market_price:3.36, total:50.4},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:40, quota_price:3.33, market_price:3.33, total:133.2},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:85, quota_price:3.04, market_price:3.04, total:258.4},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:60, quota_price:3.4, market_price:3.4, total:204},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:6, quota_price:22.5, market_price:22.5, total:135},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:1.5, quota_price:30.9, market_price:30.9, total:46.35},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:3, quota_price:5.72, market_price:5.72, total:17.16},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:9.4, quota_price:5, market_price:5, total:47},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:10, quota_price:6.85, market_price:6.85, total:68.5},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 Φ3.2', unit:'kg', quantity:1, quota_price:84.1, market_price:84.1, total:84.1},
      {code:'03130973', name:'碳钢气焊条', spec:'Φ2以内', unit:'kg', quantity:12, quota_price:22, market_price:22, total:264},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.1, quota_price:20.8, market_price:20.8, total:2.08},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.5, quota_price:51.09, market_price:51.09, total:76.64},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:4, quota_price:7.5, market_price:7.5, total:30},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:70, quota_price:0.88, market_price:0.88, total:61.6},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:15.09, quota_price:2.05, market_price:2.05, total:30.93},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:65, quota_price:2.8, market_price:2.8, total:182},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:122.4, quota_price:3.82, market_price:3.82, total:467.57},
      {code:'14310131', name:'马洛托品', spec:'', unit:'kg', quantity:1.5, quota_price:12.1, market_price:12.1, total:18.15},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:40.8, quota_price:8.82, market_price:8.82, total:359.86},
      {code:'13010261', name:'铅油', spec:'(厚漆)', unit:'kg', quantity:2, quota_price:8.5, market_price:8.5, total:17},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:13, quota_price:15, market_price:15, total:195},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:12, quota_price:16.3, market_price:16.3, total:195.6},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:1, quota_price:16, market_price:16, total:16},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8, quota_price:33, market_price:33, total:264},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:15, quota_price:8.54, market_price:8.54, total:128.1},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.05, quota_price:287.5, market_price:287.5, total:14.38},
      {code:'02230103', name:'石墨粉高碳', spec:'', unit:'kg', quantity:3, quota_price:20, market_price:20, total:60}
    ],
    mechanical_details: [
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990728020', name:'摇臂钻床', spec:'钻孔直径(mm) 50', unit:'台班', quantity:6, quota_price:20.8, market_price:20.8, total:124.8},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:26, quota_price:83.57, market_price:83.57, total:2172.82},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:6, quota_price:207.03, market_price:207.03, total:1242.18},
      {code:'990813045', name:'试压泵', spec:'压力(MPa) 60', unit:'台班', quantity:6, quota_price:23.6, market_price:23.6, total:141.6},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:3, quota_price:39.06, market_price:39.06, total:117.18}
    ]
  },
  {
    code: '1-2-95',
    name: '锻造水压机 公称压力1600t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 311242.08,
    labor_fee: 0,
    material_fee: 931.23,
    mechanical_fee: 0,
    source_screenshot: 'bandicam 2026-04-27 16-43-00-454.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1.5, quota_price:134, market_price:134, total:201},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:21.35, quota_price:134, market_price:134, total:2860.9},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3, quota_price:134, market_price:134, total:402},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:1, quota_price:134, market_price:134, total:134}
    ],
    material_details: [
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:10, quota_price:33, market_price:33, total:330},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:18, quota_price:8.54, market_price:8.54, total:153.72},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:181.395, quota_price:0.47, market_price:0.47, total:85.26},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.06, quota_price:287.5, market_price:287.5, total:17.25},
      {code:'02230103', name:'石墨粉高碳', spec:'', unit:'kg', quantity:3, quota_price:20, market_price:20, total:60},
      {code:'19050211', name:'螺纹球阀', spec:'DN50', unit:'个', quantity:2, quota_price:160, market_price:160, total:320},
      {code:'03131985', name:'铁砂布', spec:'0^#2^#', unit:'张', quantity:50, quota_price:1.19, market_price:1.19, total:59.5},
      {code:'03131955', name:'锯条', spec:'(各种规格)', unit:'根', quantity:40, quota_price:0.77, market_price:0.77, total:30.8},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2, quota_price:12, market_price:12, total:24},
      {code:'34110105', name:'焦炭', spec:'', unit:'kg', quantity:800, quota_price:1.28, market_price:1.28, total:1024},
      {code:'34110115', name:'木柴', spec:'', unit:'kg', quantity:200, quota_price:0.18, market_price:0.18, total:36},
      {code:'14350345', name:'研磨膏', spec:'', unit:'盒', quantity:2, quota_price:16, market_price:16, total:32},
      {code:'34110119', name:'水', spec:'', unit:'t', quantity:0.6, quota_price:5.13, market_price:5.13, total:3.08},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:1, quota_price:1, market_price:1, total:931.23}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:10.675, quota_price:890.11, market_price:890.11, total:9501.92},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.5, quota_price:1058.74, market_price:1058.74, total:1588.11},
      {code:'990728020', name:'摇臂钻床', spec:'钻孔直径(mm) 50', unit:'台班', quantity:9, quota_price:20.8, market_price:20.8, total:187.2},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:0.5, quota_price:3063.65, market_price:3063.65, total:1531.83},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:31, quota_price:83.57, market_price:83.57, total:2590.67}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
  screenshotMap[q.source_screenshot] = q.code;
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 355');