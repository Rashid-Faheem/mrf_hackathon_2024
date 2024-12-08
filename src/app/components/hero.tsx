// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='font-helvetica'>
<div className='bg-[#F5F5F5] py-2 px-8 md:px-20 md:py-4 '>
<h2 className=' text-xs md:text-base font-medium text-center'>Hello Nike App</h2>
<h2 className='text-[8px] md:text-xs font-medium text-center'>Download the app to access everything Nike. <span className='font-helveticaBold'>Get Your Great</span></h2>
</div>
    
    <section className="relative">
      <div className=" mx-auto sm:px-6 sm:mb-6 lg:px-12 lg:mb-12 text-center">
        <div className="relative">
          <Image
            src="/hero-image.png"
            alt="Nike Air Max Pulse"
            width={1750}            
            height={900}            
            
          />
        </div>
    
      </div>

      <div className='flex flex-col items-center gap-6 ' >
        <h2 className=' text-xs md:text-base font-medium text-center'>First Look</h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-helveticaBold font-bold">
          NIKE AIR MAX PULSE
        </h1>
        <p className='text-xs md:text-sm w-[80%] sm:w-[60%] lg:w-[40%] text-center '>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        —designed to push you past your limits and help you go to the max.</p>
        <div className=' flex flex-col sm:flex-row gap-2 sm:flex sm:gap-2' >
        <button className='px-6 py-2 bg-black text-white font-medium rounded-full text-xs sm:text-sm lg:text-base '>Notify Me</button>
        <button className='px-6 py-2 bg-black text-white font-medium rounded-full text-xs sm:text-sm lg:text-base'>Shop Air Max</button>
        </div>
        </div>
        
    </section>
    </div>
  );
};

export default HeroSection;
