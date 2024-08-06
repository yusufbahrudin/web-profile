"use client";
import React from "react";
import Image from "next/image";
import { FaSearch as SearchIcon } from "react-icons/fa";

export default function HeroTwo() {
  return (
    <section className="relative" id="aplikasi">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 pt-40">
            Temukan Kebahagiaan Sejati dari Diri Anda
          </h3>
          <h6 className="text-md text-gray-600">
            Dapatkan akses GRATIS untuk layanan konseling dengan Konselor dan
            hadapi tantangan emosional dengan lebih mudah. Waktunya untuk
            kembali tersenyum dan hidup lebih bahagia!
          </h6>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 flex flex-col justify-center px-4">
            <div className="mb-6 flex items-center">
              <SearchIcon size={24} className="text-blue-500 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Konsultasikan Kesehatan Mental Anda!
              </h4>
            </div>
            <p className="text-gray-500 text-md">
              Ikuti tes mendalam dari DeepTalk untuk memahami kebutuhan{" "}
              <span className="italic font-bold">emosional Anda</span> dan
              tingkatkan kesejahteraan dengan lebih baik
            </p>
          </div>

          <div className="lg:col-span-7 relative w-full h-[470px]">
            <Image
              src="/images/aplikasi/bg3.png"
              alt="Background Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
