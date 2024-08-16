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
          "Layanan asesmen kami menawarkan evaluasi yang mendalam untuk memahami kondisi kesehatan mental Anda secara komprehensif.",
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
      className="relative md:py-24 py-16 bg-white rounded-t-2xl"
      id="service"
    >
      <div className="container">
        <div className="text-center">
          <h3 className="mt-0 mb-6 md:text-3xl text-2xl font-semibold">
            Layanan Utama Kami
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto text-[15px]">
            Temukan pengalaman baru dengan layanan kami yang menghadirkan solusi
            terbaik untuk kebutuhan kesehatan mental anda.
          </p>
        </div>

        <div className="flex justify-center overflow-x-auto space-x-4 pb-8">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-xl border ${
                selectedCategory === category.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {selectedContent && (
          <div className="grid lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-8">
              <p className="text-left text-lg leading-relaxed text-gray-700 pr-4">
                {selectedContent.description}
              </p>
            </div>
            <div className="lg:col-span-4">
              <div
                className={`relative ${
                  selectedCategory === "screening"
                    ? "w-[60vh] h-[40vh]"
                    : "w-[45vh] h-[45vh]"
                }`}
              >
                <Image
                  src={selectedContent.image}
                  alt="Service Image"
                  fill
                  objectFit="cover"
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
