

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const FirstCarousel = ({ data }) => {

  return (
    <div className="carousel-container p-2  sm:p-6 w-full max-w-[80%] sm:max-w-[80%] md:max-w-[1100px] left-3 sm:left-5 relative  overflow-hidden">
      {data.map((book, index) => (
        <div
          key={index}
          className={`carousel-slide active w-1/2 `}
        >
          <div className=" flex flex-col text-left items-start max-w-[230px] sm:max-w-[320px] md:max-w-[400px] mx-auto">
            <h1 className="mb-2 text-black text-xs  font-inters font-medium text-[8px] sm:text-sm">
              {book.isavailable}
            </h1>
            <div className="w-full relative aspect-[1/1.2]">
              <Image
                src={book.bookcover}
                alt={`${book.title}`}
                layout="fill"
                objectFit="fit"
              />

            </div>
            <h3 className="text-xs sm:text-xl mt-4  sm:mt-5 text-white font-semibold font-markazitext mb-2">
              {book.title}
            </h3>
            <p className="text-xs sm:text-base  font-alkatra font-medium text-white">
              {book.releaseDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstCarousel;
