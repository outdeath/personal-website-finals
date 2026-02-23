<template>
  <section class="section section-light about">
    <div class="container">
      <p class="section-label">Who I am!</p>
      <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
      <p class="section-subtitle">
        A striving student who tries their best.
      </p>

      <div class="about-grid">
        <!-- Bio card -->
        <div class="card about-bio animate-fade-up">
          <div class="bio-icon" aria-hidden="true">🧑‍💻</div>
          <p>
            Hi hi! I'm still getting a hold of fully submerging myself into the
            coding scene as I have yet a lot to learn. I love drawing, napping,
            watching movies, and listening to good music.
          </p>
          <p style="margin-top:16px;">
            And when I'm not doing my school work you can most definitely find me gaming.
          </p>
        </div>

        <!-- Skills panels -->
        <div class="about-skills animate-fade-up" style="animation-delay:0.1s">
          <div
            class="card skills-group"
            v-for="(group, i) in skillGroups"
            :key="group.title"
            :style="`animation-delay:${i * 0.08}s`"
          >
            <h3 class="skills-group-title">
              <span class="skills-icon">{{ group.icon }}</span>
              {{ group.title }}
            </h3>
            <div class="skills-list">
              <span class="tag" v-for="skill in group.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['Vue 3', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Nest.js', 'Node.js', 'REST API', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma'],
  },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.about-bio {
  font-size: 0.97rem;
  color: var(--text-secondary);
  line-height: 1.82;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.bio-icon {
  font-size: 2.2rem;
  margin-bottom: 14px;
}

.about-skills {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skills-group { padding: 20px 24px; }

.skills-group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--blue-dark);
  margin-bottom: 12px;
}

.skills-icon { font-size: 1rem; }

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 700px) {
  .about-grid { grid-template-columns: 1fr; }
}
</style>
