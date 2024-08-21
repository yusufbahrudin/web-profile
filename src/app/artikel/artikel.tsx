"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../Data/data";

type BlogItem = {
  id: number;
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
    <section className="relative py-8 md:py-16" id="artikel">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-60 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-2">
            Jelajahi Topik Terkini
          </h3>
        </div>

        <div className="flex justify-start sm:justify-center overflow-x-auto sm:overflow-x-hidden space-x-2 sm:space-x-4 pb-4 scrollbar-hide">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg rounded-xl border ${
                selectedCategory === category.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Desktop view */}
        <div
          ref={containerRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 pb-4"
        >
          {paginatedBlogs.map((item: BlogItem) => (
            <Link
              href="/"
              key={item.id}
              className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-blue-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={400}
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <h4 className="text-sm md:text-base lg:text-base font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 mt-2 md:mt-3 text-xs md:text-sm lg:text-[15px]">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view */}
        <div
          ref={containerRef}
          className="md:hidden flex flex-col gap-2 mt-4 sm:mt-6 md:mt-8 pb-4"
        >
          {paginatedBlogs.map((item: BlogItem) => (
            <Link
              href="/"
              key={item.id}
              className="relative flex items-start bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-blue-500"
            >
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={80}
                  width={80}
                  sizes="100vw"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className="p-2 flex flex-col flex-grow">
                <h4 className="text-xs font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 mt-1 text-xs">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredBlogs.length > visibleItems && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={handleLoadMore}
              className="px-2 py-1 sm:px-6 sm:py-2 text-xs sm:text-base bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
