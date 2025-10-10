import "../styles/skills.css";
import { Braces, CodeXml, Earth, HeartHandshake } from "lucide-react";
import python from "../assets/python.png";
import C from "../assets/C.png";
import firebase from "../assets/firebase.png";
import mongoDB from "../assets/mongoDB.png";

export default function Skills() {
  return (
    <section id="skills">
      <div className="h-dvh poiret-one-regular flex flex-col">
        <div className="w-4/5 mx-auto flex flex-col mt-20">
          {/* Section title */}
          <div className="flex w-full justify-center text-5xl font-medium tracking-wide mb-12">
            <h2>Skills</h2>
          </div>

          <div className="flex items-center justify-between min-h-full">
            <div className="flex w-full justify-between h-full">
              {/* Left Column */}
              <div className="flex flex-col justify-between">
                {/* Frontend */}
                <div className="min-w-96 min-h-75 card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md">
                  <div className="flex w-full justify-center text-xl font-semibold gap-2 items-center border-b border-amber-500 pb-3">
                    <p>Front-end Languages</p>
                    <CodeXml className="text-amber-500" />
                  </div>
                  <ul className="grid grid-cols-3 w-full text-center text-sm font-medium">
                    {[
                      "HTML5",
                      "CSS3",
                      "Sass/SCSS",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "RESTful API",
                      "Axios",
                      "Zustand",
                      "jQuery",
                      "Tailwindcss",
                      "Material UI",
                      "Git",
                      "Vercel",
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 border border-amber-500 hover:bg-amber-500 hover:text-black transition-colors duration-300 cursor-pointer"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="min-w-96 min-h-75 card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md">
                  <div className="flex gap-3 items-center w-full justify-center text-xl font-semibold border-b border-amber-500 pb-3">
                    <p>Languages</p>
                    <Earth className="text-amber-500" />
                  </div>
                  <div className="flex flex-col gap-3 w-full text-base font-medium">
                    {[
                      { lang: "Georgian", level: "Native" },
                      { lang: "English", level: "Fluent" },
                      { lang: "Russian", level: "Fluent" },
                      { lang: "German", level: "begginer" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between border-b border-stone-700 pb-1"
                      >
                        <span>{item.lang}</span>
                        <span className="text-amber-500">{item.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between">
                {/* Backend */}
                <div className="min-w-96 min-h-75 card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md">
                  <div className="flex w-full justify-center text-xl font-semibold gap-2 items-center border-b border-amber-500 pb-3">
                    <p>Back-end Languages</p>
                    <Braces className="text-amber-500" />
                  </div>
                  <div className="flex justify-center items-center gap-16 w-full h-full">
                    <img
                      src={python}
                      alt="Python"
                      className="w-16 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src={C}
                      alt="C++"
                      className="w-16 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src={firebase}
                      alt="C++"
                      className="w-16 hover:scale-110 transition-transform duration-300"
                    />
                    <img
                      src={mongoDB}
                      alt="C++"
                      className="w-16 hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="min-w-96 min-h-75 card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md">
                  <div className="flex gap-3 items-center w-full justify-center text-xl font-semibold border-b border-amber-500 pb-3">
                    <p>Workspace Adaptability</p>
                    <HeartHandshake className="text-amber-500" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-sm font-medium">
                    {[
                      "Logical Thinking / Analytical Skills",
                      "Problem-Solving",
                      "Communication",
                      "Teamwork / Collaboration",
                      "Perseverance / Patience",
                      "Adaptability / Learning Agility",
                      "Time Management / Discipline",
                      "Creativity / Innovation",
                      "Debugging / Troubleshooting Skills",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-2 border border-amber-500 hover:bg-amber-500 hover:text-black transition-colors duration-300 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
