import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className='bg-gradient-to-r from-black to-slate-700 border-2 border-black  py-14 sm:px-25 lg:px-24'>
      <footer className='flex flex-col space-y-10 justify-center mb-0 ml-5'>
<div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
<Link href='http://facebook.com' target='blank' rel='nofollow noopener'>
<img
src='https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000'
alt='facebook logo'
className='w-12 h-12 object-cover'/>
</Link>

<Link href='http://linkedin.com' target='blank' rel='nofollow noopener'>
<img
src=' https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000'
alt='linkedin logo'
className='w-12 h-12 object-cover'/>
</Link>

<Link href='http://instagram.com' target='blank' rel='nofollow noopener'>
<img
src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000'
alt='instagram logo'
className='w-12 h-12 object-cover'/>
</Link>

<Link href='http://twitter.com' target='blank' rel='nofollow noopener'>
<img
src='https://img.icons8.com/?size=100&id=114450&format=png&color=000000'
alt='twitter logo'
className='w-12 h-12 object-cover'/>
</Link>
</div>
<p className='text-center text-white hover:text-gray-500'>2024 Shanzay Khan. All Right Reserved.</p>

      </footer>
    </div>
  )
}
