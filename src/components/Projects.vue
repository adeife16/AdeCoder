<template>
  <section
    class="py-20 px-6 bg-secondary dark:bg-gray-900 text-white"
    id="projects"
  >
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl font-bold mb-12 text-center text-primary font-display"
      >
        Projects
      </h2>

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-dark rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-64 object-cover"
          />

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-primary">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-white hover:text-primary transition-colors duration-200"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import meta_lead_hunter from "../assets/projects/meta_lead_hunter.png";
import streat from "../assets/projects/streat.png";
import madiavo from "../assets/projects/madiavo.png";
import presc from "../assets/projects/presc.png";
import flash from "../assets/projects/flash-transfer.png";
import horace from "../assets/projects/horace.png";

const projects = [
  {
    title: "Meta Lead Hunter",
    description:
      "A lead generation and management platform for Meta Ads. Built with NextJs, Laravel and MySQL. I worked the database structure and the backend API.",
    image: meta_lead_hunter,
    link: "https://github.com/adeife16/meta-lead-hunter-backend",
  },
  {
    title: "Streat",
    description:
      "Streat is a transparent, intuitive, and high-quality platform for managing and sharing recipes, leveraging structured data and AI for import, analysis, and community interaction. I worked on the api integration using Nextjs. The backend was built using Python FastAPI and Postgres.",
    image: streat,
    link: "https://github.com/adeife16/streat-frontend",
  },
  {
    title: "Madiavo",
    description:
      "Madiavo is a full-featured customer relationship management app built with Laravel and Nextjs, supporting multi-role access, reports, leads, and more.",
    image: madiavo,
    link: "https://github.com/adeife16/madiavo-v2",
  },
  {
    title: "Presc",
    description:
      "Presc is a prescription management platform built with React, Nodejs and Postgres, supporting multi-role access, prescription management and clinical reports.",
    image: presc,
    link: "https://github.com/adeife16/Presc",
  },
  {
    title: "Flash Transfer",
    description:
      "Flash Transfer is a ctyptocurency exchange platform built with Nextjs, Nodejs and MySQL. It features crypto currency exchange, non-custodial wallet management, and user management.",
    image: flash,
    link: "https://github.com/adeife16/flash-transfer",
  },
  {
    title: "Horace",
    description:
      "Horace is a multi-school management platform built with Nuxt3, Nodejs and MySQL. IT supports multi-role access, school management, student management, teacher management, report generation, online exam management, and more.",
    image: horace,
    link: "https://github.com/adeife16/Horace-v2",
  },
];
</script>
