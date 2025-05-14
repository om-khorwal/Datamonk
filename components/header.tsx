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
    <header className="w-full  bg-white px-4 py-3  flex justify-between items-center z-50 relative">

        <img
          src="https://i.postimg.cc/mDw3LyNW/Group-6-2.png"
          onClick={handleLogoClick}
          width={180}
          alt="logo"
          className='cursor-pointer'
        />
      

      {/* Desktop Menu*/}
      <nav className='hidden md:flex gap-8 font-bold text-black items-center'>
        <Link href="/home">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/carrer">Carrer</Link>
        <Link href="/about">About</Link>
        <Link
          className="bg-amber-600 text-white px-4 py-2 rounded-2xl hover:bg-orange-500 transition"
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
        <span className={`h-1 w-6 bg-black my-0.5 transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
        <span className={`h-1 w-6 bg-black my-0.5 transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
        <span className={`h-1 w-6 bg-black my-0.5 transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2': ''}`}/>
      </button>

      {/* Mobile Menu Overlay*/}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl font-bold transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <Link onClick={toggleMenu} href="/home">Home</Link>
        <Link onClick={toggleMenu} href="/blog">Blog</Link>
        <Link onClick={toggleMenu} href="/carrer">Carrer</Link>
        <Link onClick={toggleMenu} href="/about">About</Link>
        <Link onClick={toggleMenu} href="/contact" className='bg-amber-600 text-white px-6 py-2 rounded-2xl hover:bg-orange-500 transition'>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
