"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-0 m-0 bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full p-4 bg-black text-white sticky top-0 z-10">
        <Link href="/" className="hover:underline">
          {/* Replace "Dal De Artifex" with Image */}
          <Image
            src="/images/Dal_Icon.png"
            alt="Dal De Artifex Icon"
            width={44}
            height={44}
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

      {/* Embed MP4 video with text overlay */}
      <div className="relative w-full h-[60vh] m-0 p-0 overflow-hidden">
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
        <Image
          src="/images/profile_pic.png" // Replace with the path to your actual headshot
          alt="Prachi Dalal"
          width={160}
          height={160}
          className="rounded-full mb-4 shadow-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800">Prachi Dalal</h1>
        <p className="text-lg text-gray-700 text-justify mt-2 max-w-lg">
          I am a Data Scientist with a Master of Science in Business Analytics
          and a Certificate in Machine Learning. I&apos;m passionate about bridging the
          gap between technology, language, abstraction. I am looking for an
          opportunity where I can challenge the bounds of my skills and expertise.
        </p>
      </div>

      {/* Strengths Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
        {[
          {
            icon: "/images/analytical_icon.png",
            title: "Analytical",
            description:
              "Skilled in analyzing datasets and designing models to extract critical insights, driving strategic decisions and a deeper understanding of complex systems.",
          },
          {
            icon: "/images/creative_icon.png",
            title: "Creative",
            description:
              "Leverage creativity to approach challenges from fresh perspectives, uncovering innovative solutions and transforming imaginative projects into impactful outcomes.",
          },

          {
            icon: "/images/communication_icon.png",
            title: "Communicative",
            description:
              "Passionate about language—whether through data, writing, or speaking—I excel at connecting ideas with people in meaningful ways.",
          },
        ].map((strength, index) => (
          <div key={index} className="flex flex-col items-center justify-between max-w-xs">
            <Image src={strength.icon} alt={`${strength.title} Icon`} width={88} height={80} className="mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{strength.title}</h2>
            <p className="text-justify text-gray-600 mt-2">{strength.description}</p>
          </div>
        ))}
      </div>

      {/* Current Project Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12">
        {/* Section Title */}
        <h2 className="text-3xl font-bold italic text-gray-800 text-center mb-6">
          <u><em>Investigating Language Through a Socioeconomic Lens</em></u>
        </h2>
        
        {/* Introductory Context */}
        <p className="text-gray-700 text-lg text-justify mb-10">
          This project is part of my broader research initiative focused on exploring the bidirectional 
          relationship between language and socioeconomic status. Specifically, I am investigating
          how language can potentially quantify &quot;Conceptual Complexity&quot; and its role in the 
          intellectual evolution of different SES groups. By fine-tuning large language models
          for nuanced semantic analysis, my goal is to one day uncover the intricate relationship between
          socioeconomic status and linguistic abstraction.
        </p>
      </section>
    </div>
  );
}



