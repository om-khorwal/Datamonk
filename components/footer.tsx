import React from "react";
import Link from "next/link";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
const footer = () => {
    return (
          <footer className='w-full h-fit xl:flex items-center xl:h-44 justify-between p-3 xl:p-5 gap-8 xl:gap-0 bg-orange-400 text-white'>
            <div className='w-full xl:h-full xl:w-1/2 flex flex-col justify-center gap-4 text-center xl:text-left text-white'>
              <div className="xl:h-30 xl:w-full  flex flex-col justify-between">
                <h1 className='xl:text-4xl  text-3xl font-bold '>
                  DataMonk
                </h1>
              
             
                <p className='xl:text-[16px] text-[1rem] max-w-md mx-auto xl:mx-0'>
                  Transform raw data into actionable insights with AI-driven analytics, automation, and real-time intelligence.
                </p>
              </div>
              
              
              
            </div>
            <div className='w-full xl:w-1/2 flex flex-col items xl:items-end gap-6 p-4 '>
              <div className='xl:flex     text-center w-full font-bold xl:justify-end text-[1rem] xl:gap-10 xl:text-[1.2rem] '>
                <Link className="border-b-2 xl:mx-0 mx-2" href="/home">Home</Link>
                <Link className="border-b-2 xl:mx-0 mx-2" href="/blog">Blog</Link>
                <Link className="border-b-2 xl:mx-0 mx-2" href="/carrer">Carrer</Link>
                <Link className="border-b-2 xl:mx-0 mx-2" href="/about">About</Link>
                <Link className="border-b-2 xl:mx-0 mx-2" href="/contact">Contact</Link>

              </div>
              <div className='flex gap-6 justify-center xl:justify-end xl:gap-10'>
                <Link className='hover:scale-110 active:scale-90' target='_blank' href='https://www.instagram.com/'><Instagram/></Link>
                <Link className='hover:scale-110 active:scale-90' target='_blank' href='https://www.linkedin.com' ><Linkedin/></Link>

              </div>
                <p className="text-sm text-center">
                  Copyright © 2025 <span className='font-black'>DataMonk</span>. All rights reserved.
                </p>
            </div>

          </footer>
    );

}

export default footer;