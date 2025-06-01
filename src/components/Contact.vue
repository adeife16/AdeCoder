<template>
  <section class="py-20 px-6 bg-light dark:bg-dark" id="contact">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-primary mb-6 font-display">Get In Touch</h2>

      <p class="text-gray-700 dark:text-gray-300 mb-8 text-lg">
        I’m open to freelance projects, collaborations, or just chatting about dev stuff.
        You can reach me by email, WhatsApp, or on any of my social platforms.
      </p>

      <div class="flex flex-wrap justify-center gap-6 mb-8">
        <a
          href="mailto:dadaadeife@gmail.com"
          class="flex items-center gap-3 bg-primary text-white py-2 px-5 rounded-full shadow hover:bg-accent transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M20 4H4v16h16V4zM5.99 6h12.02L12 11.99 5.99 6zm12.01 12H6V8l6 6 6-6v10z"/></svg>
          Email
        </a>

        <a
          href="https://wa.me/2348118671802"
          target="_blank"
          class="flex items-center gap-3 bg-green-500 text-white py-2 px-5 rounded-full shadow hover:bg-green-600 transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 32 32"><path d="M16.008 3C9.373 3 4 8.373 4 15.008c0 2.65.869 5.097 2.34 7.08L4 29l7.195-2.32A12.918 12.918 0 0016.008 27c6.635 0 12.008-5.373 12.008-11.992C28.016 8.373 22.643 3 16.008 3zM16 25c-2.22 0-4.28-.647-6.02-1.75l-.43-.27-4.3 1.39L7.5 21.5l-.28-.44A10.973 10.973 0 015 15c0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11zm5.68-7.1c-.31-.15-1.84-.91-2.13-1.01-.29-.1-.5-.15-.7.15-.2.29-.8 1.01-.99 1.21-.18.2-.37.22-.68.08-.31-.15-1.32-.48-2.51-1.53-.93-.83-1.55-1.85-1.73-2.16-.18-.3-.02-.46.14-.61.15-.15.31-.35.46-.53.15-.18.2-.31.31-.51.1-.2.05-.39-.03-.53-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53-.18-.01-.39-.01-.6-.01-.2 0-.53.07-.81.39-.28.31-1.07 1.05-1.07 2.56s1.1 2.96 1.26 3.17c.15.2 2.13 3.27 5.17 4.59.72.31 1.29.49 1.73.63.73.23 1.39.2 1.91.13.58-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.58-.34z"/></svg>
          WhatsApp
        </a>

        <a
          href="https://twitter.com/adecoder"
          target="_blank"
          class="flex items-center gap-3 bg-blue-500 text-white py-2 px-5 rounded-full shadow hover:bg-blue-600 transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.55 8.55 0 01-2.71 1.03 4.27 4.27 0 00-7.27 3.9A12.1 12.1 0 013 5.1a4.27 4.27 0 001.32 5.69 4.21 4.21 0 01-1.94-.54v.05a4.28 4.28 0 003.42 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.57 8.57 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.18 0-.36-.01-.53A8.6 8.6 0 0022.46 6z"/></svg>
          Twitter
        </a>

        <a
          href="https://github.com/adeife16"
          target="_blank"
          class="flex items-center gap-3 bg-gray-800 text-white py-2 px-5 rounded-full shadow hover:bg-gray-700 transition"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12a11.999 11.999 0 008.207 11.385c.6.111.82-.26.82-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.071 1.835 2.809 1.305 3.494.998.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.235-3.222-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.005-.404 11.5 11.5 0 013.005.404c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.872.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.624-5.48 5.92.43.37.814 1.1.814 2.22 0 1.605-.015 2.9-.015 3.293 0 .32.216.694.825.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z" clip-rule="evenodd"/></svg>
          GitHub
        </a>
      </div>

      <p class="text-sm text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Opeyemi Dada.
      </p>
    </div>
  </section>
</template>
