import SocialMediaLinks from "../pieces/medialinks";

export default function Splash() {
    return (
      // min-h-[80%] space-y-16
      <section id='splash' className="md:min-h-[85vh] flex flex-col gap-4 md:flex-row-reverse mt-24 md:mt-0 md:mx-16 2xl:mx-40 sm:font-medium">

          <article className="md:w-2/3 flex flex-col justify-center">
            <h1 className="font-bold mb-4 text-5xl lg:text-6xl xl:text-7xl text-center md:text-right">
              Matthew Lawhorn
            </h1>

            {/* Old Blurb:
            Full-stack Developer interested in data science & geology, open source software, and building better online communities */}

            {/* Short blurb for mobile view */}
            <p className="md:hidden text-2xl text-center">
              Full-stack Developer specializing in MERN tech stack, interested in open source software and building better online communities
            </p>

            {/* Extended summary for viewports larger than mobile */}
            <p className="hidden md:inline text-3xl italic font-semibold opacity-75 text-right">
              Full-stack Web Developer
            </p>
            <p className="hidden md:inline mt-4 text-2xl text-right">
              Designing and building modern reactive web apps for freelance but looking to join a team
            </p>
            <p className="hidden md:inline mt-4 text-2xl text-right">
              Currently exploring tools like Next.js, SvelteKit, and Electron.js
            </p>
            <p className="hidden md:inline mt-4 text-2xl text-right">
              Interested in web accessibility, open-source projects, and the intersection of data-science and geology
            </p>
          </article>

          <SocialMediaLinks />

      </section>
    )
  };