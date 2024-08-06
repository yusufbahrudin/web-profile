"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../pages/Navbar"));
const HeroOne = dynamic(() => import("../pages/aplikasi/HeroOne"));
const Footer = dynamic(() => import("../pages/Footer"));
const HeroTwo = dynamic(() => import("../pages/aplikasi/HeroTwo"));
const HeroThree = dynamic(() => import("../pages/aplikasi/HeroThree"));
const HeroFour = dynamic(() => import("../pages/aplikasi/HeroFour"));
const ClientReview = dynamic(() => import("../pages/aplikasi/Clients"));
const HeroFive = dynamic(() => import("../pages/aplikasi/HeroFive"));

export default function AplikasiPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <ClientReview />
      <Footer />
    </>
  );
}
