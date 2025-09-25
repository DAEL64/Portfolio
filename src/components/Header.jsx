import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


export default function Header() {
  // const nameRef = useRef();

  // gsap.registerPlugin(SplitText);

  // const split = SplitText.create(".name", {
  //   type: "chars",
  // });

  // gsap.from(split.chars, {
  //   yPercent: "random([-100, 100])",
  //   autoAlpha: 0,
  //   stagger: {
  //     amount: 0.15,
  //     from: "random",
  //   },
  // });

  return (
    <>
      <div className="border-b-1 w-full text-amber-50 my-2 border-b-amber-500 poiret-one-regular">
        <div className="flex items-center justify-between mx-5 my-2">
          <motion.div
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 7px rgb(255,191,0)",
            }}
            className="name border-y-amber-500 w-fit p-2 hover:cursor-default text-2xl font-bold transition-all duration-300"
          >
            <p>Andria</p>{" "}
          </motion.div>
          <motion.div className="flex justify-between px-2 gap-2">
            <Link className="hover:border-r-1 hover:border-r-amber-500 hover:px-1  transition-all duration-400">
              <motion.p
                whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(255,191,0)",
                }}
              >
                Home
              </motion.p>
            </Link>
            <Link className="hover:border-r-1 hover:border-r-amber-500 hover:px-1 transition-all duration-400">
              <motion.p
                whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(255,191,0)",
                }}
              >
                About me
              </motion.p>
            </Link>
            <Link></Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
