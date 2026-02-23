<template>
  <section class="hero">
    <!-- Hero background image -->
    <div class="hero-bg" aria-hidden="true" />

    <!-- Decorative SVG swash lines (Aero Frutiger signature) -->
    <svg class="hero-swash" viewBox="0 0 1200 500" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M-50 400 Q200 100 500 300 T1250 150" stroke="rgba(255,255,255,0.55)" stroke-width="3" fill="none" stroke-dasharray="1200" class="swash-path"/>
      <path d="M-50 450 Q300 200 600 350 T1250 200" stroke="rgba(131,179,19,0.4)"   stroke-width="2" fill="none" stroke-dasharray="1200" class="swash-path" style="animation-delay:0.4s"/>
      <path d="M-50 350 Q150 50  450 250 T1250 100" stroke="rgba(0,120,215,0.35)"   stroke-width="1.5" fill="none" stroke-dasharray="1200" class="swash-path" style="animation-delay:0.8s"/>
    </svg>

    <!-- Floating glass orbs -->
    <div class="orb orb-1" aria-hidden="true" />
    <div class="orb orb-2" aria-hidden="true" />
    <div class="orb orb-3" aria-hidden="true" />

    <div class="container hero-content">
      <p class="hero-eyebrow animate-fade-up">yo yo yo! it's</p>
      <h1 class="hero-name animate-fade-up" style="animation-delay: 0.1s">
        Cj <span class="gradient-text">Garcia</span>
      </h1>
      <p class="hero-tagline animate-fade-up" style="animation-delay: 0.2s">
        Artist · Coder · Builder
      </p>
      <p class="hero-desc animate-fade-up" style="animation-delay: 0.3s">
        I'm a 2nd year IT student from Asia Pacific College who's currently building
        and getting comfortable on using Nest.js, Vue, Github.
      </p>

      <div class="hero-actions animate-fade-up" style="animation-delay: 0.4s">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#guestbook" class="btn btn-outline">Sign Guestbook ✍️</a>
      </div>

    </div>
  </section>
</template>

<script setup>
// no script needed
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 64px;
}

/* ── Background image ── */
.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/hero-bg.png') center center / cover no-repeat;
  z-index: 0;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(200,232,255,0.65) 0%,
    rgba(232,244,253,0.55) 50%,
    rgba(210,237,160,0.5) 100%
  );
}

/* ── Swash SVG ── */
.hero-swash {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.swash-path {
  stroke-dashoffset: 1200;
  animation: swash 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* ── Floating orbs ── */
.orb {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
}
.orb-1 {
  width: 260px; height: 260px;
  top: 12%; right: 8%;
  background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(0,120,215,0.25) 60%, transparent);
  border: 1.5px solid rgba(255,255,255,0.8);
  box-shadow: 0 8px 40px rgba(0,120,215,0.2), inset 0 2px 0 rgba(255,255,255,0.95);
  animation: float 7s ease-in-out infinite;
  backdrop-filter: blur(4px);
}
.orb-2 {
  width: 160px; height: 160px;
  top: 55%; right: 20%;
  background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(131,179,19,0.25) 60%, transparent);
  border: 1.5px solid rgba(255,255,255,0.75);
  box-shadow: 0 6px 28px rgba(131,179,19,0.2), inset 0 2px 0 rgba(255,255,255,0.9);
  animation: float 9s ease-in-out infinite 1s;
  backdrop-filter: blur(4px);
}
.orb-3 {
  width: 90px; height: 90px;
  top: 25%; right: 30%;
  background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(50,169,255,0.3) 60%, transparent);
  border: 1px solid rgba(255,255,255,0.8);
  box-shadow: 0 4px 16px rgba(0,120,215,0.2), inset 0 1px 0 rgba(255,255,255,0.9);
  animation: float 5s ease-in-out infinite 0.5s;
  backdrop-filter: blur(4px);
}

/* ── Content ── */
.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 60px;
  padding-bottom: 60px;
}
.hero-eyebrow {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 10px;
  font-weight: 500;
}
.hero-name {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}
.hero-tagline {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 700;
  color: var(--blue-dark);
  margin-bottom: 18px;
}
.hero-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.8;
  margin-bottom: 36px;
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

/* ── Stack bubbles ── */
.hero-bubbles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.bubble {
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(0,120,215,0.3);
  color: var(--blue-dark);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0,120,215,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.bubble:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,120,215,0.2), inset 0 1px 0 rgba(255,255,255,0.95);
}

@media (max-width: 700px) {
  .orb-1 { width: 160px; height: 160px; top: 5%; right: 2%; }
  .orb-2 { width: 100px; height: 100px; }
  .orb-3 { display: none; }
}
</style>
