"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [diceResult, setDiceResult] = useState<string | null>(null);
  const [numOfDice, setNumOfDice] = useState(5); // Default to 5 dice for the poker game

  // Function to fetch dice results
  const fetchDiceResult = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/roll-dice?numOfDice=${numOfDice}` // Change URL to /roll-dice
      );
      if (response.ok) {
        const data = await response.text();
        setDiceResult(data);
      } else {
        throw new Error("Failed to fetch dice roll");
      }
    } catch (error) {
      console.error("Error fetching dice result:", error);
      setDiceResult("Error fetching dice roll");
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-8 bg-gray-100">
      <header className="flex justify-between items-center w-full mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dal De Artifex</h1>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/prachidalal2/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/prachidalal0"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </header>

      <main className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/profile_pic.png" // Replace with your profile picture's filename
            alt="Profile picture"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">
            Prachi Dalal
          </h2>
        </div>

        <div className="text-gray-700 max-w-xl">
          <p className="text-lg">
            My personal website features interdisciplinary projects in data science, interactive art, and creative technical exploration.
            It showcases past data science projects, including real-time data analytics and data-driven solutions, utilizing SQL, Python, and Java.
            Visualizations are created through custom Procreate illustrations. Built with React and Next.js, leveraging modern web technologies including JSX and Tailwind CSS.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label className="text-lg" htmlFor="numOfDice">Number of Dice: </label>
              <input
                id="numOfDice"
                type="number"
                value={numOfDice}
                onChange={(e) => setNumOfDice(Number(e.target.value))}
                min="2"
                className="px-4 py-2 border rounded"
              />
            </div>

            <button
              onClick={fetchDiceResult}
              className="mt-4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-white gap-2 hover:bg-green-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Roll the Dice
            </button>

            {diceResult && (
              <div className="mt-4 text-lg text-gray-800">
                <strong>{diceResult}</strong>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="/about"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              Go to About Page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
