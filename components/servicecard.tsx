// components/ServiceCard.jsx
import React from 'react';
import Button from './button'; // update the path if Button is elsewhere

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
};



const ServiceCard = ({ icon, title, description, onClick }:ServiceCardProps) => {
  return (
    <div className="relative w-[25%] bg-white flex justify-center items-center flex-col rounded-2xl p-10 shadow-lg">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <img className="w-20 h-20" src={icon} alt="icon" />
      </div>
      <h2 className="text-center font-bold mt-10 text-2xl">{title}</h2>
      <p className="text-center my-5">{description}</p>
      <Button
        className="bg-orange-200 border-2 text-[1rem] px-3 w-fit py-1 font-bold rounded-xl text-black active:scale-90 duration-300 hover:bg-orange-500 hover:scale-105 hover:text-white"
        label="Connect"
        onClick={onClick}
      />
    </div>
  );
};

export default ServiceCard;
