import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import ContentWarning from '../contentwarning';
import { ImWarning } from "react-icons/im";
import { useModal } from '@/context/modalContext';
const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const r = (num >> 16) + Math.round((255 - (num >> 16)) * percent);
  const g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * percent);
  const b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * percent);
  return `#${(r < 255 ? r : 255).toString(16).padStart(2, "0")}${(g < 255 ? g : 255).toString(16).padStart(2, "0")}${(b < 255 ? b : 255).toString(16).padStart(2, "0")}`;
};

const SecondCarousel = ({ data }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();

  const handleOpenModal = (data) => {
    openModal(
      <ContentWarning data={data}/>
    );
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const backgroundColor = data[currentSlideIndex]?.bgColor || ""
  const lightColor = lightenColor(backgroundColor, 0.5);

  const handleNext = () => {
      setCurrentSlideIndex((currentSlideIndex + 1) % data.length);  
  };
  return (
    <section
      id="#books"
      className="relative w-full sm:h-screen flex items-center justify-center mx-auto py-8 sm:py-12 px-6"
      style={{
        backgroundColor: backgroundColor,
        transition: 'background-color 0.3s ease-in-out',
        minHeight: 600,
      }}
    >
      <div className="carousel w-full flex justify-center items-center relative">
        {data.map((book, index) => (
          <div
            key={index}
            className={`carousel-slide1 ${index === currentSlideIndex ? 'active' : ''} w-full flex flex-col items-center text-center sm:text-left sm:flex-row`}
          >
            {index === currentSlideIndex && (
              <div className="flex flex-col-reverse sm:flex-row items-center">
                <div className="w-full lg:w-1/2 h-full flex flex-col text-left space-y-4 md:space-y-10 lg:p-8 py-6">
                  <p className="text-sm text-white font-semibold font-poppins leading-relaxed tracking-wide">
                    {book.subtitle}
                  </p>
                  <div className="h-16 aspect-[1/0.5] relative w-auto left-0 my-6">
                    <Image src={book.titleimg} alt={book.title} width={300} height={150} className="flex justify-start" />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: book.description }}
                    className="text-sm sm:text-base lg:text-lg text-balance my-6 text-white font-montserrat font-normal leading-relaxed flex flex-col gap-4"
                  />
                 <div>
                 <h4 className="text-sm flex items-end gap-2  mt-4 text-rose-500 ">
                    {/* <ImWarning className='text-lg'/> */}
                     {/* This book contains sensitive content.<span className='text-smunderline text-blue-600 hover:text-blue-800 decoration-solid cursor-pointer' onClick={()=>handleOpenModal(book?.contentwarings)}> See more...</span> */}
                     <span className='text-white font-bold text-base cursor-pointer decoration-solid underline decoration-white' onClick={()=>handleOpenModal(book?.contentwarings)}>
                      Content Warning!
                     </span>
                  </h4>

                  <div className="flex space-x-4 mt-4">
                   <Link href={book.read}>
                    <button
                      style={{ backgroundColor: lightColor }}
                      className={`max-sm:text-base text-gray-800 hover:opacity-75 font-poppins font-normal py-2 px-4 sm:px-6 rounded-md hover:shadow-inner shadow hover:text-gray-100 transition duration-300 ease-in-out`}
                    >
                      READ NOW
                    </button>
                    </Link>
                    <Link href={book.goodreads}>
                    <button
                      style={{ backgroundColor: lightColor }}
                      className="max-sm:text-base text-gray-800  hover:opacity-80 font-normal font-poppins py-2 px-4 sm:px-6 rounded-md hover:shadow-inner shadow hover:text-gray-100 transition duration-300 ease-in-out"
                      
                    >
                      ADD TO GOODREADS
                    </button>
                    </Link>
                   
                  </div>
                 </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-end items-center relative p-2">
                  <h1
                    className="font-puppies absolute left-[-0.5rem] sm:left-0 top-[22%] sm:top-1/4 translate-y-1/4 text-3xl sm:text-2xl md:text-2xl lg:text-4xl font-black transition-all duration-500"
                    style={{ color: lightColor }}
                  >
                    {book.character}
                  </h1>
                  <div className="w-[70%] md:w-[70%] aspect-[1/1.3] flex justify-end left-6 items-center relative">
                    <Image src={book.bookcover} alt={book.title} layout="fill" objectFit="cover" />
                    <div className="w-2/3 absolute bottom-2 left-[-5rem] sm:left-[-4rem] md:left-[-8rem] aspect-[1/1.2] flex justify-end items-center">
                      <Image src={book.imgSrc} alt={book.title} layout="fill" objectFit="contain" className="rounded-lg p-1" />
                      <Image src={'/tablet.png'} alt={'tablet'} layout="fill" objectFit="contain" className="rounded-lg" />
                    </div>
                  </div>
                  <button onClick={handleNext} className="carousel-control absolute right-[-1rem] p-1">
                    <HiOutlineArrowNarrowRight className="text-white font-bold text-xl sm:text-3xl" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondCarousel;
