import Link from 'next/link';

import GitHubIcon from '../_icons/github';
import LinkedInIcon from '../_icons/linkedin';
import MastodonIcon from '../_icons/mastodon';

export default function Splash() {
    return (
      <section id="splash" className="flex flex-col xsml:flex-row w-screen sm:pl-16 sm:pt-32 sm:pr-32 sm:font-medium sm:text-4xl">
        <div className= "h-16 xsml:w-1/3 xsml:h-auto left-1 flex-none">
          {/* Purely organizational div; saves space for the inital nav bar */}
        </div>
        <article className="mt-4 mb-4">

          <h1 className="mb-4 flex-1 font-bold text-4xl text-center xsml:text-5xl">Matthew Lawhorn</h1>
          <p className="text-2xl text-center px-4 xsml:text-left xsml:ml-2">Full-stack Developer interested in data science & geology, open source software, and building better online communities</p>

          <div className="flex justify-around mt-4">
            <Link href="https://github.com/Lawhornmatt">
              <GitHubIcon />
            </Link>

            <Link href="https://www.linkedin.com/in/matthew-lawhorn/">
              <LinkedInIcon />
            </Link>

            <Link href="https://federate.social/@lawhornmatt">
              <MastodonIcon />
            </Link>
          </div>

        </article>
      </section>
    )
  };