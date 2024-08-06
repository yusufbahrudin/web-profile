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
              <GiftIcon size={24} className="text-blue-500 mr-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Nikmati Keuntungan Keanggotaan Premium!
              </h4>
            </div>
            <p className="text-gray-500 text-md">
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

          <div className="lg:col-span-7 relative w-full h-[470px]">
            <Image
              src="/images/aplikasi/bg6.png"
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
