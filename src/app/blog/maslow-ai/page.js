"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog2Page = () => {
  return (
    <div className="relative flex flex-col min-h-screen p-0 m-0 bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full p-4 bg-black text-white sticky top-0 z-10">
        <Link href="/" className="hover:underline">
          {/* Replace "Dal De Artifex" with Image */}
          <Image
            src="/images/Dal_Icon.png"
            alt="Dal De Artifex Icon"
            width={44}
            height={44}
            className="h-11 transition-transform transform hover:scale-110 hover:opacity-90"
          />
        </Link>

        <nav className="flex gap-6 text-lg font-medium">
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/art" className="hover:text-blue-600 transition-colors">
            Art
          </Link>
          <Link href="/trinkets" className="hover:text-blue-600 transition-colors">
            Trinkets
          </Link>
          <Link
            href="https://www.linkedin.com/in/prachidalal2/"
            target="_blank"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/prachidalal0"
            target="_blank"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex flex-col items-start justify-start flex-grow p-8 pl-12 relative">
        {/* Floating Icon */}
        <Link
          href="https://github.com/prachidalal0/Reddit-Complexity-LLM"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-8 left-12 z-10"
        >
          <Image
            src="/images/Maslow.png"
            alt="Creative Icon"
            width={192}
            height={200}
            className="h-48 w-50 hover:opacity-90 hover:scale-110 transition-opacity bg-transparent mb-8"
          />
        </Link>

        {/* Title */}
        <div className="mt-56 mb-4">
          <h2 className="text-4xl font-semibold text-gray-800 italic underline leading-normal">
            What can Maslow&apos;s Hierarchy of Needs tell us about various Socioeconomic groups?
          </h2>
          <h3 className="text-3xl font-semibold text-gray-800 italic leading-tight mt-1">
            A work in progress.......stay tuned :)
          </h3>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full p-4 bg-black text-white text-center">
        <p>&copy; {new Date().getFullYear()} Dal De Artifex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog2Page;
