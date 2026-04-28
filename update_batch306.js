const fs = require('fs');
const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);
const screenshotMap = JSON.parse(fs.readFileSync('screenshot_quota_map.json', 'utf8'));

// Add 1-2-4
const q4 = {
  code: '1-2-4',
  name: '机械压力机 设备重量7t以内',
  unit: '台',
  quantity: 1,
  comprehensive_price: 7869.86,
  labor_fee: 2895.93,
  material_fee: 252.55,
  mechanical_fee: 759.35,
  source_screenshot: 'bandicam 2026-04-27 16-13-34-696.jpg',
  labor_details: [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:4.456, quota_price:87.1, market_price:87.1, total:388.12},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:16.042, quota_price:134.0, market_price:134.0, total:2149.63},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:1.782, quota_price:201.0, market_price:201.0, total:358.18}
  ],
  material_details: [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:17.805, quota_price:4.5, market_price:4.5, total:80.12},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:14.04, quota_price:4.5, market_price:4.5, total:63.18},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:0.8, quota_price:5.18, market_price:5.18, total:4.14},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.263, quota_price:4.1, market_price:4.1, total:1.08},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.029, quota_price:1930.0, market_price:1930.0, total:55.97},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.153, quota_price:7.0, market_price:7.0, total:1.07},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:3.15, quota_price:8.44, market_price:8.44, total:26.59},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.505, quota_price:12.1, market_price:12.1, total:6.11},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.202, quota_price:11.2, market_price:11.2, total:2.26},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:12.026, quota_price:1.0, market_price:1.0, total:12.03}
  ],
  mechanical_details: [
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.5, quota_price:449.76, market_price:449.76, total:224.88},
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.3, quota_price:573.79, market_price:573.79, total:172.14},
    {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.2, quota_price:83.57, market_price:83.57, total:16.71},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:0.5, quota_price:691.24, market_price:691.24, total:345.62}
  ]
};
data.quotas.push(q4);
screenshotMap['1-2-4'] = 'bandicam 2026-04-27 16-13-34-696.jpg';

// Add 1-2-9
const q9 = {
  code: '1-2-9',
  name: '机械压力机 设备重量40t以内',
  unit: '台',
  quantity: 1,
  comprehensive_price: 29435.17,
  labor_fee: 12577.64,
  material_fee: 1138.79,
  mechanical_fee: 7481.70,
  source_screenshot: 'bandicam 2026-04-27 16-15-10-699.jpg',
  labor_details: [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:19.353, quota_price:87.1, market_price:87.1, total:1685.65},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:69.672, quota_price:134.0, market_price:134.0, total:9336.05},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:7.741, quota_price:201.0, market_price:201.0, total:1555.94}
  ],
  material_details: [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:69.04, quota_price:4.5, market_price:4.5, total:310.68},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:61.64, quota_price:4.5, market_price:4.5, total:277.38},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.125, quota_price:1930.0, market_price:1930.0, total:241.25},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.069, quota_price:1048.0, market_price:1048.0, total:72.31},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:0.51, quota_price:7.0, market_price:7.0, total:3.57},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:11.55, quota_price:8.44, market_price:8.44, total:97.48},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:2.02, quota_price:12.1, market_price:12.1, total:24.44},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.606, quota_price:11.2, market_price:11.2, total:6.79},
    {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.0, quota_price:12.0, market_price:12.0, total:12.00},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.4, quota_price:33.0, market_price:33.0, total:13.20},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:54.228, quota_price:1.0, market_price:1.0, total:54.23}
  ],
  mechanical_details: [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:0.5, quota_price:573.79, market_price:573.79, total:286.90},
    {code:'990304004', name:'汽车式起重机', spec:'提升质量(t) 8', unit:'台班', quantity:1.5, quota_price:691.24, market_price:691.24, total:1036.86},
    {code:'990304040', name:'汽车式起重机', spec:'提升质量(t) 50', unit:'台班', quantity:1.0, quota_price:2378.65, market_price:2378.65, total:2378.65},
    {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.4, quota_price:83.57, market_price:83.57, total:33.43}
  ]
};
data.quotas.push(q9);
screenshotMap['1-2-9'] = 'bandicam 2026-04-27 16-15-10-699.jpg';

// Add 1-2-10
const q10 = {
  code: '1-2-10',
  name: '机械压力机 设备重量50t以内',
  unit: '台',
  quantity: 1,
  comprehensive_price: 35250.77,
  labor_fee: 15518.40,
  material_fee: 1413.15,
  mechanical_fee: 10053.03,
  source_screenshot: 'bandicam 2026-04-27 16-15-26-982.jpg',
  labor_details: [
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:23.87, quota_price:87.1, market_price:87.1, total:2079.10},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:85.92, quota_price:134.0, market_price:134.0, total:11513.28},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:9.55, quota_price:201.0, market_price:201.0, total:1921.05}
  ],
  material_details: [
    {code:'03210485', name:'平垫铁', spec:'综合', unit:'kg', quantity:78.08, quota_price:4.5, market_price:4.5, total:351.36},
    {code:'03210507', name:'斜垫铁', spec:'Q195~Q235 1#', unit:'kg', quantity:72.72, quota_price:4.5, market_price:4.5, total:327.24},
    {code:'01030723', name:'镀锌铁丝', spec:'φ4.0~2.8', unit:'kg', quantity:4.5, quota_price:5.18, market_price:5.18, total:23.31},
    {code:'03130929', name:'低碳钢焊条', spec:'J422 φ3.2', unit:'kg', quantity:0.525, quota_price:4.1, market_price:4.1, total:2.15},
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.15, quota_price:1930.0, market_price:1930.0, total:289.50},
    {code:'05010106', name:'道木', spec:'', unit:'m3', quantity:0.138, quota_price:1048.0, market_price:1048.0, total:144.62},
    {code:'14030126', name:'汽油', spec:'', unit:'kg', quantity:1.02, quota_price:7.0, market_price:7.0, total:7.14},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:14.7, quota_price:8.44, market_price:8.44, total:124.07},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:3.03, quota_price:12.1, market_price:12.1, total:36.66},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:1.01, quota_price:11.2, market_price:11.2, total:11.31},
    {code:'31190116', name:'红钢纸', spec:'0.2~0.5', unit:'kg', quantity:1.0, quota_price:12.0, market_price:12.0, total:12.00},
    {code:'15010113', name:'石棉橡胶板', spec:'高压 δ1~6', unit:'kg', quantity:0.5, quota_price:33.0, market_price:33.0, total:16.50},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:67.29, quota_price:1.0, market_price:1.0, total:67.29}
  ],
  mechanical_details: [
    {code:'990401035', name:'载重汽车', spec:'装载质量(t) 10', unit:'台班', quantity:1.0, quota_price:573.79, market_price:573.79, total:573.79},
    {code:'990304016', name:'汽车式起重机', spec:'提升质量(t) 16', unit:'台班', quantity:1.5, quota_price:890.11, market_price:890.11, total:1335.17},
    {code:'990304052', name:'汽车式起重机', spec:'提升质量(t) 75', unit:'台班', quantity:1.0, quota_price:3063.65, market_price:3063.65, total:3063.65},
    {code:'990901020', name:'交流弧焊机', spec:'容量(kV·A) 32', unit:'台班', quantity:0.5, quota_price:83.57, market_price:83.57, total:41.79}
  ]
};
data.quotas.push(q10);
screenshotMap['1-2-10'] = 'bandicam 2026-04-27 16-15-26-982.jpg';

// Save
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync('screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');
console.log('Total quotas:', data.quotas.length);
console.log('1-2 count:', data.quotas.filter(q => q.code.startsWith('1-2')).length);
console.log('Saved');