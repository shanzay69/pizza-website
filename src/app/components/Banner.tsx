import React from 'react';
import Image from 'next/image';
export default function Banner() {
  return (
   
<div className='relative bg-gradient-to-r from-black to-red-800 font-sans  h-[200px] sm:h-[100px] md:h-[200px] lg:h-[300px]'>
  <div className='absolute inset-0 opacity-20'>
 <img 
 src='/images/chess.jpeg'
 alt='chess'
 className='w-full h-full object-cover'/>
 
 
  </div>
  <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center pt-12'>
  <h2 className='text-white sm:text-4xl font-bold '>  Discover our  pizza Menu</h2>
  <p className='text-white text-lg text-center  max-w-xl'>
    some awesome pizza categories and offers 
  </p>
  <Image
          src="/images/man.png" 
          alt="man"
          width={100}
          height={100}
         
        />
  </div>
    </div>
  );
}

























  
