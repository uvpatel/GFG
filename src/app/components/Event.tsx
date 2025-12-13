"use client";
import React from "react";
import Image from "next/image";

interface EventProps {
  title?: string;
  description?: string;
  images?: string[];
}

const Event: React.FC<EventProps> = ({
  title = "SkillUp101",
  description = "An immersive learning experience designed to help students master essential technical skills, from web development to problem-solving techniques. Join us for hands-on sessions, expert guidance, and collaborative learning!",
  images = ["/events/skillup101.png"],
}) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="Event">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Events Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F9D58] dark:text-[#34A853] text-center mb-12">
          Events
        </h1>

        {/* Event Card */}
        <div className="bg-green-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
          {/* Event Title & Description */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F9D58] dark:text-[#34A853] mb-4">
              {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 h-64 bg-white dark:bg-gray-700"
              >
                <Image
                  src={img}
                  alt={`${title} Event Image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;