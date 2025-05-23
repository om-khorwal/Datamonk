// import React from "react";
// import axios from "axios";
// import Header from "../../../components/header";
// import Footer from "../../../components/footer";
// import { Blog } from "../../../components/blog";

// type blog = Blog;

// async function getBlogById(id: string): Promise<blog | null> {
//   try {
//     const res = await axios.get(`http://127.0.0.1:8000/blog/api/${id}`);
//     return res.data;
//   } catch (err) {
//     console.error("Failed to fetch blog by ID:", err);
//     return null;
//   }
// }

// // Note how we type `params` inline here without extra wrapping
// export default async function BlogDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const blog = await getBlogById(params.id);

//   if (!blog) {
//     return <div>Blog not found.</div>;
//   }

//   return (
//     <div>
//       <Header />
//       <main className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
//         <header className="mb-6">
//           <h1 className="text-5xl font-extrabold mb-2">{blog.title}</h1>
//           <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
//             <span>
//               By <strong>{blog.author}</strong>
//             </span>
//             <span>•</span>
//             <time dateTime={blog.created_at}>
//               {new Date(blog.created_at).toLocaleDateString()}
//             </time>
//             <span>•</span>
//             <time dateTime={blog.updated_at} className="italic">
//               (Updated {new Date(blog.updated_at).toLocaleDateString()})
//             </time>
//             <span>•</span>
//             <span className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-semibold">
//               {blog.tags}
//             </span>
//           </div>
//         </header>

//         <img
//           src={blog.img}
//           alt={blog.title}
//           className="w-full h-96 object-cover rounded-md mb-8"
//         />

//         <article className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line mb-8">
//           {blog.content}
//         </article>

//         {blog.share_link && (
//           <a
//             href={blog.share_link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 underline"
//           >
//             Share this post
//           </a>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: string;
  tags: string;
  share_link: string | null;
  img: string;
};

interface Props {
  id: string;
}

const BlogDetailPage: React.FC<Props> = ({ id }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await axios.get(`http://127.0.0.1:8000/blog/api/${id}`);
        setBlog(res.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <header className="mb-6">
        <h1 className="text-5xl font-extrabold mb-2">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          <span>
            By <strong>{blog.author}</strong>
          </span>
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
        </div>
      </header>

      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-md mb-8"
      />

      <article className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line mb-8">
        {blog.content}
      </article>

      {blog.share_link && (
        <a
          href={blog.share_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Share this post
        </a>
      )}
    </div>
  );
};

export default BlogDetailPage;
