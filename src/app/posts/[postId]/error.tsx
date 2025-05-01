"use client";

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold mb-4">Oops, something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}
