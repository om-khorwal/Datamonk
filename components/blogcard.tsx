import React from "react";

type BlogCardProps = {
  title: string;
  slug: string;
  imageUrl: string;
};
const BlogCard = ({ title, imageUrl, slug }: BlogCardProps) => {

  return (
    <>
      <div className=" w-full md:w-[90%] md:max-h-full bg-white rounded-lg p-5 gap-2 flex flex-col drop-shadow-[0_1px_5px_rgba(0,0,0,1)]">
        <div className="w-full h-fit justify-center items-center flex">
          <img className="rounded-lg" src={imageUrl} alt="img" />
        </div>
        <h3 className="font-bold text-lg md:text-xl">{title}</h3>
        <p className="text-gray-600 text-[15px]">{slug}</p>


      </div>
    </>
  )
}

export default BlogCard;