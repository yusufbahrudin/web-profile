import "../../styles/global.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "DeepTalk Indonesia - Aplikasi Konseling dan Screening",
  description: "Aplikasi Konseling dan Screening, DeepTalk Indonesia",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.png" />
      </head>
      <body
        className={`${poppins.variable} font-sans text-base text-black dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
