import "../styles/skills.css";
import { Braces, CodeXml, Earth, HeartHandshake } from "lucide-react";

export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="h-[100dvh] poiret-one-regular flex flex-col pt-25">
          <div className="w-[80%] mx-auto flex flex-col">
            <div className="flex w-full justify-center text-5xl">
              <div>Skills</div>
            </div>
            <div className="flex w-full justify-between gap-20">
              <div className="flex flex-col gap-40">
                <div className="w-[400px] h-[300px] card flex flex-col items-center gap-4 bg-stone-900">
                  <div className="flex w-full justify-center text-xl font-bold gap-2 items-center">
                    <p>Front-end Languages</p>
                    <CodeXml className="text-amber-500"/>
                  </div>
                  <div>
                    I offer experience in front-end development, working with
                    React.js, React.tsx, JavaScript, HTML, and CSS to build
                    responsive, modern, and user-friendly web applications,
                    while focusing on clean design principles, accessibility,
                    and smooth interactive experiences that enhance overall user
                    experience.
                  </div>
                </div>
                <div className="w-[400px] h-[300px] card flex flex-col items-center gap-4 bg-stone-900">
                  <div className="flex gap-5 items-center w-full justify-center text-xl font-bold">
                    <p>Languages</p>
                    <Earth className="text-amber-500" />
                  </div>
                  <div>
                    Fluent in Russian, Georgian, and English, I excel in
                    cross-cultural communication, adaptability, and
                    problem-solving. My language skills expand professional
                    opportunities, provide access to diverse resources, and
                    allow me to build strong relationships in multicultural and
                    international environments.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-40">
                <div className="w-[400px] h-[300px] card flex flex-col items-center gap-4 bg-stone-900">
                  <div className="flex w-full justify-center text-xl font-bold gap-2 items-center">
                    <p>Back-end Languages</p>
                    <Braces className="text-amber-500"/>
                  </div>
                  <div>
                    Even though I primarily specialize in front-end development,
                    I have a growing interest in back-end programming languages
                    such as Python and C++. Currently, my Python and C++
                    knowledge is at an intermediate level, but I am actively
                    working to improve it in the near future.
                  </div>
                </div>
                <div className="w-[400px] h-[300px] card flex flex-col items-center gap-4 bg-stone-900">
                  <div className="flex w-full gap-2 items-center justify-center text-xl font-bold">
                    <p>Workspace adaptability</p>
                    <HeartHandshake className="text-amber-500"/>
                  </div>
                  <div>
                    I am team-friendly, adaptable, and solution-oriented,
                    thriving in collaborative environments. I communicate
                    effectively, support colleagues, embrace diverse
                    perspectives, and tackle challenges proactively,
                    contributing positively to team dynamics and ensuring
                    projects progress smoothly and efficiently.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
