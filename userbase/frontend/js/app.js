import { getAllUsers, getUserByEmail, createUser, updateUser, deleteUser } from './api.js';
import {
  switchPanel, setLoading, showResponse, toast, copyResponse,
  resetForm, renderCards, openModal, closeModal, setApiStatus,
} from './ui.js';

// Expose helpers to inline onclick handlers in HTML
window.switchPanel   = switchPanel;
window.copyResponse  = copyResponse;
window.closeModal    = closeModal;

// ── Fetch users ───────────────────────────────────────────────────────────────
window.fetchUsers = async () => {
  const email = document.getElementById('show-email').value.trim();
  setLoading('fetch-btn', true);
  document.getElementById('stat-status').textContent = 'loading…';
  try {
    const data = await (email ? getUserByEmail(email) : getAllUsers());
    showResponse('show-response', 'show-status-pill', 'show-response-body', data, true);
    const users = Array.isArray(data.data) ? data.data : [data.data];
    renderCards(users);
    document.getElementById('stat-total').textContent = users.length;
    document.getElementById('stat-time').textContent = new Date().toLocaleTimeString();
    document.getElementById('stat-status').textContent = 'success';
    document.getElementById('count-badge').textContent = users.length;
    setApiStatus(true);
    toast(`Fetched ${users.length} user${users.length !== 1 ? 's' : ''}`);
  } catch (e) {
    showResponse('show-response', 'show-status-pill', 'show-response-body', e, false);
    document.getElementById('stat-status').textContent = 'error';
    toast(e.message || 'Request failed', 'error');
    setApiStatus(false);
  } finally {
    setLoading('fetch-btn', false);
  }
};

window.clearShow = () => {
  document.getElementById('show-email').value = '';
  document.getElementById('show-response').classList.remove('visible');
  document.getElementById('users-grid').innerHTML = '';
  document.getElementById('stat-total').textContent = '—';
  document.getElementById('stat-time').textContent  = '—';
  document.getElementById('stat-status').textContent = 'idle';
};

// ── Create user ───────────────────────────────────────────────────────────────
window.handleCreate = async () => {
  const name     = document.getElementById('c-name').value.trim();
  const email    = document.getElementById('c-email').value.trim();
  const password = document.getElementById('c-pass').value;
  const gender   = document.getElementById('c-gender').value;

  if (!name || !email || !password || !gender) {
    toast('Please fill in all required fields', 'error'); return;
  }
  setLoading('create-btn', true);
  try {
    const data = await createUser({ name, email, password, gender });
    showResponse('create-response', 'create-status-pill', 'create-response-body', data, true);
    toast('User created successfully');
    resetForm('c-name', 'c-email', 'c-pass', 'c-gender');
  } catch (e) {
    showResponse('create-response', 'create-status-pill', 'create-response-body', e, false);
    toast(e.message || 'Failed to create user', 'error');
  } finally {
    setLoading('create-btn', false);
  }
};

// ── Update user ───────────────────────────────────────────────────────────────
window.handleUpdate = async () => {
  const email    = document.getElementById('u-email').value.trim();
  if (!email) { toast('Email is required to identify the user', 'error'); return; }

  const body = {};
  const name   = document.getElementById('u-name').value.trim();
  const pass   = document.getElementById('u-pass').value;
  const gender = document.getElementById('u-gender').value;
  if (name)   body.name     = name;
  if (pass)   body.password = pass;
  if (gender) body.gender   = gender;

  if (!Object.keys(body).length) { toast('Provide at least one field to update', 'error'); return; }

  setLoading('update-btn', true);
  try {
    const data = await updateUser(email, body);
    showResponse('update-response', 'update-status-pill', 'update-response-body', data, true);
    toast('User updated successfully');
  } catch (e) {
    showResponse('update-response', 'update-status-pill', 'update-response-body', e, false);
    toast(e.message || 'Failed to update user', 'error');
  } finally {
    setLoading('update-btn', false);
  }
};

// ── Delete user ───────────────────────────────────────────────────────────────
window.openDeleteModal = () => {
  const email = document.getElementById('d-email').value.trim();
  if (!email) { toast('Enter an email address to delete', 'error'); return; }

  openModal(
    `You are about to permanently delete <strong>${email}</strong>. This cannot be undone.`,
    async () => {
      setLoading('delete-btn', true);
      try {
        const data = await deleteUser(email);
        showResponse('delete-response', 'delete-status-pill', 'delete-response-body', data, true);
        document.getElementById('d-email').value = '';
        toast('User deleted successfully');
      } catch (e) {
        showResponse('delete-response', 'delete-status-pill', 'delete-response-body', e, false);
        toast(e.message || 'Failed to delete user', 'error');
      } finally {
        setLoading('delete-btn', false);
      }
    }
  );
};

// ── Boot ──────────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  document.getElementById('delete-modal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });
  fetchUsers();
});
