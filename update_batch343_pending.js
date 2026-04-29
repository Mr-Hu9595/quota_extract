const fs = require('fs');
const screenshotMap = JSON.parse(fs.readFileSync('E:/定额采集/screenshot_quota_map.json', 'utf8'));

// Mark remaining unmapped as waiting_for_api_reset
const pendingScreenshots = [
  'bandicam 2026-04-27 16-37-11-157.jpg',
  'bandicam 2026-04-27 16-37-22-110.jpg',
  'bandicam 2026-04-27 16-37-24-917.jpg',
  'bandicam 2026-04-27 16-38-12-310.jpg',
  'bandicam 2026-04-27 16-38-16-057.jpg',
  'bandicam 2026-04-27 16-38-38-926.jpg',
  'bandicam 2026-04-27 16-38-41-965.jpg',
  'bandicam 2026-04-27 16-40-30-904.jpg',
  'bandicam 2026-04-27 16-40-34-202.jpg',
  'bandicam 2026-04-27 16-40-47-448.jpg',
  'bandicam 2026-04-27 16-40-51-649.jpg',
  'bandicam 2026-04-27 16-41-03-195.jpg',
  'bandicam 2026-04-27 16-41-06-446.jpg',
  'bandicam 2026-04-27 16-41-16-996.jpg',
  'bandicam 2026-04-27 16-41-20-162.jpg',
  'bandicam 2026-04-27 16-41-32-178.jpg',
  'bandicam 2026-04-27 16-41-35-829.jpg',
  'bandicam 2026-04-27 16-42-16-750.jpg',
  'bandicam 2026-04-27 16-42-27-239.jpg',
  'bandicam 2026-04-27 16-42-32-039.jpg',
  'bandicam 2026-04-27 16-42-50-094.jpg',
  'bandicam 2026-04-27 16-43-00-454.jpg',
  'bandicam 2026-04-27 16-43-06-352.jpg',
  'bandicam 2026-04-27 16-43-24-828.jpg',
  'bandicam 2026-04-27 16-43-32-363.jpg',
  'bandicam 2026-04-27 16-43-49-383.jpg',
  'bandicam 2026-04-27 16-44-12-706.jpg',
  'bandicam 2026-04-27 16-44-22-579.jpg',
  'bandicam 2026-04-27 16-44-29-632.jpg',
  'bandicam 2026-04-27 16-44-49-627.jpg',
  'bandicam 2026-04-27 16-44-58-113.jpg',
  'bandicam 2026-04-27 16-45-05-167.jpg',
  'bandicam 2026-04-27 16-45-25-887.jpg',
  'bandicam 2026-04-27 16-45-33-855.jpg',
  'bandicam 2026-04-27 16-45-40-890.jpg',
  'bandicam 2026-04-27 16-46-00-381.jpg',
  'bandicam 2026-04-27 16-46-07-265.jpg',
  'bandicam 2026-04-27 16-46-14-115.jpg',
  'bandicam 2026-04-27 16-46-36-021.jpg',
  'bandicam 2026-04-27 16-46-42-887.jpg',
  'bandicam 2026-04-27 16-46-47-613.jpg'
];

pendingScreenshots.forEach(f => {
  if (!screenshotMap[f]) {
    screenshotMap[f] = 'waiting_for_api_reset';
  }
});

fs.writeFileSync('E:/定额采集/screenshot_quota_map.json', JSON.stringify(screenshotMap, null, 2), 'utf8');

// Get current stats
const data = JSON.parse(fs.readFileSync('E:/定额采集/extracted_quota_data_detailed.json', 'utf8'));
const unique1_2 = [...new Set(data.quotas.filter(q=>q.code.startsWith('1-2')).map(q=>q.code))].sort();
console.log('Total quotas:', data.quotas.length);
console.log('Unique 1-2 codes:', unique1_2.length);
console.log('Max code:', unique1_2[unique1_2.length-1]);
console.log('API limit reached at', new Date().toISOString());
console.log('Will reset at 2026-04-29T15:00:00+08:00');
console.log('Pending screenshots marked');
