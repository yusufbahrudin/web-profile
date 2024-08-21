import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Card from "../components/ArticleCard";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  const filterCategories = [
    { name: "All", value: "all" },
    { name: "Technology", value: "tech" },
    { name: "Health", value: "health" },
    { name: "Lifestyle", value: "lifestyle" },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
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
            name: cat.name,
          })),
        }));

        setBlogs(transformedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((item) =>
          item.categories.some(
            (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

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
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-lg rounded-xl border ${
                selectedCategory === category.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 overflow-x-auto sm:overflow-x-hidden space-x-4 sm:space-x-0 pb-4 scrollbar-hide mt-8">
          {filteredBlogs.slice(0, 4).map((item) => (
            <div key={item.id} className="min-w-[250px] sm:min-w-0">
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
