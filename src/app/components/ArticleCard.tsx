// components/Card.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
}

interface CardProps {
  id: number;
  title: string;
  image: string;
  categories: Category[];
  description: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  image,
  categories,
  description,
}) => {
  return (
    <Link
      href={`/blog/${id}`}
      key={id}
      className="relative block rounded-lg border border-gray-300 overflow-hidden bg-white dark:bg-slate-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
      style={{ borderColor: "#E5E7EB", borderWidth: "1px" }}
    >
      <div className="relative w-full h-60 border-b border-gray-300">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
        />
      </div>
      <div className="p-6">
        <h4 className="text-md font-semibold text-gray-800 dark:text-white">
          {title}
        </h4>
        <div className="mt-2 flex flex-wrap">
          {/* Menampilkan nama-nama kategori dengan border biru */}
          {categories.map((category) => (
            <span
              key={category.id}
              className="bg-blue-100 border border-blue-500 text-blue-600 text-xs px-2 py-1 rounded mr-2 mb-2"
            >
              {category.name}
            </span>
          ))}
        </div>
        <p className="text-slate-400 mt-1 text-[13px] line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
