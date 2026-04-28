const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Update 1-1-156 with complete data
const quota156 = data.quotas.find(q => q.code === '1-1-156');
if (quota156) {
  quota156.labor_fee = 15113.06;
  quota156.material_fee = 1208.91;
  quota156.mechanical_fee = 1194.81;
  quota156.management_fee = 3108.42;
  quota156.profit = 1597.67;
  quota156.regulatory_fee = 1640.27;
  quota156.safety_culture_fee = 1260.77;
  quota156.other_measure_fee = 608.63;
  quota156.source_screenshot = 'bandicam 2026-04-27 13-50-51-632.jpg';
  console.log(`Updated 1-1-156: labor_fee=${quota156.labor_fee}`);
}

// Add 1-1-157 as new quota with complete data
const newQuota157 = {
  code:'1-1-157',
  name:'其他木工机械 气动拨料器 0.1t以内',
  unit:'组',
  comprehensive_price:1285.77,
  labor_fee:723.11,
  material_fee:13.34,
  mechanical_fee:179.90,
  management_fee:149.44,
  profit:76.81,
  regulatory_fee:78.86,
  tax:null,
  safety_culture_fee:60.61,
  other_measure_fee:29.26,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.112, quota_price:87.1, market_price:87.1, total:96.86},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:4.006, quota_price:134.0, market_price:134.0, total:536.80},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.445, quota_price:201.0, market_price:201.0, total:89.45}
  ],
  material_details:[
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.001, quota_price:1930.0, market_price:1930.0, total:1.93},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:1.0, quota_price:8.44, market_price:8.44, total:8.44},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.1, quota_price:12.1, market_price:12.1, total:1.21},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.1, quota_price:11.2, market_price:11.2, total:1.12},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:0.64, quota_price:1.0, market_price:1.0, total:0.64}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95}
  ],
  source_screenshot:'bandicam 2026-04-27 13-51-04-493.jpg'
};
data.quotas.push(newQuota157);

// Add 1-1-158 as new quota with complete data
const newQuota158 = {
  code:'1-1-158',
  name:'其他木工机械 气动踢木器 单面卸木',
  unit:'组',
  comprehensive_price:2132.48,
  labor_fee:1217.74,
  material_fee:65.73,
  mechanical_fee:89.95,
  management_fee:248.29,
  profit:127.62,
  regulatory_fee:131.02,
  tax:null,
  safety_culture_fee:100.71,
  other_measure_fee:48.62,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:1.874, quota_price:87.1, market_price:87.1, total:163.23},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:6.746, quota_price:134.0, market_price:134.0, total:903.96},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.749, quota_price:201.0, market_price:201.0, total:150.55}
  ],
  material_details:[
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.001, quota_price:1930.0, market_price:1930.0, total:1.93},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:1.0, quota_price:5.18, market_price:5.18, total:5.18},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.0, quota_price:8.44, market_price:8.44, total:33.76},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.70},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:1.85, quota_price:1.0, market_price:1.0, total:1.85}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95}
  ],
  source_screenshot:'bandicam 2026-04-27 13-51-31-550.jpg'
};
data.quotas.push(newQuota158);

// Add 1-1-159 as new quota with complete data
const newQuota159 = {
  code:'1-1-159',
  name:'其他木工机械 气动踢木器 双面卸木',
  unit:'组',
  comprehensive_price:2657.92,
  labor_fee:1548.83,
  material_fee:59.52,
  mechanical_fee:89.95,
  management_fee:314.45,
  profit:161.62,
  regulatory_fee:165.93,
  tax:null,
  safety_culture_fee:127.54,
  other_measure_fee:61.57,
  region:'河南省',
  specialty:'安装',
  labor_details:[
    {code:'00010101', name:'普工', spec:'', unit:'工日', quantity:2.383, quota_price:87.1, market_price:87.1, total:207.56},
    {code:'00010102', name:'一般技工', spec:'', unit:'工日', quantity:8.580, quota_price:134.0, market_price:134.0, total:1149.72},
    {code:'00010103', name:'高级技工', spec:'', unit:'工日', quantity:0.953, quota_price:201.0, market_price:201.0, total:191.55}
  ],
  material_details:[
    {code:'05030139', name:'木板', spec:'', unit:'m3', quantity:0.001, quota_price:1930.0, market_price:1930.0, total:1.93},
    {code:'01290121', name:'热轧薄钢板', spec:'δ 1.6~1.9', unit:'kg', quantity:1.0, quota_price:3.62, market_price:3.62, total:3.62},
    {code:'01030723', name:'镀锌铁丝', spec:'φ 4.0~2.8', unit:'kg', quantity:1.0, quota_price:5.18, market_price:5.18, total:5.18},
    {code:'14030116', name:'煤油', spec:'', unit:'kg', quantity:4.0, quota_price:8.44, market_price:8.44, total:33.76},
    {code:'14050151', name:'机油', spec:'', unit:'kg', quantity:0.152, quota_price:12.1, market_price:12.1, total:1.84},
    {code:'14090119', name:'黄油钙基脂', spec:'', unit:'kg', quantity:0.152, quota_price:11.2, market_price:11.2, total:1.70},
    {code:'QTCLF-1', name:'其他材料费', spec:'', unit:'%', quantity:1.85, quota_price:1.0, market_price:1.0, total:1.85}
  ],
  mechanical_details:[
    {code:'990305020', name:'叉式起重机', spec:'提升质量(t) 5', unit:'台班', quantity:0.2, quota_price:449.76, market_price:449.76, total:89.95}
  ],
  source_screenshot:'bandicam 2026-04-27 13-51-41-076.jpg'
};
data.quotas.push(newQuota159);

// Add 1-1-160 as placeholder
const placeholder160 = {
  code:'1-1-160',
  name:'带锯机保护装置制作与安装 规格 铁架',
  unit:'kg',
  comprehensive_price:1900.66,
  labor_fee:null,
  material_fee:null,
  mechanical_fee:null,
  management_fee:null,
  profit:null,
  regulatory_fee:null,
  tax:null,
  safety_culture_fee:null,
  other_measure_fee:null,
  region:'河南省',
  specialty:'安装',
  labor_details:[],
  material_details:[],
  mechanical_details:[],
  source_screenshot:'bandicam 2026-04-27 13-51-41-076.jpg'
};
data.quotas.push(placeholder160);

// Update processed count
data.processed_count = 308;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
