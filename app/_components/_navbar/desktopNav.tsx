'use client'
import Link from 'next/link';
import { useState } from "react";
import BurgerIcon from '../_icons/burger';

export default function DesktopNav() {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => { setOpen(!isOpen) };

    return (
        <div>
            {/* NAVBAR FOR SCREENS WIDER THAN 360px */}
            {/* Current use of drop-shadow-3xl looks bad */}
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
                ))};
            </nav>
        </div>
    )
};