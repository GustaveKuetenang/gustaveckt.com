<script setup lang="ts">
useSeoMeta({
    title: 'Me-contacter - Gustave TSOPMO',
    ogTitle: 'Me-contacter - Gustave TSOPMO',
    description: "Enthousiaste développeur informatique, je suis déterminé à mettre en œuvre mes compétences pour soutenir ceux qui cherchent à briller dans le domaine de l'informatique.",
    ogDescription: "Enthousiaste développeur informatique, je suis déterminé à mettre en œuvre mes compétences pour soutenir ceux qui cherchent à briller dans le domaine de l'informatique.",
    ogImage: '/images/gustave-tsopmo-portrait.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <div
        class="flex flex-col md:flex-row justify-between sm:space-x-6">
        <div class="w-full sm:w-5/12 md:w-3/12">
            <h5 class="title-3 uppercase text-gray-800 mb-3">
                Contact</h5>
            <div class="space-y-8">
                <div class="flex relative">
                    <div>
                        <div class="rounded-xl bg-white p-4">
                            <nuxt-img placeholder
                                class="object-cover d-flex items-center justify-center mx-auto max-h-[26px]"
                                height="100%" width="100%"
                                src="/icons/phone.svg"
                                alt="phone" />
                        </div>
                    </div>
                    <div class="ml-3">
                        <p class="subtitle-sm">Adresse EMAIL</p>
                        <a href="mailto:guctaveckt@gmail.com"
                            class="cursor-pointer stretched-link hover:text-blue-600 hover:underline break-all text-sm">guctaveckt@gmail.com</a>
                    </div>
                </div>

                <div class="flex relative">
                    <div>
                        <div class="rounded-xl bg-white p-4">
                            <nuxt-img placeholder
                                class="object-cover d-flex items-center justify-center mx-auto max-h-[26px]"
                                height="100%" width="100%"
                                src="/icons/phone.svg"
                                alt="phone" />
                        </div>
                    </div>
                    <div class="ml-3">
                        <p class="subtitle-sm">Téléphone</p>
                        <a href="tel:+237695705725"
                            class="cursor-pointer stretched-link hover:text-blue-600 hover:underline">
                            <p class="text-sm">+237 695 705 725
                            </p>
                        </a>
                    </div>
                </div>

                <div class="flex relative">
                    <div>
                        <div class="rounded-xl bg-white p-4">
                            <nuxt-img placeholder
                                class="object-cover d-flex items-center justify-center mx-auto max-h-[26px]"
                                height="100%" width="100%"
                                src="/icons/whatsapp.svg"
                                alt="whatsapp" />
                        </div>
                    </div>
                    <div class="ml-3">
                        <p class="subtitle-sm">Whatsapp</p>
                        <a target="_blank" rel="noopener"
                            href="https://wa.me/695705725"
                            class="cursor-pointer stretched-link hover:text-blue-600 hover:underline">
                            <p class="text-sm">+237 695 705 725
                            </p>
                        </a>
                    </div>
                </div>

                <div class="flex">
                    <div>
                        <div
                            class="rounded-xl bg-white inline-block p-4">
                            <nuxt-img placeholder
                                class="object-cover d-flex items-center justify-center mx-auto max-h-[26px]"
                                height="100%" width="100%"
                                src="/icons/location.svg"
                                alt="location" />
                        </div>
                    </div>
                    <div class="ml-2">
                        <p class="subtitle-sm">Adresse</p>
                        <p class="text-sm">Awae escalier, <br />
                            Yaoundé Cameroun</p>
                    </div>
                </div>
            </div>

            <h5
                class="title-3 uppercase text-gray-800 mt-6 mb-3">
                Social media</h5>
            <div class="flex space-x-6">
                <div class="rounded-full bg-white p-6">
                    <a href="https://linkedin.com/in/gustaveckt"
                        target="_blank" rel="noopener">
                        <nuxt-img placeholder
                            class="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
                            height="100%" width="100%"
                            src="/icons/linkedIn.svg"
                            alt="linkedIn" />
                    </a>
                </div>
                <div class="rounded-full bg-white p-6">
                    <a href="https://github.com/gustaveckt"
                        target="_blank" rel="noopener">
                        <nuxt-img placeholder
                            class="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
                            height="100%" width="100%"
                            src="/icons/github.svg"
                            alt="github" />
                    </a>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-7/12 md:w-8/12 lg:w-9/12">
            <div class="box !p-10">
                <form>
                    <h5
                        class="text-5xl uppercase text-gray-800 mb-6 fw-bold">
                        Me contacter
                    </h5>
                    <div class="mb-6">
                        <label for="name"
                            class="text-input-label">Nom</label>
                        <input type="text" id="name"
                            class="text-input"
                            placeholder="Votre nom complet"
                            required />
                    </div>
                    <div class="mb-6">
                        <label for="email"
                            class="text-input-label">Email</label>
                        <input type="email" id="email"
                            class="text-input"
                            placeholder="nom@exemple.com"
                            required />
                    </div>
                    <div class="mb-6">
                        <label for="subject"
                            class="text-input-label">Sujet</label>
                        <input type="text" id="subject"
                            class="text-input"
                            placeholder="A quel sujet voulez vous me contacter ?" />
                    </div>
                    <div class="mb-6">
                        <label for="message"
                            class="text-input-label">Message</label>
                        <textarea id="message"
                            class="text-input" rows="4"
                            placeholder="Votre message..."></textarea>
                    </div>
                    <UiButton size="lg">Soumettre</UiButton>
                </form>
            </div>
        </div>
    </div>
</template>