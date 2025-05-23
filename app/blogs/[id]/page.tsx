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


// app/blogs/[id]/page.tsx
import axios from "axios";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { Blog } from "../../../components/blog"; // Make sure this interface is correct and exported

// Function to fetch blog by ID from API
async function getBlogById(id: string): Promise<Blog | null> {
  try {
    const res = await axios.get(`https://datamonk-backend.onrender.com/blog/api/${id}`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch blog by ID:", err);
    return null;
  }
}

// Server component that receives URL params
export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
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
      </main>
      <Footer />
    </div>
  );
}
