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
        border-t-2 
        border-cymru 
        flex
        justify-between
        gap-6 mx-4 mt-8 mb-4 pt-4 
        sm:mx-16 2xl:mx-40">

        <Link className="flex gap-2 justify-center items-center md:justify-normal" href="https://github.com/Lawhornmatt">
          <GitHubIcon />
          <span className='hidden md:inline lg:text-3xl'>Git Hub</span>
        </Link>

        <Link className="flex gap-2 justify-center items-center md:justify-normal" href="https://www.linkedin.com/in/matthew-lawhorn/">
          <LinkedInIcon />
          <span className='hidden md:inline lg:text-3xl'>LinkedIn</span>
        </Link>

        <Link className="flex gap-2 justify-center items-center md:justify-normal" href="https://federate.social/@lawhornmatt">
          <MastodonIcon />
          <span className='hidden md:inline lg:text-3xl'>Mastodon</span>
        </Link>

        <Link className="flex gap-2 justify-center items-center md:justify-normal" href="mailto:lawhornmatt@proton.me">
          <EmailIcon />
          <div className='hidden md:flex md:flex-col lg:text-2xl'> 
            <span className='leading-4'>lawhornmatt</span>
            <span className='leading-4'>@proton.me</span>
          </div>
        </Link>

    </section>
  )
};