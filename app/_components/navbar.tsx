import Link from 'next/link';
import Image from 'next/image';
import DownArrow from '../../public/arrow-down-short.svg';

export default function NavBar() {
    return (
        <div>
            {/* NAVBAR FOR SMALLEST OF SCREENS */}
            <nav className= "z-20 w-full fixed flex flex-col xsml:hidden top-1 xsml:w-1/3 xsml:left-1">


                <button className= "bg-virid text-mint w-full h-16 text-4xl mb-1 mr-1 text-center flex items-center justify-center">
                    <span className= "tracking-logo">MTL</span>
                    {/* <svg width="3.25rem" height="3.25rem" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                <Link href="#splash" className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">Top</span></Link>

                {[
                   ['Projects', '#projects'],
                   ['Skills',   '#skills'],
                   ['Bio',      '#bio'],
                   ['Resumé',   '#resume'],
                   ['Contact',  '#contact'],
                 ].map(([title, url]) => (
                   <Link href={url} className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">{title}</span></Link>
                ))}

            </nav>

            {/* NAVBAR FOR SCREENS WIDER THAN 360px */}
            <nav className= "hidden z-20 w-full xsml:flex flex-col xsml:fixed top-1 xsml:w-1/3 xsml:left-1 sm:w-48">


                <Link className= "bg-virid text-mint w-full h-16 text-4xl mb-1 mr-1 text-center flex items-center justify-center" href='#splash'>
                    <span className= "tracking-logo">MT</span><span>L</span>
                </Link>

                {[
                   ['Projects', '#projects'],
                   ['Skills',   '#skills'],
                   ['Bio',      '#bio'],
                   ['Resumé',   '#resume'],
                   ['Contact',  '#contact'],
                 ].map(([title, url]) => (
                   <Link href={url} className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">{title}</span></Link>
                ))}

            </nav>
        </div>
    )
};