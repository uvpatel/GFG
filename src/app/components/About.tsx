"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <section id="About" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 lg:px-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="max-w-sm">
            <Image
              src="/GFG.jpg"
              alt="About GeeksforGeeks BVM"
              width={400}
              height={400}
              className="rounded-xl shadow-xl object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-[#0F9D58] mb-6">
            About GeeksforGeeks BVM
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            GeeksforGeeks BVM is a student-driven community promoting coding
            culture, technical knowledge, and problem-solving excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
