// // pages/artikel/blog/[id].tsx
// "use client";
// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { blogData } from "../../../Data/data";

// export default function Article() {
//   const router = useRouter();
//   const { id } = router.query;
//   const articleId = id ? parseInt(id as string, 10) : -1;

//   // Menyaring artikel berdasarkan ID
//   const article = blogData.find((item: Blog) => item.id === articleId);

//   if (!article) {
//     return <p>Artikel tidak ditemukan.</p>;
//   }

//   return (
//     <section className="py-16">
//       <div className="container">
//         <div className="flex flex-col items-center">
//           <Image
//             src={article.image}
//             alt={article.title}
//             height={500}
//             width={800}
//             className="rounded-lg"
//           />
//           <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-800 dark:text-white">
//             {article.title}
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             {article.desc}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
