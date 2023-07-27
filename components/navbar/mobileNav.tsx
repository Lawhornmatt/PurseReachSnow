'use client'
import Link from 'next/link';
import { useState } from "react";
import BurgerIcon from '../icons/burger';

export default function MobileNav() {

    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => { setOpen(!isOpen) };

    return (
          <nav className= "z-30 w-full fixed flex flex-col sm:hidden top-1 sm:w-1/3 sm:left-1">
              <button onClick={toggleMenu} className= "bg-virid text-mint w-full h-16 text-4xl mb-1 mr-1 text-center flex items-center justify-center">
                  <span className= "tracking-logo">MTL</span>
                  <BurgerIcon />
              </button>
              
              {isOpen && (
                  <div>
                      {[
                         ['Top',      'splash'],
                         ['Projects', 'projects'],
                     //  ['Skills',   'skills'],
                         ['Bio',      'bio'],
                         ['Resumé',   'resume'],
                         ['Contact',  'contact'],
                       ].map(([title, undrtitle]) => (
                          <Link onClick={toggleMenu} key={`mobile${undrtitle}`} href={`#${undrtitle}`} className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center">
                            <span className="sm:tracking-navbar">{title}</span>
                          </Link>
                      ))}
                  </div>
              )}
          </nav>
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

