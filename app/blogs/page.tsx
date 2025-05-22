'use client';
import React, { use } from "react";
import Header from "../../components/header";
import BlogCard from "../../components/blogcard";
import Footer from "../../components/footer";
import Button from "../../components/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../../components/blog";


const blog = () => {
const [bdata, setbdata] = useState<Blog[]>([]);
const [currentPage, setCurrentPage] = useState(1);
const [loading, setLoading] = useState(true);
const blogsPerPage = 6;

const indexOfLastBlog = currentPage * blogsPerPage;
const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
const currentBlogs = bdata.slice(indexOfFirstBlog, indexOfLastBlog);

const totalPages = Math.ceil(bdata.length / blogsPerPage);

const blogdata =()=>{
  axios.get("https://datamonk-backend.onrender.com/blog/api/${id}")
  .then((response) => {
    let bldata = response.data;
    bldata = bldata.sort((a: Blog, b: Blog) => new Date(b.created_at).getTime())
    setbdata(bldata);
    setLoading(false);
    console.log("Blog data fetched successfully:", bldata);
  })
  .catch((error) => {
    console.error("Error fetching blog data:", error);
    setLoading(false);
  });
};

const paginationRange = () => {
  const pages : (number | string)[] = [];
  
  pages.push(1);

  if (currentPage <= 3) {
    for (let i = 2; i <= Math.min(3, totalPages); i++) {
      pages.push(i);
    }

    if (totalPages > 4) {
      pages.push("...");
      pages.push(totalPages);
    } else if (totalPages === 4) {
      pages.push(4);
    }
  }

  else if (currentPage >= totalPages - 2) {
    pages.push("...");

    for (let i = totalPages - 2; i <= totalPages; i++) {
      if (i > 1 && !pages.includes(i)){
        pages.push(i);
      }
    }
  }

  else {
    pages.push("...");
    pages.push(currentPage);
    pages.push("...");
    pages.push(totalPages);
  }

  return pages;
};


useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [currentPage]);

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
          <Button className=" bg-orange-400 px-8 py-2 text-white font-black rounded-2xl" label="Filter" onClick={()=>{
            console.log("filter");
          }}/>
          <div className="flex justify-center items-center gap-5 ">
          <input className="bg-orange-200 px-2 py-1 rounded-2xl" placeholder="Search" type="search" name="" id="" />
          <Button className="border-2 px-2 py-1" label="Search" onClick={()=>{ console.log("jj")}}/>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <p className="text-xl font-semibold text-gray-500">Loading blogs...</p>
          </div>
        ) : (
          <>
            {/*Blog cards*/}
            <div className="flex mt-10 w-full justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 w-[75%] xl:w-[75%] md:w-[95%] mx-auto justify-items-center">
                {currentBlogs.map((blog: Blog, index) => (
                  <BlogCard
                    key={index}
                    title={blog.title}
                    slug={blog.slug}
                    img={blog.img}
                    id={blog.id}
                  />
                ))}
              </div>
            </div>

            {/*Pagination*/}
            <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
              <button
                onClick={()=> setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border disabled:opacity-50"
              >
                Prev
              </button>

              {paginationRange().map((item, index)=> {
                if (item === "...") {
                  return <span key={index} className="px-2">...</span>;
                }

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(Number(item))}
                    className={`px-3 py-1 rounded border ${
                      currentPage === item 
                      ? "bg-orange-400 text-white" 
                      : "text-gray-400 bg-white"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

              <button
                onClick={()=> setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

      </main>
      <Footer/>
    </div>
  );
};
export default blog;