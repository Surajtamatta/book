
import Image from 'next/image';
const About = () => {
  return (
    <section id='about' className="flex flex-col justify-center items-center  ">
    <div className='flex flex-col justify-center items-center overflow-hidden'>
    <div  className="w-full h-full flex flex-col-reverse sm:flex-row items-center mt-12 sm:mt-14 md:mt-16">
      
      {/* <!-- Text Content --> */}
      <div className="w-full  md:w-1/2 h-full flex flex-col justify-center items-start p-6 py-8  sm:p-4 md:p-6 lg:p-16">
        <h2 className="text-3xl flex h-auto sm:text-3xl relative md:text-4xl lg:text-6xl mb-8 font-metal font-thin text-[#d178b0]">
         About the author
         <div className='w-24 sm:w-28  md:w-36 lg:w-48  aspect-square absolute top-[-2rem] right-[-6rem]  sm:top-[-2rem] sm:right-[-8rem]  md:top-[-4rem] md:right-[-12rem] '>
         <Image src='/send.svg' alt="send image" layout='fill' objectFit="contain" className='  '/>
         </div>
          
        </h2>
        
        <p className="w-full text-base sm:text-sm  md:text-lg text-justify sm:text-left lg:text-2xl font-montserrat  font-normal leading-relaxed mb-4">
        Hi there! I'm Bal, your resident book lover and professional daydreamer.
        </p>
  
        <p className="w-full text-base sm:text-sm  md:text-lg text-justify sm:text-left lg:text-2xl font-montserrat font-normal leading-relaxed mb-4">
        When I'm not glued to my keyboard, juggling thirty different novel ideas, or using banter to convince my characters that they're perfect for each other, you can catch me dragging unsuspecting souls into the Great Canadian Outdoors for some fresh air (and a little inspiration).
        </p>
  
        <p className="w-full text-base sm:text-sm   md:text-lg text-justify sm:text-left lg:text-2xl font-montserrat font-normal leading-relaxed mb-4">
        When I do write, I love to blend all my favourite things: sports, banter, diversity, and fluff! So, if that sounds like your cup of chai, stick around, and we'll embark on this literary journey together!
        </p>
      </div>
  
      {/* <!-- Image Content --> */}
      <div className="w-full md:w-1/2 p-10 md:p-6 lg:p-16 aspect-square ">
        <div className="relative w-full h-full rounded-full bg-[#f6c3c8] border-2">
          <Image
            src="/girl.png"
            alt="girl"
            layout="fill"
            objectFit="cover"
            className="shadow-default  rounded-full border-2 border-black w-11/12"
          />
        </div>
      </div>
  
    </div>
    <div  className="w-full hidden relative  sm:flex bg-gray-300 h-[1px] justify-center items-center  mt-12 md:mt-6 mb-12 sm:mb-16 md:mb-20 ">
      <hr className="w-full max-w-[25%] h-1 absolute bg-black  left-[63%]" />
      </div>
  
    {/* <!-- Divider Line --> */}
   
    </div>
   
  </section>
  
  );
};

export default About;

