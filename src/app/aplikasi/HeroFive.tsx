import React from "react";
import { FaComment, FaVideo, FaMapMarkerAlt, FaBookOpen } from "react-icons/fa";
import Image from "next/image";

interface HeroFiveProps {}

const HeroFive: React.FC<HeroFiveProps> = () => {
  return (
    <>
      <section className="relative pt-20 z-10" id="aplikasi">
        <div className="absolute inset-0 opacity-50" id="overlay"></div>
        <div className="container mx-auto px-4 lg:px-60 text-center">
          <div>
            <h4 className="font-bold text-blue-500 text-xl md:text-3xl leading-normal mb-2">
              Temukan Tempat yang Tepat untuk Berbicara dengan Nyaman <br />
            </h4>
            <p className="text-gray-500 text-sm md:text-lg mb-6">
              Pilih dari berbagai ruang yang dirancang khusus untuk memberikan
              kenyamanan dan dukungan sesuai dengan kebutuhan pribadi Anda:
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-12 mb-20">
        <div className="container mx-auto px-4 lg:px-60">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-3xl md:text-4xl">
                <FaComment />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
                  Chat
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Sesi konseling melalui Metode Chat dengan Psikolog
                </p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-3xl md:text-4xl">
                <FaVideo />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
                  Video Call
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Sesi konseling melalui Metode Video Call dengan Psikolog
                </p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-3xl md:text-4xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
                  Tatap Muka
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Sesi konseling melalui Layanan Tatap Muka dengan Psikolog
                </p>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex items-start space-x-4 text-left">
              <div className="flex-shrink-0 text-blue-500 text-3xl md:text-4xl">
                <FaBookOpen />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
                  Psikoedukasi
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Edukasi seputar kesehatan mental
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden overflow-x-auto py-4">
            <div className="flex gap-4 px-4">
              <div className="bg-white p-4 rounded-lg shadow-lg flex items-start space-x-4 text-left flex-shrink-0 max-w-xs">
                <div className="flex-shrink-0 text-blue-500 text-3xl">
                  <FaComment />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Chat
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sesi konseling melalui Metode Chat dengan Psikolog
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg flex items-start space-x-4 text-left flex-shrink-0 max-w-xs">
                <div className="flex-shrink-0 text-blue-500 text-3xl">
                  <FaVideo />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Video Call
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sesi konseling melalui Metode Video Call dengan Psikolog
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg flex items-start space-x-4 text-left flex-shrink-0 max-w-xs">
                <div className="flex-shrink-0 text-blue-500 text-3xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Tatap Muka
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sesi konseling melalui Layanan Tatap Muka dengan Psikolog
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg flex items-start space-x-4 text-left flex-shrink-0 max-w-xs">
                <div className="flex-shrink-0 text-blue-500 text-3xl">
                  <FaBookOpen />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    Psikoedukasi
                  </h3>
                  <p className="text-xs text-gray-600">
                    Edukasi seputar kesehatan mental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-blue-100 py-1 md:py-1">
        <div className="container mx-auto px-4 lg:px-40 lg:py-2 h-[430px] lg:h-[300px] flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg md:text-2xl font-bold text-gray-600 mb-4 text-center md:text-left">
              #Jangan Tunggu Lagi, Dapatkan Kesehatan Mental Optimal dengan
              DeepTalk – Konseling dan Screening dalam Genggaman!
            </h3>
          </div>
          <div className="relative w-full md:w-1/2 h-[270px] md:h-[440px]">
            <Image
              src="/images/aplikasi/bg5.png"
              alt="Ilustrasi"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 md:-top-32"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFive;
