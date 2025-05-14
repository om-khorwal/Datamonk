import React from "react";
import Link from "next/link";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
const footer = () => {
    return (
          <footer className='w-full h-fit flex  items-center justify-between p-5 bg-orange-400'>
        <div className='w-1/2  h-full flex flex-col justify-center gap-5 text-white'>
          <div>
            <h1 className='text-4xl font-bold '>
              DataMonk
            </h1>
          </div>
          <div>
            <p className='text-[16px] w-1/2'>
              Transform raw data into actionable insights with AI-driven analytics, automation, and real-time intelligence.
            </p>
          </div>
          <div>
            <p>
              Copyright © 2025 <span className='font-black'>DataMonk</span>. All rights reserved.
            </p>
          </div>
        </div>
        <div className='w-1/2   h-full flex flex-col justify-center text-white items-end gap-20 '>
          <div className='flex gap-10 text-[1.2rem]'>
            <Link href="/home">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/carrer">Carrer</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

          </div>
          <div className='flex gap-10'>
            <Link className='hover:scale-110 active:scale-90' target='_blank' href='https://www.instagram.com/'><Instagram/></Link>
            <Link className='hover:scale-110 active:scale-90' target='_blank' href='https://www.linkedin.com' ><Linkedin/></Link>

          </div>
        </div>

      </footer>
    );

}

export default footer;