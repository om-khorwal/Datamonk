'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ Correct import for App Router

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/home'); // ✅ Correct method for navigation
  };

  return (
    <header className="flex text-black p-5">
      <div className="flex justify-between items-center w-1/2">
        <img
          src="https://i.postimg.cc/mDw3LyNW/Group-6-2.png"
          onClick={handleLogoClick}
          width={200}
          alt="logo"
        />
      </div>
      <div className="flex justify-end gap-10 text-[1rem] font-bold items-center w-1/2">
        <Link href="/home">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/carrer">Carrer</Link>
        <Link href="/about">About</Link>
        <Link
          className="m-2 drop-shadow-lg px-3 bg-amber-600 py-1 rounded-2xl text-white active:scale-90 hover:bg-orange-500 hover:scale-105 duration-300  "
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
