export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 flex flex-col mx-4 mt-16 mb-4 sm:mx-16 2xl:mx-40">
      <h1 className="text-virid italic grow mb-4 font-light text-4xl text-left xsml:text-5xl">
        Resumé
      </h1>

      <embed src="/resume.pdf" className="h-[50vh] sm:h-[75vh] w-full lg:h-screen lg:w-5/6 self-center"/>
    </section>
  )
};