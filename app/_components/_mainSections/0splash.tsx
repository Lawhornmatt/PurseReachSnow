export default function Splash() {
    return (
      <section id="splash" className="flex w-screen sm:pl-16 sm:pt-32 sm:pr-32 sm:font-medium sm:text-4xl">
        <div className= "hidden xsml:block w-1/3 left-1 flex-none">
          {/* This div saves space for the inital nav bar */}
        </div>
        <article className="mt-4 mb-4">
          <h1 className="mb-4 flex-1 font-bold text-4xl text-center xsml:text-5xl">Matthew Lawhorn</h1>
          <p className="text-2xl text-center xsml:text-left xsml:ml-2">Full-stack Developer interested in data science & geology, open source software, and building better online communities</p>
        </article>
      </section>
    )
  };