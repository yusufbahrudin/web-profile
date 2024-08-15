import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../Data/data";

type BlogItem = {
  image: string;
  title: string;
  desc: string;
  category: string;
};

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterCategories = [
    { name: "All,", value: "all" },
    { name: "Technology", value: "tech" },
    { name: "Health", value: "health" },
    { name: "Lifestyle", value: "lifestyle" },
  ];

  const filteredBlogs =
    selectedCategory === "all"
      ? blogData
      : blogData.filter((item: BlogItem) => item.category === selectedCategory);

  return (
    <section className="relative md:py-24 py-16" id="blog">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Baca 100+ Artikel Baru
          </h3>
          <Link
            href="/artikel"
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="flex justify-center overflow-x-auto space-x-4 pb-4">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-xl border ${
                selectedCategory === category.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[30px] mt-8">
          {filteredBlogs.slice(0, 4).map((item: BlogItem, index: number) => (
            <Link
              href={`/blog/${index}`}
              key={index}
              className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                sizes="100vw"
                style={{ height: "auto", width: "100%" }}
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 mt-3 text-[15px]">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
