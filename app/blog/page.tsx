'use client';
import React from "react";
import Header from "../../components/header";
import BlogCard from "../../components/blogcard";
import Footer from "../../components/footer";
import Button from "../../components/button";
import axios from "axios";
import { useEffect, useState } from "react";


const blogData = [
  {
    title: "AI in Healthcare",
    description: "Exploring how AI is transforming patient care and diagnostics.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Future of Remote Work",
    description: "Why remote work is here to stay and how companies are adapting.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Top JavaScript Frameworks",
    description: "A comparison of popular JS frameworks in 2025.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "SpaceX Mars Mission",
    description: "An update on SpaceX’s plans to colonize Mars.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "5G Revolution",
    description: "How 5G is reshaping mobile connectivity and industries.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Blockchain Beyond Crypto",
    description: "Use cases of blockchain in real-world applications.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "UI/UX Design Trends",
    description: "Top UI/UX trends every designer should know.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Cybersecurity Tips",
    description: "Stay secure online with these practical tips.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Cloud Computing Benefits",
    description: "Why businesses are moving to the cloud.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Beginner's Guide to Python",
    description: "Start your Python journey with this beginner’s guide.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Digital Marketing 2025",
    description: "What’s changing in digital marketing this year?",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  },
  {
    title: "Eco-Friendly Tech",
    description: "Technologies contributing to a greener planet.",
    imageUrl: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg"
  }
];


const blog = () => {
  type Blog = {
  title: string;
  slug: string;
  imageUrl: string;
};

const [bdata, setbdata] = useState<Blog[]>([]);
const blogdata =()=>{

  axios.get("https://omkhorwal.pythonanywhere.com/blog/api/")
  .then((response) => {
    const data = response.data;
    setbdata(data);
    console.log("Blog data fetched successfully:", data);
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
          <Button className=" bg-orange-400 px-8 py-2 text-white font-black rounded-2xl" label="Filter" onClick={()=>{
            console.log("filter");
          }}/>
          <div className="flex justify-center items-center gap-5 ">
          <input className="bg-orange-200 px-2 py-1 rounded-2xl" placeholder="Search" type="search" name="" id="" />
          <Button className="border-2 px-2 py-1" label="Search" onClick={()=>{ console.log("jj")}}/>
          </div>
        </div>
        <div className="flex  mt-10 w-full  justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 w-[75%] xl:w-[75%] md:w-[95%] mx-auto justify-items-center">
            {
  bdata.map((blog, index) => (
    <BlogCard
      key={index}
      title={blog.title}
      slug={blog.slug}
      imageUrl={blog.imageUrl} // if this exists
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
      <Footer/>
    </div>
  );
};
export default blog;