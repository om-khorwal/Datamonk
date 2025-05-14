'use client';
import React from 'react';
import ServiceCard from '../../components/servicecard';
import Headers from '../../components/header';
import Button from '../../components/button';
import { useRouter } from 'next/navigation';

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
    <div className=" items-center justify-center flex flex-col  w-full  bg-white ">
      <section className=" w-full bg-white ">
        <Headers />
        {/* Graph Line (Mocked with image for now) */}
        <div className="mb-10">
          <img
            src="https://i.postimg.cc/6qHLngzd/Group-4-1.png"
            alt="graph"
            width="90%"
          />
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className="text-5xl md:text-8xl font-bold drop-shadow-[0_2px_1px_rgb(0,0,0)]">
            Dive into <span className="text-orange-500">Data</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Transform raw data into actionable insights with AI-driven analytics,
            automation, and real-time intelligence.
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button label='Explore' className="bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600 transition active:scale-90" onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }} />
          <Button onClick={() => Router.push('/contact')} label='Connect' className="bg-white border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-md shadow hover:bg-orange-500 hover:text-white transition active:scale-90" />

        </div>
        <div className="flex justify-center items-end mt-23">
          <img
            src="https://i.postimg.cc/prx1S6jz/Group-5-1.png"
            alt="graph"

          />
        </div>
      </section>
      <section id='features' className="flex flex-col items-center justify-center w-full h-screen gap-10 ">
        <div className='flex flex-col items-center rounded-2xl bg-gray-100 p-10 w-[80%] h-fit pb-10  gap-10 shadow-gray-700 shadow-[0_0px_15px_rgb(0,0,0)]'>

          <h2 className="font-black text-4xl ">We Offer</h2>
          <div className="w-full flex  items-center justify-center gap-10">
            {cardData.slice(0, 3).map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onClick={() => console.log(`Clicked on ${card.title}`)} // replace with actual function
              />
            ))}
          </div>
          <div className="w-full flex  items-center justify-center gap-10">
            {cardData.slice(3).map((card, index) => (
              <ServiceCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onClick={() => console.log(`Clicked on ${card.title}`)} // replace with actual function
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
      <section className='  w-full h-screen flex flex-col items-center   justify-center '>
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


              {/* View More */}
              <div className="min-w-[240px]  rounded-md p-4 flex justify-center items-center">
                <button className="font-bold  border-2  p-2 rounded-2xl text-md text-blue-600 hover:underline">
                  View More
                </button>
              </div>
            </div>
          </div>

        </div>

      </section>





    </div>
  );
};

export default Homepage;
