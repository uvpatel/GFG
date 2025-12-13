// "use client";
// import React from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { IconHome, IconUser, IconMessage, IconCalendarEvent, IconUsers } from "@tabler/icons-react";
// import Hero from "./Hero";

// export function Navbar() {
//   const navItems = [

//   {
//     name: "Home",
//     link: "#Home",
//     icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },
//   {
//     name: "About",
//     link: "#About",
//     icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },
//   {
//     name: "Contact",
//     link: "#contact",
//     icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },
//   {
//     name: "Event",
//     link: "#Event",
//     icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },
//   {
//     name: "Team",
//     link: "#Team",
//     icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
//   },

//   ];

//   return (
//     <div className="relative w-full">
//       <FloatingNav navItems={navItems} />
//       <Content />
//     </div>
//   );
// }

// const Content = () => {
//   return (
//     <div className="w-full relative">
      
//       <Hero />

      
//       <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconUser,
  IconMessage,
  IconCalendarEvent,
  IconUsers,
  IconChevronDown,
} from "@tabler/icons-react";
import Link from "next/link";
import Hero from "./Hero";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Common nav items
  const navItems = [
    { name: "Home", link: "#Home", icon: <IconHome className="h-4 w-4" /> },
    { name: "About", link: "#About", icon: <IconUser className="h-4 w-4" /> },
    { name: "Contact", link: "#Contact", icon: <IconMessage className="h-4 w-4" /> },
    { name: "Event", link: "#Event", icon: <IconCalendarEvent className="h-4 w-4" /> },
    { name: "Team", link: "#Team", icon: <IconUsers className="h-4 w-4" /> },
  ];

  const flashbackItems = [
    { label: "2022–2023", url: "https://gfgbvm.github.io/gfgweb/core-team-2022/index.html" },
    { label: "2023–2024", url: "https://gfgbvm.github.io/gfgweb/core-team-2023.html" },
    { label: "2024-2025", url: "https://gfgbvm.github.io/gfgweb" },
  ];

  return (
    <div className="relative w-full">
      {/* 📱 Mobile Floating Navbar (no flashback) */}
      <div className="md:hidden">
        <FloatingNav navItems={navItems} />
      </div>

      {/* 💻 Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-10 py-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
          GeeksForGeeks
        </h1>

        <div className="flex space-x-8 items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

          {/* 🔽 Flashback Dropdown (Desktop only) */}
          <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
                Flashback
              </span>
              <IconChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isOpen && (
              <div className="absolute top-6 right-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-50 min-w-[150px]">
                {flashbackItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      window.open(
                        item.url,
                        item.url.startsWith("http") ? "_blank" : "_self"
                      )
                    }
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Content Section */}
      <Content />
    </div>
  );
}

const Content = () => (
  <div className="w-full relative pt-20">
    <Hero />
    <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
  </div>
);
