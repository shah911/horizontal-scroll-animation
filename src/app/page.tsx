import Hero from "@/components/Hero";
// import ParallaxSlider from "@/components/New";
// import ParallexSlider from "@/components/Test";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-[10vw] uppercase font-bold tracking-tighter leading-[100%]">
          scroll down
        </h1>
      </div>
      <Hero />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-[10vw] text-center uppercase font-bold tracking-tighter leading-[100%]">
          horizontal scroll animation
        </h1>
      </div>

      {/* <ParallaxSlider /> */}
      {/* <div className="h-screen" /> */}
      {/* <ParallexSlider /> */}
      {/* <div className="h-screen" /> */}
    </div>
  );
}
