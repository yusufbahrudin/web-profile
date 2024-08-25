import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Slider from "react-slick";
import Card from "../components/ArticleCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const NextArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <button
//       className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white text-black shadow-lg transition-all"
//       onClick={onClick}
//     >
//       &gt;
//     </button>
//   );
// };

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white text-black shadow-lg transition-all"
      onClick={onClick}
    >
      &lt;
    </button>
  );
};

interface BlogCategory {
  id: number;
  name: string;
}

interface BlogItem {
  id: number;
  title: string;
  image: string;
  diskripsi: string;
  categories: BlogCategory[];
}

const Artikel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          console.error("NEXT_PUBLIC_API_URL is not defined");
          return;
        }

        const response = await axios.get(`${apiUrl}/user/artikel`);
        const data = response.data.data.data;

        const transformedBlogs = data.map((blog: any) => ({
          id: blog.id,
          title: blog.title,
          image: blog.image || "/default-image.jpg",
          diskripsi: blog.diskripsi,
          categories: blog.categories.map((cat: any) => ({
            id: cat.id,
            name: cat.name as string, // Explicitly cast 'name' as string
          })),
        }));

        setBlogs(transformedBlogs);

        // Extract unique categories from the blog data
        const uniqueCategoryNames = [
          ...new Set(
            transformedBlogs.flatMap((blog) =>
              blog.categories.map((cat) => cat.name)
            )
          ),
        ];

        // Ensure the categories are sorted
        const sortedCategoryNames = uniqueCategoryNames
          .filter((name): name is string => typeof name === "string") // Ensure name is a string
          .sort((a, b) => a.localeCompare(b)); // Sort alphabetically

        const uniqueCategories: BlogCategory[] = sortedCategoryNames.map(
          (name, index) => ({
            id: index + 1,
            name: name,
          })
        );

        setCategories(uniqueCategories);

        // Set the default selected category as the first in alphabetical order
        setSelectedCategory(uniqueCategories[0]?.name || "");
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((item) =>
    item.categories.some(
      (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
    )
  );

  const limitedBlogs = filteredBlogs.slice(0, 4); // Limit to 4 articles per category

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative md:py-24 py-16" id="home">
      <div className="container px-4 md:px-8 lg:px-60 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-md md:text-2xl font-semibold text-gray-700">
            Baca 100+ Artikel Baru
          </h3>
          <Link
            href="/artikel"
            className="text-blue-500 hover:text-blue-700 text-xs md:text-lg transition-colors duration-300"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="flex justify-start sm:justify-center overflow-x-auto sm:overflow-x-hidden space-x-2 sm:space-x-4 pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-lg rounded-xl border ${
                selectedCategory === category.name
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Mobile view: Slick carousel */}
        <div className="block md:hidden relative">
          <Slider {...settings}>
            {limitedBlogs.map((item) => (
              <div key={item.id} className="p-1">
                <Card
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  categories={item.categories}
                  description={item.diskripsi}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop view: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 space-x-4 md:space-x-0 pb-4 mt-8">
          {limitedBlogs.map((item) => (
            <div key={item.id} className="min-w-[250px]">
              <Card
                id={item.id}
                title={item.title}
                image={item.image}
                categories={item.categories}
                description={item.diskripsi}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artikel;
