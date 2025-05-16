'use client';
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const contact = () => {
  return (
    <div className="xl:h-screen w-full justify-between flex flex-col ">
      <Header />
      <div className="gap-1 flex flex-col justify-between xl:p-10 p-5">
        <h1 className="font-bold text-4xl md:text-5xl">Contact</h1>
        <h3 className="font-medium text-xl md:text-3xl mb-3 ">Empowering Businesses with Data & AI</h3>
        <p className=" text-gray-600 md:text-xl text-xs">At Datamonk, we help businesses transform raw data into valuable insights, streamline cloud operations,
          and build scalable AI-powered solutions. With expertise in Data Lifecycle Management, Machine Learn
          ing, Cloud Optimization, and Kubernetes, we ensure your business stays ahead in the digital era.</p>
      </div>
      <main className="xl:p-10 p-5 xl:flex w-full h- ">
        <div className="xl:w-1/2 h-[100%]  rounded-xl justify-center flex">
          <div className="xl:w-2/3  p-10  h-full flex flex-col items-center shadow-[0_0px_15px_rgb(0,0,0,0.5)]">

            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="block w-full p-2 mb-4 rounded-md border-b-2"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="block w-full p-2 mb-4 rounded-md border-b-2"
            />
            <input
              type="text"
              name="Message"
              placeholder="Your Message"
              className="w-full p-2 mb-4 rounded-md border-b-2 h-30"
            />
            <button className="rounded-2xl text-white w-1/2 xl:py-2 xl:px-10 xl:my-14 bg-orange-500"> Send</button>
          </div>
        </div>
        <div className="xl:w-2/3 h-full  flex  justify-center items-center py-6 ">
          <div className="h-77 xl:h-104 flex flex-col  justify-end">
            <h1 className="xl:text-[1.5rem] font-black">Simplifying</h1>
            <div className="w-24 h-24 xl:w-36 xl:h-32 border-2 "></div>
          </div>

          <div className="h-77 xl:h-104 flex flex-col  justify-center">
            <h1 className="xl:text-[1.5rem] font-black">Data</h1>
            <div className="w-24 h-24 xl:w-36  xl:h-32 border-2 "></div>
          </div>

          <div className="h-77 xl:h-104 flex flex-col  justify-start">
            <h1 className="xl:text-[1.5rem] font-black">Intelligence</h1>
            <div className="w-24 h-24 xl:w-36 xl:h-32 border-2"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default contact;