import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-black shadow-4xl">
      <div className="container mx-auto py-10 px-4 md:px-40">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-start mb-12">
              <Image
                src="/images/logo-light.png"
                alt="Logo"
                width={180}
                height={120}
                className="mr-6 w-36 h-auto md:w-[200px] md:max-w-xs"
              />
            </div>

            <div>
              <p className="text-xs md:text-sm mb-2">PT Logos Indonesia</p>
              <p className="text-xs md:text-sm mb-2">
                Jl. Amil Jl. Buncit Raya No.27C, Kalibata, Kec. Pancoran,
              </p>
              <p className="text-xs md:text-sm mb-2">Jakarta Selatan.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:w-2/3 justify-between">
            <div className="flex-1 mb-4 md:mb-0">
              <h5 className="text-sm md:text-lg font-bold mb-4">
                Tentang Kami
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/artikel"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Layanan Pengaduan Konsumen
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 mb-8 md:mb-0">
              <h5 className="text-sm md:text-lg font-bold mb-4">
                Layanan Kami:
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/konseling"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Konseling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/assessment"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Tes Psikologi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/psikoedukasi"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Psikoterapi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/psikoedukasi"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Psikoedukasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webinar"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Screening Kesehatan Mental
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webinar"
                    className="hover:text-gray-400 text-xs md:text-sm"
                  >
                    Webinar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 mb-8 md:mb-0">
              <h5 className="text-sm md:text-lg font-bold mb-4">
                Download App
              </h5>
              <div className="flex flex-wrap space-x-2 mb-8">
                <Link href="https://play.google.com">
                  <Image
                    src="/images/playstore.png"
                    alt="Download on Playstore"
                    width={70}
                    height={40}
                    className="w-20 h-6 md:w-full md:h-auto mb-2 max-w-xs"
                  />
                </Link>

                <Link href="https://www.apple.com/app-store">
                  <Image
                    src="/images/appstore.png"
                    alt="Download on Appstore"
                    width={70}
                    height={40}
                    className="w-20 h-6 md:w-full md:h-auto mb-2 max-w-xs"
                  />
                </Link>
              </div>
              <h5 className="text-sm md:text-lg font-bold mb-4">Ikuti Kami:</h5>
              <div className="flex flex-wrap space-x-4">
                <Link href="https://twitter.com/yourcompany">
                  <FaTwitter
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors w-5 h-5 md:w-6 md:h-6"
                  />
                </Link>
                <Link href="https://www.facebook.com/yourcompany">
                  <FaFacebookF
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors w-5 h-5 md:w-6 md:h-6"
                  />
                </Link>
                <Link href="https://www.instagram.com/yourcompany">
                  <FaInstagram
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors w-5 h-5 md:w-6 md:h-6"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/yourcompany">
                  <FaLinkedinIn
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors w-5 h-5 md:w-6 md:h-6"
                  />
                </Link>
                <Link href="https://www.tiktok.com/@yourcompany">
                  <FaTiktok
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors w-5 h-5 md:w-6 md:h-6"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 py-2 sm:py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm md:text-base text-white">
            © {new Date().getFullYear()} DeepTalk, ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
