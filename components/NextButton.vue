<script setup lang="ts">
const props = defineProps({
  href: { type: String, default: "#" },
  ariaLabel: { type: String, default: "Navigate to page" },
})
</script>

<template>
  <a :href="href" :aria-label="ariaLabel"
    class="gray-scale stretched-link">
    <nuxt-img placeholder src="/images/arrow-forward.svg"
      alt="arrow-forward" width="40px" height="40px"
      aria-label={ariaLabel} />
  </a>
</template>

