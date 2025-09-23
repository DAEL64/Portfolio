import { gsap, SplitText } from "gsap/all";
import "../index.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Header() {
  const nameRef = useRef();

  gsap.registerPlugin(SplitText);

  const split = SplitText.create(".name", {
    type: "chars",
  });

  gsap.from(split.chars, {
    yPercent: "random([-100, 100])",
    autoAlpha: 0,
    stagger: {
      amount: 0.15,
      from: "random",
    },
  });

  return (
    <>
      <div className="border-b-1 w-full my-2 border-b-amber-500 poiret-one-regular">
        <div className="flex items-center justify-between mx-5 my-2">
          <div
            ref={nameRef}
            className="name border-y-amber-500 w-fit p-2 text-2xl font-bold hover:px-3 hover:scale-105 transition-all hover:border-r-1 hover:border-r-amber-500  duration-300"
          >
            <p>Andria</p>
          </div>
          <div className="flex justify-between px-2 gap-2">
            <Link className="hover:border-r-1 hover:border-r-amber-500 hover:px-1  transition-all duration-400">
              Home
            </Link>
            <Link className="hover:border-r-1 hover:border-r-amber-500 hover:px-1 transition-all duration-400">
              About me
            </Link>
            <Link></Link>
          </div>
        </div>
      </div>
    </>
  );
}
