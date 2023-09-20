<script setup lang="ts">
const darkMode = ref(false);
</script>

<template>
  <div :class="{ 'dark': darkMode }">
    <div class="main">
      <div class="gradient" />
    </div>

    <main role="main" aria-label="Main Content"
      class="w-full min-h-screen app dark:text-slate-100">
      <Nav />
      <div
        class="max-w-7xl mx-auto px-2 sm:px-4 py-4 flex-grow">
        <NuxtPage />
      </div>
      <Footer />
    </main>
  </div>
</template>
