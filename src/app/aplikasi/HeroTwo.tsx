"use client";
import React from "react";
import Image from "next/image";
import { FaSearch as SearchIcon } from "react-icons/fa";

export default function HeroTwo() {
  return (
    <section className="relative" id="aplikasi">
      <div className="container mx-auto px-4 lg:px-60">
        <div className="mb-12 text-center">
          <h3 className="text-lg md:text-4xl font-bold text-blue-500 mb-4 pt-40">
            Temukan Kebahagiaan Sejati dari Diri Anda
          </h3>
          <h6 className="text-xs md:text-lg text-gray-600">
            Dapatkan akses GRATIS untuk layanan konseling dengan Konselor dan
            hadapi tantangan emosional dengan lebih mudah. Waktunya untuk
            kembali tersenyum dan hidup lebih bahagia!
          </h6>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-8">
          <div className="lg:col-span-5 flex flex-col justify-center px-4">
            <div className="mb-6 flex items-center">
              <SearchIcon
                size={26}
                className="text-blue-500 mr-3 text-xs sm:text-lg md:text-lg lg:text-lg"
              />

              <h4 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white">
                Konsultasikan Kesehatan Mental Anda!
              </h4>
            </div>
            <p className="text-gray-500 text-sm md:text-lg">
              Ikuti tes mendalam dari DeepTalk untuk memahami kebutuhan{" "}
              <span className="italic font-bold">emosional Anda</span> dan
              tingkatkan kesejahteraan dengan lebih baik
            </p>
          </div>

          <div className="lg:col-span-7 relative w-full h-[320px] lg:h-[520px]">
            <Image
              src="/images/aplikasi/bg3.png"
              alt="Background Image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
