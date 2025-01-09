"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
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
            className="transition-transform transform hover:scale-110 hover:opacity-90"
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

      {/* About Page Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-8 relative">
        {/* Floating Icon */}
        <Link
          href="https://github.com/prachidalal0/DalDeArtifex"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Image
            src="/images/Dal_Icon.png"
            alt="Dal De Artifex Icon"
            width={200}
            height={200}
            className="hover:opacity-90 hover:scale-110 transition-opacity bg-transparent"
          />
        </Link>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-48 mb-6">
          Origin of Dal De Artifex
        </h2>

        {/* Content */}
        <div className="text-gray-700 max-w-5xl text-justify mt-4">
          <p className="text-xl leading-relaxed">
            Dal De Artifex is a tribute to the interplay between technology, creativity, and ancient wisdom, inspired in part by the ring of my own last name.{" "}
            <Link
              href="https://books.google.com/books?id=NoicAQAAQBAJ&pg=PA116#v=onepage&q&f=false"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Dal
            </Link>
            , derived from Sanskrit, means &quot;split&quot; (a concept reflected in the &quot;split lentils&quot; we consume daily), symbolizes the fragmented yet interconnected nature of our Selves. This understanding, deeply rooted in ancient traditions, has been modernized through the{" "}
            <Link
              href="https://ifs-institute.com/resources/articles/internal-family-systems-model-outline"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Internal Family Systems (IFS)
            </Link>{" "}
            framework of psychology. De and{" "}
            <Link
              href="https://latin-dictionary.net/definition/4896/artifex-artificis"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Artifex
            </Link>
            , both rooted in Latin, translate to &quot;of&quot; and &quot;artful &amp; creative expert,&quot; capturing the essence of the irreplaceable human ingenuity we all possess.
            <br />
            <br />
            At its core, Dal De Artifex explores the necessity of human abstraction—the uniquely human ability to synthesize, interpret, and innovate. This skill has been the foundation of our intellectual evolution. New ideas emerge when abstract principles from one discipline are translated and applied to another, fostering fresh perspectives. For instance, research theorizes parallels between the intricate encoding of{" "}
            <Link
              href="https://www.researchgate.net/publication/50986117_DNA_is_a_fractal_antenna_in_electromagnetic_fields"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              organic DNA and signal transmission mechanisms
            </Link>
            . By bridging these seemingly unrelated fields, we aim to uncover deeper understandings of the complexities of{" "}
            <Link
              href="https://pubs.acs.org/doi/10.1021/acs.jpca.7b00348"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              our genetic code and its underlying structure
            </Link>
            . This includes examining the role of{" "}
            <Link
              href="https://www.emf-portal.org/en"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              EMF
            </Link>{" "}
            (electromagnetic fields) in these systems. While technology can mimic abstraction, it has yet to replicate the depth that drives humanity&apos;s greatest creations. The concept of the &quot;splitting of the artist&quot; envisions technology not as a replacement for human creativity, but as a tool to deepen and expand it.
            <br />
            <br />
            This website also examines how technology has given rise to a &quot;hive mind,&quot; collapsing the boundaries of three-dimensional space into a shared, two-dimensional digital plane where we can exist simultaneously across multiple realms. Threads of collective knowledge and thought weave together, sparking connections that lead to entirely new ideas. The most remarkable neural network you will ever find is the one inside your head—and now it has the opportunity to train on an unprecedented wealth of data collected through this hive mind!
            <br />
            <br />
            Fueled by my personal love for computer science, language, philosophy, and{" "}
            <Link href="/art" className="text-blue-600 hover:underline">
              art
            </Link>
            , Dal De Artifex serves as a collection of multidisciplinary projects that bridge technical exploration, philosophical concepts, and artistic endeavors. It reflects my fascination with how technology shapes the way we think, create, and connect, while celebrating the enduring power of human abstraction in driving intellectual and cultural progress.
          </p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full p-4 bg-black text-white text-center">
        <p>&copy; {new Date().getFullYear()} Dal De Artifex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
