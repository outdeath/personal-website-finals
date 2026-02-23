<template>
  <section class="section section-light guestbook">
    <div class="container">
      <p class="section-label">Type your comments here</p>
      <h2 class="section-title">Cj's <span class="gradient-text">Guestbook</span></h2>
      <p class="section-subtitle">
        Got a complaint?! Lay it all here, I'll get to them soon enough!
      </p>

      <div class="guestbook-layout">
        <!-- ── POST Form ── -->
        <div class="guestbook-form-wrap animate-fade-up">
          <form class="card guestbook-form" @submit.prevent="submitMessage" novalidate>
            <h3 class="form-heading">✍️ Write a message</h3>

            <div class="form-group">
              <label class="form-label" for="gb-name">Your Name</label>
              <input
                id="gb-name"
                v-model="form.name"
                class="form-input"
                type="text"
                placeholder="Jane Doe"
                maxlength="100"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="gb-message">Message</label>
              <textarea
                id="gb-message"
                v-model="form.message"
                class="form-textarea"
                placeholder="Hey, love your work! 👋"
                rows="4"
                maxlength="500"
                required
              />
              <span class="char-count">{{ form.message.length }} / 500</span>
            </div>

            <p v-if="submitError"   class="form-error"   role="alert">{{ submitError }}</p>
            <p v-if="submitSuccess" class="form-success" role="status">✅ Your message was posted!</p>

            <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
              <span v-if="submitting" class="spinner" aria-hidden="true" />
              {{ submitting ? 'Posting…' : 'Post Message' }}
            </button>
          </form>
        </div>

        <!-- ── GET Messages List ── -->
        <div class="guestbook-messages animate-fade-up" style="animation-delay:0.1s">
          <div v-if="loading" class="messages-loading">
            <div class="skeleton" v-for="n in 3" :key="n" />
          </div>

          <div v-else-if="fetchError" class="card messages-empty">
            <p>⚠️ Couldn't load messages. Please try again later.</p>
          </div>

          <div v-else-if="messages.length === 0" class="card messages-empty">
            <p>🎉 No messages yet — be the first to sign the guestbook!</p>
          </div>

          <template v-else>
            <article v-for="entry in messages" :key="entry.id" class="card message-card">
              <div class="message-header">
                <div class="message-avatar">{{ initials(entry.name) }}</div>
                <div>
                  <p class="message-name">{{ entry.name }}</p>
                  <time class="message-time" :datetime="entry.created_at">{{ formatDate(entry.created_at) }}</time>
                </div>
              </div>
              <p class="message-body">{{ entry.message }}</p>
            </article>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const messages     = ref([])
const loading      = ref(true)
const fetchError   = ref(false)
const form         = ref({ name: '', message: '' })
const submitting   = ref(false)
const submitError  = ref('')
const submitSuccess = ref(false)

const initials = (name) =>
  name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

const formatDate = (iso) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  }).format(new Date(iso))

async function fetchMessages() {
  loading.value = true; fetchError.value = false
  try {
    const { data } = await axios.get(`${API_BASE}/guestbook`)
    messages.value = data
  } catch { fetchError.value = true }
  finally { loading.value = false }
}

async function submitMessage() {
  submitError.value = ''; submitSuccess.value = false
  if (!form.value.name.trim() || !form.value.message.trim()) {
    submitError.value = 'Both name and message are required.'; return
  }
  submitting.value = true
  try {
    const { data: newEntry } = await axios.post(`${API_BASE}/guestbook`, {
      name: form.value.name.trim(),
      message: form.value.message.trim(),
    })
    messages.value = [newEntry, ...messages.value]
    form.value = { name: '', message: '' }
    submitSuccess.value = true
    setTimeout(() => { submitSuccess.value = false }, 4000)
  } catch (err) {
    const detail = err?.response?.data?.message
    submitError.value = Array.isArray(detail) ? detail.join(' ') : detail || 'Something went wrong.'
  } finally { submitting.value = false }
}

onMounted(fetchMessages)
</script>

<style scoped>
.guestbook-layout {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 24px;
  align-items: start;
}

/* ── Form ── */
.guestbook-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: sticky;
  top: 88px;
}
.form-heading {
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-primary);
}
.char-count {
  align-self: flex-end;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 2px;
}
.form-error {
  font-size: 0.85rem;
  color: #c0392b;
  background: rgba(192,57,43,0.08);
  border: 1px solid rgba(192,57,43,0.2);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
}
.form-success {
  font-size: 0.85rem;
  color: #27ae60;
  background: rgba(39,174,96,0.08);
  border: 1px solid rgba(39,174,96,0.25);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
}
.submit-btn { align-self: flex-start; }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.spinner {
  display: inline-block;
  width: 14px; height: 14px;
  border: 2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

/* ── List ── */
.guestbook-messages { display: flex; flex-direction: column; gap: 14px; }

.skeleton {
  height: 96px;
  background: linear-gradient(90deg, rgba(0,120,215,0.06) 25%, rgba(0,120,215,0.12) 50%, rgba(0,120,215,0.06) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
  border-radius: var(--radius-lg);
}

.messages-empty { color: var(--text-secondary); font-size: 0.92rem; }

.message-card { display: flex; flex-direction: column; gap: 12px; }

.message-header { display: flex; align-items: center; gap: 12px; }

.message-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--gradient-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 900;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(0,120,215,0.3), inset 0 1px 0 rgba(255,255,255,0.4);
}

.message-name {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--text-primary);
}
.message-time {
  font-size: 0.75rem;
  color: var(--text-muted);
  display: block;
  margin-top: 1px;
}
.message-body {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.72;
  word-break: break-word;
}

/* ── Responsive ── */
@media (max-width: 860px) {
  .guestbook-layout { grid-template-columns: 1fr; }
  .guestbook-form { position: static; }
}
</style>
