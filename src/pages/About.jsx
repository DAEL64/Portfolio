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
    <section id="about">
    
      <div className="min-h-screen poiret-one-regular flex flex-col pt-20 md:pt-30">
        <div className="w-full flex justify-center text-4xl md:text-5xl font-medium">
          <p>About me</p>
        </div>

        <div className="w-full px-5 flex justify-center items-center gap-5 mt-10 md:mt-24">
          <div className="cardWrap w-full max-w-4xl">
        
            <div className="aboutCard bg-stone-900 rounded-md w-full min-h-80 flex p-6 md:p-8">
              <ScrambledText
                radius={100}
                duration={1}
                speed={0.5}
                scrambleChars=".:"
              >
                <span className="text-sm md:text-lg leading-relaxed w-full">
                  Hi! I am <span className="text-amber-500">Andria Janelidze</span>, a front-end developer from Georgia,
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
                  inspiring.
                </span>
              </ScrambledText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}