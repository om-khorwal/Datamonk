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
    <div className=" md:w-full w-full overflow-x-hidden">

      <section className="w-full min-h-screen  bg-white flex flex-col justify-between items-center px-4 md:px-0  overflow-hidden">
        {/* Header */}
        <Headers />

        {/* Top Graph Image */}
        <div className="lg:flex xl:flex hidden justify-center w-full lg:max-h-[100px] xl:max-h-fit overflow-hidden">
          <img
            src="https://i.postimg.cc/6qHLngzd/Group-4-1.png"
            alt="graph"
            className="h-full w-full  md:w-[80%] xl:w-[75%] lg:w-[70%]"
          />
        </div>

        {/* Title & Description */}
        <div className="flex flex-col items-center justify-center text-center px-2 xl:py-0 xl:my-0 md:px-0 xl:w-full ">
          <h1 className="text-7xl xl:text-[7rem] sm:text-6xl md:text-7xl lg:text-7xl font-bold drop-shadow-[0_2px_1px_rgb(0,0,0)] leading-tight">
            Dive into <span className="text-orange-500">Data</span>
          </h1>
          <p className="mt-2 sm:text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-2xl text-gray-700 xl:w-[55%] px-2">
            Transform raw data into actionable insights with AI-driven analytics, automation,
            and real-time intelligence.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-3 w-full mb-2 mt-2">
          <Button
            label="Explore"
            className="bg-orange-500 text-white xl:px-6 xl:py-2 xl:text-xl px-3 py-2 md:px-2 md:py-1 rounded-md shadow hover:bg-orange-600 transition active:scale-90"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <Button
            onClick={() => Router.push('/contact')}
            label="Connect"
            className="bg-white border-2 border-orange-500 xl:px-6 xl:py-2 xl:text-xl text-orange-500 px-3 py-0 md:px-2 md:py-0 rounded-md shadow hover:bg-orange-500 hover:text-white transition active:scale-90"
          />
        </div>
          
        {/* Bottom Graph Image & line */}
        <div>
          <div className="flex justify-center w-full overflow-hidden">
            <img
              src="https://i.postimg.cc/prx1S6jz/Group-5-1.png"
              alt="graph"
              className="h-full w-[100%] md:w-[80%] lg:w-[60%] "
              />
          </div>
          <hr className='w-full max-w-5xl mx-auto border-gray-300 '/>
        </div>
      </section>

      <section id="features" className=" flex flex-col items-center min-h-screen justify-center w-full py-10 sm:py-2 px-4 sm:px-6 md:px-8 lg:px-8 gap-6 bg-white"
      >
        <div className="flex flex-col items-center justify-around rounded-2xl bg-gray-100 w-full md:w-[90%] max-w-7xl p-4 sm:p-6 lg:p-8 gap-8 shadow-gray-700 shadow-[0_0px_15px_rgb(0,0,0)]">
          <h2 className="font-black text-2xl sm:text-3xl text-center mt-4">We Offer</h2>

          {/* Cards Container */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-2 sm:px-4 md:px-6 pb-8">
            {/* Render all cards uniformly */}
            {cardData.map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onClick={() => console.log(`Clicked on ${card.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='h-fit bg-white flex  justify-center w-full py-10 xl:py-5'>
        <div className='w-full sm:h-23 justify-center items-center overflow-hidden my-4 bg-orange-400'>
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

      <section className='w-full flex flex-col items-center justify-center gap-10 py-10 px-4 '>
      <div className='flex flex-col lg:flex-row w-full max-w-6xl gap-6 items-center py-10 xl:py-5 '>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img src="https://i.postimg.cc/cHYg4k86/TEAM-1.png" alt="img" className='w-full max-w-md object-contain'/>
          </div>
          < div className='w-full lg:w-1/2 flex flex-col gap-4 justify-center items-start'>
            <h1 className='text-xl lg:text-2xl font-bold text-orange-500'>About Us</h1>
            <h1 className=' text-black font-bold  text-3xl lg:text-4xl'>A team of innovators, data enthusiasts, and problem-solvers.</h1>
            <p className='text-base lg:text-lg text-gray-700'>We are a passionate group of data scientists, engineers, and strategists dedicated to transforming raw data into powerful insights.
              At DataMonk, we believe in innovation, collaboration, and driving businesses toward success with AI-powered analytics.
              ‍Driven by Data. Inspired by Innovation. Focused on You.</p>
          </div>
        </div>  

        <hr className='w-full max-w-6xl border-gray-300'/>
        
        <div className='w-full xl:h-1/2 xl:flex xl:justify-start xl:items-center py-10 xl:py-5'>
          <div className='xl:w-1/4 flex justify-center items-center'>
            <h1 className='font-bold  text-3xl'>BLogs</h1>
          </div>
          <div className="xl:w-9/12 w-full overflow-x-auto flex ">
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

      <section className='w-full h-fit flex flex-col items-center py-10 xl:py-5'>
        <div className='xl:flex  xl:w-full  h-2/4 justify-center items-center xl:p-20 bg-gray-100'>
          <div className='w-full flex justify-center items-center py-5 xl:py-2'>
            <img className='max-w-xs' src="https://i.postimg.cc/7LFcrN44/group-of-four-people-discussing-project.png" alt="img" />
          </div>
          <div className=' w-full my-10 xl:m-5 bg-white rounded-lg  py-5 px-5  xl:py-5 xl: justify-center items-center flex flex-col shadow-[0_3px_5px_rgb(0,0,0)]'>
            <h1 className=' text-black font-bold  text-2xl'>Jobs we have done so far:</h1>
            <div className='flex justify-center items-center'>
            <ul className='text-[1rem] list-disc list-inside ml-2  '>
              <li>MariaDB to Postgresql</li>
              <li>Metric Dashboard Designs</li>
              <li>EMR to EKS migration, Spark Job</li>
              <li>LLM & RAG Powered Chatbots</li>
              <li>Website designing and recreation </li>
            </ul>
            </div>
          </div>
          <div className='w-full flex justify-center items-center py-5 xl:py-2 '>
            <img className='max-w-xs' src="https://i.postimg.cc/0ygJmM9Q/Male-engineer-constructing-metal-robots.png" alt="img" />
          </div>

        </div>
      </section>
      
      <Footer/>


    </div>
  );
};

export default Homepage;
