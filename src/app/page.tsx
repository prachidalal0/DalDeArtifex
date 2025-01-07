"use client";

import React from "react"; // Import React
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-0 m-0 bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full p-4 bg-black text-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            Dal De Artifex
          </Link>
        </h1>

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
          <Link href="https://www.linkedin.com/in/prachidalal2/" target="_blank" className="hover:text-blue-600 transition-colors">
            LinkedIn
          </Link>
          <Link href="https://github.com/prachidalal0" target="_blank" className="hover:text-blue-600 transition-colors">
            GitHub
          </Link>
        </nav>
      </header>

      {/* Embed MP4 video */}
      <div className="w-full h-full m-0 p-0">
        <video
          width="100%"
          height="auto" // Keep height auto to adjust based on width
          autoPlay
          loop
          muted
          className="object-cover" // Make the video cover the container area without distorting it
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Prachi Dalal</h2>
        <div className="text-gray-700 max-w-xl text-justify">
          <p className="text-lg">
            I am Prachi Dalal, a Data Scientist with a Master of Science in Business Analytics and a Certificate in Applied Machine Learning. I am currently seeking an opportunity to push the limits of my skills and expertise.
            <br /><br /> {/* This adds a line space */}
            My work is driven by a deep interest in the role technology plays in the evolution of the mind. This subtle yet powerful influence intersects with areas such as socioeconomic and social impacts, neurology, physics, philosophy, and more. Currently, I am focused on an interdisciplinary project that explores how language plays a crucial role in the brain's processes of creativity and abstraction. Specifically, I am developing a Large Language Model (LLM) to quantify "conceptual complexity" by analyzing linguistic structures and cognitive patterns. My research integrates the capabilities of transformer architecture with current psychological insights to explore how these systems contribute to our intellectual evolution.
          </p>
        </div>
      </main>
    </div>
  );
}





