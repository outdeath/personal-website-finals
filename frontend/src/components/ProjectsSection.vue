<template>
  <section class="section section-sky projects">
    <div class="container">
      <p class="section-label">What I've Built</p>
      <h2 class="section-title">Featured <span class="gradient-text-green">Projects</span></h2>
      <p class="section-subtitle">
        A selection of things I've built — from full-stack web apps to side experiments.
      </p>

      <div class="projects-grid">
        <article class="card project-card animate-fade-up">
          <div class="project-top">
            <span class="project-number">01</span>
            <a
              href="https://outdeath.github.io/WEBPROG-IT241-HTML-LESSONS/introduction/"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link-btn btn btn-green"
              aria-label="Visit My first ever portfolio!"
            >↗ Visit</a>
          </div>

          <h3 class="project-title">
            <a
              href="https://outdeath.github.io/WEBPROG-IT241-HTML-LESSONS/introduction/"
              target="_blank"
              rel="noopener noreferrer"
              class="project-title-link"
            >My first ever portfolio!</a>
          </h3>
          <p class="project-desc">
            Check out my first ever website that I poured my blood, sweat, and tears into.
          </p>

          <div class="project-tags">
            <span class="tag" v-for="tech in ['Vue 3', 'Nest.js', 'Supabase', 'Vercel']" :key="tech">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
// Single project — no array needed
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 22px;
  max-width: 400px;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-number {
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: var(--green);
  background: rgba(131,179,19,0.1);
  border: 1px solid rgba(131,179,19,0.25);
  border-radius: var(--radius-full);
  padding: 2px 10px;
}

.project-link-btn {
  font-size: 0.78rem;
  padding: 6px 14px;
}

.project-title { font-size: 1.12rem; font-weight: 800; color: var(--text-primary); }

.project-title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.18s ease;
}
.project-title-link:hover { color: var(--blue); }

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
</style>
