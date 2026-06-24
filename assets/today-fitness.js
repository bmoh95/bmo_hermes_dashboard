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

function fallbackSvg(title) {
  const safe = esc(title);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="76">🏋️</text><text x="50%" y="62%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="34" font-weight="800" fill="white">${safe}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
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
    <figure class="exercise-photo">
      <img src="${esc(plan.image)}" alt="${esc(plan.title)} 운동 이미지" loading="lazy" onerror="this.onerror=null;this.src='${fallbackSvg(plan.title)}';" />
      <figcaption>${isRest ? '회복일도 증량 루틴의 일부입니다.' : '사진은 운동 분위기 참고용입니다. 실제 자세는 통증 없는 가동범위와 기록 가능한 중량을 우선하세요.'}</figcaption>
    </figure>
    <div class="plan-note">${esc(plan.focus)}</div>
    <div class="split-blocks">
      <section>
        <h3>운동 루틴</h3>
        ${list(plan.workout)}
      </section>
      <section>
        <h3>식단 루틴</h3>
        ${list(plan.meals)}
      </section>
    </div>
  `;
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
}

renderFitness();
