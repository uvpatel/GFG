"use client";

import React from "react";
import { Linkedin, Instagram, Github, Globe } from "lucide-react";
import {teamMembers} from "@/app/data/teamMember"
interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  description,
  image,
  instagram,
  linkedin,
  github,
  website,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-green-200 hover:shadow-2xl transition-all duration-300 max-w-sm w-full overflow-hidden">
      {/* Image */}
      <div className="w-full h-52 bg-green-50 flex justify-center items-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover h-full w-full"
          />
        ) : (
          <div className="text-green-700 text-4xl font-bold uppercase">
            {name[0]}
            
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col space-y-3">
        <div>
          <h2 className="text-xl font-bold text-green-700">{name}</h2>
          <p className="text-sm text-gray-600">{role}</p>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-600 hover:text-white transition-colors"
            >
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
