<template>
  <header
    class="fixed top-0 left-0 w-full z-40 backdrop-blur-md shadow-md bg-white/70 dark:bg-dark/80 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <!-- Logo / Brand -->
      <h1 class="text-xl font-display font-bold text-primary">Opeyemi</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-dark dark:text-light hover:text-primary dark:hover:text-accent transition"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Theme Toggle + Mobile Menu Button -->
      <div class="flex items-center space-x-4">
        <button
          @click="toggleDark"
          class="p-2 text-lg rounded-full text-white transition"
        >
          {{ isDark ? "🌞" : "🌙" }}
        </button>

        <!-- Mobile menu toggle -->
        <button
          class="md:hidden p-2 rounded bg-primary text-white shadow"
          @click="isOpen = !isOpen"
        >
          <span v-if="!isOpen">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="fade">
      <nav
        v-if="isOpen"
        class="md:hidden px-6 pb-4 bg-white dark:bg-dark text-dark dark:text-light"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="isOpen = false"
          class="block py-2 font-medium hover:text-primary dark:hover:text-accent transition"
        >
          {{ link.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isDark = ref(false);

const toggleDark = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
};

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
