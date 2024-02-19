import React from 'react'
import NextButton from './NextButton';
import Image from 'next/image';

const WorkTogether = () => {
  return (
    <div>
      <div className="box group overflow-hidden">
        <div className="absolute w-[80px] h-[80px] -top-0 -left-1">
          <Image src="/icons/stars.webp" alt="stars" width="100" height="100" />
        </div>
        <h3 className="title-1 !text-4xl mt-20">
          Travaillons <br />
          <span className="text-blue-600">Ensemble</span>
        </h3>
        <div className="flex justify-end">
          <NextButton link="/contact" />
        </div>
      </div>
    </div>
  );
}

export default WorkTogether
