"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  objectId: string;
  title: string;
  preview: string;
  image: string;
  content: string;
}

export default function PostsPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch articles for Categories Page");
        }

        const data: Article[] = await res.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArticles();
  }, []);


  return (
    <>
      {/* Background Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-20 mb-16">
        <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-white">
            All Posts
          </h1>
        </div>
      </section>

      

      {/* Articles Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* <h2 className="text-2xl font-semibold mb-6">All Posts</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.objectId}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {article.image && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <span className="text-sm text-blue-600 font-semibold">
                    Otomotif
                  </span>
                  <h3 className="text-lg font-bold mt-1">{article.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{article.preview}</p>
                  <Link
                    href={`/posts/${article.objectId}`}
                    className="mt-4 inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
