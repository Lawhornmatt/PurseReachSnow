'use client'
import Link from 'next/link';
import { useState } from "react";
import BurgerIcon from '../_icons/burger';

export default function DesktopNav() {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => { setOpen(!isOpen) };

    return (
        <nav className= "w-full sticky flex top-1">
            <Link className= "bg-virid text-mint w-1/6 h-16 text-4xl mb-1 text-center flex items-center justify-center" href='#splash'>
                <span className= "tracking-logo">MT</span><span>L</span>
            </Link>
            {[
               ['Projects', '#projects'],
               ['Skills',   '#skills'],
               ['Bio',      '#bio'],
               ['Resumé',   '#resume'],
               ['Contact',  '#contact'],
             ].map(([title, url]) => (
               <Link href={url} className="bg-leaf w-1/6 h-16 text-3xl mb-1 ml-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">{title}</span></Link>
            ))}
        </nav>
    )
};