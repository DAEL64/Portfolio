import { useEffect } from "react";
import "../styles/about.css";

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
          <div className="w-6/7 flex justify-end items-center gap-5 mt-40">
            <div className="cardWrap">
              <div className="aboutCard bg-stone-900 rounded-md min-w-96 min-h-80 flex p-2">
                <p>Hello, I am Andria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
