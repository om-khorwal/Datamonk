import React from "react";
import axios from "axios";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { Blog } from "../../../components/blog";
import Share from "../../../components/share";


type PageProps = {
  params: Promise<{id: string; }>;
};

async function getBlogById(id: string): Promise<Blog | null> {
  try {
    const res = await axios.get(`https://datamonk-backend.onrender.com/blog/api/${id}`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch blog by ID:", err);
    return null;
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  // Await the params since it's now a Promise in Next.js 15
  const resolvedParams = await params;
  const blog = await getBlogById(resolvedParams.id);
  console.log("Blog data fetched successfully:", blog);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <Header />
      <main className="w-full my-10  p-8 rounded-lg shadow-md h-full">
        <header className="mb-6">
          <h1 className="text-5xl font-extrabold mb-2">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
            <span>By <strong>{blog.author}</strong></span>
            <span>•</span>
            <time dateTime={blog.created_at}>
              {new Date(blog.created_at).toLocaleDateString()}
            </time>
            <span>•</span>
            <time dateTime={blog.updated_at} className="italic">
              (Updated {new Date(blog.updated_at).toLocaleDateString()})
            </time>
            <span>•</span>
            <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-semibold">
              {blog.tags}
            </span>
            <span>{blog.slug}</span>
          </div>
        </header>

        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-[30rem] object-cover rounded-md mb-8"
        />

        <article className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line mb-8">
          {blog.content}
        </article>

        {blog.share_link && (
          <a
            href={blog.share_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-black "
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 hover:scale-125 duration-300 hover:rotate-360 font-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

          </a>
        )}
      </main>
      <Footer />
    </div>
  );
}