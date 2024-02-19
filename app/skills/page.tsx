import NextButton from "@/components/NextButton";
import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    title: "Conception et Développement de Sites Web et Applications",
    description:
      "Création de solutions numériques complètes, allant des sites web aux applications, en utilisant une approche holistique combinant conception visuelle et développement technique. Cela comprend la création d'interfaces utilisateur intuitives, la mise en œuvre de fonctionnalités interactives et la garantie d'une expérience utilisateur optimale sur toutes les plateformes.",
  },
  {
    id: 2,
    title: "Développement Web Full-Stack",
    description:
      "Création de sites web complets, de la conception à la programmation, en utilisant une combinaison de technologies front-end et back-end. Cela inclut la conception de l'interface utilisateur, le développement de fonctionnalités interactives, la gestion des serveurs, des bases de données et la logique métier.",
  },
  {
    id: 5,
    title: "Maintenance et support",
    description:
      "Fourniture de services de maintenance continue, de mises à jour et de support technique pour garantir le bon fonctionnement des sites web et des applications.",
  },
  {
    id: 4,
    title: "Conception Graphique et Expérience Utilisateur (UI/UX) ",
    description:
      "Création d'interfaces utilisateur attrayantes et intuitives en intégrant des éléments de conception graphique et en mettant l'accent sur une expérience utilisateur fluide et engageante. Cela inclut la conception de logos, d'illustrations, de maquettes, ainsi que l'analyse des besoins des utilisateurs, la création de personas et la conception de parcours utilisateur.",
  },
];
export const metadata = {
  title: "Services proposés | Gustave Kuetenang",
  description: "Découvrez mes compétences.",
  ogTitle: "Services proposés | Gustave Kuetenang",
  ogDescription: "Découvrez mes compétences.",
  ogImage: "/images/GustaveTSOPMO.webp",
  twitterCard: "summary_large_image",
};
const page = () => {
  return (
    <div className="stack gap-20">
      <div className="wrapper stack gap-8">
          <div className="project-card-title">
            <h1>
              <span className="page-title md:text-left">
              Services proposés
              </span>
            </h1>
          </div>
        <div className="project-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card group">
              <div className="w-full flex items-center justify-between">
                <div>
                  <h1 className="title-3 uppercase text-blue-500">{service.title}</h1>
                  <p className="mt-3 text-sm pb-3 text-justify">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
