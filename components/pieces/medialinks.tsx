import Link from 'next/link';

import GitHubIcon from '../icons/brands/github';
import LinkedInIcon from '../icons/brands/linkedin';
import MastodonIcon from '../icons/brands/mastodon';

export default function SocialMediaLinks() {
    return (
        <div className= "md:w-1/3 flex flex-col gap-8 justify-around text-2xl sm:tracking-navbar md:my-16">
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
    )
};