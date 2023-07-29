import Link from 'next/link';

import GitHubIcon from '../icons/brands/github';
import LinkedInIcon from '../icons/brands/linkedin';
import MastodonIcon from '../icons/brands/mastodon';
import EmailIcon from '../icons/email';

export default function SocialMediaLinks() {
    return (
        <div className= "md:w-1/3 flex flex-col gap-4 md:gap-12 pl-4 md:pl-0 justify-center items-start text-2xl lg:tracking-navbar">

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

            <Link className="flex gap-6 justify-center items-center md:justify-normal" href="mailto:lawhornmatt@proton.me">
              <EmailIcon />
              {/* tracking-normal */}
              <div className='flex flex-col'> 
                <span className='leading-4'>lawhornmatt</span>
                <span className='leading-4'>@proton.me</span>
              </div>
            </Link>
            
        </div>
    )
};