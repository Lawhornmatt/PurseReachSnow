'use client'
import Link from 'next/link';
import { useState } from "react";
import BurgerIcon from '../_icons/burger';
import { useInView } from 'react-intersection-observer';

export default function DesktopNav() {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => { setOpen(!isOpen) };

    const { ref, inView, entry } = useInView({
        threshold: 1,
      });

    return (
        <nav ref={ref} className= "-top-[1px] hidden bg-mint sm:flex sticky w-full top-0">
            <Link className= "bg-virid text-mint w-1/6 h-16 text-3xl text-center flex items-center justify-center" href='#splash'>
                {/* <span className= "tracking-logo">MT</span><span>L</span> */}
                {`${inView}`}
            </Link>
            {[
               ['Projects', '#projects'],
               ['Skills',   '#skills'],
               ['Bio',      '#bio'],
               ['Resumé',   '#resume'],
               ['Contact',  '#contact'],
             ].map(([title, url]) => (
                <Link href={url} className="w-1/6 min-h-[15%] text-2xl md:text-3xl ml-1 text-center flex items-center justify-center">
                    <span className="lg:tracking-navbar">{title}</span>
                </Link>
            ))}
        </nav>
    )
};