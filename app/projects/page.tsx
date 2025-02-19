import NextButton from "@/components/NextButton";
import { projects } from "@/utils/constants";
import Image from "next/image";

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
      <div className="wrapper gap-8">
        <div className="project-card-title mr-6">
          <h1>
            <span className="page-title mb-6 md:text-left">
              Quelques <span className="text-blue-500">projets</span>
            </span>
          </h1>
        </div>
        <div className="project-grid">
          {projects
            .sort((a, b) => b.id - a.id)
            .map((project, index) => (
              <article key={index} className="project-card group">
                <div className="w-full h-[220px] mx-auto shadow-sm border border-transparent group-hover:shadow-xl group-hover:border-blue-600/25 rounded-3xl overflow-hidden transition duration-300 ease-in-out">
                  <Image
                    placeholder="blur"
                    width={280}
                    height="280"
                    className="object-cover w-full"
                    src={project.image}
                    blurDataURL={project.image}
                    alt="Project Image"
                  />
                </div>
                <div className="w-full mt-6 flex items-center justify-between">
                  <div>
                    <h5 className="title-3">{project.title}</h5>
                    {/* <p className="subtitle-sm">{project.category}</p> */}
                    {project.description && (
                      <p className="description mb-3">{project.description}</p>
                    )}
                  </div>
                  <NextButton target link={project.url} />
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
