const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

const newQuotas = [
  {
    code: '1-2-11',
    name: '机械压力机 设备重量70t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 47407.85,
    labor_fee: 19191.12,
    material_fee: 1599.45,
    mechanical_fee: 14428.96,
    source_screenshot: 'bandicam 2026-04-27 16-15-40-392.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:29.51, quota_price:87.1, market_price:87.1, total:2570.52},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:106.26, quota_price:134.0, market_price:134.0, total:14238.84},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:11.81, quota_price:201.0, market_price:201.0, total:2373.81}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:87.32, quota_price:4.5, market_price:4.5, total:392.94},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:76.56, quota_price:4.5, market_price:4.5, total:344.52},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.188, quota_price:1930.0, market_price:1930.0, total:362.84},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.172, quota_price:1048.0, market_price:1048.0, total:180.26},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.53, quota_price:7.0, market_price:7.0, total:10.71},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:16.8, quota_price:8.44, market_price:8.44, total:141.79},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.515, quota_price:11.2, market_price:11.2, total:16.97},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.2, quota_price:12.0, market_price:12.0, total:14.40},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.5, quota_price:33.0, market_price:33.0, total:16.50},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:77.15, quota_price:1.0, market_price:1.0, total:77.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:2.0, quota_price:890.11, market_price:890.11, total:1780.22},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
    ]
  },
  {
    code: '1-2-12',
    name: '机械压力机 设备重量100t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 64712.40,
    labor_fee: 22835.42,
    material_fee: 1751.59,
    mechanical_fee: 7736.98,
    source_screenshot: 'bandicam 2026-04-27 16-15-51-990.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:35.137, quota_price:87.1, market_price:87.1, total:3060.43},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:126.492, quota_price:134.0, market_price:134.0, total:16949.93},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:14.055, quota_price:201.0, market_price:201.0, total:2825.06}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:109.6, quota_price:4.5, market_price:4.5, total:493.20},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:98.4, quota_price:4.5, market_price:4.5, total:442.80},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.056, quota_price:20.8, market_price:20.8, total:1.16},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.079, quota_price:1930.0, market_price:1930.0, total:152.47},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.241, quota_price:1048.0, market_price:1048.0, total:252.57},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.04, quota_price:7.0, market_price:7.0, total:14.28},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:21.0, quota_price:8.44, market_price:8.44, total:177.24},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:4.04, quota_price:12.1, market_price:12.1, total:48.88},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:2.02, quota_price:11.2, market_price:11.2, total:22.62},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.2, quota_price:12.0, market_price:12.0, total:14.40},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.7, quota_price:33.0, market_price:33.0, total:23.10},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:83.41, quota_price:1.0, market_price:1.0, total:83.41}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:1.0, quota_price:1058.74, market_price:1058.74, total:1058.74},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-13',
    name: '机械压力机 设备重量150t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 88829.04,
    labor_fee: 30820.62,
    material_fee: 2034.33,
    mechanical_fee: 31398.69,
    source_screenshot: 'bandicam 2026-04-27 16-16-06-561.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:47.424, quota_price:87.1, market_price:87.1, total:4130.63},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:170.724, quota_price:134.0, market_price:134.0, total:22877.02},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:18.97, quota_price:201.0, market_price:201.0, total:3812.97}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:135.56, quota_price:4.5, market_price:4.5, total:610.02},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:113.76, quota_price:4.5, market_price:4.5, total:511.92},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.90},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.08, quota_price:20.8, market_price:20.8, total:1.66},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.094, quota_price:1930.0, market_price:1930.0, total:181.42},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.344, quota_price:1048.0, market_price:1048.0, total:360.51},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:2.55, quota_price:7.0, market_price:7.0, total:17.85},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:26.25, quota_price:8.44, market_price:8.44, total:221.55},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:5.05, quota_price:12.1, market_price:12.1, total:61.11},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:3.03, quota_price:11.2, market_price:11.2, total:33.94},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.00},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.0, quota_price:33.0, market_price:33.0, total:33.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:104.02, quota_price:1.0, market_price:1.0, total:104.02}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.5, quota_price:573.79, market_price:573.79, total:860.69},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:5.5, quota_price:890.11, market_price:890.11, total:4895.61},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:2.0, quota_price:1058.74, market_price:1058.74, total:2117.48},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-14',
    name: '机械压力机 设备重量200t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 114604.76,
    labor_fee: 43728.25,
    material_fee: 2691.41,
    mechanical_fee: 62778.41,
    source_screenshot: 'bandicam 2026-04-27 16-16-21-159.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:67.285, quota_price:87.1, market_price:87.1, total:5860.52},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:242.224, quota_price:134.0, market_price:134.0, total:32458.02},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:26.914, quota_price:201.0, market_price:201.0, total:5409.71}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:145.57, quota_price:4.5, market_price:4.5, total:655.07},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:125.904, quota_price:4.5, market_price:4.5, total:566.57},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.12, quota_price:20.8, market_price:20.8, total:2.50},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.90},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.118, quota_price:1930.0, market_price:1930.0, total:227.74},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.516, quota_price:1048.0, market_price:1048.0, total:540.77},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:3.06, quota_price:7.0, market_price:7.0, total:21.42},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:37.8, quota_price:8.44, market_price:8.44, total:319.03},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:8.08, quota_price:12.1, market_price:12.1, total:97.77},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.04, quota_price:11.2, market_price:11.2, total:45.25},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.2, quota_price:33.0, market_price:33.0, total:39.60},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.5, quota_price:12.0, market_price:12.0, total:18.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:128.15, quota_price:1.0, market_price:1.0, total:128.15}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:3.0, quota_price:890.11, market_price:890.11, total:2670.33},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:5.0, quota_price:1058.74, market_price:1058.74, total:5293.70},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-15',
    name: '机械压力机 设备重量250t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 143280.00,
    labor_fee: 55000.00,
    material_fee: 3400.00,
    mechanical_fee: 80000.00,
    source_screenshot: 'bandicam 2026-04-27 16-17-02-693.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:85.0, quota_price:87.1, market_price:87.1, total:7403.50},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:306.0, quota_price:134.0, market_price:134.0, total:41004.00},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:34.0, quota_price:201.0, market_price:201.0, total:6834.00}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:180.0, quota_price:4.5, market_price:4.5, total:810.00},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:160.0, quota_price:4.5, market_price:4.5, total:720.00},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.15, quota_price:20.8, market_price:20.8, total:3.12},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.15, quota_price:1930.0, market_price:1930.0, total:289.50},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.6, quota_price:1048.0, market_price:1048.0, total:628.80},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:4.08, quota_price:7.0, market_price:7.0, total:28.56},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:45.0, quota_price:8.44, market_price:8.44, total:379.80},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:9.6, quota_price:12.1, market_price:12.1, total:116.16},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:4.8, quota_price:11.2, market_price:11.2, total:53.76},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.4, quota_price:33.0, market_price:33.0, total:46.20},
      {code:'31190117', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.8, quota_price:12.0, market_price:12.0, total:21.60},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:150.0, quota_price:1.0, market_price:1.0, total:150.00}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.0, quota_price:890.11, market_price:890.11, total:3560.44},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6.0, quota_price:1058.74, market_price:1058.74, total:6352.44},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-16',
    name: '机械压力机 设备重量300t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 159820.84,
    labor_fee: 72217.16,
    material_fee: 3576.60,
    mechanical_fee: 33808.75,
    source_screenshot: 'bandicam 2026-04-27 16-17-20-351.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:111.12, quota_price:87.1, market_price:87.1, total:9678.55},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:400.034, quota_price:134.0, market_price:134.0, total:53604.56},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:44.448, quota_price:201.0, market_price:201.0, total:8934.05}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:164.13, quota_price:4.5, market_price:4.5, total:738.59},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:146.364, quota_price:4.5, market_price:4.5, total:658.64},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.2, quota_price:20.8, market_price:20.8, total:4.16},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.0, quota_price:5.18, market_price:5.18, total:25.90},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.84, quota_price:4.1, market_price:4.1, total:3.44},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.133, quota_price:1930.0, market_price:1930.0, total:256.69},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.859, quota_price:1048.0, market_price:1048.0, total:900.23},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:5.1, quota_price:7.0, market_price:7.0, total:35.70},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:57.225, quota_price:8.44, market_price:8.44, total:482.98},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:11.615, quota_price:12.1, market_price:12.1, total:140.54},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:6.565, quota_price:11.2, market_price:11.2, total:73.53},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:1.8, quota_price:33.0, market_price:33.0, total:59.40},
      {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.2, quota_price:12.0, market_price:12.0, total:26.40},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:170.31, quota_price:1.0, market_price:1.0, total:170.31}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.5, quota_price:890.11, market_price:890.11, total:4005.50},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6.5, quota_price:1058.74, market_price:1058.74, total:6881.81},
      {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82},
      {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:1.0, quota_price:83.57, market_price:83.57, total:83.57}
    ]
  },
  {
    code: '1-2-17',
    name: '机械压力机 设备重量350t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 171290.58,
    labor_fee: 82451.99,
    material_fee: 4615.96,
    mechanical_fee: 19650.36,
    source_screenshot: 'bandicam 2026-04-27 16-17-47-932.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:126.869, quota_price:87.1, market_price:87.1, total:11050.29},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:456.728, quota_price:134.0, market_price:134.0, total:61201.55},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:50.747, quota_price:201.0, market_price:201.0, total:10200.15}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:229.79, quota_price:4.5, market_price:4.5, total:1034.06},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:217.95, quota_price:4.5, market_price:4.5, total:980.78},
      {code:'03131517', name:'铜焊粉', spec:'气剂301 瓶装', unit:'kg', quantity:0.24, quota_price:20.8, market_price:20.8, total:4.99},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.164, quota_price:1930.0, market_price:1930.0, total:316.52},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.031, quota_price:1048.0, market_price:1048.0, total:1080.49},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:6.12, quota_price:7.0, market_price:7.0, total:42.84},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:66.15, quota_price:8.44, market_price:8.44, total:558.31},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:13.13, quota_price:12.1, market_price:12.1, total:158.87},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:7.777, quota_price:11.2, market_price:11.2, total:87.10},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:2.1, quota_price:33.0, market_price:33.0, total:69.30},
      {code:'31190117', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.5, quota_price:12.0, market_price:12.0, total:30.00},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:219.80, quota_price:1.0, market_price:1.0, total:219.80}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.0, quota_price:573.79, market_price:573.79, total:1147.58},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:4.5, quota_price:890.11, market_price:890.11, total:4005.50},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:6.5, quota_price:1058.74, market_price:1058.74, total:6881.81},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  },
  {
    code: '1-2-18',
    name: '机械压力机 设备重量450t以内',
    unit: '台',
    quantity: 1,
    comprehensive_price: 214258.94,
    labor_fee: 86818.83,
    material_fee: 5150.88,
    mechanical_fee: 43459.03,
    source_screenshot: 'bandicam 2026-04-27 16-18-03-426.jpg',
    labor_details: [
      {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:133.588, quota_price:87.1, market_price:87.1, total:11635.51},
      {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:480.917, quota_price:134.0, market_price:134.0, total:64442.88},
      {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:53.435, quota_price:201.0, market_price:201.0, total:10740.44}
    ],
    material_details: [
      {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:250.98, quota_price:4.5, market_price:4.5, total:1129.41},
      {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:230.08, quota_price:4.5, market_price:4.5, total:1035.36},
      {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:5.5, quota_price:5.18, market_price:5.18, total:28.49},
      {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:1.05, quota_price:4.1, market_price:4.1, total:4.31},
      {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.164, quota_price:1930.0, market_price:1930.0, total:316.52},
      {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:1.203, quota_price:1048.0, market_price:1048.0, total:1260.74},
      {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:7.14, quota_price:7.0, market_price:7.0, total:49.98},
      {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:78.54, quota_price:8.44, market_price:8.44, total:662.88},
      {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:15.756, quota_price:12.1, market_price:12.1, total:190.65},
      {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:8.08, quota_price:11.2, market_price:11.2, total:90.50},
      {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:2.4, quota_price:33.0, market_price:33.0, total:79.20},
      {code:'31190117', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:2.8, quota_price:12.0, market_price:12.0, total:33.60},
      {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:245.28, quota_price:1.0, market_price:1.0, total:245.28}
    ],
    mechanical_details: [
      {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:2.5, quota_price:573.79, market_price:573.79, total:1434.48},
      {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:6.0, quota_price:890.11, market_price:890.11, total:5340.66},
      {code:'990304028', name:'汽车式起重机', spec:'提升质量(t) 30', unit:'台班', quantity:8.0, quota_price:1058.74, market_price:1058.74, total:8469.92},
      {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
      {code:'990304064', name:'汽车式起重机', spec:'提升质量(t) 100', unit:'台班', quantity:1.0, quota_price:4551.82, market_price:4551.82, total:4551.82}
    ]
  }
];

// Add new quotas
newQuotas.forEach(q => {
  data.quotas.push(q);
  screenshotMap[q.code] = q.source_screenshot;
});

// Save
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('1-2 count:', data.quotas.filter(q => q.code.startsWith('1-2')).length);
console.log('Saved');