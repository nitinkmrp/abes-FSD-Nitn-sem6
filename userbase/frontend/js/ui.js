// ── Panel navigation ──────────────────────────────────────────────────────────
export function switchPanel(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  document.querySelector(`[data-panel="${name}"]`).classList.add('active');
}

// ── Button loading state ───────────────────────────────────────────────────────
export function setLoading(btnId, on) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.classList.toggle('loading', on);
  btn.disabled = on;
}

// ── Response box renderer ─────────────────────────────────────────────────────
export function showResponse(boxId, pillId, bodyId, data, ok) {
  const box  = document.getElementById(boxId);
  const pill = document.getElementById(pillId);
  const body = document.getElementById(bodyId);
  box.classList.add('visible');
  pill.textContent = ok ? '200 OK' : `${data.status || 'Error'}`;
  pill.className = 'status-pill ' + (ok ? 'status-ok' : 'status-err');
  body.textContent = JSON.stringify(data, null, 2);
}

// ── Toast notifications ───────────────────────────────────────────────────────
export function toast(msg, type = 'success') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = (type === 'success' ? '✓  ' : '✕  ') + msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}

// ── Copy JSON to clipboard ────────────────────────────────────────────────────
export function copyResponse(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => toast('JSON copied to clipboard'));
}

// ── Form reset ────────────────────────────────────────────────────────────────
export function resetForm(...ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.tagName === 'SELECT' ? (el.selectedIndex = 0) : (el.value = '');
  });
}

// ── User card renderer ────────────────────────────────────────────────────────
function initials(name) {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function renderCards(users) {
  const grid = document.getElementById('users-grid');
  if (!users.length) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-icon">⊘</div>No users found</div>';
    return;
  }
  grid.innerHTML = users.map(u => `
    <div class="user-card">
      <div class="user-avatar">${initials(u.name)}</div>
      <div class="user-name">${u.name || '—'}</div>
      <div class="user-email">${u.email || '—'}</div>
      <span class="user-gender">${u.gender || '—'}</span>
      <div class="user-date">${formatDate(u.createdAt)}</div>
    </div>`).join('');
}

// ── Modal ─────────────────────────────────────────────────────────────────────
export function openModal(bodyHtml, onConfirm) {
  document.getElementById('modal-body-text').innerHTML = bodyHtml;
  document.getElementById('modal-confirm-btn').onclick = () => {
    closeModal();
    onConfirm();
  };
  document.getElementById('delete-modal').classList.add('open');
}

export function closeModal() {
  document.getElementById('delete-modal').classList.remove('open');
}

// ── API status indicator ──────────────────────────────────────────────────────
export function setApiStatus(online) {
  const dot  = document.querySelector('.status-dot');
  const text = document.querySelector('.api-status span');
  if (online) {
    dot.classList.remove('offline');
    text.textContent = 'API connected';
  } else {
    dot.classList.add('offline');
    text.textContent = 'API offline';
  }
}
