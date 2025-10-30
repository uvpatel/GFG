"use client";
import React from "react";
import { 
  IconBrandFacebook, 
  IconBrandTwitter, 
  IconBrandLinkedin, 
  IconBrandInstagram, 
  IconBrandGithub 
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-[#0F9D58] dark:text-[#34A853] mb-6">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
          Connect with GeeksforGeeks BVM on social media. Follow us for updates, workshops, and coding challenges!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0F9D58] dark:hover:text-[#34A853] transition"
          >
            <IconBrandFacebook size={32} />
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0F9D58] dark:hover:text-[#34A853] transition"
          >
            <IconBrandTwitter size={32} />
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0F9D58] dark:hover:text-[#34A853] transition"
          >
            <IconBrandLinkedin size={32} />
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0F9D58] dark:hover:text-[#34A853] transition"
          >
            <IconBrandInstagram size={32} />
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-[#0F9D58] dark:hover:text-[#34A853] transition"
          >
            <IconBrandGithub size={32} />
          </a>
        </div>

        {/* Optional Contact Form */}
        {/* <div className="mt-12">
          <form className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0F9D58] dark:focus:ring-[#34A853]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0F9D58] dark:focus:ring-[#34A853]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0F9D58] dark:focus:ring-[#34A853]"
              rows={5}
            />
            <button
              type="submit"
              className="bg-[#0F9D58] text-white px-6 py-3 rounded-lg hover:bg-[#34A853] transition font-semibold w-full"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
