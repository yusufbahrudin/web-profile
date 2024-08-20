// pages/artikel.tsx
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
  categories: BlogCategory[]; // Pastikan ini array dari BlogCategory
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
    <section className="relative md:py-24 py-16" id="artikel">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Baca 100+ Artikel Baru
          </h3>
          <Link
            href="/artikel"
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="flex justify-center overflow-x-auto space-x-4 pb-4">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-xl border ${
                selectedCategory === category.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[15px] mt-8">
          {filteredBlogs.slice(0, 4).map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              categories={item.categories} // Pastikan ini sesuai dengan tipe CardProps
              description={item.diskripsi}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artikel;
