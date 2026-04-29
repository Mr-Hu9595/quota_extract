const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-97',
    name: '锻造水压机 公称压力2500t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 439207.97,
    labor_fee: 0,
    material_fee: 1976.41,
    mechanical_fee: 0,
    source_screenshot: 'bandicam 2026-04-27 16-44-58-113.jpg',
    labor_details: [
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:3, quota_price:134, market_price:134, total:402},
      {code:'00010100', name:'机械人工', spec:'', unit:'工日', quantity:2, quota_price:134, market_price:134, total:268},
      {code:'ZHGR', name:'综合工日', spec:'', unit:'工日', quantity:1720.69, quota_price:0, market_price:0, total:0}
    ],
    material_details: [
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:26, quota_price:33, market_price:33, total:858},
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:40, quota_price:8.54, market_price:8.54, total:341.6},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:483.72, quota_price:0.47, market_price:0.47, total:227.35},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.1, quota_price:287.5, market_price:287.5, total:28.75},
      {code:'02230103', name:'石墨粉高碳', spec:'', unit:'kg', quantity:10, quota_price:20, market_price:20, total:200},
      {code:'19050211', name:'螺纹球阀', spec:'DN50', unit:'个', quantity:4, quota_price:160, market_price:160, total:640},
      {code:'03131985', name:'铁砂布', spec:'0~2#', unit:'张', quantity:100, quota_price:1.19, market_price:1.19, total:119},
      {code:'03131955', name:'锯条', spec:'(各种规格)', unit:'根', quantity:80, quota_price:0.77, market_price:0.77, total:61.6},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:3.6, quota_price:12, market_price:12, total:43.2},
      {code:'34110105', name:'焦炭', spec:'', unit:'kg', quantity:1500, quota_price:1.28, market_price:1.28, total:1920},
      {code:'34110115', name:'木柴', spec:'', unit:'kg', quantity:480, quota_price:0.18, market_price:0.18, total:86.4},
      {code:'14350345', name:'研磨膏', spec:'', unit:'盒', quantity:4, quota_price:16, market_price:16, total:64},
      {code:'34110119', name:'水', spec:'', unit:'t', quantity:1.4, quota_price:5.13, market_price:5.13, total:7.18},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:1976.40677, quota_price:1, market_price:1, total:1976.41}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:4, quota_price:573.79, market_price:573.79, total:2295.16},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:22.3, quota_price:890.11, market_price:890.11, total:19849.45},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.5, quota_price:1058.74, market_price:1058.74, total:1588.11},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.5, quota_price:2378.65, market_price:2378.65, total:3567.98},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990728020', name:'摇臂钻床', spec:'钻孔直径(mm) 50', unit:'台班', quantity:24, quota_price:20.8, market_price:20.8, total:499.2},
      {code:'991003050', name:'电动空气压缩机', spec:'排气量(m3/min) 6', unit:'台班', quantity:20, quota_price:207.03, market_price:207.03, total:4140.6},
      {code:'990813045', name:'试压泵', spec:'压力(MPa) 60', unit:'台班', quantity:20, quota_price:23.6, market_price:23.6, total:472},
      {code:'991204020', name:'鼓风机', spec:'能力(m3/min) 18', unit:'台班', quantity:14, quota_price:39.06, market_price:39.06, total:546.84},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:81, quota_price:83.57, market_price:83.57, total:6769.17}
    ]
  },
  {
    code: '1-2-98',
    name: '锻造水压机 公称压力3150t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 629827.69,
    labor_fee: 0,
    material_fee: 2319.78,
    mechanical_fee: 0,
    source_screenshot: 'bandicam 2026-04-27 16-45-33-855.jpg',
    labor_details: [],
    material_details: [
      {code:'02010113', name:'橡胶板', spec:'δ5~10', unit:'kg', quantity:45, quota_price:8.54, market_price:8.54, total:384.3},
      {code:'04010115', name:'硅酸盐膨胀水泥', spec:'', unit:'kg', quantity:604.65, quota_price:0.47, market_price:0.47, total:284.19},
      {code:'04130109', name:'红砖', spec:'240*115*53', unit:'千块', quantity:0.1, quota_price:287.5, market_price:287.5, total:28.75},
      {code:'02230103', name:'石墨粉高碳', spec:'', unit:'kg', quantity:10, quota_price:20, market_price:20, total:200},
      {code:'19050211', name:'螺纹球阀', spec:'DN50', unit:'个', quantity:5, quota_price:160, market_price:160, total:800},
      {code:'03131985', name:'铁砂布', spec:'0~2#', unit:'张', quantity:120, quota_price:1.19, market_price:1.19, total:142.8},
      {code:'03131955', name:'锯条', spec:'(各种规格)', unit:'根', quantity:80, quota_price:0.77, market_price:0.77, total:61.6},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:4, quota_price:12, market_price:12, total:48},
      {code:'34110105', name:'焦炭', spec:'', unit:'kg', quantity:2000, quota_price:1.28, market_price:1.28, total:2560},
      {code:'34110115', name:'木柴', spec:'', unit:'kg', quantity:500, quota_price:0.18, market_price:0.18, total:90},
      {code:'14350345', name:'研磨膏', spec:'', unit:'盒', quantity:4, quota_price:16, market_price:16, total:64},
      {code:'34110119', name:'水', spec:'', unit:'t', quantity:1.6, quota_price:5.13, market_price:5.13, total:8.21},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:2319.778175, quota_price:1, market_price:1, total:2319.78}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:4, quota_price:573.79, market_price:573.79, total:2295.16},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:25, quota_price:890.11, market_price:890.11, total:22252.75},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:2, quota_price:1058.74, market_price:1058.74, total:2117.48},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.5, quota_price:4551.82, market_price:4551.82, total:6827.73},
      {code:'990728030', name:'摇臂钻床', spec:'钻孔直径(mm) 63', unit:'台班', quantity:30, quota_price:40.73, market_price:40.73, total:1221.9}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
  screenshotMap[q.source_screenshot] = q.code;
});

screenshotMap['bandicam 2026-04-27 16-44-29-632.jpg'] = '1-2-96';
screenshotMap['bandicam 2026-04-27 16-44-58-113.jpg'] = '1-2-97';
screenshotMap['bandicam 2026-04-27 16-45-05-167.jpg'] = '1-2-97';
screenshotMap['bandicam 2026-04-27 16-45-33-855.jpg'] = '1-2-98';
screenshotMap['bandicam 2026-04-27 16-45-40-890.jpg'] = '1-2-98';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 356');