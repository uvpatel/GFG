// src/components/Footer.tsx
import React from "react";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <div className="flex items-center mb-4 space-x-2">
            
            <span className="text-xl font-bold">GFG BVM</span>
          </div>
          <p className="text-sm leading-relaxed">
            At GFG Student Chapter BVM we are here to provide the coding culture
            for students interested in Computer Science and other technical
            competencies. We will provide you opportunities to enhance your
            coding skills and take them to the next level.
          </p>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Reach Us</h3>
          <p className="text-sm">
            Birla Vishvakarma Mahavidyalaya
            <br />
            Post Box No. 20, Vallabh Vidyanagar, Anand
          </p>
          <a
            href="mailto:geeksforgeeksbvm@bvmengineering.ac.in"
            className="block mt-2 text-sm text-green-300 hover:underline"
          >
            geeksforgeeksbvm@bvmengineering.ac.in
          </a>
          <p className="text-sm mt-1">+91 96245 51412</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#Home" className="hover:text-green-300 transition-colors">
                HOME
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-green-300 transition-colors">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#Event" className="hover:text-green-300 transition-colors">
                EVENTS
              </a>
            </li>
            <li>
              <a href="#Team" className="hover:text-green-300 transition-colors">
                TEAM
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-green-300 transition-colors">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/gfg-student-chapter-bvm-643736253/"
              className="p-2 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/GfgBvm"
              className="p-2 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/gfgbvm/"
              className="p-2 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
            >
            <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/people/Gfgstudentchapter-Bvm/pfbid034ygBEqk3Szhs5q4AuEQLnbM3K4xqSeUaq6AvqAEZLdyPammWL2K1WiDuVjgtv4fyl/"
              className="p-2 rounded-full bg-green-700 hover:bg-green-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-sm text-green-300">
        <p>Copyright © GeeksForGeeks BVM 2024 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
