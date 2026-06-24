function esc(value) {
  return String(value ?? '').replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function markdownLite(text) {
  return esc(text)
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\*\*(.+?)\*\*\s*$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(?:<li>.*<\/li>\n?)+/g, (block) => `<ul>${block}</ul>`)
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

function displayContent(text) {
  return String(text || '')
    .replace(/^##\s*완료\s*—\s*.+?오늘의 운세\s*\n+/, '')
    .trim();
}

function shortUpdated(value) {
  const text = String(value || '-');
  const match = text.match(/(\d{2}:\d{2})/);
  return match ? `${match[1]} 업데이트` : text;
}

function renderEntry(entry, index) {
  return `<details class="grade-card fortune-entry" ${index === 0 ? 'open' : ''}>
    <summary class="fortune-summary">
      <span class="fortune-summary-main">
        <span class="fortune-icon" aria-hidden="true">🔮</span>
        <span class="fortune-title">${esc(entry.title || '운세 기록')}</span>
      </span>
      <span class="fortune-date">${esc(entry.date || '-')}</span>
    </summary>
    <div class="fortune-body"><p>${markdownLite(displayContent(entry.content))}</p></div>
  </details>`;
}

function render(data) {
  const entries = data.entries || [];
  document.getElementById('summary').textContent = `${entries.length}건 · ${shortUpdated(data.updatedAt)}`;
  document.getElementById('status').innerHTML = [
    `<span class="pill">기록 ${entries.length}건</span>`,
    `<span class="pill">${esc(shortUpdated(data.updatedAt))}</span>`,
    `<span class="pill">개인정보 비공개</span>`,
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
