import Link from 'next/link';

import GitHubIcon from '../_icons/_brands/github';
import LinkedInIcon from '../_icons/_brands/linkedin';
import MastodonIcon from '../_icons/_brands/mastodon';

export default function Splash() {
    return (
      // min-h-[80%] space-y-16
      <section id='splash' className="md:min-h-[85vh] flex flex-col gap-4 md:flex-row-reverse mt-20 md:mt-0 md:p-16 sm:font-medium sm:text-4xl">

        <article className="md:w-2/3 flex flex-col">
          <h1 className="mb-4 font-bold text-4xl xsml:text-5xl lg:text-6xl xl:text-7xl text-center md:text-right">Matthew Lawhorn</h1>
          <p className="text-2xl text-center md:text-right">Full-stack Developer interested in data science & geology, open source software, and building better online communities</p>
        </article>

        <div className= "md:w-1/3 flex flex-col gap-8 justify-around text-2xl sm:tracking-navbar">
          <Link className="flex gap-6 justify-center md:justify-normal" href="https://github.com/Lawhornmatt">
              <GitHubIcon />
              <span className='md:text-3xl'>Git Hub</span>
            </Link>

            <Link className="flex gap-6 justify-center md:justify-normal" href="https://www.linkedin.com/in/matthew-lawhorn/">
              <LinkedInIcon />
              <span className='md:text-3xl'>LinkedIn</span>
            </Link>

            <Link className="flex gap-6 justify-center md:justify-normal" href="https://federate.social/@lawhornmatt">
              <MastodonIcon />
              <span className='md:text-3xl'>Mastodon</span>
            </Link>
        </div>

      </section>
    )
  };