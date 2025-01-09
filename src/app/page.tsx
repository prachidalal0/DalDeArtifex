"use client";

import React from "react"; // Import React
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-0 m-0 bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center w-full p-4 bg-black text-white sticky top-0 z-10">
        <Link href="/" className="hover:underline">
          <Image
            src="/images/Dal_Icon.png"
            width={50} // Correct
            height={200} // Correct
            alt="Dal De Artifex Icon"
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
          src="/images/profile_pic.png"
          alt="Prachi Dalal"
          width={200} // Correct
          height={200} // Correct
          className="w-40 h-40 rounded-full mb-4 shadow-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800">Prachi Dalal</h1>
        <p className="text-lg text-gray-700 text-justify mt-2 max-w-lg">
          I am a Data Scientist with a Master of Science in Business Analytics
          and a Certificate in Machine Learning. I&apos;m passionate about bridging the
          gap between technology, language, and abstraction. I am looking for an
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
            <Image
              src={strength.icon}
              alt={`${strength.title} Icon`}
              width={88} // Specify width (e.g., 88px)
              height={80} // Specify height (e.g., 80px)
              className="mb-4"
            />
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

        {/* Subsection 1: Reddit Complexity LLM */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Reddit Complexity LLM
          </h3>
          <p className="text-gray-700 text-justify mb-4">
          The Reddit Complexity LLM serves as an initial step within my broader research 
          initiative to investigate the relationship between language and socioeconomic 
          patterns. This smaller-scale project is specifically designed to quantify linguistic 
          complexity in Reddit comments, focusing on measurable features such as non-linear 
          syntax structures, semantic intricacy, and noun usage. 
          My current efforts are centered on developing a custom evaluation metric that 
          integrates established methodologies with experimental evaluators, laying the groundwork 
          for future exploration into more advanced concepts like abstraction and conceptual complexity 
          as my understanding of the domain evolves.
          </p>
          
        {/* Key Metrics Box */}
        <div className="p-4 shadow-md rounded-lg mb-4" style={{ backgroundColor: "#f5e4ef", borderLeft: "4px solid #b5478d" }}>
          <h4 className="font-semibold mb-2" style={{ color: "#b5478d" }}>Key Metrics:</h4>
          
          {/* Reddit Complexity LLM Metrics */}
          <h5 className="font-semibold text-sm mb-1" style={{ color: "#b5478d" }}>Reddit Complexity LLM:</h5>
          <ul className="list-disc list-inside mb-4" style={{ color: "#b5478d" }}>
            <li>Syntax complexity (e.g., subordination, recursion)</li>
            <li>Structural patterns in comments</li>
            <li>Noun usage and frequency</li>
          </ul>
          
          {/* Abstraction Metrics for Broader Research */}
          <h5 className="font-semibold text-sm mb-1" style={{ color: "#b5478d" }}>Abstraction Metrics (Broader Research):</h5>
          <ul className="list-disc list-inside" style={{ color: "#b5478d" }}>
            <li>Quantifying conceptual separation using entropy-based measures</li>
            <li>Measuring cognitive flexibility through generalization capability</li>
            <li>Exploring abstract nouns and normalization patterns</li>
          </ul>
        </div>
          
          {/* Tools */}
          <p className="text-gray-700 mt-4">
          <strong>Tools:</strong> Reddit API (PRAW), Python, PyTorch, Tensor Operations, Transformer Architecture (e.g., multi-head attention, positional encoding), Self-Supervised Learning Techniques, Data Analysis, and Feature Engineering.
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://github.com/prachidalal0/Reddit-Complexity-LLM" 
              className="inline-block text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#933d66]" 
              style={{ backgroundColor: "#b5478d" }}
            >
              Want to Learn More?
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-300 my-10" />

        {/* Subsection 2: Exploring Socioeconomic Linguistic Patterns */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Exploring Socioeconomic Linguistic Patterns
          </h3>
          <p className="text-gray-700 text-justify mb-4">
          The Reddit Complexity LLM provides foundational insights for broader research 
          into how socioeconomic status (SES) influences linguistic complexity and abstract 
          thinking, guided by hypotheses rooted in Maslow&apos;s Hierarchy of Needs. This research 
          aims to identify correlations between SES and cognitive-linguistic patterns, including 
          syntax intricacy and conceptual generalization. Extensive hypothesis testing using 
          statistical models and linguistic analysis have to be conducted across diverse datasets 
          to account for confounding factors such as education and cultural variation.
          </p>
          
          {/* Hypotheses Box */}
          <div className="p-4 shadow-md rounded-lg mb-4" style={{ backgroundColor: "#d7f5f3", borderLeft: "4px solid #3f9d97" }}>
            <h4 className="font-semibold" style={{ color: "#3f9d97" }}>Key Hypotheses:</h4>
            <ul className="list-disc list-inside" style={{ color: "#3f9d97" }}>
              <li>Communities with higher SES exhibit greater linguistic abstraction.</li>
              <li>Maslow&apos;s basic needs hierarchy influences conceptual flexibility.</li>
              <li>Syntactic complexity correlates with educational background.</li>
            </ul>
          </div>
          
          {/* Methods */}
          <p className="text-gray-700 mt-4">
          <strong>Method Brainstorm:</strong> This study investigates entropy-based metrics to quantify 
          conceptual separation, examining how individuals from higher SES backgrounds 
          exhibit more distinct or separated concepts in language compared to overlapping or 
          less distinct concepts in lower SES groups. Clustering and topic modeling can be applied
          to identify underlying linguistic patterns, while self-supervised learning techniques 
          can be leveraged to train models on large, unstructured datasets. Additionally, 
          the generalization capability of language is explored as a proxy for cognitive 
          flexibility, with a focus on its correlation with SES and its impact on linguistic 
          abstraction.
          </p>
          <div className="mt-4 text-center">
            <a 
              href="/blog" 
              className="inline-block text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#3f9d97]" 
              style={{ backgroundColor: "#3f9d97" }}
            >
              Want to Learn More?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
