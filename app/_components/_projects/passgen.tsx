'use client'
import Link from 'next/link';
import { useState } from "react";

export default function PassGen() {
    return (
      <section className='col-span-2 flex flex-row items-center rounded-md bg-robin'>
            
        <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>

        <h1 className='text-xl flex-1 text-center'>Password Generator</h1>
      </section>  
    )
  };