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

  // Mapping kategori ke image dan deskripsi yang sesuai
  const contentMap: { [key: string]: { image: string; description: string } } =
    {
      konseling: {
        image: "/images/beranda/konseling.png",
        description:
          "Layanan konseling umum kami menyediakan dukungan dan panduan untuk membantu Anda mengatasi berbagai tantangan dalam kehidupan sehari-hari.",
      },
      psikotest: {
        image: "/images/beranda/psikotest.png",
        description:
          "Layanan asesmen kami menawarkan evaluasi yang mendalam untuk memahami kondisi kesehatan mental Anda secara komprehensif.",
      },
      psikoterapi: {
        image: "/images/beranda/coomingsoon.png",
        description:
          "Psikoterapi kami memberikan pendekatan terapeutik yang terarah untuk membantu Anda dalam proses pemulihan mental.",
      },
      klinik: {
        image: "/images/beranda/coomingsoon.png",
        description:
          "Klinik tumbuh kembang kami berfokus pada dukungan perkembangan anak dengan pendekatan yang komprehensif dan holistik.",
      },
      screening: {
        image: "/images/beranda/screening.png",
        description:
          "Layanan screening kesehatan mental kami membantu Anda untuk mengenali tanda-tanda awal gangguan mental dan memberikan langkah-langkah preventif.",
      },
    };

  const selectedContent = contentMap[selectedCategory];

  return (
    <section
      className="relative md:py-24 py-16 bg-white rounded-t-2xl rounded-tr-2xl rounded-tl-2xl"
      id="service"
    >
      <div className="container">
        <div className="grid grid-cols-1 text-center">
          <div className="pt-0">
            <h3 className="mt-0 mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              Layanan Utama Kami
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-[15px]">
              Temukan pengalaman baru dengan layanan kami yang menghadirkan
              solusi terbaik untuk kebutuhan kesehatan mental anda.
            </p>
          </div>

          <div className="flex justify-center overflow-x-auto space-x-4 pb-4">
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

          <div className="container">
            {selectedContent && (
              <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-7">
                  <div className="mb-8 text-center lg:text-left">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal text-gray-700 leading-normal font-semibold">
                      {selectedContent.description}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-5 lg:px-2">
                  <div
                    className={`relative ${
                      selectedCategory === "screening"
                        ? "w-[60vh] h-[40vh]"
                        : "w-[50vh] h-[50vh]"
                    }`}
                  >
                    <Image
                      src={selectedContent.image}
                      alt="About Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
