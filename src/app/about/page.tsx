import Image from "next/image";

export default function AboutPage() {
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
            About Me
          </h1>
        </div>
      </section>
    <section className="text-center py-12 bg-white text-gray-900 rounded-lg shadow-lg">
      {/* <h1 className="text-4xl font-extrabold mb-6">About Me</h1> */}
      <p className="text-lg max-w-3xl mx-auto mb-8">
        Welcome to my personal blog! I’m passionate about sharing my
        experiences, knowledge, and lessons learned along the way. From
        technology to travel, my aim is to inspire and engage my readers. Join
        me in this journey of discovery!
      </p>
      <a
        href="/contact"
        className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-6 rounded-xl transition"
      >
        Get in Touch
      </a>
    </section>
    </>
  );
}
