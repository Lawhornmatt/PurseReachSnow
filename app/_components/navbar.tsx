'use client'
import Link from 'next/link';
import { useState } from "react";


export default function NavBar() {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);

    return (
        <div>
            {/* NAVBAR FOR SMALLEST OF SCREENS */}
            <nav className= "z-30 w-full fixed flex flex-col xsml:hidden top-1 xsml:w-1/3 xsml:left-1">

                <button className= "bg-virid text-mint w-full h-16 text-4xl mb-1 mr-1 text-center flex items-center justify-center">
                    <span className= "tracking-logo">MTL</span>
                    {/* <svg width="3.25rem" height="3.25rem" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                {[
                   ['Top',       '#splash'],
                   ['Projects', '#projects'],
                   ['Skills',   '#skills'],
                   ['Bio',      '#bio'],
                   ['Resumé',   '#resume'],
                   ['Contact',  '#contact'],
                 ].map(([title, url]) => (
                   <Link href={url} className="hidden bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">{title}</span></Link>
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

// Interesting animation learned from here https://onesheep.org/insights/animate-on-scroll-with-tailwind-css
/*
// Get all the elements you want to show on scroll
const targets = document.querySelectorAll(".js-show-on-scroll");

// Callback for IntersectionObserver
const callback = function(entries: any[]) {
  entries.forEach(entry => {

    // Is the element in the viewport?
    if (entry.isIntersecting) {

      // Add the fadeIn class:
      entry.target.classList.add("motion-safe:animate-fadeIn");
    } else {

      // Otherwise remove the fadein class
      entry.target.classList.remove("motion-safe:animate-fadeIn");
    }
  });
};

// Set up a new observer
const observer = new IntersectionObserver(callback);

// Loop through each of the target
targets.forEach(function(target) {
  // Hide the element
  target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});
*/