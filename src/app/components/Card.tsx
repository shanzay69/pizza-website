import Link from 'next/link';
import React from 'react'

const  PizzaImageContent =() => {
  return (
   <section className='container mx-auto py-10 flex flex-col md:flex-row items-between'>
    <div className='md:w-1/2 md:pr-10'>
<h2  className='text-3xl font-bold mb-4 text-white'>Deliciious Pizza</h2>
<p className='text-white mb-4'>{' '} "Explore the delicious and fresh pizza with your favorite flavor that melts in your mouth and touches your heart."                                                                      </p>
   <Link href='/'  className='bg-yellow-700 text-white font-medium px-5 py-3 rounded-lg hover:bg-sky-700'>
    OrderNow
    </Link>
    <h3 className='text-2xl font-semibold text-white text-center mt-6 mb-2 ml-8'> {' '} Most Yummy Pizza ! with use This Ingredient {' '}    </h3>
    <ul className='text-white text-sm mt-3'>
  <li>
  <strong> BBQ Chicken Pizza:</strong> 
  BBQ sauce base, mozzarella cheese, spicy chicken chunks and onions.

  </li>
 <br/>
 <li>
  <strong>Veggie Pizza:</strong>Veggie Pizza sauce base, mozzarella cheese, onions, green peppers, mushrooms and black olives
  </li>
 <br/>

 <li>
  <strong> Pizza Super Cheese​:</strong> 
  Pizza sauce base with cheese and cheese some more cheese.with taste and jusice.

  </li>
 <br/>

 <li>
  <strong>Hawaiian Chicken Pizza:</strong>
  Pizza sauce base, mozzarella cheese, chicken chunks and pineapples.
  </li>
 <br/>
 <li>
  <strong>Chicken Fajita Pizza:</strong> 
  Pizza sauce base, mozzarella cheese, spicy chicken chunks, onions, green peppers and jalapenos.

  </li>
 <br/>
<li>
 <strong> Chicken Tikka Pizza:</strong> 
 Pizza sauce base, mozzarella cheese, chicken tikka chunks and onions.
  </li>
 <br/>
 </ul>
    </div>

 <div className='md:w-1/2 mt-6 md:mt-4'>
  <img src='/images/front.webp'
  alt='front'
  className='w-full lg:h-[500px] sm:h-[700px] rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7'/>
 </div>
    
   </section>
  );
};
export default PizzaImageContent;