// components/ui/background-beams-with-collision-demo.tsx
"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="mb-16">
      {/* 
        Whatever you put here will be centered on top of the beams.
        You can swap in headings, buttons, images, etc.
      */}
      <h2 className="relative z-20 text-3xl md:text-5xl lg:text-7xl font-bold text-center text-black dark:text-white">
        What’s cooler than beams?
        <br />
        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
          Exploding beams.
        </span>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
