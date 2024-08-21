import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <section className="relative bg-blue-100 py-8 md:py-2" id="contact">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 md:px-60">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-black text-2xl md:text-4xl leading-tight">
                <div className="flex flex-col gap-2">
                  <span>Tetap Terhubung</span>
                  <span>Bersama Kami</span>
                </div>
              </h4>
            </div>

            <div className="relative w-full h-[300px] md:h-[600px]">
              <Image
                src="/images/contact/bg1.png"
                alt="Aplikasi Background"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-20 pb-20" id="contact">
        <div className="container mx-auto px-4 lg:px-60">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 flex flex-col justify-center px-2 text-center md:text-left">
              <div className="mb-6 flex items-center">
                <h4 className="text-lg md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white mb-2">
                  Kontak Kami
                </h4>
              </div>
              <p className="text-gray-600 font-bold text-sm md:text-2xl mb-4">
                <span className="block">JAM OPERASIONAL : 08.00 - 17.00</span>
              </p>
              <p className="text-gray-600 text-sm md:text-lg">
                <span className="font-bold">
                  Di luar jam operasional, silahkan hubungi kami melalui e-mail.
                  Kami akan segera membalas Anda!
                </span>
              </p>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="relative w-full h-[300px] md:h-[400px] lg:w-[550px] lg:h-[400px] overflow-hidden">
                <Image
                  src="/images/contact/phone.png"
                  alt="Background Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 mt-[-4rem]" id="contact">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-2 gap-4 justify-center items-center">
            <div className="flex items-start space-x-3 text-left p-3 mx-auto bg-white">
              <div className="flex-shrink-0 text-blue-500 text-lg md:text-3xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xs md:text-lg font-semibold text-gray-800 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:help@DeepTalk.co.id"
                  className="text-gray-600 text-xs md:text-xl"
                >
                  help@DeepTalk.co.id
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-left p-3 mx-auto bg-white">
              <div className="flex-shrink-0 text-blue-500 text-lg md:text-3xl">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-xs md:text-lg font-semibold text-gray-800 mb-1">
                  Whatsapp
                </h3>
                <a
                  href="https://wa.me/628111814456"
                  className="text-gray-600 text-xs md:text-xl"
                >
                  [+62] 811-1814-456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-12 pb-20 md:pt-20 md:pb-40" id="contact">
        <div className="container mx-auto px-4 lg:px-60">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="lg:col-span-5 flex flex-col justify-center px-4 text-center md:text-left">
              <div className="mb-4 flex items-center justify-center md:justify-start">
                <h4 className="text-lg md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                  Kunjungi Kami
                </h4>
              </div>
              <p className="text-gray-600 text-sm md:text-lg">
                <span className="font-bold">
                  Jl. Amil Jl. Buncit Raya No.27C, RT.2/RW.5, Kalibata, Kec.
                  Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  12740
                </span>
              </p>
            </div>

            <div className="lg:col-span-7 relative w-full h-[200px] md:h-[100px] lg:h-[300px]">
              <a
                href="https://maps.app.goo.gl/LNzD9gw9bXTgt2BY7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/contact/maps.png"
                  alt="Background Image"
                  fill
                  className="object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
