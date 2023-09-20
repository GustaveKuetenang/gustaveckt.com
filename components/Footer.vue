<script lang="ts" setup>
const { navLinkFooter } = useTailwindConfig();

const textLinks: { label: string; href: string }[] = [
  { label: "Accueil", href: "/" },
  { label: "Travaux", href: "/work/" },
  { label: "A-propos", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
</script>

<template>
  <nav
    class="flex flex-col justify-center items-center space-y-6 max-w-7xl mx-auto py-10 mt-14">
    <div>
      <NuxtLink to="/"
        class="text-2xl font-semibold !text-black">
        Gustave<span class="text-blue-600"> TSOPMO</span>
      </NuxtLink>
    </div>
    <ul class="flex space-x-6 nav-links d-none text-gray-600">
      <li v-for="(link, index) in textLinks" :key="index">
        <NuxtLink :to="link.href" :class="navLinkFooter"
          class="nav-link">{{
            link.label }}</NuxtLink>
      </li>
    </ul>
    <p class="text-gray-500">
      &copy; Designed by <span class="text-blue-60">Gustave
        CKT</span>
    </p>
  </nav>
</template>
<style></style>
