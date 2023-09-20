<script lang="ts" setup>
// import NextButton from "@/NextButton.vue";
// import Profiles from "@/Profiles.vue";
// import WorkTogether from "@/WorkTogether.vue";
</script>

<template>
  <section class="">
    <div
      class="grid grid-cols-4 justify-between items-center gap-6">
      <div
        class="col-span-4 order-1 md:col-span-4 lg:col-span-2 sm:items-stretch flex flex-col sm:flex-row items-center md:space-x-6 box group">
        <div
          class="w-6/12 sm:w-1/3 md:w-4/12 lg:w-2/5 overflow-hidden rounded-ss-3xl rounded-ee-3xl">
          <nuxt-img placeholder src="/images/portrait.webp"
            class="w-full h-full object-cover"
            alt="Portrait of Gustave Carel KUETENANG TSOPMO"
            width="100%" height="100%" aria-hidden="true" />
        </div>
        <div
          class="w-full mt-6 sm:w-2/3 md:mt-0 md:8/12 lg:w-3/5 group">
          <p class="subtitle">DÉVELOPPEUR ET DESGIGNER</p>
          <h1 class="title-1">Gustave Carel KUETENANG TSOPMO
          </h1>
          <p class="text-gray-400 mt-3">
            Je suis un développeur passionné, prêt à mettre
            mes compétences au service de
            ceux qui aspirent à exceller dans le monde de
            l'informatique.
          </p>
          <div class="md:flex justify-end mt-6 hidden">
            <NextButton href="/about"
              ariaLabel="Next Page: About" />
          </div>
        </div>
      </div>

      <div
        class="order-2 col-span-4 lg:col-span-2 grid grid-cols-2 gap-6">
        <div class="space-y-6 col-span-2">
          <div class="box group py-4 px-0 relative"
            role="navigation" aria-label="Recent Links">
            <div
              class="scrolling-text-container flex items-center justify-center">
              <NuxtLink to="/work"
                class="m-0 mr-4 p-0 scrolling-text uppercase text-gray-500 text-sm">
                Derniers <span
                  class="text-blue-600">travaux</span> et
                <span class="text-blue-600 ">nouveautés</span>
                <span class="mx-3">&middot;</span>
                Derniers <span
                  class="text-blue-600">travaux</span> et
                <span class="text-blue-600">nouveautés</span>
                <span class="mx-3">&middot;</span>
                Derniers <span
                  class="text-blue-600">travaux</span> et
                <span class="text-blue-600">nouveautés</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col-span-2 md:col-span-1 box group">
          <div class="h-[126px]">
            <nuxt-img placeholder
              class="mx-auto max-h-[126px] opacity-50 object-contain"
              height="126px" width="126px"
              src="/images/skills.webp"
              alt="Compétences de Gustave Carel KUETENANG TSOPMO." />
          </div>
          <div class="mt-3 flex items-center justify-between">
            <div class="">
              <p class="subtitle-sm">À PROPOS</p>
              <h1 class="title-3">Compétences</h1>
            </div>
            <NextButton href="/skills"
              ariaLabel="Next Page: Skills" />
          </div>
        </div>

        <div class="col-span-2 md:col-span-1 box group">
          <div class="h-[126px]">
            <nuxt-img placeholder
              class="object-contain mx-auto max-h-[126px]"
              height="126" width="189"
              src="/images/showcase.webp"
              alt="Projets de Gustave Carel KUETENANG TSOPMO." />
          </div>
          <div class="flex mt-3 items-center justify-between">
            <div class="">
              <p class="subtitle-sm">VITRINE</p>
              <h1 class="title-3">Projets</h1>
            </div>
            <NextButton href="/work"
              ariaLabel="Next Page: Work" />
          </div>
        </div>
      </div>

      <div
        class="order-3 box col-span-4 md:col-span-2 lg:col-span-1 group">
        <div class="flex flex-col">
          <div class="h-[126px]">
            <nuxt-img placeholder
              class="opacity-[0.2] max-h-[126px] object-contain mx-auto"
              src="/images/coming-soon.webp" height="126"
              width="189" alt="Illustration: Coming Soon" />
          </div>
          <div
            class="w-full flex items-center justify-between">
            <div>
              <p class="subtitle-sm">BLOG</p>
              <h1 class="title-3">Mon blog</h1>
            </div>
            <NextButton href="#"
              ariaLabel="Next Page: Blog" />
          </div>
        </div>
      </div>

      <div
        class="order-5 lg:order-4 col-span-4 md:col-span-2 box group flex flex-col justify-between">
        <div class="flex items-center">
          <div class="p-6 h-[120px] w-1/4">
            <nuxt-img placeholder
              class="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
              width="30" height="30"
              src="/icons/backend-development.svg"
              alt="Backend Development Icon" />
          </div>
          <div class="p-6 h-[120px] w-1/4">
            <nuxt-img placeholder
              class="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
              width="30" height="30"
              src="/icons/graphic-design.svg"
              alt="Graphic Design Icon" />
          </div>
          <div class="p-6 h-[120px] w-1/4">
            <nuxt-img placeholder
              class="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
              width="30" height="30"
              src="/icons/web-design.svg"
              alt="Web Design Icon" />
          </div>
          <div class="p-6 h-[120px] w-1/4">
            <nuxt-img placeholder
              class="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
              width="30" height="30"
              src="/icons/ui-ux-design.svg"
              alt="UI/UX Design Icon" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="">
            <p class="subtitle-sm">SPÉCIALISATIONS</p>
            <h1 class="title-3">Services Proposés</h1>
          </div>
          <NextButton href="/work"
            ariaLabel="Next Page: Services" />
        </div>
      </div>

      <div
        class="order-4 lg:order-5 box col-span-4 md:col-span-2 lg:col-span-1">
        <Profiles />
      </div>

      <!-- <div class="col-span-2 box group flex space-x-6">
      <div class="w-1/3 p-4 bg-gray-50 rounded-3xl flex flex-col items-center">
        <h3 class="text-blue-600 mx-auto text-4xl font-">5</h3>
        <p class="subtitle text-center mt-3">ans d'experiences</p>
      </div>
      <div class="w-1/3 p-4 bg-gray-50 rounded-3xl flex flex-col items-center">
        <h3 class="text-blue-600 mx-auto text-4xl font-">+10</h3>
        <p class="subtitle text-center mt-3">clients satisfaits</p>
      </div>
      <div class="w-1/3 p-4 bg-gray-50 rounded-3xl flex flex-col items-center">
        <h3 class="text-blue-600 mx-auto text-4xl font-">+30</h3>
        <p class="subtitle text-center mt-3">projets au total</p>
      </div>
    </div> -->
      <div class="order-5 col-span-4 md:col-span-2">
        <WorkTogether />
      </div>
    </div>
  </section>
</template>

<style></style>
