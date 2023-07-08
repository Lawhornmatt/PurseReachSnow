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

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 grid grid-cols-2 gap-4 w-fill px-4 mt-16 mb-4 sm:pl-16 sm:pr-32 sm:font-medium sm:text-4xl">

          <h1 className="col-span-2 mb-2 text-virid italic flex-1 font-light text-3xl text-left xsml:text-5xl">Projects</h1>

          {/* <PassGen /> */}

          <div className='col-span-2 flex flex-col'>
            {[
                ['JukeBox', 
                'https://jukebox-project3.herokuapp.com/', 
                'https://github.com/Lawhornmatt/Jukebox-vite', 
                'React App, Vite Dev Server, MERN stack, GraphQL, Express',
                <SoundIcon />],

                ['JATE', 
                'https://lawhorn-jate-editor.herokuapp.com/', 
                'https://github.com/Lawhornmatt/PWA_TextEditor',
                'JWA (Progressive Web App)',
                <TextIcon />],

                ['RecipeIO', 
                'https://recipeio-project2.herokuapp.com/login', 
                'https://github.com/Lawhornmatt/RecipeIO',
                'Javascript, HTML, CSS, Express, Sequelize, Handlebars, Bcrypt',
                <FileIcon />],

                ['Boiler Maker', 
                'https://github.com/Lawhornmatt/BoilerMaker', 
                'https://github.com/Lawhornmatt/BoilerMaker',
                'Node.js',
                <FileIcon />],

                ['Tech Blog', 
                'https://techblog-lawhornmatt.herokuapp.com/', 
                'https://github.com/Lawhornmatt/TechBlog',
                '',
                <FileIcon />],

                ['Schedutron-3000', 
                'https://lawhornmatt.github.io/DayScheduler/', 
                'https://github.com/Lawhornmatt/DayScheduler',
                '',
                <FileIcon />],

                ['Quiz Machine', 
                'https://lawhornmatt.github.io/TakeThisQuiz/', 
                'https://github.com/Lawhornmatt/TakeThisQuiz',
                '',
                <FileIcon />],

              ].map(([title, deployURL, repoURL, description, icon]) => (
                <Link href={deployURL} className='flex flex-row p-1 my-2 justify-between items-center rounded-md w-fill bg-robin'>
                  {icon}
                
                  <div className='flex-1 pl-2'>
                    <h1 className='text-2xl font-medium'>{title}</h1>
                    <p className='text-sm font-normal italic'>{description}</p>
                  </div>
                
                  <Link href={repoURL}>
                    <RepoButton />
                  </Link>
                </Link>  
            ))}
          </div>
      </section>
    )
};