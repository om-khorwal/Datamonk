// app/blogs/[id]/page.tsx
import React from "react";
import axios from "axios";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { Blog } from "../../../components/blog";

type blog = Blog;

async function getBlogById(id: string): Promise<blog | null> {
  try {
    const res = await axios.get(`https://datamonk-backend.onrender.com/blog/api/${id}`);
    console.log("Blog data fetched successfully:", res.data);
    return res.data;

  } catch (err) {
    console.error("Failed to fetch blog by ID:", err);
    return null;
  }
}

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <Header />
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.img} alt={blog.title} className="w-full h-96 object-cover rounded mb-6" />
        <p className="text-gray-700 text-lg whitespace-pre-line">{blog.content}</p>
        <p className="text-sm text-gray-400 mt-4">Published on {new Date(blog.created_at).toLocaleDateString()}</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
