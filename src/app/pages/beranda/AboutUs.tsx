"use client";
import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  FaStarHalfAlt as Rating,
  FaHeadset as Support,
  FaUser as User,
  FaMobileAlt as Mobile,
} from "react-icons/fa";

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
  return (
    <>
      <section className="relative md:py-24 py-16" id="about-second">
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 lg:px-2">
              <div className="relative w-full h-[50vh]">
                <Image
                  src="/images/hero/aboout.png"
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="mb-8 text-center lg:text-left">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal text-gray-700 leading-normal font-bold">
                  Jelajahi{" "}
                  <span className="text-blue-500">
                    Perjalanan Kesehatan Mental
                  </span>{" "}
                  Anda dengan Panduan dan Dukungan dari
                  <span className="text-blue-500"> DeepTalk</span>
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {expertiseData.map((item: ExpertiseItem, index: number) => {
                  const Icon = item.Icon;
                  return (
                    <div
                      className="group p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center h-12 w-12 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white rounded-full transition-colors duration-300 ease-in-out mr-4">
                          <Icon size={24} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                        <p className="text-gray-500 dark:text-gray-400">
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
