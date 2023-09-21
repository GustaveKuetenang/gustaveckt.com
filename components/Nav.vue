<script lang="ts" setup>
const textLinks: { label: string; href: string }[] = [
  { label: "Accueil", href: "/" },
  { label: "Travaux", href: "/work/" },
  { label: "A-propos", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
</script>

<template>
  <nav
    class="flex justify-between max-w-7xl px-2 sm:px-4 items-center mx-auto py-10 relative z-[20]">
    <div class="hidden lg:block cursor-pointer">
      <NuxtLink to="/"
        class="text-2xl font-semibold !text-black">
        Gustave<span class="text-blue-600"> TSOPMO</span>
      </NuxtLink>
    </div>
    <div class="block lg:hidden">
      <NuxtLink to="/"
        class="text-2xl font-semibold !text-black">
        G.<span class="text-blue-600"> CKT</span>
      </NuxtLink>
    </div>
    <ul class="md:flex space-x-8 nav-links hidden">
      <li class="nav-item" role="button"
        v-for="(link, index) in textLinks" :key="index">
        <NuxtLink :to="link.href" class="nav-link">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
    <div>
      <NuxtLink to="/contact"
        class="rounded-lg btn btn-primary">
        Parlons-en
        !</NuxtLink>
    </div>
  </nav>
</template>

<style></style>
