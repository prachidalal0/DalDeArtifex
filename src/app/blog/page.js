"use client";

import React from "react";
import Link from "next/link";

const BlogPage = () => {
  // Example blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'What is "Conceptual Complexity"?',
      image: "/images/creative_icon.png",
      link: "/blog/Con_Com",
    },
    {
      id: 2,
      title: "What can Maslow's Hierarchy of Needs tell us about various Socioeconomic groups?",
      image: "/images/Maslow.png",
      link: "/blog/maslow-ai",
    },
    {
      id: 3,
      title: "Language and Socioeconomic Gaps will Exponentially Increase with the Introduction of AI",
      image: "/images/SES.png",
      link: "/blog/language-gaps",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen p-0 m-0 bg-gray-100">
     {/* Header Section */}
     <header className="flex justify-between items-center w-full p-4 bg-black text-white sticky top-0 z-10">
        <Link href="/" className="hover:underline">
          {/* Replace "Dal De Artifex" with Image */}
          <img
            src="/images/Dal_Icon.png"
            alt="Dal De Artifex Icon"
            className="h-11 transition-transform transform hover:scale-110 hover:opacity-100"
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

      {/* Blog Page Content */}
      <main className="flex flex-col items-start justify-center flex-grow p-8 pb-52">
        <h2 className="text-2xl font-bold italic underline text-gray-800 mb-8">
          Exploring Socioeconomic Linguistic Patterns: Fine-Tuning LLMs for
          Nuanced Semantic Analysis to Assess Socioeconomic Variations in
          &ldquo;Conceptual Complexity&rdquo;
        </h2>

        {/* Blog Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-64">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:opacity-90"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

