'use client'
import Link from 'next/link';
import { useState } from "react";

export default function PassGen() {
  
  const [isOpen, setOpen] = useState(false);
  const openProj = () => { setOpen(!isOpen) };

  return (
    <section className='col-span-2 grid grid-cols-3 items-center rounded-md text-xl bg-robin'>
          
      <button onClick={openProj}>
        {!isOpen && (
          <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        )}

        {isOpen && (
          <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg>
        )}
      </button>

      <h1 className='flex-1 text-center'>Password Generator</h1>

      {isOpen && (
        <div className='row-start-2'>
            checkbox
        </div>
      )}

      {isOpen && (
        <div className='row-start-3'>
            checkbox
        </div>
      )}

    </section>  
  )
};