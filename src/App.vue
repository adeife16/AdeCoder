<template>
  <div :class="{ dark: isDark }">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Navbar from "./components/Navbar.vue";

const isDark = ref(false);
function toggleDark() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
}
</script>
