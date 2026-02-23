<template>
  <!-- ── Navbar ── -->
  <nav class="nav">
    <div class="container nav-inner">
      <span class="nav-logo">{ dev }</span>

      <ul :class="['nav-links', { open: mobileOpen }]">
        <li><a href="#about" @click="closeMobile">About</a></li>
        <li><a href="#projects" @click="closeMobile">Projects</a></li>
        <li><a href="#guestbook" @click="closeMobile">Guestbook</a></li>
      </ul>

      <button
        class="nav-hamburger"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- ── Page Sections ── -->
  <main>
    <HeroSection />
    <div class="divider" />
    <AboutSection id="about" />
    <div class="divider" />
    <ProjectsSection id="projects" />
    <div class="divider" />
    <GuestbookSection id="guestbook" />
  </main>

  <footer class="footer">
    <div class="container">
      <p>
        ✨ Crafted with Vue 3 &amp; Nest.js · Powered by Supabase ·
        <span style="color: var(--blue); font-weight: 700;">{{ new Date().getFullYear() }}</span>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import GuestbookSection from './components/GuestbookSection.vue'

const mobileOpen = ref(false)
const closeMobile = () => { mobileOpen.value = false }
</script>
