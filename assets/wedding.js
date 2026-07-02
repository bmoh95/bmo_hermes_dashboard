(() => {
  function revealInvitation() {
    document.documentElement.classList.remove('fonts-loading');
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(revealInvitation, revealInvitation);
    window.setTimeout(revealInvitation, 1800);
  } else {
    revealInvitation();
  }

  const weddingStart = new Date('2026-11-22T15:30:00+09:00');
  const weddingEnd = new Date('2026-11-22T17:30:00+09:00');
  const dday = document.getElementById('d-day');
  const countdownDetail = document.getElementById('countdown-detail');
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function updateCountdown() {
    if (!dday || !countdownDetail) return;
    const now = new Date();
    const diff = weddingStart.getTime() - now.getTime();

    if (diff <= 0) {
      dday.textContent = now <= weddingEnd ? 'Today' : 'Thank you';
      countdownDetail.textContent = now <= weddingEnd ? '오늘, 예식이 진행됩니다.' : '축복해 주셔서 감사합니다.';
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    dday.textContent = `D-${days}`;
    countdownDetail.textContent = `예식까지 ${days}일 ${hours}시간 ${minutes}분 남았습니다.`;
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast('복사되었습니다.');
    } catch (error) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '-1000px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      showToast('복사되었습니다.');
    }
  }

  const eventTitle = '박용태 · 나수진 결혼식';
  const eventLocation = '더채플앳청담 커티지홀, 서울 강남구 선릉로 757';
  const eventDescription = '박용태와 나수진의 결혼식에 초대합니다.';
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=20261122T063000Z%2F20261122T083000Z&ctz=Asia%2FSeoul&location=${encodeURIComponent(eventLocation)}&details=${encodeURIComponent(eventDescription)}&sf=true&output=xml`;
  const androidIntentUrl = `intent:#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.item/event;S.title=${encodeURIComponent(eventTitle)};S.eventLocation=${encodeURIComponent(eventLocation)};S.description=${encodeURIComponent(eventDescription)};l.beginTime=1795329000000;l.endTime=1795336200000;end`;

  function calendarTarget() {
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const icsUrl = new URL('wedding.ics', window.location.href).href;

    if (isAndroid) return { label: 'Android 캘린더', url: androidIntentUrl, fallback: googleCalendarUrl };
    if (isIOS) return { label: 'iPhone 캘린더', url: icsUrl };
    return { label: 'Google 캘린더', url: googleCalendarUrl };
  }

  const calendarAddButton = document.getElementById('calendar-add');
  if (calendarAddButton) {
    calendarAddButton.addEventListener('click', () => {
      const target = calendarTarget();
      showToast(`${target.label} 등록 화면을 엽니다.`);
      window.location.href = target.url;
      if (target.fallback) {
        window.setTimeout(() => {
          if (!document.hidden) window.location.href = target.fallback;
        }, 900);
      }
    });
  }

  document.querySelectorAll('.copy-button').forEach((button) => {
    button.addEventListener('click', () => copyText(button.dataset.copy || ''));
  });

  const shareButton = document.getElementById('share-invitation');
  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      const shareData = {
        title: '박용태 · 나수진 모바일 청첩장',
        text: '박용태와 나수진의 결혼식에 초대합니다.',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error.name === 'AbortError') return;
        }
      }

      await copyText(window.location.href);
      showToast('청첩장 주소를 복사했습니다.');
    });
  }

  updateCountdown();
  window.setInterval(updateCountdown, 60000);
})();
