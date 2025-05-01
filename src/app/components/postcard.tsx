type PostProps = {
  title: string;
  excerpt: string;
  date: string;
};

export default function PostCard({ title, excerpt, date }: PostProps) {
  return (
    <article className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
      <h2 className="text-xl font-bold mb-2 text-red-800">{title}</h2>
      <p className="text-sm text-black font-bold mb-4">{new Date(date).toDateString()}</p>
      <p className="text-gray-700">{excerpt}</p>
    </article>
  );
}
