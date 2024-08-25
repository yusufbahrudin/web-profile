"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { IconType } from "react-icons";
import {
  FaStarHalfAlt as Rating,
  FaHeadset as Support,
  FaUser as User,
  FaMobileAlt as Mobile,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ExpertiseItem = {
  title: string;
  Icon: IconType;
  description: string;
};

export const expertiseData: ExpertiseItem[] = [
  {
    title: "4.8/5",
    Icon: Rating,
    description: "Rata-rata pelanggan puas dengan layanan kami.",
  },
  {
    title: "Expert Support",
    Icon: Support,
    description:
      "Tim kami siap memberikan dukungan profesional kapan saja Anda membutuhkannya.",
  },
  {
    title: "Psikolog Berkualitas",
    Icon: User,
    description:
      "Nikmati dukungan dari psikolog berkualitas tinggi dengan rating kepuasan 4.8/5 dari pengguna kami.",
  },
  {
    title: "User-Friendly",
    Icon: Mobile,
    description:
      "Antarmuka yang dirancang untuk kemudahan penggunaan dan navigasi intuitif.",
  },
];

export default function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
  };

  return (
    <>
      <section
        className="relative md:py-24 py-16 px-4 md:px-16 lg:px-20"
        id="home"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-center">
            {/* Gambar */}
            <div className="order-2 md:order-1">
              <div className="relative w-full h-80 md:h-[50vh] lg:h-[55vh]">
                <Image
                  src="/images/hero/aboout.png"
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-8 text-center md:text-left">
                <h3 className="mb-6 md:text-2xl text-md md:leading-normal text-gray-700 leading-normal font-bold">
                  Jelajahi{" "}
                  <span className="text-blue-500">
                    Perjalanan Kesehatan Mental
                  </span>{" "}
                  Anda dengan Panduan dan Dukungan dari
                  <span className="text-blue-500"> DeepTalk</span>
                </h3>
              </div>
              {/* Slick Carousel untuk Mobile */}
              <div className="md:hidden">
                <Slider {...settings}>
                  {expertiseData.map((item: ExpertiseItem, index: number) => {
                    const Icon = item.Icon;
                    return (
                      <div
                        className="flex-shrink-0 w-60 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col"
                        key={index}
                        style={{ minHeight: "300px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="flex items-center justify-center h-10 w-10 bg-blue-500/10 group-hover:bg-blue-500 text-blue-500 group-hover:text-white rounded-full transition-colors duration-300 ease-in-out mr-3">
                            <Icon size={20} />
                          </div>
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                            {item.title}
                          </h4>
                        </div>
                        <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2 flex-grow">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>

              {/* Tampilan Desktop */}
              <div className="hidden md:flex flex-wrap gap-6">
                {expertiseData.map((item: ExpertiseItem, index: number) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      className="flex-shrink-0 w-60 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center h-12 w-12 bg-blue-500/10 group-hover:bg-blue-500 text-blue-500 group-hover:text-white rounded-full transition-colors duration-300 ease-in-out mr-4">
                          <Icon size={24} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
