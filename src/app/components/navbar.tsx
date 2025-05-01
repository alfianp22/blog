"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Atau bisa pake alert:
    // alert(`Searching for: ${searchTerm}`);
  };

  return (
    <nav className="bg-black text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/uchiha.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-2xl">My Blog</span>
        </Link>

        {/* Menu + Search */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-gray-200 text-black px-3 py-1 rounded-md hover:bg-red-800 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
