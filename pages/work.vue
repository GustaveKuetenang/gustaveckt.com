<script setup lang="ts">
useSeoMeta({
    title: 'Mes projets - Gustave TSOPMO',
    ogTitle: 'Mes projets - Gustave TSOPMO',
    description: "Découvrez me réalisations les plus recents.",
    ogDescription: "Découvrez me réalisations les plus recents.",
    ogImage: '/images/GustaveTSOPMO.webp',
    twitterCard: 'summary_large_image',
});

const projects = [
    {
        id: 1,
        title: 'Prompt Share',
        category: 'Web dev',
        image: '/images/prompt-share.png',
    },
    {
        id: 1,
        title: 'My Custon Thread',
        category: 'Web dev',
        image: '/images/threads.png',
    },
    {
        id: 1,
        title: 'KER Technologies',
        category: 'Web dev',
        image: '/images/kertechnologies.png',
    },
    {
        id: 1,
        title: 'HOUSE OF KERL',
        category: 'Wordpress',
        image: '/images/project-card-img.png',
    },
];
</script>

<template>
    <div class="stack gap-20">
        <div class="wrapper stack gap-8">

            <div class="project-grid">
                <div class="project-card-title">
                    <h1>
                        <span
                            class="page-title mb-6 md:text-left">Mes
                            projets</span>
                    </h1>
                </div>
                <article class="project-card group"
                    v-for="project in projects"
                    :key="project.id">
                    <div
                        class="w-full h-[280px] mx-auto shadow-sm border border-transparent group-hover:shadow-xl group-hover:border-blue-600/25 rounded-3xl overflow-hidden transition duration-300 ease-in-out">
                        <nuxt-img placeholder height="280"
                            class="object-cover w-full"
                            :src="project.image"
                            alt="Project Image" />
                    </div>
                    <div
                        class="w-full mt-6 flex items-center justify-between">
                        <div>
                            <p class="subtitle-sm">{{
                                project.category }}
                            </p>
                            <h1 class="title-3">{{
                                project.title }}</h1>
                        </div>
                        <NextButton href="#"
                            ariaLabel="Next Page: Blog" />
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>