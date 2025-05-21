import React from "react";

type BlogCardProps = {
  title: string;
  slug: string;
  img: string | null;
};

const BlogCard = ({ title, img, slug }: BlogCardProps) => {
  return (
    <div className="w-full xl:w-full md:w-[90%] bg-white rounded-lg p-5 gap-2 flex flex-col drop-shadow-[0_1px_5px_rgba(0,0,0,1)] hover:shadow-2xl hover:duration-300 hover:bg-orange-400 hover:drop-shadow-[0_2px_15px_rgba(243,156,18,1)]">

      {/* Image with fixed height and object-cover */}
      <div className="w-full h-[15rem] flex justify-center items-center overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={img ?? "/default-image.jpg"} // fallback image
          alt={title}
        />
      </div>

      <h3 className="font-bold text-lg md:text-xl mt-2 xl:line-clamp-3 ">{title}</h3>
      <p className="text-gray-600 text-[15px]">{slug}</p>
    </div>
  );
};

export default BlogCard;
