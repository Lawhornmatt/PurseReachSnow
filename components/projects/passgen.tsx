'use client'
import Link from 'next/link';
import { useState } from "react";

import PlusIcon from '../icons/plus';
import MinusIcon from '../icons/minus';

export default function PassGen() {
  
  const [isOpen, setOpen] = useState(false);
  const openProj = () => { setOpen(!isOpen) };

  return (
    <section className='col-span-2 grid grid-cols-3 items-center rounded-md text-xl bg-robin'>
          
      <button onClick={openProj}>
        {!isOpen && (
          <PlusIcon />
        )}

        {isOpen && (
          <MinusIcon />
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