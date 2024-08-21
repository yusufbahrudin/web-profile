// pages/webinar/index.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../Data/data";

type BlogItem = {
  image: string;
  title: string;
  desc: string;
};

export default function Webinar() {
  const [visibleItems, setVisibleItems] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 2;

  const filteredBlogs = blogData;
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
    <section className="relative py-8 md:py-16" id="webinar">
      <div className="container px-4 sm:px-6 lg:px-60 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-700">
            Webinar & Seminar
          </h3>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-2 gap-[30px] mt-8 pb-4"
        >
          {paginatedBlogs.map((item: BlogItem, index: number) => (
            <div
              key={index}
              className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-md sm:shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                height={200}
                width={200}
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
              <div className="p-2 sm:p-4 flex flex-col pt-2 sm:pt-4">
                <h4 className="text-xs sm:text-lg md:text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base pb-2 sm:pb-4">
                  {item.desc}
                </p>
                <Link
                  href={`/blog/${index}`}
                  className="mt-auto inline-block px-1 sm:px-4 py-1 sm:py-3 bg-blue-500 text-white rounded-lg text-xs sm:text-sm hover:bg-blue-600 transition-colors duration-300 w-full text-center"
                >
                  Ikuti Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length > visibleItems && (
          <div className="flex justify-center mt-8">
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
