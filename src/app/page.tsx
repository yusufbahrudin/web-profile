"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./pages/Navbar"));
const HeroOne = dynamic(() => import("./pages/beranda/HeroOne"));
const AboutUs = dynamic(() => import("./pages/beranda/AboutUs"));
const Services = dynamic(() => import("./pages/beranda/Service"));
const Blogs = dynamic(() => import("./pages/beranda/Blogs"));
const Footer = dynamic(() => import("./pages/Footer"));
const Voucher = dynamic(() => import("./pages/beranda/voucher"));
const Webinar = dynamic(() => import("./pages/beranda/webinar"));

export default function Index() {
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
      <Voucher />
      <Services />
      <AboutUs />
      <Webinar />
      <Blogs />
      <Footer />
    </>
  );
}
