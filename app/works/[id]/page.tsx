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
const page = ({ params }: any) => {
  const project = projects.find((item) => item.slug == params.id);
  
  return (
    <div className="stack gap-20">
      <div className="wrapper stack flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-2/6">
            <p className="subtitle-sm">{project?.category}</p>
            <h1>
              <span className="page-subtitle text-3xl mb-6 md:text-left">
                {project?.title}
              </span>
            </h1>
          </div>
            <div className="w-full sm:w-4/6 relative h-[300px] sm:h-[220px] lg:h-[440px] mx-auto shadow-sm border border-transparent group-hover:shadow-xl group-hover:border-blue-600/25 rounded-3xl overflow-hidden transition duration-300 ease-in-out">
              <Image
                placeholder="empty"
                fill
                quality={100}
                className="object-cover w-full origin-bottom"
                src={project!.image}
                alt="Project Image"
              />
            </div>
      </div>
    </div>
  );
};

export default page;
