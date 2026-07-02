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

  document.querySelectorAll('.calendar-link').forEach((link) => {
    link.addEventListener('click', () => {
      const label = link.dataset.calendarLabel || '캘린더';
      showToast(`${label} 등록 화면을 엽니다.`);
    });
  });

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
