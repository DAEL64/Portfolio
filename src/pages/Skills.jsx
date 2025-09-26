import "../styles/skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="h-[100dvh] poiret-one-regular flex flex-col pt-25">
          <div className="w-[80%] mx-auto flex flex-col">
            <div className="flex w-full justify-center text-5xl">
              <div>Skills</div>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-40">
                <div className="w-[400px] h-[300px] card flex bg-stone-900">
                  <div>
                    <p>Hello</p>
                  </div>
                </div>
                <div className="w-[400px] h-[300px] card flex bg-stone-900">
                  <div>
                    <p>Hello</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-40">
                <div className="w-[400px] h-[300px] card flex bg-stone-900">
                  <div>
                    <p>Hello</p>
                  </div>
                </div>
                <div className="w-[400px]  h-[300px] card flex bg-stone-900">
                  <div>
                    <p>Hello</p>
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
