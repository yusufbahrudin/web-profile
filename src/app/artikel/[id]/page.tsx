"use client"; // Tambahkan directive ini di baris pertama

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogItem = {
  id: number;
  image: string;
  title: string;
  desc: string;
  category: string;
};

interface Props {
  params: {
    id: string;
  };
}

export default function ArticleDetail({ params }: Props) {
  const { id } = params;
  const [article, setArticle] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          throw new Error("API URL is not defined");
        }

        const response = await fetch(`${apiUrl}/user/artikel/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        setArticle(data.data); // Sesuaikan dengan struktur data dari API
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Failed to load article.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="container px-4 sm:px-6 md:px-8 lg:px-60 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <Image
        src={article.image}
        alt={article.title}
        height={600}
        width={1200}
        sizes="100vw"
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />
      <p className="mt-4">{article.desc}</p>
    </div>
  );
}
