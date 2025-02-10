import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  data: {
    title: string;
    img: string;
    desc: string;
  };
};

export default function Section({ data }: Props) {
  return (
    <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
      <h1 className="bg-black text-white py-2 px-4 rounded-full absolute top-1 left-1 z-10 uppercase font-light tracking-tighter leading-[100%]">
        {data.title}
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
        className="z-10 text-sm font-medium absolute top-[101%] tracking-tighter leading-[100%]"
      >
        {data.desc}
      </motion.p>
      <Image
        src={data.img}
        alt={data.title}
        fill
        priority={true}
        className="object-cover rounded-md border border-black"
      />
    </div>
  );
}
