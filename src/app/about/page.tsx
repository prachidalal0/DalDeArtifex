"use client";

import React from "react";
import Link from "next/link";

const AboutPage = () => {
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

      {/* About Page Content */}
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Dal De Artifex</h1>
        <p className="text-lg max-w-2xl text-gray-700 text-justify">
          Dal De Artifex is an exploration of the interplay between technology, creativity, and consciousness. At its heart is the concept of the "splitting of the artist"—a project that merges the precise capabilities of technology with the irreplaceable abstraction created by the human mind. This idea envisions technology as a tool not to replace, but to deepen and expand the realm of artistic expression, pushing us further into the uncharted territories of creativity.
          <br /><br />
          This website also examines how technology has given rise to a "hive mind," collapsing the dimensional boundaries of physical space into a two-dimensional digital plane. In this shared space, we exist simultaneously across multiple realms, connected by threads of collective knowledge and thought. This unique phenomenon inspires the projects showcased here, which seek to navigate the intersection of human abstraction and technological innovation.
          <br /><br />
          Dal De Artifex features multidisciplinary projects that blend my passion for knowledge, creativity, and technology. From creative technical exploration to philosophical musings and artistic endeavors, each project reflects my fascination with how technology shapes the way we think, create, and connect with one another.
          <br /><br />
          Whether you're here to explore the conceptual depths of art and technology or to engage with projects that bridge diverse disciplines, Dal De Artifex invites you to join in this journey of discovery and inspiration.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;




