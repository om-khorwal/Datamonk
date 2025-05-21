'use client';
import React from "react";
import Header from "../../components/header";
import BlogCard from "../../components/blogcard";
import Footer from "../../components/footer";
import Button from "../../components/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../../components/blog";


const blog = () => {
  const [bdata, setbdata] = useState<Blog[]>([]);
  const blogdata = () => {

    axios.get("https://datamonk-backend.onrender.com/blog/api/")
      .then((response) => {
        const bldata = response.data;
        setbdata(bldata);
        console.log("Blog data fetched successfully:", bldata);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        return [];
      }
      )
  }
  useEffect(() => {
    blogdata();
  }
    , []);


  return (
    <div className="">
      <Header />
      <main className="md:p-10 p-5">
        <div className="gap-1 flex flex-col">
          <h1 className="font-bold text-4xl md:text-5xl">Blogs</h1>
          <h3 className="font-medium text-xl md:text-3xl mb-3 ">Empowering Businesses with Data & AI</h3>
          <p className=" text-gray-600 md:text-xl text-xs">At Datamonk, we help businesses transform raw data into valuable insights, streamline cloud operations,
            and build scalable AI-powered solutions. With expertise in Data Lifecycle Management, Machine Learn
            ing, Cloud Optimization, and Kubernetes, we ensure your business stays ahead in the digital era.</p>
        </div>

        {/*filter or search section*/}
        <div className=" h-[3rem]  hidden justify-center items-center w-full mt-10 gap-20">
          <Button className=" bg-orange-400 px-8 py-2 text-white font-black rounded-2xl" label="Filter" onClick={() => {
            console.log("filter");
          }} />
          <div className="flex justify-center items-center gap-5 ">
            <input className="bg-orange-200 px-2 py-1 rounded-2xl" placeholder="Search" type="search" name="" id="" />
            <Button className="border-2 px-2 py-1" label="Search" onClick={() => { console.log("jj") }} />
          </div>
        </div>
        <div className="flex  mt-10 w-full  justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 w-[75%] xl:w-[75%] md:w-[95%] mx-auto justify-items-center">
            {
              bdata.map((blog: Blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  slug={blog.slug}
                  img={blog.img}
                />
              ))
            }

          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-5 ">
          <p></p>
          <p className="bg-orange-500 text-white px-2 rounded-[100%] py-1 flex justify-center items-center">1</p>
          <p className="bg-orange-500 text-white px-2 rounded-[100%] py-1 flex justify-center items-center">2</p>
          <p className="bg-orange-500 text-white px-2 rounded-[100%] py-1 flex justify-center items-center">3</p>

        </div>
      </main>
      <Footer />
    </div>
  );
};
export default blog;