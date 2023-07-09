import Link from 'next/link';
import Image from 'next/image';

// Components 
import PassGen from '../_projects/passgen';
import RepoButton from '../_pieces/repobutton';

// Icons 
import BurgerIcon from '../_icons/burger';
import TextIcon from '../_icons/text';
import LockIcon from '../_icons/lock';
import SoundIcon from '../_icons/sound';
import FileIcon from '../_icons/fileicon';
import AstroIcon from '../_icons/_tech/astro';

import HTMLIcon from '../_icons/_tech/html';
import NextIcon from '../_icons/_tech/next';

// function repeatSome() {
//   for (let i = 0; i = 10; i++) {
    
//   }
// }

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 w-fill px-4 mt-16 mb-4 sm:px-16 sm:font-medium sm:text-4xl">

          <div className='col-span-2 lg:col-span-3 flex flex-col'>
            <h1 className="text-virid italic flex-1 font-light text-3xl text-left xsml:text-5xl">
              Dev Life
            </h1>
            <h2 className='mb-2 text-cymru italic flex-1 font-light text-md text-left xsml:text-xl'>
              A gist of what I do
            </h2>
          </div>

          <div className='col-span-2 lg:col-span-3 flex flex-col'>

            <h2 className='text-cymru flex-1 font-light text-lg text-left xsml:text-xl'>
              What I am best at:
            </h2>

            <div className='flex flex-row flex-wrap gap-1'>
              <div className='p-2 flex flex-row justify-between items-center border-solid border-2 border-cymru rounded-md'>
                <HTMLIcon />
                <p className='text-cymru text-center font-light text-md text-left xsml:text-xl'>HTML</p>
              </div>
            </div>  

          </div>

          {/* <PassGen /> */}

          {[
              ['JukeBox', 
              'https://jukebox-project3.herokuapp.com/', 
              'https://github.com/Lawhornmatt/Jukebox-vite', 
              'React App, Vite Dev Server, MERN stack, GraphQL, Express',
              // <SoundIcon />
              ],
              ['JATE', 
              'https://lawhorn-jate-editor.herokuapp.com/', 
              'https://github.com/Lawhornmatt/PWA_TextEditor',
              'JWA (Progressive Web App)',
              // <TextIcon />
              ],
              ['RecipeIO', 
              'https://recipeio-project2.herokuapp.com/login', 
              'https://github.com/Lawhornmatt/RecipeIO',
              'Javascript, HTML, CSS, Express, Sequelize, Handlebars, Bcrypt',
              // <FileIcon />
              ],
              ['Tech Blog', 
              'https://techblog-lawhornmatt.herokuapp.com/', 
              'https://github.com/Lawhornmatt/TechBlog',
              '',
              // <FileIcon />
              ],
            ].map(([title, deployURL, repoURL, description, icon]) => (
              <Link href={deployURL} className='col-span-2 sm:col-span-1 flex flex-row p-1 my-2 justify-between items-center rounded-md w-fill bg-robin'>
                {/* {icon} */}
                <FileIcon />
              
                <div className='flex-1 pl-2'>
                  <h1 className='text-2xl font-medium'>{title}</h1>
                  <p className='text-sm font-normal italic'>{description}</p>
                </div>
              
                <Link href={repoURL}>
                  <RepoButton />
                </Link>
              </Link>  
          ))}
      </section>
    )
};