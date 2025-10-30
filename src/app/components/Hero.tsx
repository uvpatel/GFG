"use client";

import Particles from "@/components/Particles";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-[#0F9D58]" id="Home">
      
      <Particles
        particleColors={["#ffffff", "#34A853"]}
        particleCount={200}
        particleSpread={15}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Welcome to GFG BVM
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering students with coding culture and technical excellence.
        </p>

        
      </div>
    </div>
  );
}
