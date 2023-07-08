import Link from 'next/link';
import Image from 'next/image';

import PassGen from '../_projects/passgen';
import BurgerIcon from '../_icons/burger';

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

// PLus Sign 
/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
*/

// Minus Sign
/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
*/


// Jate Icon
/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-font-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.057 6h5.886L11 8h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v5.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V6.755l-.293.01C5.856 6.808 5.68 6.905 5.5 8H5l.057-2z"/>
</svg>
*/

// Lock Icon
/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-lock2-fill" viewBox="0 0 16 16">
  <path d="M7 7a1 1 0 0 1 2 0v1H7V7z"/>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z"/>
</svg>
*/

// Jukebox Icon
/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-music-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64v1.75l-2 .5v3.61c0 .495-.301.883-.662 1.123C7.974 13.866 7.499 14 7 14c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 11.134 6.501 11 7 11c.356 0 .7.068 1 .196V6.89a1 1 0 0 1 .757-.97l1-.25A1 1 0 0 1 11 6.64z"/>
</svg>
*/

// Generic Code Icon
/*
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-code-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z"/>
</svg>
*/