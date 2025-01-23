'use client'
import React, { useState } from 'react';

const ReservationSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    
    const reservationData = { name, email, date, time };

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();

      if (response.ok) {
        
        setMessage(result.message); 
        setName(''); 
        setEmail('');
        setDate('');
        setTime('');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className='bg-gradient-to-r from-black to bg-grey-600 px-4 py-9'>
  <div className='container mx-auto text-center'>
    <h2 className='text-3xl font-bold mb-6 text-white ml-5'>Make A Reservation</h2>
    <form className='max-w-md mx-auto text-slate-800' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full max-w-[500px] p-3 border border-gray-400 rounded-md'
          required
        />
      </div>
      <div className='mb-4'>
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full max-w-[500px] p-3 border border-gray-400 rounded-md'
          required
        />
      </div>

      <div className='mb-4'>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='w-full max-w-[500px] p-3 border border-gray-400 rounded-md'
          required
        />
      </div>

      <div className='mb-4'>
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className='w-full max-w-[500px] p-3 border border-gray-400 rounded-md'
          required
        />
      </div>
      <div className='mb-7 mt-5'>
        <button className='bg-yellow-700 text-white py-3 px-5 rounded-lg hover:bg-sky-700 ml-6'>
          Book Reserved Table
        </button>
      </div>
    </form>
    {message && <div className="text-green-500">{message}</div>}
    {error && <div className="text-red-500">{error}</div>}
  </div>
</section>
  );
};
export default ReservationSection;