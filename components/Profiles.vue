<script></script>

<template>
  <div
    class="flex justify-between items-center bg-gray-50 rounded-3xl mb-3 p-6">
    <div class="w-1/2">
      <div
        class="mx-auto rounded-full bg-white h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center">
        <nuxt-img placeholder
          class="object-cover max-w-[14px] md:max-w-[24px] mx-auto"
          width="24" height="24" src="/icons/linkedIn.svg"
          alt="linkedIn icon" />
      </div>
    </div>
    <div class="w-1/2">
      <div
        class="mx-auto rounded-full bg-white h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center">
        <nuxt-img placeholder
          class="object-cover max-w-[14px] md:max-w-[24px] mx-auto"
          width="24" height="24" src="/icons/github.svg"
          alt="github icon" />
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between group">
    <div class="">
      <p class="subtitle-sm">VITRINE</p>
      <h1 class="title-3">Profils</h1>
    </div>
    <NextButton href="/work" />
  </div>
</template>
