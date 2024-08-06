"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../Data/data";

type BlogItem = {
  image: string;
  title: string;
  desc: string;
};

export default function Webinar() {
  const [visibleItems, setVisibleItems] = useState<number>(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3;

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
    <section className="relative py-16" id="webinar">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl md:text-4xl font-semibold text-gray-700">
            Webinar & Seminar
          </h3>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8 pb-4"
        >
          {paginatedBlogs.map((item: BlogItem, index: number) => (
            <div
              key={index}
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
              <div className="p-6 flex flex-col pt-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 mt-3 text-[15px] pb-8">
                  {item.desc}
                </p>
                <Link
                  href={`/blog/${index}`}
                  className="mt-auto inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full text-center"
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
