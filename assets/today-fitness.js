const FITNESS_IMAGE_POOL = {
  upper: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
  lower: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  full: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  recovery: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?auto=format&fit=crop&w=900&q=80'
};

const FITNESS_PLAN = [
  {
    key: 'sun',
    title: '회복 + 식사량 확보',
    badge: 'Rest / Meal Prep',
    focus: '체중 증가를 만드는 날. 걷기와 스트레칭만 가볍게 하고 다음 주 식재료를 준비합니다.',
    image: FITNESS_IMAGE_POOL.recovery,
    workout: [
      '가벼운 산책 20–30분 또는 완전 휴식',
      '고관절·흉추·어깨 가동성 10분',
      '전신 스트레칭 8–12분',
      '주간 체중 평균·허리둘레·운동기록 확인'
    ],
    meals: [
      '아침: 팬케이크/토스트 + 계란 2–3개 + 우유 + 과일',
      '간식: 과일 스무디 + 웨이 1스쿱',
      '점심: 김치볶음밥 + 계란 + 참치/닭고기',
      '저녁: 고등어/연어 + 밥 300g + 두부찌개',
      '자기 전: 견과류 30g + 두유/우유'
    ]
  },
  {
    key: 'mon',
    title: 'Upper A: 가슴·등 중심',
    badge: 'Heavy Upper',
    focus: '벤치프레스와 로우를 기록 갱신 대상으로 둡니다. 모든 세트는 RIR 1–3.',
    image: FITNESS_IMAGE_POOL.upper,
    workout: [
      '벤치프레스 3세트 x 5–8회',
      '체스트 서포티드 로우 3세트 x 6–10회',
      '인클라인 덤벨프레스 3세트 x 8–12회',
      '풀업 또는 랫풀다운 3세트 x 8–12회',
      '시티드 덤벨 숄더프레스 2세트 x 8–10회',
      '레터럴 레이즈 3세트 x 12–20회',
      '트라이셉스 프레스다운 2세트 x 10–15회',
      '덤벨/케이블 컬 2세트 x 10–15회'
    ],
    meals: [
      '아침: 오트밀 + 우유 + 바나나 + 웨이 + 땅콩버터, 계란 2개',
      '간식: 그릭요거트 + 그래놀라 + 꿀',
      '점심: 불고기덮밥 + 계란 + 참기름',
      '운동 전후: 미숫가루 우유 쉐이크',
      '저녁: 고등어구이 + 밥 + 두부된장국',
      '자기 전: 우유 + 견과류'
    ]
  },
  {
    key: 'tue',
    title: 'Lower A: 스쿼트·햄스트링',
    badge: 'Heavy Lower',
    focus: '스쿼트와 RDL을 중심으로 하체 전체 볼륨을 확보합니다.',
    image: FITNESS_IMAGE_POOL.lower,
    workout: [
      '백스쿼트 3세트 x 5–8회',
      '루마니안 데드리프트 3세트 x 6–10회',
      '레그프레스 2–3세트 x 10–15회',
      '레그컬 2–3세트 x 10–15회',
      '스탠딩 카프레이즈 3세트 x 8–12회',
      '케이블 크런치 또는 AB wheel 2–3세트'
    ],
    meals: [
      '아침: 베이글 + 계란치즈 + 우유',
      '간식: 바나나 + 견과류 + 두유',
      '점심: 닭다리살 카레라이스',
      '운동 전후: 웨이 + 떡/식빵',
      '저녁: 제육볶음 + 밥 추가 + 익힌 채소',
      '자기 전: 그릭요거트 + 꿀'
    ]
  },
  {
    key: 'wed',
    title: '전신 보조 + 약점 보강',
    badge: 'Full Body Light',
    focus: '초보자는 전신 Day 2로 진행하고, 중급자는 회복 가능한 범위에서 약점만 보강합니다.',
    image: FITNESS_IMAGE_POOL.full,
    workout: [
      '트랩바 데드리프트 또는 힙쓰러스트 2–3세트 x 5–8회',
      '오버헤드프레스 3세트 x 6–10회',
      '고블렛/프론트 스쿼트 2–3세트 x 8–12회',
      '케이블 로우 3세트 x 8–12회',
      '인클라인 덤벨프레스 2세트 x 8–12회',
      '레그컬 2세트 x 10–15회',
      '카프레이즈 또는 코어 2세트 x 10–15회'
    ],
    meals: [
      '아침: 김밥 1–1.5줄 + 우유/프로틴',
      '간식: 오트밀 스무디',
      '점심: 참치마요덮밥 + 계란 + 김',
      '운동 전후: 시리얼 + 우유',
      '저녁: 소고기/돼지고기 + 파스타',
      '자기 전: 두유 + 견과류'
    ]
  },
  {
    key: 'thu',
    title: 'Upper B: 어깨·등·상부가슴',
    badge: 'Upper Volume',
    focus: '오버헤드프레스/인클라인과 등 당기기 볼륨을 누적합니다.',
    image: FITNESS_IMAGE_POOL.upper,
    workout: [
      '오버헤드프레스 또는 인클라인 벤치 3세트 x 5–8회',
      '중량 풀업 또는 랫풀다운 3세트 x 6–10회',
      '덤벨 벤치프레스 또는 딥스 2–3세트 x 8–12회',
      '케이블 로우 3세트 x 8–12회',
      '리어델트 플라이 또는 페이스풀 3세트 x 12–20회',
      '레터럴 레이즈 2세트 x 12–20회',
      '오버헤드 트라이셉스 익스텐션 2세트 x 10–15회',
      '컬 변형 2세트 x 10–15회'
    ],
    meals: [
      '아침: 밥 + 계란 3개 + 아보카도 + 김치',
      '간식: 미숫가루 + 우유 + 웨이',
      '점심: 닭갈비덮밥 + 밥 추가',
      '운동 전후: 바나나 + 웨이',
      '저녁: 연어구이 + 밥 + 두부/채소',
      '자기 전: 카세인 또는 우유'
    ]
  },
  {
    key: 'fri',
    title: 'Lower B: 둔근·하체 볼륨',
    badge: 'Lower Volume',
    focus: '하체 보조 볼륨을 쌓고 허리 피로를 관리합니다.',
    image: FITNESS_IMAGE_POOL.lower,
    workout: [
      '트랩바 데드리프트 또는 프론트 스쿼트 2–3세트 x 3–8회',
      '불가리안 스플릿 스쿼트 3세트 x 8–12회',
      '힙쓰러스트 3세트 x 8–12회',
      '레그익스텐션 2–3세트 x 10–15회',
      '시티드/라잉 레그컬 2–3세트 x 10–15회',
      '시티드 카프레이즈 3세트 x 10–15회',
      '사이드 플랭크 또는 Pallof press 2세트'
    ],
    meals: [
      '아침: 오트밀 + 우유 + 웨이 + 그래놀라',
      '간식: 식빵 + 땅콩버터 + 잼',
      '점심: 비빔밥 + 소고기 + 계란 2개 + 참기름',
      '운동 전후: 우유 + 바나나',
      '저녁: 돼지고기 안심/등심 + 밥 + 된장국',
      '자기 전: 그릭요거트'
    ]
  },
  {
    key: 'sat',
    title: '전신 펌프 + 부족 부위',
    badge: 'Full Body / Weak Point',
    focus: '초보자는 전신 Day 3. 중급자는 팔·어깨·등 약점 위주로 짧게 마무리합니다.',
    image: FITNESS_IMAGE_POOL.full,
    workout: [
      '레그프레스 또는 스쿼트 변형 3세트 x 8–12회',
      '인클라인 벤치프레스 또는 딥스 보조 3세트 x 6–10회',
      '바벨/케이블 로우 3세트 x 8–12회',
      '백익스텐션 또는 RDL 변형 2세트 x 10–12회',
      '불가리안 스플릿 스쿼트 2세트 x 8–12회',
      '페이스풀 또는 리어델트 플라이 2세트 x 12–20회',
      '컬 + 트라이셉스 각 1–2세트 x 10–15회'
    ],
    meals: [
      '아침: 프렌치토스트 + 계란 + 우유 + 과일',
      '간식: 견과류 + 프로틴음료',
      '점심: 규동/돈부리 스타일 덮밥',
      '운동 전후: 떡 + 웨이',
      '저녁: 닭다리살 구이 + 밥 + 감자/고구마',
      '자기 전: 우유 + 치즈'
    ]
  }
];

function esc(value) {
  return String(value ?? '').replace(/[&<>\"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function formatDate(date) {
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  }).format(date);
}

const EXERCISE_LIBRARY = [
  { keys: ['벤치프레스', '덤벨 벤치프레스'], name: '벤치프레스', target: '가슴·삼두·전면어깨', cues: ['견갑을 모으고 가슴을 세움', '팔꿈치 45–70도', '가슴 근처까지 내린 뒤 밀기'], type: 'press' },
  { keys: ['인클라인'], name: '인클라인 프레스', target: '상부가슴·전면어깨', cues: ['벤치 20–35도', '손목 수직', '가슴 위쪽으로 내리기'], type: 'incline' },
  { keys: ['오버헤드프레스', '숄더프레스'], name: '오버헤드프레스', target: '어깨·삼두', cues: ['갈비뼈 과신전 금지', '턱을 살짝 당김', '귀 옆으로 수직 밀기'], type: 'shoulder' },
  { keys: ['로우'], name: '로우', target: '광배·중부등', cues: ['가슴 고정', '팔꿈치를 뒤로 당김', '어깨 으쓱 금지'], type: 'pull' },
  { keys: ['풀업', '랫풀다운'], name: '풀업/랫풀다운', target: '광배·이두', cues: ['가슴을 바 쪽으로', '팔꿈치를 옆구리로 당김', '반동 줄이기'], type: 'pulldown' },
  { keys: ['스쿼트', '고블렛', '프론트 스쿼트'], name: '스쿼트', target: '대퇴사두·둔근', cues: ['발 전체로 지면 밀기', '무릎은 발끝 방향', '허리 중립 유지'], type: 'squat' },
  { keys: ['레그프레스'], name: '레그프레스', target: '대퇴사두·둔근', cues: ['엉덩이 뜨지 않게', '무릎 잠그지 않기', '통제해서 내리기'], type: 'legpress' },
  { keys: ['데드리프트', '루마니안', 'RDL'], name: '데드리프트/RDL', target: '햄스트링·둔근·척추기립근', cues: ['엉덩이를 뒤로 접기', '바는 몸 가까이', '허리 말림 금지'], type: 'hinge' },
  { keys: ['힙쓰러스트'], name: '힙쓰러스트', target: '둔근', cues: ['턱 당기고 갈비뼈 내림', '정점에서 엉덩이 수축', '허리 과신전 금지'], type: 'hip' },
  { keys: ['불가리안'], name: '불가리안 스플릿 스쿼트', target: '둔근·대퇴사두', cues: ['앞발 중심', '상체 살짝 전경사', '무릎 방향 유지'], type: 'split' },
  { keys: ['레그컬'], name: '레그컬', target: '햄스트링', cues: ['골반 고정', '끝까지 말아 올림', '내릴 때 천천히'], type: 'curl' },
  { keys: ['레그익스텐션'], name: '레그익스텐션', target: '대퇴사두', cues: ['무릎 축 맞추기', '상단 1초 수축', '반동 금지'], type: 'extension' },
  { keys: ['카프레이즈'], name: '카프레이즈', target: '종아리', cues: ['최하단 스트레치', '최상단 수축', '반동 없이 반복'], type: 'calf' },
  { keys: ['레터럴 레이즈'], name: '레터럴 레이즈', target: '측면어깨', cues: ['팔꿈치 살짝 굽힘', '어깨 높이까지만', '승모 개입 줄이기'], type: 'lateral' },
  { keys: ['페이스풀', '리어델트'], name: '페이스풀/리어델트', target: '후면어깨·상부등', cues: ['팔꿈치 높게', '얼굴 쪽으로 당김', '견갑 통제'], type: 'rear' },
  { keys: ['트라이셉스', '삼두'], name: '트라이셉스 운동', target: '삼두', cues: ['팔꿈치 고정', '끝에서 완전 수축', '어깨 흔들림 줄이기'], type: 'triceps' },
  { keys: ['컬', '이두'], name: '컬', target: '이두', cues: ['팔꿈치 고정', '손목 꺾임 금지', '내릴 때 천천히'], type: 'biceps' },
  { keys: ['크런치', 'AB wheel', '코어', '플랭크', 'Pallof'], name: '코어 운동', target: '복근·몸통 안정성', cues: ['허리 꺾임 방지', '갈비뼈 내림', '느리게 통제'], type: 'core' },
  { keys: ['산책', '가동성', '스트레칭', '운동기록'], name: '회복/가동성', target: '회복·관절 가동범위', cues: ['호흡 안정', '통증 없는 범위', '가볍게 마무리'], type: 'recovery' }
];

function findExerciseInfo(item) {
  return EXERCISE_LIBRARY.find((entry) => entry.keys.some((key) => item.includes(key))) || {
    name: item.split(/\s+\d/)[0],
    target: '전신 보조',
    cues: ['통증 없는 가동범위', '반동 없이 통제', '기록 가능한 중량 사용'],
    type: 'general'
  };
}

function svgData(svg) {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

function exerciseSvg(info) {
  const safeName = esc(info.name);
  const safeTarget = esc(info.target);
  const cue1 = esc(info.cues[0] || '통제된 반복');
  const color = {
    press: '#ef4444', incline: '#f97316', shoulder: '#8b5cf6', pull: '#2563eb', pulldown: '#0ea5e9',
    squat: '#16a34a', legpress: '#22c55e', hinge: '#14b8a6', hip: '#10b981', split: '#84cc16',
    curl: '#06b6d4', extension: '#65a30d', calf: '#a3e635', lateral: '#a855f7', rear: '#6366f1',
    triceps: '#f43f5e', biceps: '#ec4899', core: '#64748b', recovery: '#059669', general: '#334155'
  }[info.type] || '#334155';
  const figure = {
    press: '<line x1="112" y1="118" x2="220" y2="118"/><line x1="150" y1="118" x2="150" y2="165"/><line x1="182" y1="118" x2="182" y2="165"/><line x1="105" y1="168" x2="235" y2="168"/><circle cx="86" cy="118" r="18"/><circle cx="246" cy="118" r="18"/>',
    incline: '<line x1="105" y1="175" x2="235" y2="120"/><line x1="138" y1="126" x2="205" y2="95"/><line x1="158" y1="132" x2="225" y2="102"/><circle cx="120" cy="108" r="16"/>',
    shoulder: '<circle cx="170" cy="80" r="22"/><line x1="170" y1="102" x2="170" y2="178"/><line x1="120" y1="88" x2="220" y2="88"/><line x1="140" y1="88" x2="140" y2="138"/><line x1="200" y1="88" x2="200" y2="138"/>',
    pull: '<circle cx="120" cy="90" r="20"/><line x1="140" y1="105" x2="230" y2="105"/><line x1="150" y1="135" x2="225" y2="135"/><path d="M230 80 L190 105 L230 130"/>',
    pulldown: '<line x1="90" y1="70" x2="250" y2="70"/><circle cx="170" cy="120" r="20"/><line x1="110" y1="72" x2="150" y2="115"/><line x1="230" y1="72" x2="190" y2="115"/><path d="M135 98 L150 115 L132 118"/><path d="M205 98 L190 115 L208 118"/>',
    squat: '<circle cx="155" cy="75" r="18"/><line x1="155" y1="94" x2="185" y2="140"/><line x1="185" y1="140" x2="140" y2="178"/><line x1="185" y1="140" x2="220" y2="178"/><line x1="110" y1="105" x2="215" y2="105"/>',
    legpress: '<rect x="100" y="120" width="150" height="18" rx="6"/><circle cx="135" cy="90" r="18"/><line x1="145" y1="108" x2="185" y2="138"/><line x1="185" y1="138" x2="235" y2="95"/><line x1="238" y1="78" x2="260" y2="120"/>',
    hinge: '<circle cx="135" cy="82" r="18"/><line x1="150" y1="100" x2="205" y2="132"/><line x1="205" y1="132" x2="185" y2="182"/><line x1="205" y1="132" x2="245" y2="178"/><line x1="115" y1="150" x2="250" y2="150"/>',
    hip: '<circle cx="120" cy="105" r="17"/><line x1="130" y1="120" x2="210" y2="120"/><line x1="210" y1="120" x2="245" y2="160"/><line x1="95" y1="142" x2="240" y2="142"/><path d="M190 120 Q210 80 230 120"/>',
    split: '<circle cx="150" cy="78" r="18"/><line x1="150" y1="96" x2="170" y2="142"/><line x1="170" y1="142" x2="125" y2="180"/><line x1="170" y1="142" x2="230" y2="165"/><line x1="220" y1="165" x2="255" y2="165"/>',
    lateral: '<circle cx="170" cy="82" r="20"/><line x1="170" y1="102" x2="170" y2="175"/><line x1="170" y1="120" x2="95" y2="105"/><line x1="170" y1="120" x2="245" y2="105"/>',
    rear: '<circle cx="145" cy="78" r="18"/><line x1="150" y1="96" x2="195" y2="135"/><line x1="165" y1="116" x2="95" y2="105"/><line x1="175" y1="126" x2="245" y2="105"/>',
    biceps: '<circle cx="150" cy="78" r="18"/><line x1="150" y1="96" x2="150" y2="170"/><path d="M150 122 Q105 122 112 165"/><path d="M150 122 Q195 122 188 165"/>',
    triceps: '<circle cx="165" cy="82" r="18"/><line x1="165" y1="100" x2="165" y2="172"/><line x1="122" y1="118" x2="165" y2="118"/><line x1="208" y1="118" x2="165" y2="118"/><path d="M122 118 L122 165"/><path d="M208 118 L208 165"/>',
    core: '<circle cx="110" cy="120" r="18"/><line x1="130" y1="126" x2="230" y2="126"/><line x1="185" y1="126" x2="220" y2="170"/><line x1="180" y1="126" x2="210" y2="90"/>',
    recovery: '<path d="M110 160 Q170 85 240 160"/><circle cx="170" cy="93" r="20"/><path d="M130 175 Q170 205 210 175"/>',
    general: '<circle cx="170" cy="78" r="20"/><line x1="170" y1="100" x2="170" y2="170"/><line x1="120" y1="125" x2="220" y2="125"/><line x1="170" y1="170" x2="130" y2="205"/><line x1="170" y1="170" x2="210" y2="205"/>'
  }[info.type] || '<circle cx="170" cy="105" r="42"/>';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f8fafc"/><stop offset="1" stop-color="#eef2ff"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f172a" flood-opacity=".12"/></filter></defs><rect width="640" height="360" rx="28" fill="url(#bg)"/><rect x="30" y="30" width="300" height="300" rx="24" fill="white" filter="url(#s)"/><g transform="translate(20,40)" stroke="${color}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none">${figure}</g><circle cx="520" cy="66" r="36" fill="${color}" opacity=".13"/><text x="520" y="78" text-anchor="middle" font-size="40">🏋️</text><text x="360" y="128" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans KR',sans-serif" font-size="34" font-weight="900" fill="#111827">${safeName}</text><text x="360" y="172" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans KR',sans-serif" font-size="20" font-weight="800" fill="${color}">${safeTarget}</text><text x="360" y="222" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans KR',sans-serif" font-size="18" font-weight="700" fill="#334155">핵심: ${cue1}</text><text x="360" y="258" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans KR',sans-serif" font-size="16" font-weight="700" fill="#64748b">통증 있으면 중량·가동범위 조정</text></svg>`;
  return svgData(svg);
}

function fallbackSvg(title) {
  return exerciseSvg({ name: title, target: '운동 설명', cues: ['통증 없는 범위에서 수행'], type: 'general' });
}

function mealList(items) {
  return `<ul class="meal-list">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
}

function exerciseCard(item, index) {
  const info = findExerciseInfo(item);
  return `<li class="exercise-card ${index === 0 ? 'active' : ''}" data-slide="${index}">
    <img class="exercise-diagram" src="${exerciseSvg(info)}" alt="${esc(info.name)} 설명 이미지" />
    <div class="exercise-copy">
      <strong>${esc(item)}</strong>
      <small>주요 자극: ${esc(info.target)}</small>
      <ol>${info.cues.map((cue) => `<li>${esc(cue)}</li>`).join('')}</ol>
    </div>
  </li>`;
}

function exerciseList(plan, carouselId) {
  const total = plan.workout.length;
  return `<div class="exercise-carousel" id="${esc(carouselId)}" data-index="0" data-total="${total}">
    <div class="carousel-top">
      <button class="carousel-btn" type="button" data-dir="-1" aria-label="이전 운동">‹</button>
      <span class="carousel-count"><b>1</b> / ${total}</span>
      <button class="carousel-btn" type="button" data-dir="1" aria-label="다음 운동">›</button>
    </div>
    <ul class="exercise-list">${plan.workout.map(exerciseCard).join('')}</ul>
  </div>`;
}

function renderPanel(plan, date, label) {
  const isRest = plan.key === 'sun';
  return `
    <div class="day-head">
      <div>
        <p class="eyebrow">${esc(label)} · ${esc(formatDate(date))}</p>
        <h2>${esc(plan.title)}</h2>
      </div>
      <span class="plan-badge">${esc(plan.badge)}</span>
    </div>
    <div class="day-content">
      <div class="day-main">
        <div class="plan-note">${esc(plan.focus)} ${isRest ? '' : '아래 각 운동 카드는 동작 이해용 설명 이미지와 핵심 큐를 함께 표시합니다.'}</div>
        <div class="split-blocks">
          <section>
            <h3>운동 루틴</h3>
            ${exerciseList(plan, `${label === '오늘' ? 'today' : 'tomorrow'}-exercise-carousel`)}
          </section>
          <section>
            <h3>식단 루틴</h3>
            ${mealList(plan.meals)}
          </section>
        </div>
      </div>
    </div>
  `;
}

function updateCarousel(carousel, nextIndex) {
  const total = Number(carousel.dataset.total || 0);
  if (!total) return;
  const index = (nextIndex + total) % total;
  carousel.dataset.index = String(index);
  carousel.querySelectorAll('.exercise-card').forEach((card, cardIndex) => {
    card.classList.toggle('active', cardIndex === index);
  });
  const count = carousel.querySelector('.carousel-count b');
  if (count) count.textContent = String(index + 1);
}

function initCarousels() {
  document.querySelectorAll('.exercise-carousel').forEach((carousel) => {
    carousel.querySelectorAll('.carousel-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const direction = Number(button.dataset.dir || 1);
        const current = Number(carousel.dataset.index || 0);
        updateCarousel(carousel, current + direction);
      });
    });
  });
}

function renderFitness() {
  const now = new Date();
  const todayIndex = now.getDay();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const today = FITNESS_PLAN[todayIndex];
  const next = FITNESS_PLAN[tomorrow.getDay()];

  document.getElementById('fitness-summary').textContent = `${formatDate(now)} 기준 자동 업데이트 · 오늘/내일 식단과 운동 루틴`;
  document.getElementById('fitness-status').innerHTML = [
    '<span class="pill">목표: 주당 체중 +0.25–0.5%</span>',
    '<span class="pill">단백질 1.6–2.2g/kg</span>',
    '<span class="pill">대부분 RIR 1–3</span>',
    '<span class="pill">2주 정체 시 +150–250kcal</span>'
  ].join('');
  document.getElementById('today-panel').innerHTML = renderPanel(today, now, '오늘');
  document.getElementById('tomorrow-panel').innerHTML = renderPanel(next, tomorrow, '내일');
  initCarousels();
}

renderFitness();
