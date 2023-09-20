<script setup lang="ts">
const darkMode = ref(false);
</script>

<template>
  <div :class="{ 'dark': darkMode }">
    <div>
      <main role="main" aria-label="Main Content"
        class="dark:bg-slate-900 bg-slate-50 w-full min-h-screen dark:text-slate-100">
        <Nav />
        <div
          class="max-w-7xl mx-auto px-2 sm:px-4 py-4 flex-grow">
          <NuxtPage />
        </div>
        <Footer />
      </main>
    </div>
  </div>
</template>
