$jsonPath = 'E:\瀹氶閲囬泦\extracted_quota_data_detailed.json'

# Read existing JSON
$jsonContent = Get-Content $jsonPath -Raw -Encoding UTF8
$data = $jsonContent | ConvertFrom-Json

# Update 1-1-121 with labor and material details from OCR
$quota121 = $data.quotas | Where-Object { $_.code -eq '1-1-121' }
$quota121.labor_details = @(
  @{code='00010101'; name='鏅伐'; spec=''; unit='宸ユ棩'; quantity=96.942; quota_price=87.1; market_price=87.1; total=8443.65},
  @{code='00010102'; name='涓€鑸妧宸?; spec=''; unit='宸ユ棩'; quantity=348.989; quota_price=134.0; market_price=134.0; total=46764.53},
  @{code='00010103'; name='楂樼骇鎶€宸?; spec=''; unit='宸ユ棩'; quantity=38.776; quota_price=201.0; market_price=201.0; total=7793.98}
)
$quota121.material_details = @(
  @{code='03210485'; name='骞冲灚閾?; spec='缁煎悎'; unit='kg'; quantity=120.12; quota_price=4.5; market_price=4.5; total=540.54},
  @{code='03210507'; name='鏂滃灚閾?; spec='Q195~Q235 1#'; unit='kg'; quantity=111.6; quota_price=4.5; market_price=4.5; total=502.2},
  @{code='01290121'; name='鐑涧钖勯挗鏉?; spec='未 1.6~1.9'; unit='kg'; quantity=4.0; quota_price=3.62; market_price=3.62; total=14.48},
  @{code='03131515'; name='閾滅剨绮?; spec=''; unit='kg'; quantity=0.16; quota_price=20.8; market_price=20.8; total=3.33},
  @{code='01030723'; name='闀€閿岄搧涓?; spec='蠁 4.0~2.8'; unit='kg'; quantity=19.0; quota_price=5.18; market_price=5.18; total=98.42},
  @{code='03130929'; name='浣庣⒊閽㈢剨鏉?; spec='J422 蠁 3.2'; unit='kg'; quantity=1.05; quota_price=4.1; market_price=4.1; total=4.31},
  @{code='01350306'; name='榛勯摐鏉?; spec='未 0.08~0.3'; unit='kg'; quantity=2.0; quota_price=51.09; market_price=51.09; total=102.18},
  @{code='05030139'; name='鏈ㄦ澘'; spec=''; unit='m3'; quantity=0.223; quota_price=1930.0; market_price=1930.0; total=430.39},
  @{code='05010106'; name='閬撴湪'; spec=''; unit='m3'; quantity=0.688; quota_price=1048.0; market_price=1048.0; total=721.02},
  @{code='14030126'; name='姹芥补'; spec=''; unit='kg'; quantity=6.12; quota_price=7.0; market_price=7.0; total=42.84},
  @{code='14030116'; name='鐓ゆ补'; spec=''; unit='kg'; quantity=126.0; quota_price=8.44; market_price=8.44; total=1063.44},
  @{code='14050151'; name='鏈烘补'; spec=''; unit='kg'; quantity=8.08; quota_price=12.1; market_price=12.1; total=97.77},
  @{code='14090119'; name='榛勬补閽欏熀鑴?; spec=''; unit='kg'; quantity=3.03; quota_price=11.2; market_price=11.2; total=33.94},
  @{code='15010113'; name='鐭虫姗¤兌鏉?; spec='楂樺帇 未 1~6'; unit='kg'; quantity=0.65; quota_price=33.0; market_price=33.0; total=21.45},
  @{code='QTCLF-1'; name='鍏朵粬鏉愭枡璐?; spec=''; unit='%'; quantity=5.0; quota_price=1.0; market_price=1.0; total=183.82}
)

# Calculate labor_fee from details
$quota121.labor_fee = 63002.16

# Add mechanical details for 1-1-121
$quota121.mechanical_details = @(
  @{code='990401035'; name='杞介噸姹借溅'; spec='瑁呰浇璐ㄩ噺(t) 10'; unit='鍙扮彮'; quantity=1.5; quota_price=573.79; market_price=573.79; total=860.69},
  @{code='50000'; name='鎶樻棫璐?; spec=''; unit='鍏?; quantity=86.55; quota_price=0.85; market_price=0.85; total=110.35},
  @{code='50010'; name='妫€淇垂'; spec=''; unit='鍏?; quantity=17.67; quota_price=0.85; market_price=0.85; total=22.53},
  @{code='50020'; name='缁存姢璐?; spec=''; unit='鍏?; quantity=69.44; quota_price=0.85; market_price=0.85; total=88.54},
  @{code='00010100'; name='鏈烘浜哄伐'; spec=''; unit='宸ユ棩'; quantity=1.0; quota_price=134.0; market_price=134.0; total=201.0},
  @{code='14030106-1'; name='鏌存补'; spec=''; unit='kg'; quantity=40.03; quota_price=6.94; market_price=6.94; total=416.71},
  @{code='50060'; name='鍏朵粬璐?; spec=''; unit='鍏?; quantity=14.37; quota_price=1.0; market_price=1.0; total=21.56}
)

Write-Host "Updated 1-1-121: Labor=$($quota121.labor_details.Count), Material=$($quota121.material_details.Count), Mechanical=$($quota121.mechanical_details.Count)"

# Add 1-1-122 as new quota
$newQuota = @{
  code='1-1-122'
  name='鍒ㄥ簥銆佹彃搴娿€佹媺搴?璁惧閲嶉噺250t浠ュ唴'
  unit='鍙?
  comprehensive_price=146432.02
  labor_fee=76063.82
  material_fee=$null
  mechanical_fee=$null
  management_fee=$null
  profit=$null
  regulatory_fee=$null
  tax=$null
  safety_culture_fee=$null
  other_measure_fee=$null
  region='娌冲崡鐪?
  specialty='瀹夎'
  labor_details=@(
    @{code='00010101'; name='鏅伐'; spec=''; unit='宸ユ棩'; quantity=116.916; quota_price=87.1; market_price=87.1; total=10183.38},
    @{code='00010102'; name='涓€鑸妧宸?; spec=''; unit='宸ユ棩'; quantity=420.899; quota_price=134.0; market_price=134.0; total=56400.47},
    @{code='00010103'; name='楂樼骇鎶€宸?; spec=''; unit='宸ユ棩'; quantity=46.766; quota_price=201.0; market_price=201.0; total=9399.97}
  )
  material_details=@(
    @{code='03210485'; name='骞冲灚閾?; spec='缁煎悎'; unit='kg'; quantity=125.84; quota_price=4.5; market_price=4.5; total=566.28},
    @{code='03210507'; name='鏂滃灚閾?; spec='Q195~Q235 1#'; unit='kg'; quantity=119.04; quota_price=4.5; market_price=4.5; total=535.68},
    @{code='01290121'; name='鐑涧钖勯挗鏉?; spec='未 1.6~1.9'; unit='kg'; quantity=4.2; quota_price=3.62; market_price=3.62; total=15.2},
    @{code='03131515'; name='閾滅剨绮?; spec=''; unit='kg'; quantity=0.168; quota_price=20.8; market_price=20.8; total=3.49},
    @{code='01030723'; name='闀€閿岄搧涓?; spec='蠁4.0~2.8'; unit='kg'; quantity=19.95; quota_price=5.18; market_price=5.18; total=103.34},
    @{code='03130929'; name='浣庣⒊閽㈢剨鏉?; spec='J422 蠁3.2'; unit='kg'; quantity=1.1; quota_price=4.1; market_price=4.1; total=4.51},
    @{code='01350306'; name='榛勯摐鏉?; spec='未 0.08~0.3'; unit='kg'; quantity=2.1; quota_price=51.09; market_price=51.09; total=107.29},
    @{code='05030139'; name='鏈ㄦ澘'; spec=''; unit='m3'; quantity=0.235; quota_price=1930.0; market_price=1930.0; total=453.55},
    @{code='05010106'; name='閬撴湪'; spec=''; unit='m3'; quantity=0.723; quota_price=1048.0; market_price=1048.0; total=757.7},
    @{code='14030126'; name='姹芥补'; spec=''; unit='kg'; quantity=6.43; quota_price=7.0; market_price=7.0; total=45.01},
    @{code='14030116'; name='鐓ゆ补'; spec=''; unit='kg'; quantity=132.3; quota_price=8.44; market_price=8.44; total=1116.61},
    @{code='14050151'; name='鏈烘补'; spec=''; unit='kg'; quantity=8.485; quota_price=12.1; market_price=12.1; total=102.67},
    @{code='14090119'; name='榛勬补閽欏熀鑴?; spec=''; unit='kg'; quantity=3.182; quota_price=11.2; market_price=11.2; total=35.64},
    @{code='15010113'; name='鐭虫姗¤兌鏉?; spec='楂樺帇 未 1~6'; unit='kg'; quantity=0.683; quota_price=33.0; market_price=33.0; total=22.54},
    @{code='QTCLF-1'; name='鍏朵粬鏉愭枡璐?; spec=''; unit='%'; quantity=5.0; quota_price=1.0; market_price=1.0; total=193.48}
  )
  mechanical_details=@()
  source_screenshot='bandicam 2026-04-27 11-17-53-635.jpg'
}
$data.quotas += $newQuota

# Update processed count
$data.processed_count = 255

# Save JSON
$data | ConvertTo-Json -Depth 20 -Compressing | Set-Content $jsonPath -Encoding UTF8

Write-Host "Total quotas now: $($data.quotas.Count)"
Write-Host "Saved to JSON"