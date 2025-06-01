<template>
  <section class="py-20 px-6 bg-light dark:bg-dark" id="skills">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-primary mb-10">Skills and Tools</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
        >
          <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-3" />
          <span
            class="text-base font-medium text-gray-700 dark:text-gray-200"
            >{{ skill.name }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import vuejs from "../assets/icons/vuejs.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript-icon.svg";
import node from "../assets/icons/nodejs-icon.svg";
import laravel from "../assets/icons/logos--laravel.svg";
import mysql from "../assets/icons/logos--mysql.svg";
import postgres from "../assets/icons/logos--postgresql.svg";
import docker from "../assets/icons/logos--docker.svg";
import git from "../assets/icons/logos--git.svg";
import linux from "../assets/icons/logos--linux-tux.svg";
import nextjs from "../assets/icons/logos--nextjs.svg";
import nuxtjs from "../assets/icons/logos--nuxt.svg";
import capacitor from "../assets/icons/logos--capacitorjs.svg";
import adonis from "../assets/icons/logos--adonisjs.svg";

const skills = [
  { name: "Vue.js", icon: vuejs },
  { name: "React", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Next.js", icon: nextjs },
  { name: "Nuxt.js", icon: nuxtjs },
  { name: "AdonisJS", icon: adonis },
  { name: "Node.js", icon: node },
  { name: "Laravel", icon: laravel },
  { name: "MySQL", icon: mysql },
  { name: "Postgres", icon: postgres },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Capacitor", icon: capacitor },
  { name: "Linux", icon: linux },
];
</script>
