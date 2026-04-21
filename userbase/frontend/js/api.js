// ── API Base URL ─────────────────────────────────────────────────────────────
export function getBase() {
  return document.getElementById('base-url').value.replace(/\/$/, '');
}

// ── Core fetch wrapper ────────────────────────────────────────────────────────
export async function apiFetch(path, opts = {}) {
  const res = await fetch(getBase() + path, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  const json = await res.json();
  if (!res.ok) throw { status: res.status, ...json };
  return json;
}

// ── CRUD helpers ──────────────────────────────────────────────────────────────
export const getAllUsers = () =>
  apiFetch('/api/users');

export const getUserByEmail = (email) =>
  apiFetch(`/api/users/${encodeURIComponent(email)}`);

export const createUser = (body) =>
  apiFetch('/api/users', { method: 'POST', body: JSON.stringify(body) });

export const updateUser = (email, body) =>
  apiFetch(`/api/users/${encodeURIComponent(email)}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

export const deleteUser = (email) =>
  apiFetch(`/api/users/${encodeURIComponent(email)}`, { method: 'DELETE' });
