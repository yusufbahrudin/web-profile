// pages/artikel/index.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../Data/data";

type BlogItem = {
  id: number; // Pastikan ID ada di sini
  image: string;
  title: string;
  desc: string;
  category: string;
};

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleItems, setVisibleItems] = useState<number>(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 4;

  const filterCategories = [
    { name: "Topik Terkini", value: "all" },
    { name: "Technology", value: "tech" },
    { name: "Health", value: "health" },
    { name: "Lifestyle", value: "lifestyle" },
  ];

  const filteredBlogs =
    selectedCategory === "all"
      ? blogData
      : blogData.filter((item: BlogItem) => item.category === selectedCategory);

  const paginatedBlogs = filteredBlogs.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleItems]);

  return (
    <section className="relative py-16" id="artikel">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Jelajahi Topik Terkini
          </h3>
        </div>

        <div className="flex justify-start overflow-x-auto space-x-4 pb-12">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setSelectedCategory(category.value);
                setVisibleItems(4);
              }}
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

        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[30px] mt-8 pb-4"
        >
          {paginatedBlogs.map((item: BlogItem) => (
            <Link
              href="/"
              key={item.id}
              className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={0}
                width={0}
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

        {filteredBlogs.length > visibleItems && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
