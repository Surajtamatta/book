import React from 'react';
import Image from 'next/image';

const FirstCarousel = ({ data }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 p-4 w-full max-w-[1100px]">
        {data.map((book, index) => (
          <div
            key={index}
            className="flex flex-col text-left items-start"
          >
            <h1 className={`mb-2 ${(index === 2 || index === 3) ? "text-white md:text-black" : "text-black"}
 text-[10px] z-10 sm:text-sm font-medium`}>
              {book.isavailable}
            </h1>

            <div className="w-full relative aspect-[1/1.2]">
              <Image
                src={book.bookcover}
                alt={book.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3 className={`text-xs z-10 sm:text-xl mt-2  sm:mt-5 font-semibold font-markazitext mb-2 ${(index === 0 || index === 1) ? "text-black md:text-white" : "text-white "}`}>
              {book.title}
            </h3>
            <p className={`text-xs z-10 sm:text-base  font-alkatra font-medium ${(index === 0 || index === 1) ? "text-black md:text-white" : "text-white "}`}>
              {book.releaseDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstCarousel;
