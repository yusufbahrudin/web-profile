"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { review } from "../Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const settings = {
  lazyload: true,
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: false,
  autoplayButtonOutput: false,
  nav: false,
  speed: 400,
  gutter: 20,
  items: 6,
  responsive: {
    1200: {
      items: 6,
    },
    992: {
      items: 4,
    },
    767: {
      items: 3,
    },
    576: {
      items: 2,
    },
    320: {
      items: 1,
    },
  },
};

type ReviewItem = {
  image: string;
  desc: string;
  name: string;
  designation: string;
  rating?: number;
};

export default function Clients() {
  return (
    <section className="relative md:py-24 py-16 bg-white" id="aplikasi">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
            Ulasan Klien
          </h3>
          <p className="text-slate-400 mx-auto">
            Tanggapan klien kami sangat positif—mereka merasa aplikasi kami
            sangat memudahkan mereka dalam meningkatkan kesejahteraan mental dan
            memberikan dukungan yang berharga dalam perjalanan kesehatan mental
            mereka
          </p>
        </div>
        <div className="relative mt-8">
          <TinySlider settings={settings}>
            {review.map((item: ReviewItem, index: number) => (
              <div className="tiny-slide p-2" key={index}>
                <div className="customer-testi border border-gray-300 dark:border-gray-700 rounded shadow shadow-gray-200 dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                  <div className="content mb-6">
                    <i className="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                    <p className="text-slate-400 text-[15px] mt-4">
                      {item.desc}
                    </p>
                    <hr className="my-4 border-gray-300 dark:border-gray-700" />
                    <div className="flex items-center space-x-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={
                            i < Math.floor(item.rating || 0)
                              ? faStar
                              : faStarHalfAlt
                          }
                          className="text-amber-400"
                        />
                      ))}
                      <span className="text-slate-400 text-sm ml-2">
                        {item.rating ? item.rating.toFixed(1) : "0.0"}
                      </span>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <div className="h-14 w-14 rounded-full shadow-md mx-auto mb-1 border border-gray-300 dark:border-gray-700">
                      <Image src={item.image} height={144} width={144} alt="" />
                    </div>
                    <Link
                      href=""
                      className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
    </section>
  );
}
