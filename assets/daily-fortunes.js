function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function markdownLite(text) {
  return esc(text)
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^\*\*(.+?)\*\*\s*$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(?:<li>.*<\/li>\n?)+/g, (block) => `<ul>${block}</ul>`)
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

function renderEntry(entry) {
  return `<article class="grade-card fortune-entry">
    <header class="grade-head">
      <h2>🔮 ${esc(entry.title || '운세 기록')}</h2>
      <span>${esc(entry.date || '-')}</span>
    </header>
    <div class="fortune-body"><p>${markdownLite(entry.content || '')}</p></div>
  </article>`;
}

function render(data) {
  const entries = data.entries || [];
  document.getElementById('summary').textContent = `${data.updatedAt || '-'} · ${entries.length}건 · 개인정보 비공개`;
  document.getElementById('status').innerHTML = [
    `<span class="pill">기록 ${entries.length}건</span>`,
    `<span class="pill">업데이트 ${esc(data.updatedAt || '-')}</span>`,
    `<span class="pill">이름·생년월일·주소 비공개</span>`,
  ].join('');
  document.getElementById('fortune-list').innerHTML = entries.length
    ? entries.map(renderEntry).join('')
    : '<div class="grade-card empty">아직 공개 가능한 운세 기록이 없습니다.</div>';
}

fetch('data/daily_fortunes.json?ts=' + Date.now())
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(render)
  .catch((err) => {
    document.getElementById('summary').textContent = '데이터 로드 실패';
    document.getElementById('fortune-list').innerHTML = `<div class="grade-card empty">${esc(err.message)}</div>`;
  });
