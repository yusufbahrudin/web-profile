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
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div>
            <h4 className="font-bold text-3xl text-gray-700 lg:text-5xl leading-normal mb-4">
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
                className="typewrite text-2xl"
                repeat={Infinity}
                style={{ color: "#D6B613" }}
                aria-label="Layanan Tersedia"
                aria-hidden={false}
                role="text"
              />
            </h4>
            <p className="text-slate-400 text-md">
              Jangan simpan sendiri masalahmu, konseling sekarang bersama
              Psikolog DeepTalk.co.id
            </p>

            <div className="mt-6 flex items-center">
              <Link href="#">
                <div className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg cursor-pointer">
                  <FiPlay className="text-xl mr-2" />
                  <span className="text-lg">Demo Aplikasi</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/beranda/bg.png"
              alt=""
              width={600}
              height={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
