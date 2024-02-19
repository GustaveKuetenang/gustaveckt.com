import Image from 'next/image';
import React from 'react'
import NextButton from './NextButton';

const Profiles = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-50 border border-gray-200/80 rounded-3xl mb-3 p-6">
        <div className="w-1/2">
          <div className="mx-auto rounded-full bg-white h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center">
            <Image
              className="object-cover max-w-[14px] md:max-w-[24px] mx-auto"
              width="24"
              height="24"
              src="/icons/linkedIn.svg"
              alt="linkedIn icon"
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mx-auto rounded-full bg-white h-[40px] w-[40px] md:h-[60px] md:w-[60px] flex items-center justify-center">
            <Image
              className="object-cover max-w-[14px] md:max-w-[24px] mx-auto"
              width="24"
              height="24"
              src="/icons/github.svg"
              alt="github icon"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between group">
        <div className="">
          <p className="subtitle-sm">VITRINE</p>
          <h1 className="title-3">Profils</h1>
        </div>
        <NextButton link="/work" />
      </div>
    </div>
  );
}

export default Profiles
