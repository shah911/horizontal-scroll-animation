"use client";
import React, { useEffect, useRef } from "react";

function ParallexSlider() {
  let slider = useRef(null);
  let sliderWidth;
  let imageWidth;
  let current = 0;
  let target = 0;
  let ease = 0.06;
  let images = [];

  useEffect(() => {
    images = [...document.querySelectorAll(".img")];
    images.forEach((image, idx) => {
      image.style.backgroundImage = `url(/imgs-${idx + 1}.jpg)`;
    });

    const lerp = (start, end, t) => {
      return start * (1 - t) + end * t;
    };

    const setTransform = (el, transform) => {
      el.style.transform = transform;
    };

    const init = () => {
      sliderWidth = slider.current.getBoundingClientRect().width;
      imageWidth = sliderWidth / images.length;
      document.body.style.height = `${
        sliderWidth - (window.innerWidth - window.innerHeight)
      }px`;
    };

    // window.addEventListener('resize', init);

    const animateImages = () => {
      let ratio = current / imageWidth;
      let intersectioRatioValue;

      images.forEach((image, idx) => {
        intersectioRatioValue = ratio - idx * 0.7;
        setTransform(image, `translateX(${intersectioRatioValue * 70}px)`);
      });
    };

    const animate = () => {
      current = parseFloat(lerp(current, target, ease)).toFixed(2);
      target = window.scrollY;
      setTransform(slider.current, `translateX(${-current}px)`);
      animateImages(); // first do the animate images function first then call in here
      requestAnimationFrame(animate);
    };

    init();
    animate();
  }, []);

  return (
    <div>
      <main className="fixed top-[0] left-[0] w-[100%] h-[100vh] ">
        <div ref={slider} className="absolute top-0 left-0 w-[2800px] h-[100%]">
          <div className=" absolute top-[15%] h-[70%] w-[100%] flex">
            <div className="relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>

            <div className="relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>

            <div className="relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
            <div className=" relative w-[400px] h-[100%] overflow-hidden bg-white">
              <div className="img absolute left-[-100px] w-[600px] h-[100%] bg-cover bg-center "></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ParallexSlider;
