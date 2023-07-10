'use client'
import Link from 'next/link';
import { useState } from "react";
import BurgerIcon from './_icons/burger';

export default function NavBar() {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => { setOpen(!isOpen) };

    return (
        <div>
            {/* NAVBAR FOR SMALLEST OF SCREENS */}
            <nav className= "z-30 w-full fixed flex flex-col xsml:hidden top-1 xsml:w-1/3 xsml:left-1">

                <button onClick={toggleMenu} className= "bg-virid text-mint w-full h-16 text-4xl mb-1 mr-1 text-center flex items-center justify-center">
                    <span className= "tracking-logo">MTL</span>
                    <BurgerIcon />
                </button>
                
                {isOpen && (
                    <div>
                        {[
                           ['Top',       '#splash'],
                           ['Projects', '#projects'],
                           ['Skills',   '#skills'],
                           ['Bio',      '#bio'],
                           ['Resumé',   '#resume'],
                           ['Contact',  '#contact'],
                         ].map(([title, url]) => (
                           <Link onClick={toggleMenu} href={url} className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">{title}</span></Link>
                        ))}
                    </div>
                )}
            </nav>

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


// Help with React states and toggling components found here https://stackoverflow.com/questions/71629367/how-to-show-or-hide-a-div-using-usestate-in-nextjs
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

