import ExperienceSection from "@/components/experiences";
import { educations } from "@/utils/constants";
import Image from "next/image";

export const metadata = {
  title: "A-propos | Gustave Kuetenang",
  description: "Learn about Gustave Kuetenang's most recent projects",
  openGraph: {
    title: "A-propos | Gustave Kuetenang",
    description: "Learn about Gustave Kuetenang's most recent projects",
    image: "/images/GustaveTSOPMO.webp",
  },
  twitter: {
    title: "A-propos | Gustave Kuetenang",
    description: "Learn about Gustave Kuetenang's most recent projects",
    image: "/images/GustaveTSOPMO.webp",
    card: "summary_large_image",
  },
};

const about = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:space-x-6">
        <div className="box w-1/2 relative mx-auto md:w-2/6">
          <Image
            placeholder="blur"
            blurDataURL="/images/GustaveTSOPMO.webp"
            quality={100}
            src="/images/GustaveTSOPMO.webp"
            width={358}
            height={358}
            className="rounded-3xl object-cover h-full w-full"
            alt="starts"
          />
        </div>
        <div className="w-full md:w-4/6 mt-6 lg:mt-0">
          <h1 className="page-title mb-6 text-center md:text-left">
            A-props de moi
          </h1>
          <div className="box overflow-hidden">
            <div className="absolute -top-0 -left-1">
              <Image
                height="80"
                width="80"
                alt="stars"
                src="/icons/stars.webp"
              />
            </div>
            <h3 className="title-1 !text-4xl mt-20">
              Gustave Carel Kuetenang Tsopmo
            </h3>
            <p className="text-gray-600 mt-3">
              Fort de 5 ans d'expérience, je suis prêt à propulser votre
              entreprise ou vos projets personnels vers l'excellence grâce à des
              solutions informatiques sur mesure.
              <ul className="mt-2 list-disc pl-6">
                <li>Créatif, innovant, et orienté vers les résultats.</li>
                <li>Forte capacité d'analyse et de résolution de problèmes.</li>
                <li>
                  Communicateur efficace et passionné par l'apprentissage
                  continu.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row align-start max-sm:space-y-6 md:space-x-6">
        <div className="w-full md:w-1/2">
          <ExperienceSection />
        </div>
        <div className="box h-fit w-full md:w-1/2">
          <h2 className="title-2 !text-gray-900 uppercase !font-medium">
            Éducation
          </h2>
          <ul className="list-none divide- space-y-6">
            {educations.map((education) => (
              <li className="pt-3">
                <div className="relative group flex justify-between items-center">
                  <div>
                    <h4 className="subtitle mb-1">
                      {education.period} |{" "}
                      <span className="subtitle">{education.institute}</span>
                    </h4>
                    <p className="title-3 text-gray-900 font-medium">
                      {education.diploma}
                    </p>
                  </div>
                  {/*<NextButton link={`/about/${education.id}`} />*/}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*  <div className="box h-fit w-full mt-6">
        <h2 className="subtitle !text-gray-900 !font-medium">Expérience</h2>
       <ul className="list-none divide- space-y-6">
          {experiences.map((experience: Experience) => (
            <li className="pt-3">
              <div className="relative group flex justify-between items-center">
                <div>
                  <h4 className="subtitle mb-1">
                    {experience.period} |{" "}
                    <span className="mt-2 subtitle">{experience.company}</span>
                  </h4>
                  <p className="title-3 text-blue-600 font-medium">
                    {experience.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul> 
      </div>*/}
    </div>
  );
};

export default about;
