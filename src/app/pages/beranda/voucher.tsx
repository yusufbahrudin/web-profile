import React, { useRef, useState, useEffect } from "react";
import { servicesData } from "../../Data/data";
import * as Unicons from "@iconscout/react-unicons";

// Interface for Service, updated to match servicesData structure
interface Service {
  title: string;
  desc: string;
  Icon: React.ComponentType; // Update to use React.ComponentType for the icon
}

const Voucher: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(servicesData.length / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const itemWidth = containerWidth / itemsPerPage;
      scrollContainerRef.current.scrollTo({
        left: itemWidth * page,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToPage(currentPage);

    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % totalPages;
        scrollToPage(nextPage);
        return nextPage;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPage, totalPages]);

  return (
    <section
      className="relative py-8 md:py-16 bg-white overflow-hidden"
      id="voucher"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 pb-4 md:pb-6">
            Nikmati Penawaran Menarik Dari Kami
          </h2>
        </div>
        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full hidden md:block"
            onClick={() =>
              setCurrentPage(
                (prevPage) => (prevPage - 1 + totalPages) % totalPages
              )
            }
          >
            <div className="w-6 h-6">
              <Unicons.UilArrowLeft />
            </div>
          </button>
          <div
            className="flex overflow-x-auto scrollbar-hide"
            ref={scrollContainerRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex" style={{ width: `${totalPages * 100}%` }}>
              {servicesData.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/3 p-4 sm:p-12 mx-2 shadow-lg rounded-2xl bg-white dark:bg-slate-900 border border-gray-300"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12">
                      <item.Icon />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full hidden md:block"
            onClick={() =>
              setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
            }
          >
            <div className="w-6 h-6">
              <Unicons.UilArrowRight />
            </div>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 mx-1 rounded-full focus:outline-none ${
                index === currentPage ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => {
                setCurrentPage(index);
                scrollToPage(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voucher;
