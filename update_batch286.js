const fs = require('fs');

const jsonPath = 'E:/定额采集/extracted_quota_data_detailed.json';
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonContent);

// Add/update 1-2-1 with complete data
const quota21 = data.quotas.find(q => q.code === '1-2-1');
if (quota21) {
  quota21.labor_fee = 894.36;
  quota21.material_fee = 456.28;
  quota21.mechanical_fee = 89.95;
  quota21.management_fee = 95.17;
  quota21.profit = 48.91;
  quota21.regulatory_fee = 50.22;
  quota21.safety_culture_fee = 38.60;
  quota21.other_measure_fee = 18.63;
  quota21.source_screenshot = 'bandicam 2026-04-27 13-52-07-954.jpg';
  console.log(`Updated 1-2-1: labor_fee=${quota21.labor_fee}`);
}

// Add 1-2-2 placeholder
const existing22 = data.quotas.find(q => q.code === '1-2-2');
if (!existing22) {
  const placeholder22 = {
    code:'1-2-2',
    name:'机械压力机 设备重量2t以内',
    unit:'台',
    comprehensive_price:2634.52,
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
    source_screenshot:''
  };
  data.quotas.push(placeholder22);
  console.log('Added 1-2-2 placeholder');
}

// Add 1-2-3 placeholder
const existing23 = data.quotas.find(q => q.code === '1-2-3');
if (!existing23) {
  const placeholder23 = {
    code:'1-2-3',
    name:'机械压力机 设备重量3t以内',
    unit:'台',
    comprehensive_price:3698.17,
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
    source_screenshot:''
  };
  data.quotas.push(placeholder23);
  console.log('Added 1-2-3 placeholder');
}

// Update processed count
data.processed_count = 312;

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Total quotas now: ${data.quotas.length}`);
console.log('Saved to JSON');
