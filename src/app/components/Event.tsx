"use client";
import React from "react";
import { Clock } from "lucide-react";
import Image from "next/image";
interface EventProps {
  title?: string;
  description?: string;
  images?: string[];
}

const Event: React.FC<EventProps> = ({
  title = "GFG Coding Workshop",
  description = "A hands-on workshop for students to enhance coding skills and learn competitive programming.",
  images = [],
}) => {
  const hasImages = images && images.length > 0;

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

        {hasImages ? (
          /* ✅ Photo Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                <Image
                  src={img}
                  alt={`Event Image ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          /* 🚧 Coming Soon Section */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-green-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-green-200 dark:border-gray-700 max-w-md">
              <Clock className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-semibold text-green-700 dark:text-green-400 mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Exciting events are on the way! Stay tuned for updates.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Event;
