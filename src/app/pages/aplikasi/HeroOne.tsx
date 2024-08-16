import React from "react";
import Image from "next/image";
import { FaMobileAlt, FaClock, FaShieldAlt } from "react-icons/fa";

interface HeroOneProps {}

const HeroOne: React.FC<HeroOneProps> = () => {
  return (
    <>
      <section className="relative pt-20 pb-20 z-10" id="aplikasi">
        <div className="absolute inset-0" id="overlay"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div>
              <h4 className="font-bold text-gray-700 lg:text-4xl text-2xl leading-normal mb-4">
                Belum Punya Aplikasi DeepTalk? <br />
              </h4>
              <p className="text-gray-500 text-xl mb-10">
                Download sekarang yuk.
              </p>

              <div className="flex space-x-2 mt-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.example"
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Playstore
                </a>
                <a
                  href="https://apps.apple.com/us/app/example/id1234567890"
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </div>
            </div>
            <div className="relative w-full h-96">
              <Image
                src="/images/aplikasi/bg2.png"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-7 -mt-32">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-4xl">
                <FaMobileAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Aplikasi Terpercaya
                </h3>
                <p className="text-gray-600 text-sm">
                  Dapatkan solusi kesehatan mental dari psikolog tepercaya,
                  tersertifikasi dalam satu aplikasi!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-4xl">
                <FaClock />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Kapan Saja, Di Mana Saja
                </h3>
                <p className="text-gray-600 text-sm">
                  Nikmati kemudahan Konsultasi dengan psikolog dan layanan test
                  mental health dari rumah!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-4xl">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Terpercaya dan Terjamin
                </h3>
                <p className="text-gray-600 text-sm">
                  Aplikasi kami menggunakan teknologi terkini untuk memastikan
                  keamanan dan privasi data Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOne;
