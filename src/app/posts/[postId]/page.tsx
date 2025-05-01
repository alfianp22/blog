import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HTMLAttributes } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface Article {
  objectId: string;
  title: string;
  preview: string;
  image: string;
  content: string;
}

async function fetchArticle(postId: string): Promise<Article> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${postId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}

export default async function PostPage({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const article = await fetchArticle(postId);

  type CodeProps = {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
  } & HTMLAttributes<HTMLElement>;

  return (
    <>
      {/* Background Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-20 mb-16">
        <div className="fixed top-0 bottom-0 left-0 right-0 -z-10">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-extrabold mb-4 text-white">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-md w-full object-cover mb-6"
          />
        )}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ node, ...props }) => (
              <p className="text-white mb-4 leading-relaxed" {...props} />
            ),
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-white" {...props} />
            ),
            code: ({ inline, className, children, ...props }: CodeProps) => {
              return inline ? (
                <code className="bg-gray-100 rounded px-1 text-sm text-pink-600" {...props}>
                  {children}
                </code>
              ) : (
                <pre className="bg-gray-800 text-gray-100 p-4 rounded my-4 overflow-x-auto">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },
            img: ({ node, ...props }) => (
              <img className="rounded-lg my-4 mx-auto max-h-96 object-contain" {...props} alt="" />
            ),
            table: ({ node, ...props }) => (
              <table className="w-full table-auto border-collapse border border-gray-300 my-6 text-sm" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="border border-gray-300 bg-gray-100 p-2 font-bold" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="border border-gray-300 p-2" {...props} />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </section>
    </>
  );
}
