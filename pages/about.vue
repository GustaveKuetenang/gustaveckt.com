<script setup lang="ts">
useSeoMeta({
    title: 'A-propos - Gustave TSOPMO',
    ogTitle: 'A-propos - Gustave TSOPMO',
    description: "Learn about Jeanine White's most recent projects",
    ogDescription: "Learn about Jeanine White's most recent projects",
    ogImage: '/images/GustaveTSOPMO.webp',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <div class="flex flex-col md:flex-row lg:space-x-6">
        <div class="box w-1/2 mx-auto md:w-2/6">
            <nuxt-img placeholder
                src="/images/GustaveTSOPMO.webp"
                class="rounded-3xl object-cover h-full w-full"
                alt="starts" />
        </div>
        <div class="w-full md:w-4/6 mt-6 lg:mt-0">
            <h1
                class="page-title mb-6 text-center md:text-left">
                A-props de moi</h1>
            <div class="box overflow-hidden">
                <div class="absolute -top-0 -left-1">
                    <nuxt-img placeholder height="80" width="80"
                        src="/icons/stars.webp" />
                </div>
                <h3 class="title-1 !text-4xl mt-20">Gustave
                    Carel KUETENANG TSOPMO</h3>
                <p class="text-gray-600 mt-3">
                    Ma passion pour le développement et les
                    applications s'est construite
                    au fil de cinq années d'expérience, et je
                    suis désormais prêt à mettre
                    mes compétences au service de toute personne
                    ou entreprise cherchant à
                    s'immerger et à exceller dans le monde de
                    l'informatique.
                </p>
            </div>
        </div>
    </div>
    <div class="mt-6 flex space-x-6">
        <div class="box w-full md:w-1/2">
            <h2 class="subtitle !text-gray-900 !font-medium">
                Expérience</h2>
            <ul class="list-none divide- space-y-6">
                <!-- <li v-for="" class=""></li> -->
                <!-- {
                experiences.map((experience) => (
                <li class="pt-3">
                    <div
                        class="relative group flex justify-between items-center">
                        <div>
                            <h4 class="subtitle mb-1">
                                {experience.data.startDate.getFullYear()}
                                -{" "}
                                {experience.data.endDate.getFullYear()}
                            </h4>
                            <p class="title-3 text-blue-600">
                                {experience.data.title}</p>
                            <p class="mt-2 subtitle">
                                {experience.data.company}</p>
                        </div>
                        <NextButton
                            href={`/about/${experience.slug}`} />
                    </div>
                </li>
                ))
                } -->
            </ul>
        </div>
        <div class="box w-full md:w-1/2">
            <h2 class="subtitle !text-gray-900 !font-medium">
                Éducation</h2>
            <ul class="list-none divide- space-y-6">
                <!-- <li v-for="" class=""></li> -->
                <!-- {
                experiences.map((experience) => (
                <li class="pt-3">
                    <div
                        class="relative group flex justify-between items-center">
                        <div>
                            <h4 class="subtitle mb-1">
                                {experience.data.startDate.getFullYear()}
                                -{" "}
                                {experience.data.endDate.getFullYear()}
                            </h4>
                            <p class="title-3 text-blue-600">
                                {experience.data.title}</p>
                            <p class="mt-2 subtitle">
                                {experience.data.company}</p>
                        </div>
                        <NextButton
                            href={`/about/${experience.slug}`} />
                    </div>
                </li>
                ))
                } -->
            </ul>
        </div>
    </div>
</template>