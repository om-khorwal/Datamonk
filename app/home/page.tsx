'use client';
import React from 'react';
import ServiceCard from '../../components/servicecard';
import Headers from '../../components/header';
import Button from '../../components/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Footer from '../../components/footer';
const cards = [
  {
    id: 1,
    image: "https://i.postimg.cc/3x0Yj1gM/Group-7.png",
    title: "Card One"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/some-other-img2.png",
    title: "Card Two"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/some-other-img3.png",
    title: "Card Three"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/some-other-img4.png",
    title: "Card Four"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/some-other-img4.png",
    title: "Card Five"
  }
];

const cardData = [
  {
    icon: 'https://img.icons8.com/?size=100&id=92971&format=png&color=000000',
    title: 'Kubernetes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam laborum dolore saepe sit ex sequi esse. Explicabo minus nostrum rerum saepe, vero ratione voluptatem fugit possimus nam, labore ducimus.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=92971&format=png&color=000000',
    title: 'Kubernetes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam laborum dolore saepe sit ex sequi esse. Explicabo minus nostrum rerum saepe, vero ratione voluptatem fugit possimus nam, labore ducimus.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=92971&format=png&color=000000',
    title: 'AWS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam laborum dolore saepe sit ex sequi esse. Explicabo minus nostrum rerum saepe, vero ratione voluptatem fugit possimus nam, labore ducimus.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=92971&format=png&color=000000',
    title: 'AWS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam laborum dolore saepe sit ex sequi esse. Explicabo minus nostrum rerum saepe, vero ratione voluptatem fugit possimus nam, labore ducimus.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=92971&format=png&color=000000',
    title: 'Kubernetes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam laborum dolore saepe sit ex sequi esse. Explicabo minus nostrum rerum saepe, vero ratione voluptatem fugit possimus nam, labore ducimus.',
  },
  {
    icon: 'https://img.icons8.com/?size=100&id=92971&format=png&color=000000',
    title: 'AWS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam laborum dolore saepe sit ex sequi esse. Explicabo minus nostrum rerum saepe, vero ratione voluptatem fugit possimus nam, labore ducimus.',
  },

];

const Homepage = () => {

  const Router = useRouter();

  return (
    <div className=" md:w-full w-full">
      <section className="md:w-full  md:h-screen bg-white flex flex-col justify-between px-4 md:px-8">
        <Headers />

        {/* Graph Line */}
        <div className="m-5 md:w-full md:flex hidden md:h-fit h-20  justify-center ">
          <img
            src="https://i.postimg.cc/6qHLngzd/Group-4-1.png"
            alt="graph"
            className=" md:w-full md:flex hidden  object-contain"
          />
        </div>

        {/* Title & Text */}
        <div className="flex flex-col items-center justify-center text-center px-2 md:px-0 ">
          <h1 className="text-5xl  md:text-7xl font-bold drop-shadow-[0_2px_1px_rgb(0,0,0)] leading-tight md:m-0 m-10">
            Dive into <span className="text-orange-500">Data</span>
          </h1>
          <p className="mt-4 text-xl  md:text-xl text-gray-700 max-w-2xl md:my-0 my-5">
            Transform raw data into actionable insights with AI-driven analytics,
            automation, and real-time intelligence.
          </p>
        </div>

        {/* Buttons */}
        <div className="md:my-5 my-5 flex flex-wrap justify-center gap-6 md:w-full ">
          <Button
            label="Explore"
            className="bg-orange-500 text-white px-2 py-0 md:px-6 md:py-2 rounded-md shadow hover:bg-orange-600 transition active:scale-90"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <Button
            onClick={() => Router.push('/contact')}
            label="Connect"
            className="bg-white border-2 border-orange-500 text-orange-500 px-2 py-0 md:px-6 md:py-2 rounded-md shadow hover:bg-orange-500 hover:text-white transition active:scale-90"
          />
        </div>
          
        {/* Bottom Graph */}
        <div className="flex justify-center mt-5 items-end md:mt-1 md:m-0 ">
          <img
            src="https://i.postimg.cc/prx1S6jz/Group-5-1.png"
            alt="graph"
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </section>

      <section
        id="features"
        className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-10 sm:px-6 md:px-12 lg:px-20 gap-10 bg-white"
      >
        <div className="flex flex-col items-center rounded-2xl bg-gray-100 w-full max-w-7xl p-6 sm:p-10 gap-10 shadow-gray-700 shadow-[0_0px_15px_rgb(0,0,0)]">
          <h2 className="font-black text-3xl sm:text-4xl text-center">We Offer</h2>

          {/* First Row */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardData.slice(0, 3).map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onClick={() => console.log(`Clicked on ${card.title}`)}
                className="p-4" // Removed width classes here, controlled by grid
              />
            ))}
          </div>

          
          {/* Second Row */}
          <div className="w-full grid ">
            {cardData.slice(3).map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onClick={() => console.log(`Clicked on ${card.title}`)}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" // Passing className here
              />
            ))}
          </div>
        </div>
      </section>

      <section className='h-fit bg-white flex  justify-center w-full mt-20'>
        <div className='w-full sm:h-23 justify-center items-center overflow-hidden my-30 bg-orange-400'>
          <div className="flex animate-scroll justify-center items-center text-white whitespace-nowrap  gap-60">
            <h1 className='text-6xl font-bold   px-10 py-4 italic'>Kubernetes</h1>
            <h1 className='text-6xl font-bold px-10   py-4 italic'>AWS</h1>
            <h1 className='text-6xl font-bold  px-10 py-4 italic'>Docker</h1>
            <h1 className='text-6xl font-bold  px-10 py-4 italic'>DevOps</h1>
            <h1 className='text-6xl font-bold px-10 py-4 italic'>AI</h1>
            <h1 className='text-6xl font-bold px-10 py-4 italic'>Kubernetes</h1>
            <h1 className='text-6xl font-bold px-10 py-4 italic'>AWS</h1>
            <h1 className='text-6xl font-bold  px-10 py-4 italic'>Docker</h1>
            <h1 className='text-6xl font-bold  px-10 py-4 italic'>DevOps</h1>
            <h1 className='text-6xl font-bold px-10 py-4 italic'>AI</h1>
          </div>
        </div>
      </section>
      <section className='  w-full h-screen  flex flex-col items-center   justify-center '>
        <div className='flex w-4/5  h-1/2'>
          <div className='w-full  flex justify-center items-center '>
            <img src="https://i.postimg.cc/cHYg4k86/TEAM-1.png" alt="img" />
          </div>
          < div className='w-full  flex  flex-col justify-center '>
            <h1 className='text-2xl font-black text-orange-500'>About Us</h1>
            <h1 className=' text-black font-bold  text-4xl'>A team of innovators, data enthusiasts, and problem-solvers.</h1>
            <p className='text-xl'>We are a passionate group of data scientists, engineers, and strategists dedicated to transforming raw data into powerful insights.
              At DataMonk, we believe in innovation, collaboration, and driving businesses toward success with AI-powered analytics.
              ‍Driven by Data. Inspired by Innovation. Focused on You.</p>
          </div>
        </div>
        <hr />
        <div className='w-full h-1/2 flex justify-start items-center'>
          <div className='w-1/4 flex justify-center items-center'>
            <h1 className='font-bold  text-3xl'>BLogs</h1>
          </div>
          <div className="w-9/12 overflow-x-auto flex ">
            <div className="flex w-max gap-6 px-2 py-2">
              <div className="flex gap-4 overflow-x-auto w-fit p-4">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="min-w-[250px] bg-white shadow-md rounded-md flex flex-col items-center p-4"
                  >
                    <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
                    <p className="mt-2 font-semibold">{card.title}</p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                      Read more
                    </button>
                  </div>
                ))}
              </div>
              <div className="min-w-[240px]  rounded-md p-4 flex justify-center items-center">
                <button className="font-bold  border-2  p-2 rounded-2xl text-md text-blue-600 hover:underline">
                  View More
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className='w-full h-fit flex flex-col items-center '>
        <div className='flex w-full  h-2/4 justify-center items-center p-20 bg-gray-100'>
          <div className='w-full flex justify-center items-center '>
            <img className='max-w-xs' src="https://i.postimg.cc/7LFcrN44/group-of-four-people-discussing-project.png" alt="img" />
          </div>
          <div className=' w-full  m-5 bg-white rounded-2xl  p-5 justify-center items-center flex flex-col shadow-[0_3px_5px_rgb(0,0,0)]'>
            <h1 className=' text-black font-bold  flex mb-5  text-4xl'>Jobs we have done so far:</h1>
            <ul className='text-xl list-disc list-inside'>
              <li>MariaDB to Postgresql</li>
              <li>Metric Dashboard Designs</li>
              <li>EMR to EKS migration, Spark Job</li>
              <li>LLM & RAG Powered Chatbots</li>
              <li>Website designing and recreation </li>
            </ul>

          </div>
          <div className='w-full flex justify-center items-center '>
            <img className='max-w-xs' src="https://i.postimg.cc/0ygJmM9Q/Male-engineer-constructing-metal-robots.png" alt="img" />
          </div>

        </div>
      </section>
      
      <Footer/>


    </div>
  );
};

export default Homepage;
