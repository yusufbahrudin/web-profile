import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight, FaQuestionCircle } from "react-icons/fa";
import { FaComment, FaVideo, FaMapMarkerAlt, FaBookOpen } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <>
      <section
        className="relative w-full h-[80vh] lg:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="absolute top-0 left-0 w-full p-4 md:p-8 lg:p-12 z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-blue-500">
              Tentang kami
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
              Kenal Lebih Dekat dengan DeepTalk
            </h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-white">
              Platform Kesehatan Mental di Indonesia
            </h3>
          </div>
        </div>
      </section>
      <section className="relative pt-10 pb-10">
        <div className="container mx-auto px-4 md:px-60 flex flex-col md:flex-row items-start">
          <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
            <div className="flex items-center mb-4">
              <h3 className="text-lg md:text-3xl font-bold text-gray-800">
                Perjalanan kami
              </h3>
              <FiArrowRight className="text-2xl md:text-4xl text-blue-500 ml-2 md:ml-4 transform rotate-[315deg]" />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-sans">
              Kami muncul dari keinginan untuk membuat jutaan orang mempunyai
              kesehatan mental yang baik dan sejahtera. DeepTalk hadir sebagai
              aplikasi kesehatan mental di Indonesia yang membantu menjembatani
              antara orang yang memiliki masalah kesehatan mental dan Psikolog
              agar bisa terhubung dekat. Kami percaya setiap orang memiliki hak
              untuk meraih kehidupan yang lebih baik dari mental yang sejahtera.
            </p>
            <p className="mt-4 text-sm md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify font-sans">
              Kami berdedikasi untuk menyediakan platform yang memudahkan akses
              kepada layanan kesehatan mental berkualitas. Dengan dukungan dan
              inovasi, kami berkomitmen untuk menjadi bagian dari solusi
              terhadap tantangan kesehatan mental di Indonesia.
            </p>
          </div>
        </div>
      </section>
      <section className="relative md:py-16 py-12" id="about">
        <div className="container mx-auto px-4 md:px-60">
          <div className="text-center mb-12">
            <h1 className="text-lg md:text-md lg:text-3xl font-bold leading-tight">
              <span className="text-blue-500">DeepTalk</span>{" "}
              <span className="text-gray-700">
                Berkomitmen untuk bantu penderita penyakit
              </span>{" "}
              <span className="text-blue-500">kesehatan mental</span>{" "}
              mendapatkan kehidupan yang lebih baik
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px] items-start">
            <div className="lg:col-span-5 relative w-full h-[38vh] overflow-hidden md:h-[46vh] sm:h-[54vh]">
              <Image
                src="/images/about/bg2.png"
                alt="About Image"
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center p-4 lg:p-8 relative">
              <div className="absolute -top-12 -left-12 text-4xl sm:text-5xl md:text-6xl text-blue-500 opacity-50">
                <FaQuoteLeft className="transform rotate-180" />
              </div>
              <div className="absolute -bottom-12 -right-12 text-4xl sm:text-5xl md:text-6xl text-blue-500 opacity-50">
                <FaQuoteRight />
              </div>

              <div className="mb-6">
                <h3 className="text-md sm:text-xl md:text-2xl font-bold text-gray-700 leading-normal relative z-10">
                  <span className="block mb-2 sm:mb-4">
                    <span className="text-blue-500">Visi</span>
                  </span>
                  <div className="text-sm sm:text-lg text-gray-500">
                    Menjadi penyedia terkemuka dalam layanan konsultasi
                    psikologi online & offline di Indonesia, dengan fokus pada
                    inovasi teknologi untuk meningkatkan kesejahteraan mental
                    masyarakat.
                  </div>
                </h3>
              </div>

              <h3 className="text-md sm:text-xl md:text-2xl font-bold text-gray-700 leading-normal relative z-10 mt-8 sm:mt-12">
                <span className="block mb-2 sm:mb-4">
                  <span className="text-blue-500">Misi</span>
                </span>
                <div className="text-sm sm:text-lg text-gray-500">
                  <p className="mb-1 sm:mb-2">
                    <span className="text-blue-500">
                      Akses Mudah dan Terjangkau:
                    </span>{" "}
                    Menyediakan layanan konseling online & offline yang mudah
                    diakses dan terjangkau untuk meningkatkan kesejahteraan
                    mental.
                  </p>
                  <p className="mb-1 sm:mb-2">
                    <span className="text-blue-500">
                      Kualitas Layanan Terbaik:
                    </span>{" "}
                    Menawarkan platform konseling aman dan berkualitas tinggi
                    dengan psikolog profesional.
                  </p>
                  <p className="mb-1 sm:mb-2">
                    <span className="text-blue-500">Inovasi Teknologi:</span>{" "}
                    Mengembangkan aplikasi canggih untuk meningkatkan pengalaman
                    dan efektivitas sesi konseling.
                  </p>
                  <p className="mb-1 sm:mb-2">
                    <span className="text-blue-500">Pendekatan Holistik:</span>{" "}
                    Menerapkan berbagai metode konseling untuk mendukung
                    kesejahteraan mental klien.
                  </p>
                  <p>
                    <span className="font-bold text-blue-500">
                      Perluasan Kemitraan:
                    </span>{" "}
                    Menjalin kemitraan dengan lebih banyak psikolog dan
                    institusi kesehatan mental di seluruh Indonesia.
                  </p>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-12 md:pt-20 z-10" id="about">
        <div className="absolute inset-0 opacity-50" id="overlay"></div>
        <div className="container mx-auto px-4 md:px-60 text-center">
          <div>
            <h4 className="text-lg sm:text-3xl md:text-4xl font-bold text-blue-500 leading-tight mb-4">
              Temukan Tempat yang Tepat untuk Berbicara dengan Nyaman
            </h4>
            <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-4">
              Pilih dari berbagai ruang yang dirancang khusus untuk memberikan
              kenyamanan dan dukungan sesuai dengan kebutuhan pribadi Anda.
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
      <section className="relative pt-10 pb-40">
        <div className="container mx-auto px-4 lg:px-60 flex flex-col md:flex-row items-start">
          <div className="flex flex-col md:w-1/2">
            <div className="flex items-center mb-4">
              <h3 className="text-lg md:text-4xl font-bold text-gray-800">
                Mengapa kami
              </h3>
              <FaQuestionCircle className="text-lg md:text-5xl text-blue-500 ml-4 " />
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed text-justify font-sans">
              Teknologi Kami mengembangkan AI sebagai asisten bantuan dan
              dukungan. Kamu bisa akses 24 jam bantuan bila menemui kendala atau
              kebingungan". Diubah jadi "Kami mengembangkan teknologi AI sebagai
              asisten bantuan dan dukungan agar bisa melayani kamu 24 jam.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-blue-100 py-1 md:py-1">
        <div className="container mx-auto px-4 lg:px-40 lg:py-2 lg:h-[245px] flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg md:text-2xl font-bold text-gray-600 mb-4 text-center md:text-left">
              # Tertarik buat bergabung dan berkontribusi bersama DeepTalk?
            </h3>
            <div className="mt-6 flex justify-center md:justify-start">
              <Link href="#">
                <div className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg cursor-pointer">
                  <span className="text-sm md:text-lg">Daftar Sekarang</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-[220px] md:h-[370px]">
            <Image
              src="/images/about/b.png"
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

export default About;
