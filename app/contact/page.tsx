import Contact from "@/components/contact";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between sm:space-x-6">
        <div className="w-full sm:w-5/12 md:w-3/12">
          <h5 className="title-3 uppercase text-gray-800 mb-3">Contact</h5>
          <div className="space-y-8">
            <div className="flex relative">
              <div className="relative w-8 h-8 rounded-xl bg-white p-4">
                <Image
                  placeholder="empty"
                  className="object-contain d-flex items-center justify-center mx-auto max-h-[26px]"
                  fill
                  src="/icons/phone.svg"
                  alt="phone"
                />
              </div>
              <div className="ml-3">
                <p className="subtitle-sm">Adresse EMAIL</p>
                <a
                  href="mailto:guctaveckt@gmail.com"
                  className="cursor-pointer stretched-link hover:text-blue-600 hover:underline break-all text-sm"
                >
                  guctaveckt@gmail.com
                </a>
              </div>
            </div>

            <div className="flex relative">
              <div>
                <div className="relative w-8 h-8 rounded-xl bg-white p-4">
                  <Image
                    placeholder="empty"
                    className="object-contain d-flex items-center justify-center mx-auto max-h-[26px]"
                    fill
                    src="/icons/phone.svg"
                    alt="phone"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="subtitle-sm">Téléphone</p>
                <a
                  href="tel:+237695705725"
                  className="cursor-pointer stretched-link hover:text-blue-600 hover:underline"
                >
                  <p className="text-sm">+237 695 705 725</p>
                </a>
              </div>
            </div>

            <div className="flex relative">
              <div>
                <div className="relative w-8 h-8 rounded-xl bg-white p-4">
                  <Image
                    placeholder="empty"
                    className="object-contain d-flex items-center justify-center mx-auto max-h-[26px]"
                    fill
                    src="/icons/whatsapp.svg"
                    alt="whatsapp"
                  />
                </div>
              </div>
              <div className="ml-3">
                <p className="subtitle-sm">Whatsapp</p>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://wa.me/695705725"
                  className="cursor-pointer stretched-link hover:text-blue-600 hover:underline"
                >
                  <p className="text-sm">+237 695 705 725</p>
                </a>
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="relative rounded-xl bg-white inline-block p-4">
                  <Image
                    placeholder="empty"
                    className="object-contain d-flex items-center justify-center mx-auto max-h-[26px]"
                    fill
                    src="/icons/location.svg"
                    alt="location"
                  />
                </div>
              </div>
              <div className="ml-2">
                <p className="subtitle-sm">Adresse</p>
                <p className="text-sm">
                  Awae escalier, <br />
                  Yaoundé Cameroun
                </p>
              </div>
            </div>
          </div>

          <h5 className="title-3 uppercase text-gray-800 mt-6 mb-3">
            Social media
          </h5>
          <div className="flex space-x-6">
            <div className="relative rounded-full bg-white p-6">
              <a
                href="https://linkedin.com/in/gustaveckt"
                target="_blank"
                rel="noopener"
              >
                <Image
                  placeholder="empty"
                  className="object-contain d-flex items-center justify-center mx-auto max-h-[30px]"
                  fill
                  src="/icons/linkedIn.svg"
                  alt="linkedIn"
                />
              </a>
            </div>
            <div className="relative rounded-full bg-white p-6">
              <a
                href="https://github.com/gustaveckt"
                target="_blank"
                rel="noopener"
              >
                <Image
                  placeholder="empty"
                  className="object-contain d-flex items-center justify-center mx-auto max-h-[30px]"
                  fill
                  src="/icons/github.svg"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-7/12 md:w-8/12 lg:w-9/12">
          <div className="box !p-10">
            {/* <form>
              <h5 className="text-5xl uppercase text-gray-800 mb-6 fw-bold">
                Me contacter
              </h5>
              <div className="mb-6">
                <label htmlFor="name" className="text-input-label">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="text-input"
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="text-input-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-input"
                  placeholder="nom@exemple.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="text-input-label">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="text-input"
                  placeholder="A quel sujet voulez vous me contacter ?"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="text-input-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="text-input"
                  //   lines="4"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button>Soumettre</button>
            </form> */}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
