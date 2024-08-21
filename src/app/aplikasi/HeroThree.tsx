"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt as MapIcon } from "react-icons/fa";

export default function HeroThree() {
  return (
    <section className="relative mb-10" id="aplikasi">
      <div className="container mx-auto px-4 lg:px-60">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-5 flex flex-col justify-center px-4">
            <div className="mb-6 flex items-center">
              <MapIcon
                size={26}
                className="text-blue-500 mr-3 text-xs sm:text-lg md:text-lg lg:text-lg"
              />
              <h4 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white">
                Buat Janji Temu Yuk!
              </h4>
            </div>
            <p className="text-gray-500 text-sm md:text-lg">
              Kunjungi lokasi kami untuk konsultasi tatap muka dengan psikolog
              berpengalaman. Dapatkan perhatian dan dukungan personal yang Anda
              butuhkan untuk kesejahteraan mental Anda.
            </p>
          </div>

          <div className="lg:col-span-7 relative w-full h-[360px] md:h-[420px] lg:h-[570px]">
            <Image
              src="/images/aplikasi/bg4.png"
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
