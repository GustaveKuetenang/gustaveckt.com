export const projects = [
    {
        id: 10,
        title: "Enchereus Mobile",
        description: 'Application de découverte et partage les promts d\'IA.',
        slug: "enchereus-mobile",
        category: "React, Nextjs, PostgreSQL",
        url: "https://enchereus.com",
        image: "/images/enchereus.png",
    },
    {
        id: 9,
        title: "AuBoulot Web",
        description: "Application web de de gestion des tâches, gestion de projets et évaluation du personnel.",
        slug: "au-boulot",
        category: "React, Next.js, NestJs",
        url: "https://auboulot.ultrasoft.cm",
        image: "/images/auboulot-web.png",
    },
    {
        id: 8,
        title: "AuBoulot Mobile",
        description: 'Application mobile de de gestion des tâches, gestion de projets et évaluation du personnel.',
        slug: "prompt-share",
        category: "React, Nextjs, MongoDb",
        url: "https://auboulot.org",
        image: "/images/auboulot-mobile.png",
    },
    {
        id: 9,
        title: "Site web de Au Boulot",
        description: "Application ",
        slug: "au-boulot",
        category: "React, Nextjs, NestJs",
        url: "https://auboulot.org",
        image: "/images/auboulot-website.png",
    },
    {
        id: 1,
        title: "KER Technologies",
        description: "Site web de l'entreprise avec un CMS pour la gestion des contenus.",
        slug: "ker-technologies",
        category: "Web dev",
        url: "https://kertechnologies.com",
        image: "/images/kertechnologies.png",
    },
    {
        id: 7,
        title: "Site web de Ultrasoft",
        description: 'Application de découverte et partage les promts d\'IA.',
        slug: "prompt-share",
        category: "React, Nextjs, MongoDb",
        url: "https://ultrasoft.cm",
        image: "/images/ultrasoft-website.png",
    },

    {
        id: 6,
        title: "Site web de Enchereus",
        description: 'Application de découverte et partage les promts d\'IA.',
        slug: "prompt-share",
        category: "React, Nextjs, MongoDb",
        url: "https://enchereus.com",
        image: "/images/enchereus-website.png",
    },
    {
        id: 5,
        title: "Prompt Share",
        description: 'Application de découverte et partage les promts d\'IA.',
        slug: "prompt-share",
        category: "React, Nextjs, MongoDb",
        url: "https://promptshare-ckt.vercel.app",
        image: "/images/prompt-share.png",
    },
    {
        id: 4,
        title: "Schooma",
        description: 'Application de gestion des établissements d\'enseignement secondaires.',
        slug: "schooma",
        category: "Laravel, React",
        url: "https://schooma.gustaveckt.com",
        image: "/images/schooma.png",
    },

    {
        id: 3,
        title: "Threads Clone",
        description: 'Clône du réseau social Threads',
        slug: "threads",
        category: "Web dev",
        url: "https://threads-ckt.vercel.app",
        image: "/images/threads.png",
    },
    {
        id: 2,
        title: "HOUSE OF KERL",
        description: 'Site de e-commerce pour accessoires de mode',
        slug: "house-of-kerl",
        category: "E-commerce",
        url: "https://houseofkerl.com",
        image: "/images/project-card-img.png",
    },
    {
        id: 2,
        title: "Ultrasoft Payment",
        description: 'Application de paiement en ligne, intégrant plusieurs agregateurs simultanément.',
        slug: "ultrasoft-payment",
        category: "Payment en ligne",
        url: "https://payment.ultrasoft.cm",
        image: "/images/ultrasoft-payment.png",
    },
    {
        id: 6,
        title: "Kalio",
        description: 'Plateforme de collecte et analyse des données des plantations, et de vente de semences agricoles',
        slug: "kalio",
        category: "React, Nextjs, MongoDb",
        url: "https://kalio.io",
        image: "/images/kalio.png",
    },
];


export interface Project {
    title: string
    description?: string
    missions?: string[]
    technologies: string[]
}

export interface Experience {
    id: number
    role: string
    period: string
    company: string
    location: string
    projects: Project[]
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Tech Lead Full Stack Web et Mobile",
        period: "JUIN 2024 – À CE JOUR",
        company: "Ultrasoft Technologies SARL",
        location: "Yaoundé, Cameroun",
        projects: [
            {
                title: "Développement d'une plateforme de suivi, d'évaluation du personnel et gestion de projets",
                missions: [
                    "Rédaction du cahier de charges pour l'application cliente web et les APIs",
                    "Analyser et Implémenter un système de gestion des utilisateurs avec inscription, rôles, permissions et hiérarchies",
                    "Analyser et Implémenter le module de pointage de présence des employés et leurs emplois de temps",
                    "Analyser et implémenter les fonctionnalités de gestion des tâches et projets incluant création, suivi, priorisation et organisation en phases",
                    "Concevoir un tableau de bord analytique avec graphiques dynamiques, rubans de priorités et filtres personnalisés",
                    "Implémenter la fonctionnalité de multilingue"
                ],
                technologies: ["Docker", "TypeScript", "React", "React Native", "Nextjs", "Nestjs", "Tailwindcss", "PostgreSql", "HTML", "Git (Gitea)", "Drawio", "Google Workspace"]
            },
            {
                title: "Développement d'une application mobile de vente aux enchères",
                missions: [
                    "Rédaction du cahier de charges pour l'application mobile et les APIs pour les modules ci-dessous",
                    "Gestion des ventes",
                    "Gestion des acheteurs et observateurs d'une vente",
                    "Mise sur pied de la structure de l'application mobile",
                    "Implémentation des tests unitaire et tests d'intégration pour les modules précédents",
                    "Implémenter la fonctionnalité de multilingue"
                ],
                technologies: ["Docker", "TypeScript", "React", "React Native", "Nextjs", "Nestjs", "Tailwindcss", "PostgreSql", "HTML", "Git (Gitea)", "Drawio", "Google Workspace"]
            }
        ]
    },
    {
        id: 2,
        role: "Promoteur de FIGUIL Corporation : Développeur web Full Stack",
        period: "DECEMBRE 2019 – MAIS 2024",
        company: "FIGUIL Corporation",
        location: "Yaoundé, Cameroun",
        projects: [
            {
                title: "Conception, développement, maintenance et gestion des évolutions d'un site internet de e-commerce, couplé à une application de vente en locale pour le client GENERAL STORES SARL",
                description: "Assurer le développement et la maintenance complète de la plateforme e-commerce",
                technologies: ["PHP", "Laravel", "Bootstrap 4", "Tailwind css", "Javascript", "Laravel Livewire", "Alpinejs", "HTML", "CSS", "SCSS", "Git (GitHub)", "MySql", "Cpanel", "Ubuntu 20"]
            },
            {
                title: "Conception, développement, déploiement et maintenance d'une application de gestion des établissement secondaires pour Figuil Corporation",
                description: "Piloter l'ensemble du projet de la conception au déploiement",
                technologies: ["PHP (Laravel)", "Tailwind css", "Javascript (React)", "HTML", "CSS", "SCSS", "Git (GitHub)", "MySql", "Cpanel", "CI/CD (GitHub Actions)", "MacOs"]
            },
            {
                title: "Conception, Développent, déploiement et maintenance du site web pour KEERO Technology Solutions, LLC",
                description: "Gérer l'intégralité du cycle de développement du site web",
                technologies: ["PHP", "Laravel", "Tailwind css", "React", "TypeScript", "HTML", "CSS", "SCSS", "Git (GitHub)", "MySql", "Cpanel", "CI/CD (GitHub Actions)", "MacOs Catalina", "Trello", "Figma"]
            }
        ]
    },
    {
        id: 3,
        role: "Développeur web Full Stack",
        period: "JANVIER 2022 – JUIN 2022",
        company: "ALSHDOWS Technologies",
        location: "Yaoundé, Cameroun",
        projects: [
            {
                title: "Conception, développement, et déploiement d'une application web de génération de business plans pour l'AMPE",
                description: "Assurer le développement complet de l'application de génération de business plans",
                technologies: ["PHP (Laravel et Laravel Livewire)", "Bootstrap 4", "Javascript (Laravel Livewire, Alpinejs, VanillaJ)", "HTML", "CSS", "SCSS", "Git (GitHub)", "MySql", "Windows 10"]
            },
            {
                title: "Conception, développement, et déploiement d'es APIs pour une plateforme de collecte et analyse des données des plantations, et de vente de semences agricoles",
                description: "Diriger le développement backend de la plateforme",
                technologies: ["UML", "NodeJs (NestJs)", "MacOs", "Trello", "Git (GitHub)", "MongoDB"]
            },
            {
                title: "Conception et développement d'une application React Native pour consommer les APIs de la plateforme de collecte et analyse des données des plantations, et de vente de semences agricoles",
                description: "Assurer le développement complet de l'application mobile",
                technologies: ["React", "React Native", "NextJs", "MacOs", "Trello", "Git (GitHub)", "Tailwind css"]
            }
        ]
    },
    {
        id: 4,
        role: "Développeur Web Back-end",
        period: "OCTOBRE 2020 – DÉCEMBRE 2021",
        company: "NEXUS AFRICA SOLUTIONS",
        location: "Yaoundé, Cameroun",
        projects: [
            {
                title: "Conception et réalisation d'une plateforme de E-learning",
                missions: [
                    "Structurer les bases de données pour gérer les utilisateurs, cours, modules, évaluations, et progressions",
                    "Analyse des modules d'authentification et de gestion des droits d'accès",
                    "Gérer les endpoints pour l'authentification, l'accès aux cours, les évaluations, et les statistiques",
                    "Mettre en place des notifications par email",
                    "Intégrer des passerelles de paiement pour les abonnements ou achats de cours"
                ],
                technologies: [".NET", "Trello", "Git (GitHub)", "Ubuntu"]
            }
        ]
    }
];


export const educations = [
    {
        id: 1,
        institute: "Institut Africain d'Informatique",
        period: "Nov. 2016 - Oct. 2019",
        diploma: "Ingénieur de Travaux en Informatiques",
    },
    {
        id: 2,
        institute: "Institut Africain d'Informatique",
        period: "Nov. 2016 - Oct. 2018",
        diploma: "Technicien supérieur en informatique",
    },
    {
        id: 3,
        institute: "Lycée Bilingue de Mendong",
        period: "Juin 2015",
        diploma: "Baccalaureat de L'enseignement Gereral",
    },
];
