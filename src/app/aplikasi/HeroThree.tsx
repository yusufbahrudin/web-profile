"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt as MapIcon } from "react-icons/fa";

export default function HeroThree() {
  return (
    <section className="relative" id="aplikasi">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-7 relative w-full h-[470px]">
            <Image
              src="/images/aplikasi/bg4.png"
              alt="Background Image"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center px-4">
            <div className="mb-6 flex items-center">
              <MapIcon size={24} className="text-blue-500 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Buat Janji Temu Yuk!
              </h4>
            </div>
            <p className="text-gray-500 text-md">
              Kunjungi lokasi kami untuk konsultasi tatap muka dengan psikolog
              berpengalaman. Dapatkan perhatian dan dukungan personal yang Anda
              butuhkan untuk kesejahteraan mental Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
