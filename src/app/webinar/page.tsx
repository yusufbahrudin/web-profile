"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../pages/Navbar"));
const Footer = dynamic(() => import("../pages/Footer"));
const Index = dynamic(() => import("../pages/webinar/index"));

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
      <Index />
      <Footer />
    </>
  );
}
