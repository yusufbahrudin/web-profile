import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CalendarIcon,
  UsersIcon,
  DevicePhoneMobileIcon,
  TagIcon,
  UserIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

type WebinarItem = {
  id: number;
  title: string;
  image: string;
  date: string;
  limit_peserta: number;
  author: string;
  media_layanan: string;
  harga_sertifikat: string;
  link: string | null;
  time_start: string | null;
  time_end: string | null;
  is_member: number;
  created_at: string;
  updated_at: string;
};

export default function Webinar() {
  const [webinars, setWebinars] = useState<WebinarItem[]>([]);
  const [displayedWebinars, setDisplayedWebinars] = useState<WebinarItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    async function fetchWebinars() {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/webinar`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data } = await response.json();

        if (data && data.data) {
          const sortedWebinars = data.data.sort(
            (a: WebinarItem, b: WebinarItem) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          );

          setWebinars(sortedWebinars);
          setDisplayedWebinars(sortedWebinars.slice(0, 2));
        } else {
          throw new Error("Unexpected API response structure.");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWebinars();
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = nextPage * 2;
    const newDisplayedWebinars = webinars.slice(startIndex, startIndex + 2);

    setDisplayedWebinars([...displayedWebinars, ...newDisplayedWebinars]);
    setCurrentPage(nextPage);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const formatRupiah = (amount: number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(amount);
  };

  const isButtonDisabled = (
    date: string,
    timeStart: string | null,
    timeEnd: string | null
  ): boolean => {
    if (!timeStart || !timeEnd) return true;

    const currentTime = new Date();
    const eventDate = new Date(date).toDateString();
    const currentDateString = currentTime.toDateString();

    const startTime = new Date(`${date} ${timeStart}`).getTime();
    const endTime = new Date(`${date} ${timeEnd}`).getTime();
    const tenMinutesBeforeStart = startTime - 10 * 60 * 1000;

    // Cek apakah tanggalnya sama dengan hari ini
    if (eventDate !== currentDateString) {
      return true; // Disable button jika tanggalnya tidak sama dengan hari ini
    }

    // Cek apakah waktu sekarang berada dalam rentang 10 menit sebelum waktu mulai hingga waktu akhir
    return (
      currentTime.getTime() < tenMinutesBeforeStart ||
      currentTime.getTime() > endTime
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="relative md:py-24 py-16" id="webinar">
      <div className="container px-4 md:px-8 lg:px-60 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h3 className="text-md md:text-4xl font-semibold text-gray-700 text-center md:text-left w-full md:w-auto">
            Webinar & Seminar
          </h3>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-[30px] md:mt-8">
          {displayedWebinars.map((item: WebinarItem) => (
            <div
              key={item.id}
              className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500 flex flex-col h-full"
            >
              <div className="relative h-100 md:h-[550px] w-full mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-4">
                  {item.title}
                </h4>
                <div className="mt-4 flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <p>
                        <strong>Tanggal :</strong> {item.date}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <UsersIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <p>
                        <strong>Limit Peserta :</strong> {item.limit_peserta}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <DevicePhoneMobileIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <p>
                        <strong>Media Layanan :</strong> {item.media_layanan}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <TagIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <p>
                        <strong>Harga :</strong>{" "}
                        {formatRupiah(parseFloat(item.harga_sertifikat))}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <p>
                        <strong>Author :</strong> {item.author}
                      </p>
                    </div>
                    {item.time_start && item.time_end && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <p>
                          <strong>Jadwal :</strong> {item.time_start} -{" "}
                          {item.time_end}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  href={
                    isButtonDisabled(item.date, item.time_start, item.time_end)
                      ? "#"
                      : item.link
                  }
                  className={`mt-4 px-4 py-2 ${
                    isButtonDisabled(item.date, item.time_start, item.time_end)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white rounded-lg transition-colors duration-300 w-full text-center`}
                  target={item.link ? "_blank" : undefined} // Buka di tab baru hanya jika item.link ada
                  rel={item.link ? "noopener noreferrer" : undefined} // Keamanan tambahan untuk link eksternal
                >
                  Ikuti Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {displayedWebinars.map((item: WebinarItem) => (
              <div
                key={item.id}
                className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-500 flex flex-col h-full"
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h4 className="text-xs font-semibold text-gray-800 dark:text-white text-center mb-4">
                    {item.title}
                  </h4>
                  <div className="mt-4 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center text-gray-600 text-xs">
                      <CalendarIcon className="h-3 w-3 text-blue-500 mr-2" />
                      <p>
                        <strong>Tanggal :</strong> {item.date}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <UsersIcon className="h-3 w-3 text-blue-500 mr-2" />
                      <p>
                        <strong>Limit Peserta :</strong> {item.limit_peserta}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <DevicePhoneMobileIcon className="h-3 w-3 text-blue-500 mr-2" />
                      <p>
                        <strong>Media Layanan :</strong> {item.media_layanan}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <TagIcon className="h-3 w-3 text-blue-500 mr-2" />
                      <p>
                        <strong>Harga :</strong>{" "}
                        {formatRupiah(parseFloat(item.harga_sertifikat))}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <UserIcon className="h-3 w-3 text-blue-500 mr-2" />
                      <p>
                        <strong>Author :</strong> {item.author}
                      </p>
                    </div>
                    {item.time_start && item.time_end && (
                      <div className="flex items-center text-gray-600 text-xs">
                        <ClockIcon className="h-3 w-3 text-blue-500 mr-2" />
                        <p>
                          <strong>Jadwal :</strong> {item.time_start} -{" "}
                          {item.time_end}
                        </p>
                      </div>
                    )}
                  </div>
                  <Link
                    href={
                      isButtonDisabled(
                        item.date,
                        item.time_start,
                        item.time_end
                      )
                        ? "#"
                        : item.link || "#" // Gunakan item.link jika ada, atau fallback ke "#"
                    }
                    className={`mt-4 inline-block px-2 py-2 ${
                      isButtonDisabled(
                        item.date,
                        item.time_start,
                        item.time_end
                      )
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white text-xs md:text-sm rounded-md transition-colors duration-300 w-full text-center`}
                  >
                    Ikuti Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-8 text-center">
          {displayedWebinars.length < webinars.length && (
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-xs md:text-base"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
