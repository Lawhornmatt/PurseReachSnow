import Link from 'next/link';

import GitHubIcon from '../icons/brands/github';
import LinkedInIcon from '../icons/brands/linkedin';
import MastodonIcon from '../icons/brands/mastodon';
import EmailIcon from '../icons/email';

export default function SocialMediaLinks() {
    return (
        <div className="
            md:w-1/3 
            flex 
            md:flex-col 
            gap-4 md:gap-12 
            justify-around md:justify-center 
            items-center md:items-start
            text-2xl 
            lg:tracking-navbar">

            <Link className="flex gap-6" href="https://github.com/Lawhornmatt">
              <GitHubIcon />
              <span className='hidden md:inline md:text-3xl'>Git Hub</span>
            </Link>

            <Link className="flex gap-6" href="https://www.linkedin.com/in/matthew-lawhorn/">
              <LinkedInIcon />
              <span className='hidden md:inline md:text-3xl'>LinkedIn</span>
            </Link>

            <Link className="flex gap-6" href="https://federate.social/@lawhornmatt">
              <MastodonIcon />
              <span className='hidden md:inline md:text-3xl'>Mastodon</span>
            </Link>

            <Link className="flex gap-6 items-center" href="mailto:lawhornmatt@proton.me">
              <EmailIcon />
              {/* tracking-normal */}
              <div className='hidden md:flex md:flex-col'> 
                <span className='leading-4'>lawhornmatt</span>
                <span className='leading-4'>@proton.me</span>
              </div>
            </Link>
            
        </div>
    )
};