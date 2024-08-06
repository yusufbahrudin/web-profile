"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../Data/data"; // Pastikan path ke data sudah benar

type BlogItem = {
  image: string;
  title: string;
  desc: string;
};

export default function Webinar() {
  const filteredBlogs: BlogItem[] = blogData;

  return (
    <section className="relative md:py-24 py-16" id="home">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 pb-6">
            Webinar & Seminar
          </h3>
          <Link
            href="/webinar"
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
          {filteredBlogs.slice(0, 3).map((item: BlogItem, index: number) => (
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
      </div>
    </section>
  );
}
