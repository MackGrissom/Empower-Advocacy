import React from 'react'
import logo from '/home/mackgrissom/code/MackGrissom/Empower-Advocacy/Empower-Advocacy/src/assets/images/logo.webp'
import background from '/home/mackgrissom/code/MackGrissom/Empower-Advocacy/Empower-Advocacy/src/assets/images/background12.webp'
const Hero2 = () => {
  return (
    <section>
  <div class="px-4 py-10 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 h-[100vh]  ">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src={background} />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
      <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className=" mb-10" src={logo} alt="" />
            </a>
          </div>
        {/* <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> <span className='text-gn'> Empower Advocacy </span> </span> */}
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl capitalize"> 
        
        
        <span className='text-gn '>Empowering Families </span> As They Navigate The Journey Of Special Education </h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500 capitalize">Our mission is to empower parents to advocate for your child in the school system. Parents are often left feeling alone at the table during an IEP meeting. We help change that.</p>
        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
          <div class="mt-3 rounded-lg sm:mt-0">
            <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gn">Contact Us</button>
          </div>
          <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-black transition duration-500 ease-in-out transform  shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-beige">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero2