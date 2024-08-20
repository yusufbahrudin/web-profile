"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroOne = dynamic(() => import("./beranda/HeroOne"));
const AboutUs = dynamic(() => import("./beranda/AboutUs"));
const Services = dynamic(() => import("./beranda/Service"));
const Blogs = dynamic(() => import("./beranda/Artikel"));
const Footer = dynamic(() => import("./components/Footer"));
const Voucher = dynamic(() => import("./beranda/voucher"));
const Webinar = dynamic(() => import("./beranda/webinar"));

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
