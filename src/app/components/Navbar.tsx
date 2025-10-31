"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconMessage, IconCalendarEvent, IconUsers } from "@tabler/icons-react";
import Hero from "./Hero";

export function Navbar() {
  const navItems = [

  {
    name: "Home",
    link: "#Home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#About",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Event",
    link: "#Event",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Team",
    link: "#Team",
    icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },

  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <Content />
    </div>
  );
}

const Content = () => {
  return (
    <div className="w-full relative">
      
      <Hero />

      
      <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
    </div>
  );
};
