import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

// Interface for Voucher, updated to match API structure
interface VoucherData {
  id: number;
  description: string;
  image: string | null;
  amount: string;
  discount_type: string;
  expiry_date: string;
  user_type: string;
  max_discount: string;
  min_purchase: string;
  terms_conditions: string;
  for: string;
  created_at: string;
  updated_at: string;
  usage_limit: string | null;
  claim_type: string;
  usage_count: number;
  code: string;
}

const Voucher: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [vouchers, setVouchers] = useState<VoucherData[]>([]);
  const itemsPerPage = 3;

  useEffect(() => {
    // Fetch data from the API
    const fetchVouchers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_APP_API_URL}/user/voucher`
        );
        console.log("API Response:", response.data.data);
        setVouchers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch vouchers:", error);
      }
    };

    fetchVouchers();
  }, []);

  const totalPages = Math.ceil(vouchers.length / itemsPerPage);

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
            &lt;
          </button>
          <div
            className="flex overflow-x-auto scrollbar-hide"
            ref={scrollContainerRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex" style={{ width: `${totalPages * 100}%` }}>
              {vouchers.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-1/3 p-4 sm:p-12 mx-2 shadow-lg rounded-2xl bg-white dark:bg-slate-900 border border-gray-300"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={
                        item.image
                          ? `${process.env.NEXT_APP_API_URL}${item.image}`
                          : "/default-image.jpg"
                      }
                      className="w-12 h-12"
                    />
                  </div>
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
            &gt;
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
