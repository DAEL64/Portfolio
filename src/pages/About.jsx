import { useEffect } from "react";
import "../styles/about.css";
import ScrambledText from "../animation_hooks/ScrambledText";


export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {});
    const aboutElements = document.querySelectorAll(".aboutCard");
    aboutElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about">
        <div className="h-dvh poiret-one-regular flex flex-col pt-30">
          <div className="w-full flex justify-center text-5xl font-medium">
            <p>About me</p>
          </div>
          <div className="w-full flex justify-center  items-center gap-5 mt-40">
            <div className="cardWrap">
              <div className="aboutCard bg-stone-900 max-w-150 rounded-md min-w-96 min-h-80 flex p-2">
                <ScrambledText
                  radius={100}
                  duration={1}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  <span className="line-clamp-1">Hi! I am <span className="text-amber-500">Andria Janelidze</span>, a front-end developer from Georgia,
                  born in 2006. With several years of experience in JavaScript,
                  HTML, CSS, and React.js/TSX, I specialize in crafting modern,
                  efficient, and visually engaging web experiences. My goal is
                  to create websites that not only meet but exceed client
                  expectations, aligning perfectly with their unique vision and
                  requirements. I place great emphasis on building responsive,
                  user-friendly interfaces that deliver seamless interactions
                  across all devices. Driven by a passion for clean design,
                  intuitive UX, and high-performance code, I continuously refine
                  my skills and stay up to date with the latest trends in
                  front-end development. For me, every project is an opportunity
                  to combine technical precision with aesthetic quality,
                  creating digital experiences that are both functional and
                  inspiring.</span>
                </ScrambledText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
