const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-90',
    name: '剪切机及弯曲校正机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 170007.94,
    labor_fee: 86522.01,
    material_fee: 5585.94,
    mechanical_fee: 21852.15,
    source_screenshot: 'bandicam 2026-04-27 16-41-03-195.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:133.131, quota_price:87.1, market_price:87.1, total:11595.71},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:479.272, quota_price:134, market_price:134, total:64222.45},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:53.253, quota_price:201, market_price:201, total:10703.85}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:149.8, quota_price:4.5, market_price:4.5, total:674.1},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:127.11, quota_price:4.5, market_price:4.5, total:572},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:20.752, quota_price:5.18, market_price:5.18, total:107.5},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.051, quota_price:4.1, market_price:4.1, total:8.41},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.745, quota_price:1930, market_price:1930, total:1437.85},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.343, quota_price:1048, market_price:1048, total:1407.46},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.245, quota_price:7, market_price:7, total:8.72},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:92.285, quota_price:8.44, market_price:8.44, total:778.89},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:14.795, quota_price:12.1, market_price:12.1, total:179.02},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:9.863, quota_price:11.2, market_price:11.2, total:110.47},
      {code:'15130163', name:'聚酯乙烯泡沫塑料', spec:'', unit:'kg', quantity:1.343, quota_price:21.6, market_price:21.6, total:29.01},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.313, quota_price:20.8, market_price:20.8, total:6.51},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:265.995908, quota_price:1, market_price:1, total:266}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4, quota_price:890.11, market_price:890.11, total:3560.44},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:9, quota_price:1058.74, market_price:1058.74, total:9528.66},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-91',
    name: '剪切机及弯曲校正机 设备重量400t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 184521.79,
    labor_fee: 94211.79,
    material_fee: 6021.27,
    mechanical_fee: 24027.84,
    source_screenshot: 'bandicam 2026-04-27 16-41-20-162.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:144.936, quota_price:87.1, market_price:87.1, total:12627.93},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:521.768, quota_price:134, market_price:134, total:69916.91},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:57.975, quota_price:201, market_price:201, total:11666.95}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:157.57, quota_price:4.5, market_price:4.5, total:709.07},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:133.67, quota_price:4.5, market_price:4.5, total:601.52},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:24.969, quota_price:5.18, market_price:5.18, total:129.34},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.465, quota_price:4.1, market_price:4.1, total:10.11},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.897, quota_price:1930, market_price:1930, total:1731.21},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.617, quota_price:1048, market_price:1048, total:1695.62},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.499, quota_price:7, market_price:7, total:10.49},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:111.059, quota_price:8.44, market_price:8.44, total:937.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:17.807, quota_price:12.1, market_price:12.1, total:215.46},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:11.868, quota_price:11.2, market_price:11.2, total:132.92},
      {code:'15130163', name:'聚酯乙烯泡沫塑料', spec:'', unit:'kg', quantity:1.617, quota_price:21.6, market_price:21.6, total:34.93},
      {code:'03131515', name:'铜焊粉', spec:'', unit:'kg', quantity:0.376, quota_price:20.8, market_price:20.8, total:7.82},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:319.968147, quota_price:1, market_price:1, total:319.97}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5, quota_price:890.11, market_price:890.11, total:4450.55},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:10, quota_price:1058.74, market_price:1058.74, total:10587.4},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-92',
    name: '剪切机及弯曲校正机 设备重量450t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 194210.54,
    labor_fee: 96698.98,
    material_fee: 8123.45,
    mechanical_fee: 80206.59,
    source_screenshot: 'bandicam 2026-04-27 16-41-35-829.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:148.791, quota_price:87.1, market_price:87.1, total:12959.7},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:535.646, quota_price:134, market_price:134, total:71776.56},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:59.516, quota_price:201, market_price:201, total:11962.72}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:165.15, quota_price:4.5, market_price:4.5, total:743.18},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:140.14, quota_price:4.5, market_price:4.5, total:630.63},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:32.425, quota_price:5.18, market_price:5.18, total:167.96},
      {code:'03130929', name:'低磷钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:3.204, quota_price:4.1, market_price:4.1, total:13.14},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:1.163, quota_price:1930, market_price:1930, total:2244.59},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:2.098, quota_price:1048, market_price:1048, total:2198.7},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.945, quota_price:7, market_price:7, total:13.62},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:144.196, quota_price:8.44, market_price:8.44, total:1217.01},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:23.117, quota_price:12.1, market_price:12.1, total:279.72},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:15.411, quota_price:11.2, market_price:11.2, total:172.6},
      {code:'15130163', name:'聚酯乙烯泡沫塑料', spec:'', unit:'kg', quantity:2.098, quota_price:21.6, market_price:21.6, total:45.32},
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
    material_fee: 11626.04,
    mechanical_fee: 56699.88,
    source_screenshot: 'bandicam 2026-04-27 16-42-27-239.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:94.543, quota_price:87.1, market_price:87.1, total:8234.7},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:340.357, quota_price:134, market_price:134, total:45607.84},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:37.817, quota_price:201, market_price:201, total:7601.22}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:412.31, quota_price:4.5, market_price:4.5, total:1855.4},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:396.7, quota_price:4.5, market_price:4.5, total:1785.15},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:60.0, quota_price:5.18, market_price:5.18, total:310.8},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:78.75, quota_price:4.1, market_price:4.1, total:322.88},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.306, quota_price:1930, market_price:1930, total:590.58},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.88, quota_price:1048, market_price:1048, total:922.24},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:12.24, quota_price:7, market_price:7, total:85.68},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:73.5, quota_price:8.44, market_price:8.44, total:620.34},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:30.3, quota_price:12.1, market_price:12.1, total:366.63},
      {code:'14090119', name:'黄油钠基脂', spec:'', unit:'kg', quantity:18.18, quota_price:11.2, market_price:11.2, total:203.62},
      {code:'37090117', name:'钢板垫板', spec:'', unit:'kg', quantity:400.0, quota_price:4.29, market_price:4.29, total:1716.0},
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:100.0, quota_price:3.25, market_price:3.25, total:325.0},
      {code:'01290121', name:'热轧薄钢板', spec:'δ1.6~1.9', unit:'kg', quantity:5.0, quota_price:3.62, market_price:3.62, total:18.1},
      {code:'01290421', name:'钢板', spec:'δ4.5~7', unit:'kg', quantity:10.0, quota_price:2.98, market_price:2.98, total:29.8},
      {code:'01290209', name:'热轧厚钢板', spec:'δ8.0~20', unit:'kg', quantity:15.0, quota_price:3.36, market_price:3.36, total:50.4},
      {code:'01290231', name:'热轧厚钢板', spec:'δ21~30', unit:'kg', quantity:40.0, quota_price:3.33, market_price:3.33, total:133.2},
      {code:'01290243', name:'热轧厚钢板', spec:'δ31以外', unit:'kg', quantity:85.0, quota_price:3.04, market_price:3.04, total:258.4},
      {code:'01000101', name:'型钢', spec:'综合', unit:'kg', quantity:60.0, quota_price:3.4, market_price:3.4, total:204.0},
      {code:'17070233', name:'无缝钢管', spec:'D42.5*3.5', unit:'m', quantity:6.0, quota_price:22.5, market_price:22.5, total:135.0},
      {code:'17070255', name:'无缝钢管', spec:'D57*4', unit:'m', quantity:1.5, quota_price:30.9, market_price:30.9, total:46.35},
      {code:'17010181', name:'焊接钢管', spec:'DN20', unit:'m', quantity:3.0, quota_price:5.72, market_price:5.72, total:17.16},
      {code:'03011777', name:'六角螺栓带螺母', spec:'M8*75以下', unit:'10套', quantity:9.4, quota_price:5.0, market_price:5.0, total:47.0},
      {code:'03010970', name:'骑马钉', spec:'20*2', unit:'kg', quantity:10.0, quota_price:6.85, market_price:6.85, total:68.5},
      {code:'03130941', name:'紫铜电焊条', spec:'T107 φ3.2', unit:'kg', quantity:1.0, quota_price:84.1, market_price:84.1, total:84.1},
      {code:'03130973', name:'碳钢气焊条', spec:'φ2以内', unit:'kg', quantity:12.0, quota_price:22.0, market_price:22.0, total:264.0},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.1, quota_price:20.8, market_price:20.8, total:2.08},
      {code:'01350306', name:'黄铜板', spec:'δ0.08~0.3', unit:'kg', quantity:1.5, quota_price:51.09, market_price:51.09, total:76.64},
      {code:'14050116', name:'溶剂汽油', spec:'200#', unit:'kg', quantity:4.0, quota_price:7.5, market_price:7.5, total:30.0},
      {code:'14310111', name:'盐酸', spec:'31%合成', unit:'kg', quantity:70.0, quota_price:0.88, market_price:0.88, total:61.6},
      {code:'14310137', name:'碳酸钠', spec:'(纯碱)', unit:'kg', quantity:15.09, quota_price:2.05, market_price:2.05, total:30.93},
      {code:'14310119', name:'亚硝酸钠', spec:'', unit:'kg', quantity:65.0, quota_price:2.8, market_price:2.8, total:182.0},
      {code:'14390115', name:'氧气', spec:'', unit:'m3', quantity:122.4, quota_price:3.82, market_price:3.82, total:467.57},
      {code:'14310131', name:'马路托品', spec:'', unit:'kg', quantity:1.5, quota_price:12.1, market_price:12.1, total:18.15},
      {code:'14390141', name:'乙炔气', spec:'', unit:'kg', quantity:40.8, quota_price:8.82, market_price:8.82, total:359.86},
      {code:'13010261', name:'铝油', spec:'(厚漆)', unit:'kg', quantity:2.0, quota_price:8.5, market_price:8.5, total:17.0},
      {code:'13010163', name:'调和漆', spec:'', unit:'kg', quantity:13.0, quota_price:15.0, market_price:15.0, total:195.0},
      {code:'13050179', name:'防锈漆', spec:'C53-1', unit:'kg', quantity:12.0, quota_price:16.3, market_price:16.3, total:195.6},
      {code:'13090101', name:'银粉漆', spec:'', unit:'kg', quantity:1.0, quota_price:16.0, market_price:16.0, total:16.0},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8.0, quota_price:33.0, market_price:33.0, total:264.0},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:15.0, quota_price:8.54, market_price:8.54, total:128.1},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.05, quota_price:287.5, market_price:287.5, total:14.38},
      {code:'02230103', name:'石墨粉高碳', spec:'', unit:'kg', quantity:3.0, quota_price:20.0, market_price:20.0, total:60.0}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:20, quota_price:83.57, market_price:83.57, total:1671.4}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

screenshotMap['bandicam 2026-04-27 16-41-03-195.jpg'] = '1-2-90';
screenshotMap['bandicam 2026-04-27 16-41-20-162.jpg'] = '1-2-91';
screenshotMap['bandicam 2026-04-27 16-41-35-829.jpg'] = '1-2-92';
screenshotMap['bandicam 2026-04-27 16-42-27-239.jpg'] = '1-2-93';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('Saved batch 346');
