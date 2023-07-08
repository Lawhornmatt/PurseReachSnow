import Link from 'next/link';
import Image from 'next/image';

// Components 
import PassGen from '../_projects/passgen';

// Icons 
import BurgerIcon from '../_icons/burger';
import TextIcon from '../_icons/text';
import LockIcon from '../_icons/lock';
import SoundIcon from '../_icons/sound';
import FileIcon from '../_icons/fileicon';

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 grid grid-cols-2 gap-4 w-fill px-4 mt-16 mb-4 sm:pl-16 sm:pr-32 sm:font-medium sm:text-4xl">

          <h1 className="col-span-2 mb-2 text-virid italic flex-1 font-light text-3xl text-left xsml:text-5xl">Projects</h1>

          {/* <PassGen /> */}

          {/* === Project 1 === */}
          <Link href='' className='col-span-2 flex flex-row p-1 justify-between items-center rounded-md w-fill bg-robin'>

            <BurgerIcon />

            <h1 className='text-xl'>Project 1</h1>

            <div className='flex flex-col px-1 text-center rounded-md text-xs bg-cymru text-mint'>
              <p>R</p>
              <p>E</p>
              <p>P</p>
              <p>O</p>
            </div>
          </Link>  
          
          {/* === Project 2 === */}
          <Link href='' className='col-span-2 flex flex-row p-1 justify-between items-center rounded-md w-fill bg-robin'>

            <BurgerIcon />

            <h1 className='text-xl'>Project 2</h1>

            <Link href='' className='flex flex-col px-1 text-center rounded-md text-xs bg-cymru text-mint'>
              <p>R</p>
              <p>E</p>
              <p>P</p>
              <p>O</p>
            </Link>
          </Link> 

          <div>
            {[
                ['Top',       '#splash'],
              ].map(([title, url]) => (
                <Link href={url} className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center">
                  <span className="sm:tracking-navbar">{title}</span>
                </Link>
            ))}
          </div>
      </section>
    )
};