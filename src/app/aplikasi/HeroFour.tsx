"use client";
import React from "react";
import Image from "next/image";
import { FaGift as GiftIcon } from "react-icons/fa";

export default function HeroFour() {
  return (
    <section className="relative" id="aplikasi">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 flex flex-col justify-center px-4">
            <div className="mb-6 flex items-center">
              <GiftIcon
                size={26}
                className="text-blue-500 mr-3 text-xs sm:text-lg md:text-lg lg:text-lg"
              />
              <h4 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white">
                Nikmati Keuntungan Keanggotaan Premium!
              </h4>
            </div>
            <p className="text-gray-500 text-sm md:text-lg">
              Bergabunglah dengan keanggotaan premium kami dan nikmati berbagai{" "}
              <span className="italic font-bold">keuntungan eksklusif</span>,
              termasuk{" "}
              <span className="italic font-bold">
                poin yang dapat Anda gunakan
              </span>{" "}
              untuk pembayaran layanan kami. Semakin banyak Anda menggunakan
              layanan, semakin banyak poin yang Anda kumpulkan untuk menghemat
              lebih banyak!
            </p>
          </div>

          <div className="lg:col-span-7 relative w-full h-[300px] md:h-[420px] lg:h-[500px]">
            <Image
              src="/images/aplikasi/bg6.png"
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
