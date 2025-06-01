<template>
  <section
    id="about"
    class="py-24 px-6 bg-secondary dark:bg-gray-900 text-white"
  >
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- About Image -->
      <div class="flex justify-center md:justify-start">
        <img
          src="../assets/bg.png"
          alt="working"
          class="w-100 h-100 rounded-xl object-cover animate-fadeInUp"
        />
      </div>

      <!-- About Text -->
      <div class="animate-fadeInUp">
        <h2 class="text-4xl font-bold mb-6 font-display">About Me</h2>

        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          I'm a fullstack software developer with a strong focus on
          building robust, scalable backend systems and intuitive frontend
          interfaces. I specialize in <strong>Laravel</strong>,
          <strong>Node.js</strong>, and <strong>Vue/React</strong>, with deep
          experience crafting RESTful APIs, managing complex data flows, and
          implementing secure authentication systems.
        </p>

        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          My work spans from building high-performance CRMs and school
          management platforms to custom business automation tools and real-time
          data processing applications. I take pride in writing clean, modular
          backend code, designing efficient database schemas, and ensuring
          system reliability in both cloud and edge environments.
        </p>

        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          I enjoy solving real-world problems through automation, custom
          tooling, and performance tuning. When I'm not building systems, I’m
          exploring new backend architectures, contributing to open-source, or
          improving developer workflows with scripts and CLI tools.
        </p>
      </div>
    </div>
  </section>
</template>
