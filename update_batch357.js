const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-45',
    name: '自动锻压机 设备重量5t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 5641.31,
    labor_fee: 2725.18,
    material_fee: 434.19,
    mechanical_fee: 648.32,
    source_screenshot: 'bandicam 2026-04-27 16-28-29-236.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.194, quota_price:87.1, market_price:87.1, total:365.3},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:15.101, quota_price:134, market_price:134, total:2023.53},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.678, quota_price:201, market_price:201, total:337.28}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:17.86, quota_price:4.5, market_price:4.5, total:80.37},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:12.76, quota_price:4.5, market_price:4.5, total:57.42},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.34, quota_price:5.18, market_price:5.18, total:6.94},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.315, quota_price:4.1, market_price:4.1, total:1.29},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.026, quota_price:1930, market_price:1930, total:50.18},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.002, quota_price:1048, market_price:1048, total:2.1},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.275, quota_price:7, market_price:7, total:8.93},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.463, quota_price:8.44, market_price:8.44, total:37.67},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:0.75, quota_price:3.03, market_price:3.03, total:2.27},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.273, quota_price:12.1, market_price:12.1, total:27.5},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.263, quota_price:11.2, market_price:11.2, total:14.15},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.5, quota_price:33, market_price:33, total:49.5},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:0.8, quota_price:16.3, market_price:16.3, total:13.04},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.08, quota_price:12, market_price:12, total:0.96},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:20.6756, quota_price:1, market_price:1, total:20.68}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.55, quota_price:691.24, market_price:691.24, total:380.18},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.25, quota_price:573.79, market_price:573.79, total:143.45},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.25, quota_price:890.11, market_price:890.11, total:222.53},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:18.306, quota_price:0.7, market_price:0.7, total:12.81}
    ]
  },
  {
    code: '1-2-47',
    name: '自动锻压机 设备重量10t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 8732.38,
    labor_fee: 4203.52,
    material_fee: 669.18,
    mechanical_fee: 1006.18,
    source_screenshot: 'bandicam 2026-04-27 16-28-56-878.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:6.466, quota_price:87.1, market_price:87.1, total:563.19},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:23.276, quota_price:134, market_price:134, total:3118.98},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.586, quota_price:201, market_price:201, total:519.78}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:27.54, quota_price:4.5, market_price:4.5, total:123.93},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:19.67, quota_price:4.5, market_price:4.5, total:88.52},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2, quota_price:5.18, market_price:5.18, total:10.36},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.49, quota_price:4.1, market_price:4.1, total:2.01},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.039, quota_price:1930, market_price:1930, total:75.27},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.003, quota_price:1048, market_price:1048, total:3.14},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.913, quota_price:7, market_price:7, total:13.39},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:6.69, quota_price:8.44, market_price:8.44, total:56.46},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:1.125, quota_price:3.03, market_price:3.03, total:3.41},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.41, quota_price:12.1, market_price:12.1, total:41.26},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.893, quota_price:11.2, market_price:11.2, total:21.2},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:2.25, quota_price:33, market_price:33, total:74.25},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:1.2, quota_price:16.3, market_price:16.3, total:19.56},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.12, quota_price:12, market_price:12, total:1.44},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:31.8652, quota_price:1, market_price:1, total:31.87}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.8, quota_price:691.24, market_price:691.24, total:552.99},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.35, quota_price:573.79, market_price:573.79, total:200.83},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.35, quota_price:890.11, market_price:890.11, total:311.54},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.3, quota_price:83.57, market_price:83.57, total:25.07},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:27.409, quota_price:0.7, market_price:0.7, total:19.19}
    ]
  },
  {
    code: '1-2-50',
    name: '自动锻压机 设备重量25t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 13369.6,
    labor_fee: 6353.04,
    material_fee: 1050.26,
    mechanical_fee: 1538.96,
    source_screenshot: 'bandicam 2026-04-27 16-29-21-444.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:9.779, quota_price:87.1, market_price:87.1, total:851.75},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:35.198, quota_price:134, market_price:134, total:4716.53},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.911, quota_price:201, market_price:201, total:786.11}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:39.07, quota_price:4.5, market_price:4.5, total:175.82},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:28.87, quota_price:4.5, market_price:4.5, total:129.92},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:3, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.735, quota_price:4.1, market_price:4.1, total:3.01},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.051, quota_price:1930, market_price:1930, total:98.43},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.004, quota_price:1048, market_price:1048, total:4.19},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.55, quota_price:7, market_price:7, total:17.85},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:8.925, quota_price:8.44, market_price:8.44, total:75.33},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:1.5, quota_price:3.03, market_price:3.03, total:4.55},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.545, quota_price:12.1, market_price:12.1, total:54.99},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.525, quota_price:11.2, market_price:11.2, total:28.28},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:3, quota_price:33, market_price:33, total:99},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:1.6, quota_price:16.3, market_price:16.3, total:26.08},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.16, quota_price:12, market_price:12, total:1.92},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:50.01255, quota_price:1, market_price:1, total:50.01}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.2, quota_price:691.24, market_price:691.24, total:829.49},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:38.612, quota_price:0.7, market_price:0.7, total:27.03}
    ]
  },
  {
    code: '1-2-52',
    name: '自动锻压机 设备重量50t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 18382.36,
    labor_fee: 8741.32,
    material_fee: 1430.6,
    mechanical_fee: 2133.88,
    source_screenshot: 'bandicam 2026-04-27 16-29-39-739.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:13.456, quota_price:87.1, market_price:87.1, total:1172.02},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:48.442, quota_price:134, market_price:134, total:6491.23},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.383, quota_price:201, market_price:201, total:1081.98}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:53.61, quota_price:4.5, market_price:4.5, total:241.25},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:39.6, quota_price:4.5, market_price:4.5, total:178.2},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4, quota_price:5.18, market_price:5.18, total:20.72},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.98, quota_price:4.1, market_price:4.1, total:4.02},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.077, quota_price:1930, market_price:1930, total:148.61},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048, market_price:1048, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.57, quota_price:7, market_price:7, total:24.99},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2, quota_price:3.03, market_price:3.03, total:6.06},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.565, quota_price:12.1, market_price:12.1, total:79.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:4, quota_price:33, market_price:33, total:132},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:2.2, quota_price:16.3, market_price:16.3, total:35.86},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.22, quota_price:12, market_price:12, total:2.64},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:68.12485, quota_price:1, market_price:1, total:68.12}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.6, quota_price:691.24, market_price:691.24, total:1105.98},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.65, quota_price:573.79, market_price:573.79, total:372.96},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.65, quota_price:890.11, market_price:890.11, total:578.57},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.6, quota_price:83.57, market_price:83.57, total:50.14},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:53.657, quota_price:0.7, market_price:0.7, total:37.56}
    ]
  },
  {
    code: '1-2-53',
    name: '自动锻压机 设备重量70t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 23547.99,
    labor_fee: 11124.32,
    material_fee: 1813.76,
    mechanical_fee: 2741.52,
    source_screenshot: 'bandicam 2026-04-27 16-29-51-902.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.126, quota_price:87.1, market_price:87.1, total:1491.67},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:61.65, quota_price:134, market_price:134, total:8261.1},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:6.85, quota_price:201, market_price:201, total:1376.85}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:71.47, quota_price:4.5, market_price:4.5, total:321.62},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:52.8, quota_price:4.5, market_price:4.5, total:237.6},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.34, quota_price:5.18, market_price:5.18, total:27.66},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.31, quota_price:4.1, market_price:4.1, total:5.37},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.103, quota_price:1930, market_price:1930, total:198.79},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.008, quota_price:1048, market_price:1048, total:8.38},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.59, quota_price:7, market_price:7, total:32.13},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:16.8, quota_price:8.44, market_price:8.44, total:141.79},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2.5, quota_price:3.03, market_price:3.03, total:7.58},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.585, quota_price:12.1, market_price:12.1, total:103.88},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:5, quota_price:33, market_price:33, total:165},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:2.8, quota_price:16.3, market_price:16.3, total:45.64},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.28, quota_price:12, market_price:12, total:3.36},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:86.3697, quota_price:1, market_price:1, total:86.37}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.1, quota_price:691.24, market_price:691.24, total:1451.6},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.85, quota_price:573.79, market_price:573.79, total:487.72},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.85, quota_price:890.11, market_price:890.11, total:756.59},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.8, quota_price:83.57, market_price:83.57, total:66.86},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:69.5, quota_price:0.7, market_price:0.7, total:48.65}
    ]
  },
  {
    code: '1-2-54',
    name: '自动锻压机 设备重量100t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 29786.71,
    labor_fee: 14111.48,
    material_fee: 2327.83,
    mechanical_fee: 3472.96,
    source_screenshot: 'bandicam 2026-04-27 16-30-06-969.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:21.723, quota_price:87.1, market_price:87.1, total:1892.09},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:78.191, quota_price:134, market_price:134, total:10477.59},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.688, quota_price:201, market_price:201, total:1746.29}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:89.34, quota_price:4.5, market_price:4.5, total:402.03},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:66, quota_price:4.5, market_price:4.5, total:297},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6.67, quota_price:5.18, market_price:5.18, total:34.55},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.63, quota_price:4.1, market_price:4.1, total:6.68},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.128, quota_price:1930, market_price:1930, total:247.04},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.01, quota_price:1048, market_price:1048, total:10.48},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:5.61, quota_price:7, market_price:7, total:39.27},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:20.78, quota_price:8.44, market_price:8.44, total:175.38},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:3, quota_price:3.03, market_price:3.03, total:9.09},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:10.605, quota_price:12.1, market_price:12.1, total:128.32},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:5.05, quota_price:11.2, market_price:11.2, total:56.56},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6, quota_price:33, market_price:33, total:198},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:3.5, quota_price:16.3, market_price:16.3, total:57.05},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.35, quota_price:12, market_price:12, total:4.2},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:110.85125, quota_price:1, market_price:1, total:110.85}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.6, quota_price:691.24, market_price:691.24, total:1797.22},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.05, quota_price:573.79, market_price:573.79, total:602.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.05, quota_price:890.11, market_price:890.11, total:934.62},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1, quota_price:83.57, market_price:83.57, total:83.57},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:78.408, quota_price:0.7, market_price:0.7, total:54.89}
    ]
  },
  {
    code: '1-2-56',
    name: '自动锻压机 设备重量200t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 45612.86,
    labor_fee: 21434.64,
    material_fee: 3537.14,
    mechanical_fee: 5329.4,
    source_screenshot: 'bandicam 2026-04-27 16-30-33-609.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:32.984, quota_price:87.1, market_price:87.1, total:2872.92},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:118.733, quota_price:134, market_price:134, total:15910.22},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:13.193, quota_price:201, market_price:201, total:2651.79}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:137.33, quota_price:4.5, market_price:4.5, total:617.99},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:105.6, quota_price:4.5, market_price:4.5, total:475.2},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:10.67, quota_price:5.18, market_price:5.18, total:55.27},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:2.61, quota_price:4.1, market_price:4.1, total:10.7},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.205, quota_price:1930, market_price:1930, total:395.65},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.016, quota_price:1048, market_price:1048, total:16.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:8.67, quota_price:7, market_price:7, total:60.69},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:32.34, quota_price:8.44, market_price:8.44, total:272.95},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:4.5, quota_price:3.03, market_price:3.03, total:13.64},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:16.675, quota_price:12.1, market_price:12.1, total:201.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:8.08, quota_price:11.2, market_price:11.2, total:90.5},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:9, quota_price:33, market_price:33, total:297},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:5.4, quota_price:16.3, market_price:16.3, total:88.02},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.54, quota_price:12, market_price:12, total:6.48},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:168.50215, quota_price:1, market_price:1, total:168.5}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:4, quota_price:691.24, market_price:691.24, total:2764.96},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.6, quota_price:573.79, market_price:573.79, total:918.06},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.6, quota_price:890.11, market_price:890.11, total:1424.18},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.6, quota_price:83.57, market_price:83.57, total:133.71},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:123.96, quota_price:0.7, market_price:0.7, total:86.77}
    ]
  },
  {
    code: '1-2-57',
    name: '空气锤 落锤质量150kg以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 7192.12,
    labor_fee: 3446.19,
    material_fee: 458.46,
    mechanical_fee: 923.71,
    source_screenshot: 'bandicam 2026-04-27 16-30-48-595.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:5.302, quota_price:87.1, market_price:87.1, total:461.8},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:19.092, quota_price:134, market_price:134, total:2558.33},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:2.121, quota_price:201, market_price:201, total:426.32}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:22.16, quota_price:4.5, market_price:4.5, total:99.72},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:15.83, quota_price:4.5, market_price:4.5, total:71.24},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:1.5, quota_price:3.25, market_price:3.25, total:4.88},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:1.67, quota_price:5.18, market_price:5.18, total:8.65},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.39, quota_price:4.1, market_price:4.1, total:1.6},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.031, quota_price:1930, market_price:1930, total:59.83},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.002, quota_price:1048, market_price:1048, total:2.1},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.53, quota_price:7, market_price:7, total:10.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:5.355, quota_price:8.44, market_price:8.44, total:45.2},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:0.9, quota_price:3.03, market_price:3.03, total:2.73},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.73, quota_price:12.1, market_price:12.1, total:33.03},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.515, quota_price:11.2, market_price:11.2, total:16.97},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.8, quota_price:33, market_price:33, total:59.4},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量...', unit:'kg', quantity:1, quota_price:16.3, market_price:16.3, total:16.3},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.1, quota_price:12, market_price:12, total:1.2},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:21.8315, quota_price:1, market_price:1, total:21.83}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.7, quota_price:691.24, market_price:691.24, total:483.87},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.3, quota_price:890.11, market_price:890.11, total:267.03},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.3, quota_price:83.57, market_price:83.57, total:25.07},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:21.918, quota_price:0.7, market_price:0.7, total:15.34}
    ]
  },
  {
    code: '1-2-58',
    name: '空气锤 落锤质量250kg以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 11957.15,
    labor_fee: 5779.19,
    material_fee: 748.06,
    mechanical_fee: 1552.78,
    source_screenshot: 'bandicam 2026-04-27 16-30-58-521.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:8.892, quota_price:87.1, market_price:87.1, total:774.49},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:32.013, quota_price:134, market_price:134, total:4289.74},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:3.557, quota_price:201, market_price:201, total:714.96}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:35.74, quota_price:4.5, market_price:4.5, total:160.83},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:25.518, quota_price:4.5, market_price:4.5, total:114.83},
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:3, quota_price:3.25, market_price:3.25, total:9.75},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:2.67, quota_price:5.18, market_price:5.18, total:13.83},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.63, quota_price:4.1, market_price:4.1, total:2.58},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.051, quota_price:1930, market_price:1930, total:98.43},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.004, quota_price:1048, market_price:1048, total:4.19},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.55, quota_price:7, market_price:7, total:17.85},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:8.925, quota_price:8.44, market_price:8.44, total:75.33},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:1.5, quota_price:3.03, market_price:3.03, total:4.55},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.545, quota_price:12.1, market_price:12.1, total:54.99},
      {code:'14090119', name:'黄油(钙基脂)', spec:'', unit:'kg', quantity:2.525, quota_price:11.2, market_price:11.2, total:28.28},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:3, quota_price:33, market_price:33, total:99},
      {code:'15010191', name:'石棉绳编', spec:'φ11~25 烧失量...', unit:'kg', quantity:1.6, quota_price:16.3, market_price:16.3, total:26.08},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.16, quota_price:12, market_price:12, total:1.92},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:5, quota_price:1, market_price:1, total:35.62}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.1, quota_price:691.24, market_price:691.24, total:760.36},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kVA) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:38.612, quota_price:0.7, market_price:0.7, total:27.03}
    ]
  },
  {
    code: '1-2-59',
    name: '空气锤 落锤质量400kg以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 18653.26,
    labor_fee: 9300.29,
    material_fee: 1346.86,
    mechanical_fee: 1938.29,
    source_screenshot: 'bandicam 2026-04-27 16-31-11-068.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:14.311, quota_price:87.1, market_price:87.1, total:1246.49},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:51.517, quota_price:134, market_price:134, total:6903.28},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:5.724, quota_price:201, market_price:201, total:1150.52}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:68.665, quota_price:4.5, market_price:4.5, total:308.99},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:65.668, quota_price:4.5, market_price:4.5, total:295.51},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:4, quota_price:3.25, market_price:3.25, total:13},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:3, quota_price:5.18, market_price:5.18, total:15.54},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.735, quota_price:4.1, market_price:4.1, total:3.01},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.078, quota_price:1930, market_price:1930, total:150.54},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048, market_price:1048, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.08, quota_price:7, market_price:7, total:28.56},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:12.6, quota_price:8.44, market_price:8.44, total:106.34},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2, quota_price:3.03, market_price:3.03, total:6.06},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:6.565, quota_price:12.1, market_price:12.1, total:79.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6, quota_price:33, market_price:33, total:198},
      {code:'15010191', name:'石棉绳', spec:'Φ11~25 烧失量…', unit:'kg', quantity:2.2, quota_price:16.3, market_price:16.3, total:35.86},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.18, quota_price:12, market_price:12, total:2.16},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:64.161825, quota_price:1, market_price:1, total:64.16}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.9, quota_price:691.24, market_price:691.24, total:622.12},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:0.5, quota_price:1017.25, market_price:1017.25, total:508.63},
      {code:'34110103-2', name:'电', spec:'', unit:'kw·h', quantity:48.265, quota_price:0.7, market_price:0.7, total:33.79}
    ]
  },
  {
    code: '1-2-60',
    name: '空气锤 落锤质量560kg以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 23261.65,
    labor_fee: 11460.09,
    material_fee: 1691.93,
    mechanical_fee: 2558.29,
    source_screenshot: 'bandicam 2026-04-27 16-31-27-126.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:17.634, quota_price:87.1, market_price:87.1, total:1535.92},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:63.48, quota_price:134, market_price:134, total:8506.32},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.054, quota_price:201, market_price:201, total:1417.85}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:88.77, quota_price:4.5, market_price:4.5, total:399.47},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:80.94, quota_price:4.5, market_price:4.5, total:364.23},
      {code:'01090121', name:'圆钢', spec:'φ10~14', unit:'kg', quantity:4.5, quota_price:3.25, market_price:3.25, total:14.63},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:6, quota_price:5.18, market_price:5.18, total:31.08},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.093, quota_price:1930, market_price:1930, total:179.49},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048, market_price:1048, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.59, quota_price:7, market_price:7, total:32.13},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:16.8, quota_price:8.44, market_price:8.44, total:141.79},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2, quota_price:3.03, market_price:3.03, total:6.06},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:7.575, quota_price:12.1, market_price:12.1, total:91.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8, quota_price:33, market_price:33, total:264},
      {code:'15010191', name:'石棉绳编', spec:'Φ11~25 烧失量...', unit:'kg', quantity:2.5, quota_price:16.3, market_price:16.3, total:40.75},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.2, quota_price:12, market_price:12, total:2.4},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:80.567375, quota_price:1, market_price:1, total:80.57}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.05, quota_price:691.24, market_price:691.24, total:725.8},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1, quota_price:1058.74, market_price:1058.74, total:1058.74}
    ]
  },
  {
    code: '1-2-61',
    name: '空气锤 落锤质量750kg以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 28491.52,
    labor_fee: 13664.15,
    material_fee: 1877.06,
    mechanical_fee: 3981.89,
    source_screenshot: 'bandicam 2026-04-27 16-31-46-921.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:21.025, quota_price:87.1, market_price:87.1, total:1831.28},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:75.69, quota_price:134, market_price:134, total:10142.46},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.41, quota_price:201, market_price:201, total:1690.41}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:95.46, quota_price:4.5, market_price:4.5, total:429.57},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:89.83, quota_price:4.5, market_price:4.5, total:404.24},
      {code:'01090121', name:'圆钢', spec:'Φ10~14', unit:'kg', quantity:5, quota_price:3.25, market_price:3.25, total:16.25},
      {code:'01030723', name:'镀锌铁丝', spec:'Φ4.0~2.8', unit:'kg', quantity:8, quota_price:5.18, market_price:5.18, total:41.44},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 Φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.128, quota_price:1930, market_price:1930, total:247.04},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.006, quota_price:1048, market_price:1048, total:6.29},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.12, quota_price:7, market_price:7, total:42.84},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2.5, quota_price:3.03, market_price:3.03, total:7.58},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.585, quota_price:12.1, market_price:12.1, total:103.88},
      {code:'14090119', name:'黄油锂基脂', spec:'', unit:'kg', quantity:3.535, quota_price:11.2, market_price:11.2, total:39.59},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:8, quota_price:33, market_price:33, total:264},
      {code:'15010191', name:'石棉绳编', spec:'Φ11~25 烧失量...', unit:'kg', quantity:3, quota_price:16.3, market_price:16.3, total:48.9},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.25, quota_price:12, market_price:12, total:3},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:91.764625, quota_price:1, market_price:1, total:91.76}
    ],
    mechanical_details: [
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.2, quota_price:691.24, market_price:691.24, total:829.49},
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.9},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:0.5, quota_price:890.11, market_price:890.11, total:445.06},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1, quota_price:2378.65, market_price:2378.65, total:2378.65}
    ]
  },
  {
    code: '1-2-62',
    name: '模锻锤 落锤质量1t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 27761.22,
    labor_fee: 13716.28,
    material_fee: 1408.36,
    mechanical_fee: 6845.67,
    source_screenshot: 'bandicam 2026-04-27 16-32-01-192.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:21.105, quota_price:87.1, market_price:87.1, total:1838.25},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:75.979, quota_price:134, market_price:134, total:10181.19},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:8.442, quota_price:201, market_price:201, total:1696.84}
    ],
    material_details: [
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.05, quota_price:1930, market_price:1930, total:96.5},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.012, quota_price:1048, market_price:1048, total:12.58},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:8.16, quota_price:7, market_price:7, total:57.12},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2.2, quota_price:3.03, market_price:3.03, total:6.67},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:5, quota_price:33, market_price:33, total:165},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10 (4…', unit:'kg', quantity:2, quota_price:18.5, market_price:18.5, total:37},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:3, quota_price:16.3, market_price:16.3, total:48.9},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:0.675, quota_price:70, market_price:70, total:47.25},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:150, quota_price:3.69, market_price:3.69, total:553.5},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:30, quota_price:1.02, market_price:1.02, total:30.6},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:10, quota_price:4.6, market_price:4.6, total:46},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.38, quota_price:12, market_price:12, total:4.56},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:67.0645, quota_price:1, market_price:1, total:67.06}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:2.65, quota_price:691.24, market_price:691.24, total:1831.79},
      {code:'990304024', name:'汽车式起重机', spec:'提升质量(t) 25', unit:'台班', quantity:1, quota_price:1017.25, market_price:1017.25, total:1017.25}
    ]
  },
  {
    code: '1-2-63',
    name: '模锻锤 落锤质量2t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 45713.13,
    labor_fee: 22460.32,
    material_fee: 1841.34,
    mechanical_fee: 6147.40,
    source_screenshot: 'bandicam 2026-04-27 16-32-10-519.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:34.559, quota_price:87.1, market_price:87.1, total:3010.09},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:124.415, quota_price:134, market_price:134, total:16671.61},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:13.824, quota_price:201, market_price:201, total:2778.62}
    ],
    material_details: [
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.065, quota_price:1930, market_price:1930, total:125.45},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.015, quota_price:1048, market_price:1048, total:15.72},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:10.2, quota_price:7, market_price:7, total:71.4},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
      {code:'14070129', name:'汽缸油', spec:'', unit:'kg', quantity:2.4, quota_price:3.03, market_price:3.03, total:7.27},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:5.05, quota_price:11.2, market_price:11.2, total:56.56},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:6.35, quota_price:33, market_price:33, total:209.55},
      {code:'13350249', name:'油浸石棉盘根', spec:'编制 φ6~10 (4…', unit:'kg', quantity:2.5, quota_price:18.5, market_price:18.5, total:46.25},
      {code:'15010185', name:'石棉绳', spec:'φ6~10 烧失量24%', unit:'kg', quantity:3.4, quota_price:16.3, market_price:16.3, total:55.42},
      {code:'04030139', name:'砂子', spec:'', unit:'m3', quantity:0.675, quota_price:70, market_price:70, total:47.25},
      {code:'13310146', name:'石油沥青', spec:'10#', unit:'kg', quantity:200, quota_price:3.69, market_price:3.69, total:738},
      {code:'14050141', name:'煤焦油', spec:'', unit:'kg', quantity:45, quota_price:1.02, market_price:1.02, total:45.9},
      {code:'13330143', name:'石油沥青油毡', spec:'400g', unit:'m2', quantity:15, quota_price:4.6, market_price:4.6, total:69},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:0.64, quota_price:12, market_price:12, total:7.68},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:87.68325, quota_price:1, market_price:1, total:87.68}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:4.6, quota_price:691.24, market_price:691.24, total:3179.7},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1, quota_price:1058.74, market_price:1058.74, total:1058.74}
    ]
  }
];

newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
  screenshotMap[q.source_screenshot] = q.code;
});

screenshotMap['bandicam 2026-04-27 16-28-29-236.jpg'] = '1-2-45';
screenshotMap['bandicam 2026-04-27 16-28-56-878.jpg'] = '1-2-47';
screenshotMap['bandicam 2026-04-27 16-29-21-444.jpg'] = '1-2-50';
screenshotMap['bandicam 2026-04-27 16-29-39-739.jpg'] = '1-2-52';
screenshotMap['bandicam 2026-04-27 16-29-51-902.jpg'] = '1-2-53';
screenshotMap['bandicam 2026-04-27 16-30-06-969.jpg'] = '1-2-54';
screenshotMap['bandicam 2026-04-27 16-30-33-609.jpg'] = '1-2-56';
screenshotMap['bandicam 2026-04-27 16-30-48-595.jpg'] = '1-2-57';
screenshotMap['bandicam 2026-04-27 16-30-58-521.jpg'] = '1-2-58';
screenshotMap['bandicam 2026-04-27 16-31-11-068.jpg'] = '1-2-59';
screenshotMap['bandicam 2026-04-27 16-31-27-126.jpg'] = '1-2-60';
screenshotMap['bandicam 2026-04-27 16-31-46-921.jpg'] = '1-2-61';
screenshotMap['bandicam 2026-04-27 16-32-01-192.jpg'] = '1-2-62';
screenshotMap['bandicam 2026-04-27 16-32-10-519.jpg'] = '1-2-63';

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
const codes=[...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort((a,b)=>parseInt(a.split('-')[2])-parseInt(b.split('-')[2]));
console.log('1-2 codes:', codes.length, 'Range:', codes[0], 'to', codes[codes.length-1]);
console.log('Saved batch 357 with', newQuotas.length, 'quotas');
