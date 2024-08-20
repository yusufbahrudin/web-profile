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
      <div className="container mx-auto py-10 px-22">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          {/* Logo and Address Section */}
          <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-start mb-12">
              <Image
                src="/images/logo-light.png"
                alt="Logo"
                width={180}
                height={120}
                className="mr-6"
              />
            </div>
            <div>
              <p className="text-sm mb-2">PT Logos Indonesia</p>
              <p className="text-sm mb-2">
                Jl. Amil Jl. Buncit Raya No.27C, Kalibata, Kec. Pancoran,
              </p>
              <p className="text-sm mb-2">Jakarta Selatan.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:w-2/3 justify-between">
            <div className="flex-1 mb-8 md:mb-0">
              <h5 className="text-lg font-bold mb-4 mt-24">Tentang Kami</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/artikel" className="hover:text-gray-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-400">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-400">
                    Layanan Pengaduan Konsumen
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 mb-8 md:mb-0">
              <h5 className="text-lg font-bold mb-4 mt-24">Layanan Kami:</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/konseling" className="hover:text-gray-400">
                    Konseling
                  </Link>
                </li>
                <li>
                  <Link href="/assessment" className="hover:text-gray-400">
                    Tes Psikologi
                  </Link>
                </li>
                <li>
                  <Link href="/psikoedukasi" className="hover:text-gray-400">
                    Psikoterapi
                  </Link>
                </li>
                <li>
                  <Link href="/psikoedukasi" className="hover:text-gray-400">
                    Psikoedukasi
                  </Link>
                </li>
                <li>
                  <Link href="/webinar" className="hover:text-gray-400">
                    Screening Kesehatan Mental
                  </Link>
                </li>
                <li>
                  <Link href="/webinar" className="hover:text-gray-400">
                    Webinar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 mb-8 md:mb-0">
              <h5 className="text-lg font-bold mb-4 mt-24">Download App</h5>
              <div className="flex space-x-2">
                <Link href="https://play.google.com">
                  <Image
                    src="/images/playstore.png"
                    alt="Download on Playstore"
                    width={100}
                    height={40}
                  />
                </Link>
                <Link href="https://www.apple.com/app-store">
                  <Image
                    src="/images/appstore.png"
                    alt="Download on Appstore"
                    width={100}
                    height={40}
                  />
                </Link>
              </div>
              <h5 className="text-lg font-bold mb-4 mt-8">Ikuti Kami:</h5>
              <div className="flex space-x-6">
                <Link href="https://twitter.com/yourcompany">
                  <FaTwitter
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors"
                  />
                </Link>
                <Link href="https://www.facebook.com/yourcompany">
                  <FaFacebookF
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors"
                  />
                </Link>
                <Link href="https://www.instagram.com/yourcompany">
                  <FaInstagram
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/yourcompany">
                  <FaLinkedinIn
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors"
                  />
                </Link>
                <Link href="https://www.tiktok.com/@yourcompany">
                  <FaTiktok
                    size={24}
                    className="text-blue-500 hover:text-white transition-colors"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} DeepTalk, ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
