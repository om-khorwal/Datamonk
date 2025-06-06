import React from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
type BlogCardProps = {
  title: string;
  slug: string;
  img: string | null;
  id: number;
};

const BlogCard = ({ title, img, slug,id }: BlogCardProps) => {
  const router = useRouter();
  return (
    <div className="w-full xl:w-full md:w-[90%]  bg-white rounded-lg p-5 gap-2 flex flex-col drop-shadow-[0_1px_5px_rgba(0,0,0,1)] hover:shadow-2xl hover:duration-300 not-hover:duration-1000 hover:bg-orange-400 hover:drop-shadow-[0_2px_15px_rgba(243,156,18,1)]">

      {/* Image with fixed height and object-cover */}
      <div className="w-full h-[15rem] flex justify-center items-center overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={img ?? "/default-image.jpg"} // fallback image
          alt={title}
        />
      </div>

      <h3 className="font-bold text-lg md:text-xl mt-2 xl:line-clamp-3 ">{title}</h3>
      <p className="text-gray-600 text-[15px] line-clamp-2 ">{slug}</p>
      <div className="xl:w-full flex justify-center items-center mt-2">
        <Button
          className="bg-white w-1/2 px-2 py-2 rounded-lg  text-black hover:font-bold duration-300 active:scale-90"
          label="Read More"
          onClick={() =>     router.push(`/blogs/${id}`)}
        />
      </div>
    </div>
  );
};

export default BlogCard;
