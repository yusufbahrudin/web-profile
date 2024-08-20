"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const HeroOne = dynamic(() => import("./HeroOne"));
const Footer = dynamic(() => import("../components/Footer"));
const HeroTwo = dynamic(() => import("./HeroTwo"));
const HeroThree = dynamic(() => import("./HeroThree"));
const HeroFour = dynamic(() => import("./HeroFour"));
// const ClientReview = dynamic(() => import("../pages/aplikasi/Clients"));
const HeroFive = dynamic(() => import("./HeroFive"));

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
      {/* <ClientReview /> */}
      <Footer />
    </>
  );
}
