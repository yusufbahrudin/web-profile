import React, { useState } from "react";
import Image from "next/image";

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("konseling");

  const filterCategories = [
    { name: "Konseling Umum", value: "konseling" },
    { name: "Psikotest", value: "psikotest" },
    { name: "Psikoterapi", value: "psikoterapi" },
    { name: "Klinik Tumbuh Kembang", value: "klinik" },
    { name: "Screening Kesehatan Mental", value: "screening" },
  ];

  const contentMap: { [key: string]: { image: string; description: string } } =
    {
      konseling: {
        image: "/images/hero/konseling.png",
        description:
          "Mau cerita tapi nggak ada teman yang bisa dipercaya? Nggak perlu khawatir lagi! Curahkan semua masalahmu dengan aman dan nyaman ke psikolog profesional kami. Prosesnya simpel banget, tinggal download aplikasinya di Playstore. Yuk, cerita sekarang biar hati lebih lega!",
      },
      psikotest: {
        image: "/images/hero/psikotest.png",
        description:
          "Layanan psikotest kami menawarkan evaluasi yang mendalam untuk memahami kondisi kesehatan mental Anda secara komprehensif.",
      },
      psikoterapi: {
        image: "/images/hero/coomingsoon.png",
        description:
          "Hai! Kami sedang mempersiapkan sesuatu yang istimewa untuk Anda. Layanan terbaru kami akan segera hadir. Jangan lewatkan kesempatan untuk menjadi yang pertama menikmatinya. Stay tuned, ya!",
      },
      klinik: {
        image: "/images/hero/coomingsoon.png",
        description:
          "Hai! Kami sedang mempersiapkan sesuatu yang istimewa untuk Anda. Layanan terbaru kami akan segera hadir. Jangan lewatkan kesempatan untuk menjadi yang pertama menikmatinya. Stay tuned, ya!",
      },
      screening: {
        image: "/images/hero/screening.png",
        description:
          "Tahukah kamu? 1 dari 10 orang di Indonesia mengalami gangguan mental (Kemenkes). Tapi, angka ini bisa lebih besar karena banyak yang belum terdeteksi. Siapa pun bisa mengalami masalah kesehatan mental, termasuk kamu. Jangan tunggu hingga terlambat! Lakukan screening kesehatan mentalmu sekarang bersama kami. Prosesnya cepat, dapat dilakukan secara online, dan data kamu dijamin aman. Mulailah dari sekarang untuk mencegah risiko yang lebih besar di kemudian hari.",
      },
    };

  const selectedContent = contentMap[selectedCategory];

  return (
    <section
      className="relative bg-white rounded-t-2xl py-16 md:py-24"
      id="home"
    >
      <div className="container px-4 md:px-60 lg:px-60 xl:px-60">
        <div className="text-center">
          <h3 className="mt-0 mb-6 text-md font-semibold md:text-3xl">
            Layanan Utama Kami
          </h3>
          <p className="text-slate-400 mb-6 text-xs md:text-lg max-w-full mx-auto text-center">
            Temukan pengalaman baru dengan layanan kami yang menghadirkan solusi
            terbaik untuk kebutuhan kesehatan mental anda.
          </p>
        </div>

        <div className="relative pb-8">
          {/* Flexbox layout for mobile view */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-2 py-1 text-xs md:px-4 md:py-2 md:text-lg rounded-xl border ${
                  selectedCategory === category.value
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-blue-200 text-blue-700 border-blue-500"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {selectedContent && (
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Deskripsi */}
            <div className="flex-1 flex justify-center lg:items-center">
              <div className="w-full max-w-md lg:max-w-lg">
                <p className="text-center text-xs md:text-lg leading-relaxed text-gray-700 text-justify">
                  {selectedContent.description}
                </p>
              </div>
            </div>

            <div className="relative flex-1 flex justify-center lg:items-center">
              <div
                className={`relative ${
                  selectedCategory === "screening"
                    ? "w-64 h-64 md:w-[60vh] md:h-[40vh]"
                    : "w-64 h-64 md:w-[45vh] md:h-[45vh]"
                }`}
              >
                <Image
                  src={selectedContent.image}
                  alt="Service Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
