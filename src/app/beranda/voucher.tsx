import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface VoucherData {
  id: number;
  description: string;
  image: string | null;
  amount: string;
  discount_type: string;
  expiry_date: string;
  user_type: string;
  max_discount: string | null;
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

// const CustomArrow = ({ onClick, direction }: any) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-1 md:p-2 rounded-full bg-white text-black shadow-lg hover:bg-blue-500 transition-all
//       md:w-10 md:h-10 w-8 h-8
//       ${direction === "left" ? "left-2 md:left-4" : "right-2 md:right-4"}`}
//     >
//       {direction === "left" ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-4 h-4 md:w-6 md:h-6 mx-auto"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-4 h-4 md:w-6 md:h-6 mx-auto"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       )}
//     </button>
//   );
// };

const Voucher: React.FC = () => {
  const [vouchers, setVouchers] = useState<VoucherData[]>([]);

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          console.error("NEXT_PUBLIC_API_URL is not defined");
          return;
        }

        const response = await axios.get(`${apiUrl}/user/voucher`);
        console.log("API Response:", response.data.data);
        setVouchers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch vouchers:", error);
      }
    };

    fetchVouchers();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <CustomArrow direction="right" />,
    // prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative py-8 md:py-16 bg-white overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-700 pb-4 md:pb-6">
            Nikmati Penawaran Menarik Dari Kami
          </h2>
        </div>
        <div className="relative">
          <Slider {...settings}>
            {vouchers.map((item) => {
              const imageUrl = item.image || "/default-image.jpg";
              return (
                <div key={item.id} className="px-2">
                  <img
                    src={imageUrl}
                    alt={`Voucher ${item.id}`}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Voucher;
