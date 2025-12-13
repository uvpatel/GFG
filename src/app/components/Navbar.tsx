// "use client";
// import React, { useState } from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import {
//   IconHome,
//   IconUser,
//   IconMessage,
//   IconCalendarEvent,
//   IconUsers,
//   IconChevronDown,
// } from "@tabler/icons-react";
// import Link from "next/link";
// import Hero from "./Hero";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // ✅ Common nav items
//   const navItems = [
//     { name: "Home", link: "#Home", icon: <IconHome className="h-4 w-4" /> },
//     { name: "About", link: "#About", icon: <IconUser className="h-4 w-4" /> },
//     { name: "Contact", link: "#Contact", icon: <IconMessage className="h-4 w-4" /> },
//     { name: "Event", link: "#Event", icon: <IconCalendarEvent className="h-4 w-4" /> },
//     { name: "Team", link: "#Team", icon: <IconUsers className="h-4 w-4" /> },
//   ];

//   const flashbackItems = [
//     { label: "2022–2023", url: "https://gfgbvm.github.io/gfgweb/core-team-2022/index.html" },
//     { label: "2023–2024", url: "https://gfgbvm.github.io/gfgweb/core-team-2023.html" },
//     { label: "2024-2025", url: "https://gfgbvm.github.io/gfgweb" },
//   ];

//   return (
//     <div className="relative w-full">
//       {/* 📱 Mobile Floating Navbar (no flashback) */}
//       <div className="md:hidden">
//         <FloatingNav navItems={navItems} />
//       </div>

//       {/* 💻 Desktop Navbar */}
//       <nav className="hidden md:flex justify-between items-center px-10 py-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm fixed top-0 left-0 w-full z-50">
//         <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
//           GeeksForGeeks
//         </h1>

//         <div className="flex space-x-8 items-center">
//           {navItems.map((item, idx) => (
//             <Link
//               key={idx}
//               href={item.link}
//               className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </Link>
//           ))}

//           {/* 🔽 Flashback Dropdown (Desktop only) */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsOpen(true)}
//             onMouseLeave={() => setIsOpen(false)}
//           >
//             <div className="flex items-center gap-1 cursor-pointer">
//               <span className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
//                 Flashback
//               </span>
//               <IconChevronDown
//                 className={`h-4 w-4 transition-transform duration-200 ${
//                   isOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </div>

//             {isOpen && (
//               <div className="absolute top-6 right-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-50 min-w-[150px]">
//                 {flashbackItems.map((item, index) => (
//                   <button
//                     key={index}
//                     onClick={() =>
//                       window.open(
//                         item.url,
//                         item.url.startsWith("http") ? "_blank" : "_self"
//                       )
//                     }
//                     className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-white"
//                   >
//                     {item.label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Content Section */}
//       <Content />
//     </div>
//   );
// }

// const Content = () => (
//   <div className="w-full relative pt-20">
//     <Hero />
//     <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
//   </div>
// );

"use client";

import React, { useState } from "react";
import {
  IconHome,
  IconUser,
  IconMessage,
  IconCalendarEvent,
  IconUsers,
  IconChevronDown,
  IconHistory,
  IconX,
  IconMenu, // Hamburger icon
} from "@tabler/icons-react";
import Link from "next/link";
import Hero from "./Hero";

export function Navbar() {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFlashbackOpen, setIsFlashbackOpen] = useState(false); // Submenu in mobile

  const baseNavItems = [
    { name: "Home", link: "#Home", icon: <IconHome className="h-5 w-5" /> },
    { name: "About", link: "#About", icon: <IconUser className="h-5 w-5" /> },
    { name: "Contact", link: "#Contact", icon: <IconMessage className="h-5 w-5" /> },
    { name: "Event", link: "#Event", icon: <IconCalendarEvent className="h-5 w-5" /> },
    { name: "Team", link: "#Team", icon: <IconUsers className="h-5 w-5" /> },
  ];

  const flashbackItems = [
    { label: "2022-23", url: "https://gfgbvm.github.io/gfgweb/core-team-2022/index.html" },
    { label: "2023-24", url: "https://gfgbvm.github.io/gfgweb/core-team-2023.html" },
    { label: "2024-25", url: "https://gfgbvm.github.io/gfgweb" },
  ];

  return (
    <div className="relative w-full">
      {/* 📱 Mobile Navbar with Hamburger */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
          GeeksForGeeks
        </h1>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-neutral-700 dark:text-neutral-300"
        >
          <IconMenu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile Slide-over Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsFlashbackOpen(false);
            }}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Menu
              </h3>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsFlashbackOpen(false);
                }}
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                <IconX className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              {baseNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                </Link>
              ))}

              {/* Flashback Submenu in Mobile */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 mt-2">
                <button
                  onClick={() => setIsFlashbackOpen(!isFlashbackOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  <div className="flex items-center gap-4">
                    <IconHistory className="h-5 w-5" />
                    <span className="text-lg">Flashback</span>
                  </div>
                  <IconChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isFlashbackOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isFlashbackOpen && (
                  <div className="bg-neutral-50 dark:bg-neutral-800/50">
                    {flashbackItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-12 py-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* 💻 Desktop Navbar (unchanged) */}
      <nav className="hidden md:flex justify-between items-center px-10 py-4 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm fixed top-0 left-0 w-full z-50">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
          GeeksForGeeks
        </h1>

        <div className="flex space-x-8 items-center">
          {baseNavItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Flashback Dropdown (Desktop - Hover) */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDesktopOpen(true)}
            onMouseLeave={() => setIsDesktopOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition">
                Flashback
              </span>
              <IconChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDesktopOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDesktopOpen && (
              <div className="absolute top-6 right-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md shadow-lg z-50 min-w-[140px]">
                {flashbackItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-white transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Content Section - Add top padding for mobile navbar height */}
      <div className="w-full relative pt-20 md:pt-20">
        <Hero />
        <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
      </div>
    </div>
  );
}