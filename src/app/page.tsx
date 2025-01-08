"use client";

import React from "react"; // Import React
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-0 m-0 bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full p-4 bg-black text-white sticky top-0 z-10">
        {/* Replace text with image */}
        <Link href="/" className="hover:underline">
          <img
            src="/images/Dal_Icon.png"  // Path to your image file
            alt="Dal De Artifex Icon"
            className="h-11"  // Adjust height as needed
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

      {/* Embed MP4 video with text overlay */}
      <div className="relative w-full h-[60vh] m-0 p-0 overflow-hidden">
        {/* Video */}
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-gray-100 text-8xl font-bold drop-shadow-md">
            Dal De Artifex
          </h1>
          <h2 className="text-gray-100 text-3xl font-semibold tracking-wider drop-shadow-md">
            The Splitting of The Artist
          </h2>
        </div>
      </div>

{/* Headshot and Introduction Section */}
<div className="flex flex-col items-center justify-center mt-8">
        <img
          src="/images/profile_pic.png" // Replace with the path to your actual headshot
          alt="Prachi Dalal"
          className="w-40 h-40 rounded-full mb-4 shadow-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800">Prachi Dalal</h1>
        <p className="text-lg text-gray-700 text-justify mt-2 max-w-lg">
          I am a Data Scientist with a Master of Science in Business Analytics and a Certificate in Machine Learning. Passionate about bridging the gap between language, creativity, and technology. I am looking for an opportunity where I can challenge the bounds of my skills and expertise.
        </p>
      </div>

       {/* Strengths Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center mb-4">
            <img
              src="/images/creative_icon.png" // Replace with appropriate icon
              alt="Creative Icon"
              className="w-22 h-24"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Creative</h2>
            <p className="text-justify text-gray-600 max-w-xs mt-2">
              A blend of artistic expression and technical innovation drives my work, allowing me to craft unique solutions and imaginative projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center mb-4">
            <img
              src="/images/analytical_icon.png" // Replace with appropriate icon
              alt="Analytical Icon"
              className="w-20 h-20"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Analytical</h2>
            <p className="text-justify text-gray-600 max-w-xs mt-2">
              Skilled in dissecting complex datasets and building insightful models that deliver actionable results and deeper understanding.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center mb-4">
            <img
              src="/images/communication_icon.png" // Replace with appropriate icon
              alt="Communication Icon"
              className="w-20 h-20"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-800">Communication</h2>
            <p className="text-justify text-gray-600 max-w-xs mt-2">
              Passionate about language and storytelling—whether through data, writing, or speaking—connecting ideas with people is my strength.
            </p>
          </div>
        </div>
      </div>
      {/* Current Project Section */}
      <section className="w-full max-w-3xl mt-12 mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Current Project
        </h2>
        <div className="text-gray-700">
          <h3 className="text-xl font-semibold mb-2">Reddit Complexity LLM</h3>
          <p className="text-justify">
            I am building a custom Large Language Model (LLM) inspired by linguistic structures and cognitive abstraction. This project quantifies &quot;conceptual complexity&quot; in Reddit comments, measuring syntax intricacy, noun usage, and abstractness. By bridging the gap between NLP and psychological insights, I aim to explore how language reflects intellectual evolution.
          </p>
          <p className="text-justify mt-2">
            <strong>Tools:</strong> Python, PyTorch, Transformers, Reddit API, Data Analysis
          </p>
        </div>
      </section>
    </div>
  );
}







