'use client';
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const about = () => {
  return (
    <div className="h-screen w-full justify-between flex flex-col ">
      <Header />
      <div className="gap-1 flex flex-col justify-between md:p-10 p-5">
        <h1 className="font-bold text-4xl md:text-5xl">About</h1>
        <h3 className="font-medium text-xl md:text-3xl mb-3 ">Empowering Businesses with Data & AI</h3>
        <p className=" text-gray-600 md:text-xl text-xs">At Datamonk, we help businesses transform raw data into valuable insights, streamline cloud operations,
          and build scalable AI-powered solutions. With expertise in Data Lifecycle Management, Machine Learn
          ing, Cloud Optimization, and Kubernetes, we ensure your business stays ahead in the digital era.</p>
      </div>
      <main className="xl:p-10 p-5 flex flex-col justify-center items-center">
        <div className=" xl:flex w-full justify-center items-center   my-2   xl:my-5 ">
          <div className=" xl:w-full py-4 flex justify-center items-center  ">
            <img className="xl:w-2/3" src="https://i.postimg.cc/RVm2CcqT/Group-7.png" alt="img" />
          </div>
          <div className=" xl:w-full  flex justify-center items-center  ">
            <div className=" xl:w-2/3 flex flex-col justify-center  items-start text-start">

              <h1 className="text-xl mb-5"><span className="text-orange-500 font-black ">Datamonk</span> is a team of passionate data scientists and engineers dedicated to unlocking the power of data for businesses of all sizes. </h1>
              <h3 className="text-xl">Our comprehensive services include </h3>
              <ul className="list-disc list-inside flex flex-col justify-start items-start w-full text-lg">
                <li>Data analysis</li>
                <li>Data visualization</li>
                <li>Machine learning</li>
                <li> Data engineering </li>
                <li>Database management and migration </li>
                <li>Large-scale data processing and ETL jobs</li>
                <li>Machine learning model deployment</li>
                <li>Ruby on Rails.</li>
              </ul>
            </div>

          </div>
        </div>
      
        <div className=" xl:flex xl:flex-row-reverse w-full justify-center items-center   my-2   xl:my-5 ">
          <div className=" xl:w-full  flex justify-center  items-center  ">
            <img className="xl:w-2/3" src="https://i.postimg.cc/25qBqL3H/undraw-engineering-team-13ax-1.png" alt="img" />
          </div>
          <div className=" xl:w-full  flex justify-center items-center  ">
            <div className=" xl:w-2/3 flex flex-col justify-center  items-start text-start">

              <h1 className="text-xl mb-5">Whether you're a small business aiming to make data-driven decisions or a large organization fostering a data-centric culture, Data Monk is here to assist. </h1>
             
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
export default about;

  // <div className="bg-violet-400 xl:flex w-full justify-center  items-center my-2  xl: ">
  //         <div className="flex justify-center items-center p-10 ">
  //           <div className=" bg-red-500 w-full flex flex-col justify-center items-start text-start">
  //             <h1 className="text-xl"></h1>
  //           </div>
  //         </div>
  //           <div className="bg-blue-500 w-full">
  //             <img src="" alt="" />
  //           </div>
  //         </div>