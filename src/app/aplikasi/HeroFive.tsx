import React from "react";
import { FaComment, FaVideo, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

interface HeroFiveProps {}

const HeroFive: React.FC<HeroFiveProps> = () => {
  return (
    <>
      <section className="relative pt-40 z-10" id="aplikasi">
        <div className="absolute inset-0 opacity-50" id="overlay"></div>
        <div className="container mx-auto text-center">
          <div>
            <h4 className="font-bold text-blue-500 text-3xl leading-normal mb-2">
              Temukan Tempat yang Tepat untuk Berbicara dengan Nyaman <br />
            </h4>
            <p className="text-gray-500 text-md mb-6">
              Pilih dari berbagai ruang yang dirancang khusus untuk memberikan
              kenyamanan dan dukungan sesuai dengan kebutuhan pribadi Anda:
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 mb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-4xl">
                <FaComment />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Chat
                </h3>
                <p className="text-gray-600 text-sm">
                  Sesi konseling melalui Metode Chat dengan Psikolog
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-4xl">
                <FaVideo />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Video Call
                </h3>
                <p className="text-gray-600 text-sm">
                  Sesi konseling melalui Metode Video Call dengan Psikolog
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-4xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Tatap Muka
                </h3>
                <p className="text-gray-600 text-sm">
                  Sesi konseling melalui Layanan Tatap Muka dengan Psikolog
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-blue-100 h-[240px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative h-full">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              #Jangan Tunggu Lagi, Dapatkan Kesehatan Mental Optimal dengan
              DeepTalk – Konseling dan Screening dalam Genggaman!
            </h3>
          </div>
          <div className="relative w-full md:w-1/2 h-[400px]">
            <Image
              src="/images/aplikasi/bg5.png"
              alt="Ilustrasi"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 -top-16"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFive;
