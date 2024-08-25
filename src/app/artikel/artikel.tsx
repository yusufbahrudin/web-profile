import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type BlogCategory = {
  id: number;
  name: string;
};

type BlogItem = {
  id: number;
  image: string;
  title: string;
  desc: string;
  categories: BlogCategory[];
};

export default function Artikel2() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<
    { value: string; name: string }[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<number>(8);

  const containerRef = useRef<HTMLDivElement>(null);

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

        const transformedBlogs: BlogItem[] = data.map((blog: any) => ({
          id: blog.id,
          title: blog.title,
          image: blog.image || "/default-image.jpg",
          desc: blog.diskripsi,
          categories: blog.categories.map((cat: any) => ({
            id: cat.id,
            name: cat.name,
          })),
        }));

        setBlogs(transformedBlogs);

        const uniqueCategories = [
          ...new Set(
            transformedBlogs.flatMap((blog) =>
              blog.categories.map((cat) => cat.name.toLowerCase())
            )
          ),
        ].sort();

        const categoryFilters = uniqueCategories.map((name) => ({
          value: name,
          name: name.charAt(0).toUpperCase() + name.slice(1),
        }));

        setCategories(categoryFilters);

        // Set default category to the first one in alphabetical order
        setSelectedCategory(
          categoryFilters.length > 0 ? categoryFilters[0].value : ""
        );
        setFilteredBlogs(transformedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    // Reset visibleItems to 8 when the selectedCategory changes
    setVisibleItems(8);

    const filtered =
      selectedCategory === ""
        ? blogs
        : blogs.filter((item) =>
            item.categories.some(
              (cat) => cat.name.toLowerCase() === selectedCategory.toLowerCase()
            )
          );

    setFilteredBlogs(filtered);
  }, [selectedCategory, blogs]);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 8);
  };

  return (
    <section className="relative py-8 md:py-16" id="artikel">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-60 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md sm:text-2xl md:text-2xl font-semibold text-gray-700 mb-2">
            Jelajahi Topik Terkini
          </h3>
        </div>

        <div className="flex justify-start sm:justify-center overflow-x-auto sm:overflow-x-hidden space-x-2 sm:space-x-4 pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg rounded-xl border ${
                selectedCategory === category.value
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-blue-200 text-blue-700 border-blue-500"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-4">
            <p className="text-gray-700">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-4">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <>
            {/* Desktop View */}
            <div
              ref={containerRef}
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 sm:mt-6 md:mt-8 pb-4"
            >
              {filteredBlogs.slice(0, visibleItems).map((item) => (
                <Link
                  href={`/artikel/${item.id}`}
                  key={item.id}
                  className="relative block rounded-lg overflow-hidden bg-white dark:bg-slate-900 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-blue-500"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={192}
                      width={284}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm md:text-base lg:text-base font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.categories.map((category) => (
                        <span
                          key={category.id}
                          className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400 mt-2 text-xs line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile View */}
            <div
              ref={containerRef}
              className="md:hidden flex flex-col gap-2 mt-4 sm:mt-6 md:mt-8 pb-4"
            >
              {filteredBlogs.slice(0, visibleItems).map((item) => (
                <Link
                  href={`/artikel/${item.id}`}
                  key={item.id}
                  className="relative flex items-start bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-blue-500"
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={96}
                      width={96}
                      sizes="(max-width: 440px) 70vw, 30vw"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="p-2 flex flex-col flex-grow">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                      {" "}
                      {item.title}
                    </h4>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {item.categories.map((category) => (
                        <span
                          key={category.id}
                          className="bg-blue-100 text-blue-700 text-xs px-1 py-1 rounded-full"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-400 mt-1 text-xs line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredBlogs.length > visibleItems && (
              <div className="flex justify-center py-4">
                <button
                  onClick={handleLoadMore}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                >
                  Lihat Lebih Banyak
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
