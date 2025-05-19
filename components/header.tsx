'use client';

import React, { useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ Correct import for App Router

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    router.push('/home'); // ✅ Correct method for navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full  bg-white px-4 py-5  flex justify-between items-center ">

        <img
          src="https://i.postimg.cc/mDw3LyNW/Group-6-2.png"
          onClick={handleLogoClick}
          width={180}
          alt="logo"
          className='cursor-pointer xl:w-1/12 md:w-1/6 w-2/6 flex justify-center items-center'
        />
      

      {/* Desktop Menu*/}
      <nav className='hidden sm:flex xl:flex  gap-8 font-bold text-black items-center '>
        <Link href="/home" className='hover:scale-110 duration-300 hover:text-orange-500'>Home</Link>
        <Link href="/blog" className='hover:scale-110 duration-300 hover:text-orange-500'>Blog</Link>
        <Link href="/carrer" className='hover:scale-110 duration-300 hover:text-orange-500'>Carrer</Link>
        <Link href="/about" className='hover:scale-110 duration-300 hover:text-orange-500'>About</Link>
        <Link
          className="bg-amber-600 text-white px-2 py-1 rounded-2xl hover:bg-orange-500 transition hover:scale-110 duration-300"
          href="/contact"
          >
          Contact
        </Link>
      </nav>
      
      {/* Hamburger Button - visible on mobile only */}
      <button 
        className='md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50'
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`h-1 w-5 bg-black my-0.5 transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
        <span className={`h-1 w-5 bg-black my-0.5 transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
        <span className={`h-1 w-5 bg-black my-0.5 transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2': ''}`}/>
      </button>

      {/* Mobile Menu Overlay*/}
      <div className={`fixed top-0 left-0 w-2/4 h-screen  flex flex-col items-center justify-center gap-8 text-xl font-bold transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-10 bg-gray-300`}>
        <Link onClick={toggleMenu} href="/home">Home</Link>
        <Link onClick={toggleMenu} href="/blog">Blog</Link>
        <Link onClick={toggleMenu} href="/carrer">Carrer</Link>
        <Link onClick={toggleMenu} href="/about">About</Link>
        <Link onClick={toggleMenu} href="/contact" className='bg-amber-600 text-white  px-2 py-1 rounded-2xl hover:bg-orange-500 transition'>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
