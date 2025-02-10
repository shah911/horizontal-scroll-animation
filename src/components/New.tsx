"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/imgs-1.jpg",
  "/imgs-2.jpg",
  "/imgs-3.jpg",
  "/imgs-4.jpg",
  "/imgs-5.jpg",
];

const ease = 0.06;

const ParallaxSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const current = useRef(0);
  const imageWidthRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (!sliderRef.current) return;
      const sliderWidth = sliderRef.current.scrollWidth;
      imageWidthRef.current = sliderWidth / images.length;
      document.body.style.height = `${
        sliderWidth - (window.innerWidth - window.innerHeight)
      }px`;
    };

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const animate = () => {
      current.current = lerp(current.current, target.current, ease);

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${current.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    updateDimensions();
    animate();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      target.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="fixed top-0 left-0 w-full h-screen overflow-hidden">
      <div ref={sliderRef} className="absolute top-0 left-0 flex h-full">
        <div ref={containerRef} className="flex will-change-transform">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[400px] h-[70%] top-[15%] overflow-hidden bg-white"
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ParallaxSlider;
