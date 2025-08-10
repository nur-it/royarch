"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { CircleUpArrowIcon } from "./svgs";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (timeoutRef.current) return;

    timeoutRef.current = setTimeout(() => {
      const shouldShow = window.pageYOffset > 300;
      setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
      timeoutRef.current = null;
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Optimized scroll to top with RAF
  const scrollToTop = useCallback(() => {
    const start = window.pageYOffset;
    const startTime = performance.now();
    const duration = 800;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic function
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute -top-20 right-6 z-50 hidden lg:block">
      <button
        onClick={scrollToTop}
        className="bg-primary hover:bg-primary/80 flex h-[60px] w-[60px] cursor-pointer items-center justify-center transition-all duration-300"
      >
        <CircleUpArrowIcon className="size-8 text-white" />
      </button>
    </div>
  );
};

export default BottomToTop;
