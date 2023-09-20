<script lang="ts" setup>
const { navLink } = useTailwindConfig();
const textLinks: { label: string; href: string }[] = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projects/" },
  { label: "A-propos", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

const route = useRoute()

function isLinkActive(linkPath: string) {
  return route.path === linkPath;
}

onMounted(() => {
  console.log(isLinkActive('/'));
});

</script>

<template>
  <nav
    class="flex justify-between max-w-7xl px-2 sm:px-4 items-center mx-auto py-10">
    <div class="hidden lg:block">
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
      <li v-for="(link, index) in textLinks" :key="index">
        <NuxtLink :to="link.href" :class="{ navLink }"
          class="nav-link">{{
            link.label }}</NuxtLink>
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
