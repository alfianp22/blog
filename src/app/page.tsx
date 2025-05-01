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

export default function HomePage() {
  const [featured, setFeatured] = useState<Article | null>(null);
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const featuredRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/featured`,
          {
            cache: "no-store",
          }
        );
        const latestRes = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`,
          {
            cache: "no-store",
          }
        );

        if (!featuredRes.ok || !latestRes.ok) {
          throw new Error("Failed to fetch articles");
        }

        const featuredData: Article = await featuredRes.json();
        const latestData: Article[] = await latestRes.json();

        setFeatured(featuredData);
        setLatestArticles(latestData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-20">
        <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Welcome to My Blog
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
            Sharing insights, stories, and experiences from all walks of life.
            Join us as we explore the world through words and ideas.
          </p>
          <Link
            href="#latest"
            className="bg-blue-800 hover:bg-red-900 text-white py-3 px-8 rounded-xl transition duration-300 inline-block"
          >
            Explore Posts
          </Link>
        </div>
      </section>

      {/* Featured Post Section */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Featured Article
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            {featured.image && (
              <Image
                src={featured.image}
                alt={featured.title}
                width={800}
                height={500}
                className="rounded-md w-full object-cover mb-4"
              />
            )}
            <h3 className="text-xl font-bold mb-2">{featured.title}</h3>
            <p className="text-gray-700">{featured.preview}</p>
            <Link
              href={`/posts/${featured.objectId}`}
              className="text-blue-600 hover:text-blue-800 font-semibold mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section id="latest" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
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
                  <p className="text-gray-600 text-sm mt-2">
                    {article.preview}
                  </p>
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
