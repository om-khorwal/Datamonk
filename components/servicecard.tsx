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
    <div className="relative grid grid-cols-1 md:w-full w-full ">
      <div className="relative lg:w-full h-full bg-white flex flex-col items-center justify-start rounded-2xl px-4 py-4 shadow-lg">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <img className="w-16 h-16" src={icon} alt="icon" />
        </div>

          <h2 className="text-center font-bold mt-6 text-lg ">{title}</h2>
          <p className="text-center text-xs my-2 px-1 ">{description}</p>

          <Button
            className="bg-orange-200 border-2 text-sm px-3 py-1 font-semibold rounded-xl text-black active:scale-90 duration-300 hover:bg-orange-500 hover:scale-105 hover:text-white"
            label="Connect"
            onClick={onClick}
        />
        </div>

      {/* Repeat the card structure for each item */}
    </div>

  );
};

export default ServiceCard;
