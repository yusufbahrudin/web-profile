import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";

interface HeroOneProps {}

const HeroOne: React.FC<HeroOneProps> = () => {
  return (
    <section className="relative pt-8 pb-20" id="home">
      <div className="absolute inset-0" id="overlay"></div>
      <div className="container mx-auto px-4 md:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg md:text-5xl text-gray-700 leading-normal mb-4">
              Aplikasi Konsultasi Psikologi Online Berbasis Android & iOS <br />
              <TypeAnimation
                sequence={[
                  "Layanan Konseling",
                  1000,
                  "Layanan Tes Psikologi",
                  1000,
                  "Layanan Psikoterapi",
                  1000,
                  "Screening Kesehatan Mental",
                  1000,
                  "Layanan Tumbuh Kembang Anak",
                  1000,
                  "Layanan Psikoedukasi",
                  1000,
                  "Webinar",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-sm md:text-3xl font-bold"
                repeat={Infinity}
                style={{ color: "#D6B613" }}
                aria-label="Layanan Tersedia"
                aria-hidden={false}
                role="text"
              />
            </h4>
            <p className="text-slate-400 text-xs md:text-lg">
              Jangan simpan sendiri masalahmu, konseling sekarang bersama
              Psikolog DeepTalk.co.id
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <Link href="#">
                <div className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg cursor-pointer">
                  <FiPlay className="text-xl mr-2" />
                  <span className="text-xs md:text-lg">Demo Aplikasi</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/hero/bg.png"
              alt="Hero Image"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
