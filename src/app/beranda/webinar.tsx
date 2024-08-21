"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../Data/data";

type BlogItem = {
  image: string;
  title: string;
  desc: string;
};

export default function Webinar() {
  const filteredBlogs: BlogItem[] = blogData;

  return (
    <section className="relative md:py-24 py-16" id="home">
      <div className="container px-4 md:px-8 lg:px-60 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-md md:text-2xl font-semibold text-gray-700">
            Webinar & Seminar
          </h3>
          <Link
            href="/webinar"
            className="text-blue-500 hover:text-blue-700 text-xs md:text-lg transition-colors duration-300"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="hidden md:flex md:grid md:grid-cols-2 md:gap-[30px] md:mt-8">
          {filteredBlogs.slice(0, 2).map((item: BlogItem, index: number) => (
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

        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-6">
            {filteredBlogs.slice(0, 2).map((item: BlogItem, index: number) => (
              <div
                key={index}
                className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500"
                style={{
                  minWidth: "300px",
                }}
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
      </div>
    </section>
  );
}
