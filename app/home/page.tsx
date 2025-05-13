import React from 'react';
import ServiceCard from '../../components/servicecard'; 
import Headers from '../../components/header'; // Adjust the import path as necessary


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
  return (
    <div className=" items-center justify-center w-full h-screen bg-gray-100"> 
      <section className="text-center">
     <Headers />
        {/* Graph Line (Mocked with image for now) */}
        <div className="mb-10">
          <img
            src="https://i.postimg.cc/6qHLngzd/Group-4-1.png"
            alt="graph"
            width="90%"
          />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold">
          Dive into <span className="text-orange-500">Data</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Transform raw data into actionable insights with AI-driven analytics,
          automation, and real-time intelligence.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600 transition">
            Explore
          </button>
          <button className="bg-white border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-md shadow hover:bg-orange-100 transition">
            Connect
          </button>
        </div>
        <div className="flex justify-center items-end mt-23">
          <img
            src="https://i.postimg.cc/prx1S6jz/Group-5-1.png"
            alt="graph"
            
          />
        </div>
      </section>
  <section className="flex flex-col items-center pt-10 w-full h-screen mt-10 gap-10">
      <h2 className="font-black text-4xl mb-10">We Offer</h2>
      <div className="w-full flex  items-center justify-center gap-10">
        {cardData.slice(0,3 ).map((card, index) => (
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
        </section>  





    
      </div>
  );
};

export default Homepage;
