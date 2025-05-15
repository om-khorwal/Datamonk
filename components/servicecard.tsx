import React from 'react';
import Button from './button';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
};

const ServiceCard = ({ icon, title, description, onClick }: ServiceCardProps) => {
  return (
    <div className=" w-full">
      <div className=" w-full h-full bg-white flex flex-col items-center justify-start rounded-2xl shadow-lg px-4 py-8 sm:px-6 sm:py-8 lg:px-6 lg:py-10 xl:px-10 xl:py-10">
        {/* Icon */}
        <div className="">
          <img className="w-16 h-16" src={icon} alt="icon" />
        </div>

        {/* Title */}
        <h2 className="text-center font-bold mt-6 text-lg sm:text-xl xl:text-2xl leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-center text-xs sm:text-sm xl:text-base my-2 px-2 leading-snug">
          {description}
        </p>

        {/* Button */}
        <Button
          className="bg-orange-200 border-2 text-sm px-3 py-1 font-semibold rounded-xl text-black active:scale-90 duration-300 hover:bg-orange-500 hover:scale-105 hover:text-white"
          label="Connect"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
