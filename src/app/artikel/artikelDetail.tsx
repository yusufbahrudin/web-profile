// /artikel/artikelDetail.tsx
"use client";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { blogData } from "../Data/data";

const ArtikelDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = blogData.find((item) => item.id === Number(id));

  if (!article) return <p>Loading...</p>;

  return (
    <div className="container px-4 sm:px-6 md:px-8 lg:px-60 mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <Image
          src={article.image}
          alt={article.title}
          height={600}
          width={1200}
          sizes="100vw"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
        <h1 className="text-3xl font-bold mt-6 mb-4">{article.title}</h1>
        <p className="text-gray-700 mb-6">{article.desc}</p>
        <div className="text-gray-500">
          {/* You can add more content here, like the full article text */}
        </div>
        <button
          onClick={() => router.back()}
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Back to Articles
        </button>
      </div>
    </div>
  );
};

export default ArtikelDetail;
