(() => {
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

  function makeIcs() {
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//BMO Hermes Dashboard//Wedding Invitation//KO',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:yongtae-sujin-wedding-20261122@bmo-hermes-dashboard',
      'DTSTAMP:20260702T000000Z',
      'DTSTART:20261122T063000Z',
      'DTEND:20261122T083000Z',
      'SUMMARY:박용태 · 나수진 결혼식',
      'LOCATION:더채플앳청담 커티지홀',
      'DESCRIPTION:박용태와 나수진의 결혼식에 초대합니다.',
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    return lines.join('\r\n');
  }

  document.querySelectorAll('.copy-button').forEach((button) => {
    button.addEventListener('click', () => copyText(button.dataset.copy || ''));
  });

  const calendarButton = document.getElementById('calendar-download');
  if (calendarButton) {
    calendarButton.addEventListener('click', () => {
      const blob = new Blob([makeIcs()], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'yongtae-sujin-wedding.ics';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      showToast('캘린더 파일을 저장했습니다.');
    });
  }

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
