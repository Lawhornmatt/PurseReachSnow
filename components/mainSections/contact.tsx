import Link from "next/link";
import GitHubIcon from '../icons/brands/github';
import LinkedInIcon from '../icons/brands/linkedin';
import MastodonIcon from '../icons/brands/mastodon';
import EmailIcon from '../icons/email';

export default function Contact() {
  return (
    <section id="contact" className="
        scroll-mt-20 
        text-xl
        pl-8
        sm:pl-0
        border-t-2 
        border-cymru 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4 
        gap-6 mx-4 mt-8 mb-4 pt-4 
        sm:mx-16 2xl:mx-40">

        <Link className="flex gap-2 justify-start sm:justify-center items-center md:justify-normal" href="https://github.com/Lawhornmatt">
          <GitHubIcon />
          <span className='lg:text-3xl'>Git Hub</span>
        </Link>

        <Link className="flex gap-2 justify-start sm:justify-center items-center md:justify-normal" href="https://www.linkedin.com/in/matthew-lawhorn/">
          <LinkedInIcon />
          <span className='lg:text-3xl'>LinkedIn</span>
        </Link>

        <Link className="flex gap-2 justify-start sm:justify-center items-center md:justify-normal" href="https://federate.social/@lawhornmatt">
          <MastodonIcon />
          <span className='lg:text-3xl'>Mastodon</span>
        </Link>

        <Link className="flex gap-2 justify-start sm:justify-center items-center md:justify-normal" href="mailto:lawhornmatt@proton.me">
          <EmailIcon />
          <div className='flex flex-col lg:text-2xl'> 
            <span className='leading-4'>lawhornmatt</span>
            <span className='leading-4'>@proton.me</span>
          </div>
        </Link>

    </section>
  )
};