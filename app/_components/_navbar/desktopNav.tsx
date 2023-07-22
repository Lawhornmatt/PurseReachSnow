'use client'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function DesktopNav() {

    const { ref, inView, entry } = useInView({ threshold: 1 });

    const stuckVariable = inView ? '' : 'shadow-lg';

    return (
        <nav ref={ref} className={`-top-[1px] min-h-[10vh] hidden bg-mint sm:flex sticky w-full ${stuckVariable}`}>
            <Link className= "bg-virid text-mint w-1/6 text-3xl text-center flex items-center justify-center" href='#splash'>
                <span className= "tracking-logo">MT</span><span>L</span>
            </Link>
            {[
               ['Projects', '#projects'],
            //    ['Skills',   '#skills'],
               ['Bio',      '#bio'],
               ['Resumé',   '#resume'],
               ['Contact',  '#contact'],
             ].map(([title, url]) => (
                <Link href={url} className="w-1/6 text-2xl md:text-3xl ml-1 text-center flex items-center justify-center">
                    <span className="lg:tracking-navbar">{title}</span>
                </Link>
            ))}
        </nav>
    )
};