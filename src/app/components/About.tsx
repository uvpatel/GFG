"use client";
import React from "react";

export default function About() {
  return (
    <section id="About" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Image / Illustration */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/500x400?text=GFG+About+Image"
            alt="About GFG"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold text-[#0F9D58] dark:text-[#34A853] mb-4">
            About GeeksforGeeks BVM
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            GeeksforGeeks BVM is a student community dedicated to spreading the coding culture, technical knowledge, and problem-solving skills. Our goal is to empower students to learn, create, and innovate in technology.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We organize workshops, coding competitions, and events to help students enhance their programming skills and excel in competitive programming, software development, and other technical fields.
          </p>

          {/* Optional Call-to-action */}
          <div className="mt-6">
            <button className="bg-[#0F9D58] text-white px-6 py-3 rounded-lg hover:bg-[#34A853] transition font-semibold">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
