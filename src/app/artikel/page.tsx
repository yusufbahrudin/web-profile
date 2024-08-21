"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
const Index = dynamic(() => import("./artikel"));

export default function AplikasiPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Artikel - Aplikasi</title>
        <meta
          name="description"
          content="Explore the latest articles on various topics."
        />
      </Head>
      <Navbar />
      <Index />
      <Footer />
    </>
  );
}
