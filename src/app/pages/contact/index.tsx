import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";

interface HeroOneProps {}

const HeroOne: React.FC<HeroOneProps> = () => {
  return (
    <>
      <section className="relative bg-blue-100" id="contact">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
            <div>
              <h4 className="font-bold text-black lg:text-4xl text-2xl leading-normal">
                <div className="flex flex-col gap-2">
                  <span>Tetap Terhubung</span>
                  <span>Bersama Kami</span>
                </div>
              </h4>
            </div>

            <div className="relative w-[700px] h-[600px] mx-auto">
              <Image
                src="/images/contact/bg1.png"
                alt="Aplikasi Background"
                fill
                style={{ objectFit: "cover" }}
                className="absolute top-0 left-[-100px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-20 pb-20" id="contact">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 relative w-[400px] h-[400px] overflow-hidden">
              <Image
                src="/images/contact/phone.png"
                alt="Background Image"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center px-2">
              <div className="mb-6 flex items-center">
                <h4 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                  Kontak Kami
                </h4>
              </div>
              <p className="text-gray-600 font-bold text-2xl mb-8">
                <span className="block">JAM OPERASIONAL : 08.00 - 17.00</span>
              </p>
              <p className="text-gray-600 text-lg">
                <span className="font-bold">
                  Di luar jam operasional, silahkan hubungi kami melalui e-mail.
                  Kami akan segera membalas Anda!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 mt-[-4rem]" id="contact">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className="max-w-md w-full flex items-start space-x-3 text-left p-3 mx-auto">
              <div className="flex-shrink-0 text-blue-500 text-3xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  Email
                </h3>
                <p className="text-gray-600 text-xl">help@DeepTalk.co.id</p>
              </div>
            </div>
            <div className="max-w-md w-full flex items-start space-x-3 text-left p-3 mx-auto">
              <div className="flex-shrink-0 text-blue-500 text-3xl">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  Whatsapp
                </h3>
                <p className="text-gray-600 text-xl">[+62] 811-1814-456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-20 pb-40" id="contact">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 flex flex-col justify-center px-2">
              <div className="mb-6 flex items-center">
                <h4 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                  Kunjungi Kami
                </h4>
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-bold">
                  Jl. Amil Jl. Buncit Raya No.27C, RT.2/RW.5, Kalibata, Kec.
                  Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  12740
                </span>
              </p>
            </div>
            <div className="lg:col-span-7 relative w-[600px] h-[300px]">
              <Image
                src="/images/contact/maps.png"
                alt="Background Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOne;
