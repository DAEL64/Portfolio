import face from "../assets/face.svg";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <>
      <div className="h-[100dvh] flex items-center justify-between gap-5">
        <div className="w-150 h-65 flex flex-col justify-start text-5xl mx-20 poiret-one-regular">
          <p>Hi, i am Andria</p>
          <div>
            <span className="text-amber-500">Front-end</span> web developer
          </div>
        </div>
        <motion.svg
          className="inline-block bg-amber-400 -mt-30"
          style={{
            WebkitMaskImage: `url(${face})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskImage: `url(${face})`,
            maskRepeat: "no-repeat",
            maskSize: "contain",
            width: "500px",
            height: "400px",
          }}
        />
      </div>
    </>
  );
}
