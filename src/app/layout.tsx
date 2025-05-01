import "./globals.css";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";

export const metadata = {
  title: "My Blog",
  description: "A personal blog built with Next.js",
  icons: {
    icon: "/favicon.png", // Tambahkan ini untuk favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="text-gray-900">
        <Navbar />
        <main className="min-h-screen px-4 py-6 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
