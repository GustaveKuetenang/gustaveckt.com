import NextButton from "@/components/NextButton";
import { projects } from "@/utils/constants";
import Image from "next/image";
import React from "react";


export const metadata = {
  title: "Mes projets | Gustave Kuetenang",
  description: "Découvrez me réalisations les plus recents.",
  ogTitle: "Mes projets | Gustave Kuetenang",
  ogDescription: "Découvrez me réalisations les plus recents.",
  ogImage: "/images/GustaveTSOPMO.webp",
  twitterCard: "summary_large_image",
};
const page = () => {
  return (
    <div className="stack gap-20">
      <div className="wrapper stack gap-8">
        <div className="project-grid">
          <div className="project-card-title">
            <h1>
              <span className="page-title mb-6 md:text-left">Mes projets</span>
            </h1>
          </div>
          {projects.map((project) => (
            <article key={project.id} className="project-card group">
              <div className="w-full h-[280px] mx-auto shadow-sm border border-transparent group-hover:shadow-xl group-hover:border-blue-600/25 rounded-3xl overflow-hidden transition duration-300 ease-in-out">
                <Image
                  placeholder="empty"
                  width={280}
                  height="280"
                  className="object-cover w-full"
                  src={project.image}
                  alt="Project Image"
                />
              </div>
              <div className="w-full mt-6 flex items-center justify-between">
                <div>
                  <p className="subtitle-sm">{project.category}</p>
                  <h1 className="title-3">{project.title}</h1>
                </div>
                <NextButton link={`works/${project.slug}`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
