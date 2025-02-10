"use client";

import { useRef } from "react";
import Section from "./Section";
import { motion, useScroll, useTransform } from "motion/react";

const data = [
  {
    title: "Lorem ipsum",
    img: "/imgs-1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "dolor sit",
    img: "/imgs-2.jpg",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "consectetur",
    img: "/imgs-3.jpg",
    desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor.",
  },
  {
    title: "adipiscing",
    img: "/imgs-4.jpg",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "elit",
    img: "/imgs-5.jpg",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["75%", "-75%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);

  return (
    <div ref={ref} className="h-[500vh]">
      <div className="h-screen flex items-center justify-center w-full sticky top-0 left-0 overflow-hidden">
        <h1 className="absolute flex items-center justify-center tracking-tighter leading-[100%] top-[5%] left-0 z-10 text-[15vw] uppercase font-bold">
          steps
          <span className="z-10 absolute left-[100%] overflow-hidden h-full">
            <motion.span style={{ y }} className="flex flex-col">
              {[...Array(data.length)].map((_, i) => (
                <span className="text-center" key={i}>
                  {Number(i) + 1}
                </span>
              ))}
            </motion.span>
          </span>
        </h1>
        <motion.div
          style={{ x }}
          className="absolute z-20 h-full flex items-center justify-between w-[700vw] md:w-[500vw] lg:w-[400vw]"
        >
          {data.map((item, i) => {
            return (
              <div key={i}>
                <Section data={item} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
