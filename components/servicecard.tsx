// components/ServiceCard.jsx
import React from 'react';
import Button from './button'; // update the path if Button is elsewhere

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
  className ? : string
};



const ServiceCard = ({ icon, title, description, onClick }:ServiceCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
      <div className="relative w-full h-[90%] bg-white flex justify-center items-center flex-col rounded-2xl p-10 shadow-lg">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <img className="w-20 h-20" src={icon} alt="icon" />
        </div>
        <h2 className="text-center font-bold mt-10 text-xl">{title}</h2>
        <p className="text-center text-sm my-5">{description}</p>
        <Button
          className="bg-orange-200 border-2 text-[1rem] px-3 w-fit py-1 font-bold rounded-xl text-black active:scale-90 duration-300 hover:bg-orange-500 hover:scale-105 hover:text-white"
          label="Connect"
          onClick={onClick}
        />
      </div>
      {/* Repeat the card structure for each item */}
    </div>

  );
};

export default ServiceCard;
