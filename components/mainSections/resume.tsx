export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 flex flex-col mx-4 mt-16 mb-4 sm:mx-16 2xl:mx-40">
      <h1 className="text-virid italic grow font-light text-4xl text-left xsml:text-5xl">
        Resumé
      </h1>
      <h2 className='text-cymru italic flex-1 font-light text-lg text-left mb-4 xsml:text-xl'>
        Download or print my professional summary:
      </h2>

      <embed src="/resume.pdf" className="h-[50vh] sm:h-[75vh] w-full lg:h-screen lg:w-5/6 self-center"/>
    </section>
  )
};