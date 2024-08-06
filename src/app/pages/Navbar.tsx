import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "contact", "artikel", "webinar", "aplikasi"];
      const scrollPosition = window.scrollY + 200;
      console.log("Scroll Position:", scrollPosition);
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        console.log(
          "Section:",
          section,
          "Offset Top:",
          sectionElement?.offsetTop
        );
        if (
          sectionElement &&
          scrollPosition >= sectionElement.offsetTop &&
          scrollPosition <
            sectionElement.offsetTop + sectionElement.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    const debouncedHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-white border-b-2 border-gray-200 z-50">
      <div className="container mx-auto flex items-center justify-between lg:px-14 py-4">
        <Link href="/" className="flex items-center">
          <Image width={260} height={96} src="/images/logo.png" alt="Logo" />
        </Link>

        <div className="hidden lg:flex space-x-6 ml-auto text-md">
          <Link
            href="/"
            className={`cursor-pointer transition duration-300 pb-1 ${
              activeSection === "home"
                ? "text-blue-500 relative"
                : "text-gray-600 hover:text-blue-500"
            }`}
            style={{ fontFamily: "CircularStd, Arial, sans-serif" }}
          >
            Beranda
            {activeSection === "home" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-500 rounded-lg"></span>
            )}
          </Link>
          <Link
            href="/contact"
            className={`cursor-pointer transition duration-300 pb-1 ${
              activeSection === "contact"
                ? "text-blue-500 relative"
                : "text-gray-600 hover:text-blue-500"
            }`}
            style={{ fontFamily: "CircularStd, Arial, sans-serif" }}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-500 rounded-lg"></span>
            )}
          </Link>
          <Link
            href="/artikel"
            className={`cursor-pointer transition duration-300 pb-1 ${
              activeSection === "artikel"
                ? "text-blue-500 relative"
                : "text-gray-600 hover:text-blue-500"
            }`}
            style={{ fontFamily: "CircularStd, Arial, sans-serif" }}
          >
            Artikel
            {activeSection === "artikel" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-500 rounded-lg"></span>
            )}
          </Link>
          <Link
            href="/webinar"
            className={`cursor-pointer transition duration-300 pb-1 ${
              activeSection === "webinar"
                ? "text-blue-500 relative"
                : "text-gray-600 hover:text-blue-500"
            }`}
            style={{ fontFamily: "CircularStd, Arial, sans-serif" }}
          >
            Webinar
            {activeSection === "webinar" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-500 rounded-lg"></span>
            )}
          </Link>
          <Link
            href="/aplikasi"
            className={`cursor-pointer transition duration-300 pb-1 ${
              activeSection === "aplikasi"
                ? "text-blue-500 relative"
                : "text-gray-600 hover:text-blue-500"
            }`}
            style={{ fontFamily: "CircularStd, Arial, sans-serif" }}
          >
            Aplikasi
            {activeSection === "aplikasi" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-500 rounded-lg"></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
