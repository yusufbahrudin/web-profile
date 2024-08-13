import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "../../Data/data";

interface Service {
  Icon: React.ComponentType<any>;
  title: string;
  desc: string;
  category: string;
}

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("konseling");

  const filterCategories = [
    { name: "Konseling Umum", value: "konseling" },
    { name: "Asesmen", value: "asesmen" },
    { name: "Psikoterapi", value: "psikoterapi" },
    { name: "Klinik Tumbuh Kembang", value: "klinik" },
  ];

  const filteredServices = servicesData.filter((service: Service) =>
    selectedCategory === "konseling"
      ? true
      : service.category === selectedCategory
  );

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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {filteredServices.map((item: Service, index: number) => {
              const Icon = item.Icon;
              return (
                <div
                  key={index}
                  className="service-card px-6 py-10 shadow-lg transition duration-500 rounded-2xl bg-white dark:bg-slate-900 border border-gray-300 hover:transform hover:scale-110 hover:shadow-xl"
                >
                  <div className="flex justify-center -mt-16 mb-6">
                    <div className="bg-white p-4 rounded-full shadow-2xl transform transition duration-500">
                      <Icon className="h-10 w-10 stroke-1 text-amber-500" />
                    </div>
                  </div>

                  <div className="content mt-7 text-center">
                    <Link
                      href="#"
                      className="title h5 text-[17px] font-medium hover:text-amber-500"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3 text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
