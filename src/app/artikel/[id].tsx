// /artikel/[id].tsx
import { GetServerSideProps } from "next";
import { blogData } from "../Data/data"; // Adjust path if needed
import Image from "next/image";

type BlogItem = {
  id: number;
  image: string;
  title: string;
  desc: string;
  category: string;
};

interface Props {
  article: BlogItem | null;
}

export default function ArticleDetail({ article }: Props) {
  if (!article) {
    return <p>Article not found</p>;
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  const article =
    blogData.find((item) => item.id === parseInt(id as string, 10)) || null;

  return {
    props: {
      article,
    },
  };
};
