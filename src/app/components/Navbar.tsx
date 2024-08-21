import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "artikel", "webinar", "aplikasi", "about"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(
          section
        ) as HTMLElement | null;

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-20">
      {/* Container untuk desktop */}
      <div className="hidden lg:flex items-center justify-between px-14 py-4 container mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            width={120}
            height={96}
            src="/images/logo-light.png"
            alt="Logo"
            className="z-50"
          />
        </Link>

        <div className="flex items-center space-x-6">
          {["home", "artikel", "webinar", "aplikasi", "about"].map(
            (section) => (
              <Link
                key={section}
                href={
                  section === "about"
                    ? "/about"
                    : `/${section === "home" ? "" : section}`
                }
                className={`cursor-pointer transition duration-300 text-lg border-b-2 ${
                  activeSection === section
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-600 border-transparent hover:text-blue-500"
                }`}
              >
                {section === "about"
                  ? "Tentang Kami"
                  : section.charAt(0).toUpperCase() +
                    section.slice(1).replace("-", " ")}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Menu toggle dan logo untuk mobile */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image
            width={100}
            height={80}
            src="/images/logo-light.png"
            alt="Logo"
            className="z-50"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu dropdown untuk mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 bg-white p-6 z-40 ${
          isMenuOpen ? "w-full h-auto" : "w-0 h-0 overflow-hidden"
        }`}
        style={{
          transition: "width 0.3s ease, height 0.3s ease",
        }}
      >
        <div
          className={`lg:hidden fixed top-0 left-0 bg-white p-6 z-40 ${
            isMenuOpen ? "w-full h-auto" : "w-0 h-0 overflow-hidden"
          }`}
          style={{
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        >
          <div className="flex flex-col mt-16 space-y-4">
            {["home", "artikel", "webinar", "aplikasi", "about"].map(
              (section) => (
                <div key={section} className="flex">
                  <Link
                    href={
                      section === "about"
                        ? "/about"
                        : `/${section === "home" ? "" : section}`
                    }
                    className="cursor-pointer transition duration-300 text-lg"
                    onClick={toggleMenu}
                  >
                    <span
                      className={`border-b-2 ${
                        activeSection === section
                          ? "text-blue-500 border-blue-500"
                          : "text-gray-600 border-transparent hover:text-blue-500"
                      }`}
                    >
                      {section === "about"
                        ? "Tentang Kami"
                        : section.charAt(0).toUpperCase() +
                          section.slice(1).replace("-", " ")}
                    </span>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
