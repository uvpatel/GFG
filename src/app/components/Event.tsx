"use client";
import React from "react";

interface EventProps {
  title?: string;
  description?: string;
  images?: string[];
}

const Event: React.FC<EventProps> = ({
  title = "GFG Coding Workshop",
  description = "A hands-on workshop for students to enhance coding skills and learn competitive programming.",
  images = [
    "https://via.placeholder.com/400x300?text=Event+1",
    "https://via.placeholder.com/400x300?text=Event+2",
    "https://via.placeholder.com/400x300?text=Event+3",
    "https://via.placeholder.com/400x300?text=Event+4",
    "https://via.placeholder.com/400x300?text=Event+5",
    "https://via.placeholder.com/400x300?text=Event+6",
  ],
}) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="Event">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#0F9D58] dark:text-[#34A853]">
            {title}
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            {description}
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={img}
                alt={`Event Image ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
