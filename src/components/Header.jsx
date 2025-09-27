import "../index.css";
import { motion } from "motion/react";


export default function Header() {
  return (
    <>
      <div className="border-b-1 sticky top-0 w-full text-amber-50 my-2 border-b-amber-500 poiret-one-regular">
        <div className="flex items-center justify-between mx-5 my-2">
          <motion.div
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(255,191,0)",
            }}
            className="name border-y-amber-500 w-fit p-2 hover:cursor-default text-2xl font-bold transition-all duration-300"
          >
            <p>Andria</p>{" "}
          </motion.div>
          <motion.div className="flex justify-between px-2 gap-2">
            <a
              href="#home"
              className="hover:border-r-1 hover:border-r-amber-500 hover:px-1  transition-all duration-400"
            >
              <motion.p
                whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(255,191,0)",
                }}
              >
                Home
              </motion.p>
            </a>
            <a
              href="#about"
              className="hover:border-r-1 hover:border-r-amber-500 hover:px-1 transition-all duration-400"
            >
              <motion.p
                whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(255,191,0)",
                }}
              >
                About me
              </motion.p>
            </a>
            <a
              href="#skills"
              className="hover:border-r-1 hover:border-r-amber-500 hover:px-1 transition-all duration-400"
            >
              <motion.p
                whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(255,191,0)",
                }}
              >
                Skills
              </motion.p>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
