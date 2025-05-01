import Image from "next/image";

export default function ContactPage() {
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
          Contact Me
          </h1>
        </div>
      </section>


    <section className="text-center py-12 bg-white rounded-lg shadow-lg">
      {/* <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Contact Me</h1> */}
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-xl shadow-sm bg-gray-50 text-gray-900"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-xl shadow-sm bg-gray-50 text-gray-900"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded-xl shadow-sm bg-gray-50 text-gray-900 h-40"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white py-3 px-6 rounded-xl w-full transition hover:bg-purple-500"
        >
          Send Message
        </button>
      </form>
    </section>
    </>
  );
}
