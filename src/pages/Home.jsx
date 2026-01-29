import face from "../assets/face.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home">
      {/* Changed flex to flex-col for mobile, lg:flex-row for desktop */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 px-6 md:px-20">
        <div className="w-full lg:max-w-2xl text-center lg:text-left poiret-one-regular">
          <p className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-4">Hi, i am Andria</p>
          <div className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
            <motion.span
              whileHover={{
                scale: 1,
                textShadow: "0px 0px 8px rgb(255,191,0)",
              }}
              animate={{
                textShadow: [
                  "0px 0px 0px rgb(255,191,0)",
                  "0px 0px 8px rgb(255,191,0)",
                  "0px 0px 0px rgb(255,191,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-amber-500"
            >
              Front-end
            </motion.span>{" "}
            web developer
          </div>
        </div>
        
        <div className="flex justify-center">
          <motion.div
            className="2xl:inline-block hidden bg-amber-400"
            style={{
              width: "400px",
              height: "400px",
              WebkitMaskImage: `url(${face})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskImage: `url(${face})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}