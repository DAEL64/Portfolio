import "../styles/skills.css";
import { Braces, CodeXml, Earth, HeartHandshake } from "lucide-react";
import python from "../assets/python.png";
import C from "../assets/C.png";
import firebase from "../assets/firebase.png";
import mongoDB from "../assets/mongoDB.png";

export default function Skills() {
  const frontendSkills = [
    "HTML5", "CSS3", "Sass/SCSS", "JavaScript", "TypeScript", 
    "React", "Next.js", "RESTful API", "Axios", "Zustand", 
    "jQuery", "Tailwindcss", "Material UI", "Git", "Vercel"
  ];

  const softSkills = [
    "Logical Thinking", "Problem-Solving", "Communication",
    "Teamwork", "Perseverance", "Adaptability",
    "Time Management", "Creativity", "Troubleshooting"
  ];

  return (
    <section id="skills" className="text-white py-12 md:py-20">
      <div className="poiret-one-regular max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex w-full justify-center text-4xl md:text-5xl font-medium tracking-wide mb-10 md:mb-16">
          <h2 className="border-b-2 border-amber-500 pb-2">Skills</h2>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {/* Front-end Languages */}
          <div className="card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md border border-stone-800">
            <div className="flex w-full justify-center text-xl font-semibold gap-2 items-center border-b border-amber-500 pb-3">
              <p>Front-end</p>
              <CodeXml className="text-amber-500" />
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 w-full gap-2 text-center text-sm font-medium">
              {frontendSkills.map((skill, index) => (
                <li
                  key={index}
                  className="px-2 py-2 border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all duration-300 cursor-default rounded-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Back-end Languages */}
          <div className="card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md border border-stone-800">
            <div className="flex w-full justify-center text-xl font-semibold gap-2 items-center border-b border-amber-500 pb-3">
              <p>Back-end & DB</p>
              <Braces className="text-amber-500" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full h-full py-6">
              {[
                { src: python, alt: "Python" },
                { src: C, alt: "C++" },
                { src: firebase, alt: "Firebase" },
                { src: mongoDB, alt: "MongoDB" },
              ].map((tech, i) => (
                <img
                  key={i}
                  src={tech.src}
                  alt={tech.alt}
                  className="w-12 md:w-16 hover:scale-110 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md border border-stone-800">
            <div className="flex gap-3 items-center w-full justify-center text-xl font-semibold border-b border-amber-500 pb-3">
              <p>Languages</p>
              <Earth className="text-amber-500" />
            </div>
            <div className="flex flex-col gap-3 w-full text-base font-medium">
              {[
                { lang: "Georgian", level: "Native" },
                { lang: "English", level: "Fluent" },
                { lang: "Russian", level: "Fluent" },
                { lang: "German", level: "Beginner" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-stone-700 pb-1">
                  <span>{item.lang}</span>
                  <span className="text-amber-500">{item.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workspace Adaptability */}
          <div className="card flex flex-col items-center gap-6 bg-stone-900 p-6 rounded-2xl shadow-md border border-stone-800">
            <div className="flex gap-3 items-center w-full justify-center text-xl font-semibold border-b border-amber-500 pb-3">
              <p>Workspace Adaptability</p>
              <HeartHandshake className="text-amber-500" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full text-center text-xs sm:text-sm font-medium">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-2 border border-amber-500/30 hover:border-amber-500 transition-colors duration-300 rounded-md flex items-center justify-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}