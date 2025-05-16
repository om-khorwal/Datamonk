'use client';
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const carrer = () => {
  return (
     <div className="lg:h-screen xl:h-screen w-full justify-between flex flex-col ">
      <Header />
        <div className="gap-1 flex flex-col justify-between md:p-10 p-5">
          <h1 className="font-bold text-4xl md:text-5xl">Carrer</h1>
          <h3 className="font-medium text-xl md:text-3xl mb-3 ">Empowering Businesses with Data & AI</h3>
          <p className=" text-gray-600 md:text-xl text-xs">At Datamonk, we help businesses transform raw data into valuable insights, streamline cloud operations,
            and build scalable AI-powered solutions. With expertise in Data Lifecycle Management, Machine Learn
            ing, Cloud Optimization, and Kubernetes, we ensure your business stays ahead in the digital era.</p>
        </div>
      <main className="md:p-10 p-5">
        <div className="flex w-full justify-center items-center text-center h-80 my-2   xl:my-5 ">
          <h1 className="font-bold xl:text-5xl text-2xl text-gray-400">Currently there is no opening</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default carrer;