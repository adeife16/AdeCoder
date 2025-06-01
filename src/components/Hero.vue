<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col md:flex-row items-center dark:bg-dark justify-center px-6 md:px-12 gap-10 md:gap-20 text-center md:text-left"
  >
    <!-- Intro Text -->
    <div class="text-center animate-fadeInUp">
      <h1 class="text-5xl md:text-6xl font-display font-bold mb-4 text-primary">
        Hi, I'm Opeyemi
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
        Innovative software developer shaping seamless, beautiful experiences.
      </p>
    </div>

    <!-- Scroll Down Arrow -->
    <a
      href="#about"
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary hover:text-accent transition"
      aria-label="Scroll to About section"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        class="animate-bounce"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4.483 13.105c-.43 0-.645.545-.34.863l7.516 6.884a.466.466 0 0 0 .682 0l7.517-6.884c.304-.318.088-.863-.341-.863H15.68a.495.495 0 0 1-.483-.506V3.506A.494.494 0 0 0 14.716 3H9.284a.494.494 0 0 0-.482.506v9.093c0 .28-.216.506-.483.506z"
        />
      </svg>
    </a>
  </section>
</template>
