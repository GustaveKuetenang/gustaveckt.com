import React from 'react';
import NextButton from "@/components/NextButton";
import Profiles from "@/components/Profiles";
import WorkTogether from "@/components/WorkTogether";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="grid grid-cols-4 justify-between items-center gap-6">
        <div className="col-span-4 order-1 md:col-span-4 lg:col-span-2 sm:items-stretch flex flex-col sm:flex-row items-center md:space-x-6 box group">
          <div className="w-6/12 sm:w-1/3 relative md:w-4/12 lg:w-2/5 overflow-hidden rounded-ss-3xl rounded-3xl">
            <Image
              src="/images/portrait-gustave-tsopmo.webp"
              className="w-full h-full object-cover"
              fill
              alt="Portrait of Gustave Carel Kuetenang Tsopmo"
              aria-hidden="true"
            />
          </div>
          <div className="w-full mt-6 sm:w-2/3 md:mt-0 md:8/12 lg:w-3/5 group">
            <p className="subtitle">DÉVELOPPEUR ET DESGIGNER</p>
            <h1 className="title-1">Gustave Carel Kuetenang TSOPMO</h1>
            <p className="text-gray-400 mt-3">
              Je suis un développeur passionné, prêt à mettre mes compétences au
              service de ceux qui aspirent à exceller dans le monde de
              l'informatique.
            </p>
            <div className="md:flex justify-end mt-6 hidden">
              <NextButton link="/about" />
            </div>
          </div>
        </div>

        <div className="order-2 col-span-4 lg:col-span-2 grid grid-cols-2 gap-6">
          <div className="space-y-6 col-span-2">
            <div
              className="box group py-4 px-0 relative"
              role="navigation"
              aria-label="Recent Links"
            >
              <div className="scrolling-text-container flex items-center justify-center">
                <Link
                  href="/projects"
                  className="m-0 mr-4 p-0 scrolling-text uppercase text-gray-500 text-sm"
                >
                  Derniers <span className="text-blue-600">travaux</span> et
                  <span className="text-blue-600 ">nouveautés</span>
                  <span className="mx-3">&middot;</span>
                  Derniers <span className="text-blue-600">travaux</span> et
                  <span className="text-blue-600">nouveautés</span>
                  <span className="mx-3">&middot;</span>
                  Derniers <span className="text-blue-600">travaux</span> et
                  <span className="text-blue-600">nouveautés</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 box group">
            <div className="h-[126px]">
              <Image
                className="mx-auto max-h-[126px] opacity-50 object-contain"
                height="126"
                width="126"
                src="/images/skills.webp"
                alt="Compétences de Gustave Carel Kuetenang TSOPMO."
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="">
                <p className="subtitle-sm">À PROPOS</p>
                <h1 className="title-3">Compétences</h1>
              </div>
              <NextButton link="/skills" />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 box group">
            <div className="h-[126px]">
              <Image
                className="object-contain mx-auto max-h-[126px]"
                height="126"
                width="189"
                src="/images/showcase.webp"
                alt="Projets de Gustave Carel Kuetenang TSOPMO."
              />
            </div>
            <div className="flex mt-3 items-center justify-between">
              <div className="">
                <p className="subtitle-sm">VITRINE</p>
                <h1 className="title-3">Projets</h1>
              </div>
              <NextButton link="/projects" />
            </div>
          </div>
        </div>

        <div className="order-3 box col-span-4 md:col-span-2 lg:col-span-1 group">
          <div className="flex flex-col">
            <div className="h-[126px]">
              <Image
                className="max-h-[126px] object-contain mx-auto"
                src="/images/graphic-design-icon.webp"
                height="126"
                width="189"
                alt="Illustration: Coming Soon"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="subtitle-sm">Portfolio</p>
                <h1 className="title-3">Graphic design</h1>
              </div>
              <NextButton link="designs" />
            </div>
          </div>
        </div>

        <div className="order-5 lg:order-4 col-span-4 md:col-span-2 box group flex flex-col justify-between">
          <div className="flex items-center">
            <div className="p-6 h-[120px] w-1/4">
              <Image
                className="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
                width="30"
                height="30"
                src="/icons/backend-development.svg"
                alt="Backend Development Icon"
              />
            </div>
            <div className="p-6 h-[120px] w-1/4">
              <Image
                className="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
                width="30"
                height="30"
                src="/icons/graphic-design.svg"
                alt="Graphic Design Icon"
              />
            </div>
            <div className="p-6 h-[120px] w-1/4">
              <Image
                className="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
                width="30"
                height="30"
                src="/icons/web-design.svg"
                alt="Web Design Icon"
              />
            </div>
            <div className="p-6 h-[120px] w-1/4">
              <Image
                className="object-cover d-flex items-center justify-center mx-auto max-h-[30px]"
                width="30"
                height="30"
                src="/icons/ui-ux-design.svg"
                alt="UI/UX Design Icon"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="subtitle-sm">SPÉCIALISATIONS</p>
              <h1 className="title-3">Services Proposés</h1>
            </div>
            <NextButton link="/skills" />
          </div>
        </div>

        <div className="order-4 lg:order-5 box col-span-4 md:col-span-2 lg:col-span-1">
          <Profiles />
        </div>

        {/* <!-- <div className="col-span-2 box group flex space-x-6">
      <div className="w-1/3 p-4 bg-gray-50 rounded-3xl flex flex-col items-center">
        <h3 className="text-blue-600 mx-auto text-4xl font-">5</h3>
        <p className="subtitle text-center mt-3">ans d'experiences</p>
      </div>
      <div className="w-1/3 p-4 bg-gray-50 rounded-3xl flex flex-col items-center">
        <h3 className="text-blue-600 mx-auto text-4xl font-">+10</h3>
        <p className="subtitle text-center mt-3">clients satisfaits</p>
      </div>
      <div className="w-1/3 p-4 bg-gray-50 rounded-3xl flex flex-col items-center">
        <h3 className="text-blue-600 mx-auto text-4xl font-">+30</h3>
        <p className="subtitle text-center mt-3">projets au total</p>
      </div>
    </div> --> */}
        {/* <div className="order-5 col-span-4 md:col-span-2">
          <WorkTogether />
        </div> */}
      </div>
    </section>
  );
}

export default Hero
