"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PreLoaderScreen = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start fade-up for image
    const imgTimer = setTimeout(() => setShowImage(true), 100);

    // Fake progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 40); // ~2 seconds to fill

    // Exit preloader after 2s
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setLoading(false), 1000);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(imgTimer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`bg-midnight fixed inset-0 z-[999] flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${
        exiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <Image
        src="/logo-image.png"
        alt="Royarch Logo"
        width={250}
        height={76}
        className={`transition-all duration-700 ease-out ${
          showImage ? "-translate-y-64 opacity-100" : "translate-y-0 opacity-0"
        }`}
      />

      {/* Spinner */}
      <div className="absolute bottom-32 h-20 w-20">
        {/* Placeholder border */}
        <div className="border-darkest h-full w-full rounded-full border-2" />

        {/* Progress border */}
        <svg
          className="absolute top-0 left-0 h-full w-full"
          viewBox="0 0 36 36"
        >
          <path
            className="stroke-primary"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100, 100"
            strokeDashoffset={100 - progress}
            d="M18 2
               a 16 16 0 0 1 0 32
               a 16 16 0 0 1 0 -32"
          />
        </svg>
      </div>
    </div>
  );
};

export default PreLoaderScreen;
