import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';
import PopUp from '../PopUp';
import { useModal } from '../../context/modalContext';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <PopUp/>
    );
  };



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="w-full h-full max-h-28">
      <header className={`w-full
      max-sm:px-6 py-4 pt-4 px-6 flex justify-between items-center   bg-white shadow z-40
      flex-col max-sm:fixed
      } 
      `}
      > 
        <div className="w-full h-12 flex font-poppins justify-between items-center ">
  
          <div className={`
          w-1/2 relative z-50 flex justify-start  gap-5 font-poppins font-medium
         sm:justify-end
          `}>
          <Image  src='/logo.png' width={180} height={120}  alt={'logo'} className={`
            relative
            right-10  sm:left-24
            `}/>
          </div>

         
          
          <div className="w-1/2 flex justify-end max-sm:hidden font-poppins  gap-5 font-medium">
       
            <button 
            onClick={handleOpenModal} 
            className="z-10 text-[#d394e2] text-sm p-2 sm:px-4 sm:py-2  shadow-none hover:text-[#f2b1ff]">
            Subscribe!
            </button>
            
          </div>

          {/* Hamburger Icon */}
          <div className="hidden max-sm:flex justify-end z-50">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? <GiCrossMark /> : <FaBars />}
            </button>
          </div>
        </div>

   
        <nav
          className={`max-sm:${
            menuOpen ? 'block' : 'hidden'
          } max-sm:fixed w-full inset-0 bg-white bg-opacity-70 backdrop-blur-md z-20  flex max-sm:justify-start
          transition-transform duration-500 ease-in-out transform 
         justify-center
          max-sm:${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`
        }
        >

          <div className="w-full sm:max-w-[400px] max-sm:pt-20 h-12 max-sm:h-screen  flex  max-sm:flex-col items-center max-sm:items-start justify-between max-sm:justify-start  font-poppins font-medium text-xs text-gray-700">
            <a href="/" className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex justify-stretch hover:text-gray-500 hover:underline transition-colors duration-300">HOME</a>

            <Link href={'/#books'}>
            <h1  className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">BOOKS</h1>
            </Link>

            <Link href={'/bonus'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">BONUS</h1>
            </Link>
          
            <Link href={'/#contact'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">CONTACT</h1>
            </Link>
            <Link href={'/event'}>
            <h1 className="max-sm:w-full max-sm:px-6 max-sm:py-4 flex hover:text-gray-500 hover:underline  transition-colors duration-300">EVENTS</h1>
            </Link>

            <Link href={'/#subscribe'} className='sm:hidden'> 
            <h1 className=" max-sm:w-full text-[#d394e2] max-sm:px-6 flex max-sm:py-4 font-normal hover:text-gray-500 hover:underline transition-colors duration-300">Subscribe !</h1>
            </Link>
            

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
