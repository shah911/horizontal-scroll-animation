"use client";
import React, { useEffect, useRef } from "react";

function ParallexSlider() {
  const slider = useRef<HTMLDivElement | null>(null);
  const images = useRef<HTMLDivElement[]>([]);
  const sliderWidth = useRef<number>(0);
  const imageWidth = useRef<number>(0);
  const current = useRef<number>(0);
  const target = useRef<number>(0);
  const ease = 0.06;

  useEffect(() => {
    images.current = Array.from(
      document.querySelectorAll<HTMLDivElement>(".img")
    );
    images.current.forEach((image, idx) => {
      image.style.backgroundImage = `url(/imgs-${idx + 1}.jpg)`;
    });

    const lerp = (start: number, end: number, t: number): number => {
      return start * (1 - t) + end * t;
    };

    const setTransform = (el: HTMLElement, transform: string) => {
      el.style.transform = transform;
    };

    const init = () => {
      if (!slider.current) return;
      sliderWidth.current = slider.current.getBoundingClientRect().width;
      imageWidth.current = sliderWidth.current / images.current.length;
      document.body.style.height = `${
        sliderWidth.current - (window.innerWidth - window.innerHeight)
      }px`;
    };

    // window.addEventListener('resize', init);

    const animateImages = () => {
      const ratio = current.current / imageWidth.current;
      let intersectionRatioValue: number;

      images.current.forEach((image, idx) => {
        intersectionRatioValue = ratio - idx * 0.7;
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);
      });
    };

    const animate = () => {
      current.current = parseFloat(
        lerp(current.current, target.current, ease).toFixed(2)
      );
      target.current = window.scrollY;
      if (slider.current) {
        setTransform(slider.current, `translateX(${-current.current}px)`);
      }
      animateImages();
      requestAnimationFrame(animate);
    };

    init();
    animate();
  }, []);

  return (
    <div>
      <main className="fixed top-[0] left-[0] w-[100%] h-[100vh]">
        <div ref={slider} className="absolute top-0 left-0 w-[2800px] h-[100%]">
          <div className="absolute top-[15%] h-[70%] w-[100%] flex">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="relative w-[400px] h-[100%] overflow-hidden bg-white"
              >
                <div className="img absolute left-[-70px] w-[150%] h-[100%] bg-cover bg-center"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ParallexSlider;
