'use client'
import React from 'react'

type Offer ={
  
  title: string;
  description: string;
  
}
const SpecialOffers: React.FC =() => {
  const offers: Offer[] =[

    {
      title:'Happy Offer🎉',
      description:'Avail 50% off on all pizza every  Saturday and Sunday!'
    },

    {
      title:'Family Meal Deal🎉',
      description:'Order Two Main courses and one small pizza Free!'
    },
    {
      title:'Weekly Brunch🎉',
      description:'Get a Free drink with Pizza Order !'
    },
  ];
  const handleOfferClick = (description: string) => {
alert(description);
  }
return(
<section className='py-14'>
  <div className='container mx-auto text-center'>
<h1 className='text-4xl font-bold mb-6 text-white'>Special Offer 's</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7'>
{offers.map((offer, index) => (
  <button key={index}
  onClick={() => handleOfferClick (offer.description) }
  className='bg-white shadow-lg rounded-lg text-center hover:text-gray-400 transition duration-300 transform hover:scale-105'>
<h3 className='text-2xl font-semibold text-slate-700'>{offer.title}</h3>
<p className='text-gray-700 mt-3'>{offer.description}</p>
  </button>
))}

  </div>
  
  
  </div>
</section>


);
};


export default SpecialOffers;