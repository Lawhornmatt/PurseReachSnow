import Link from 'next/link';

import PlayIcon from '../icons/play';
import FileIcon from '../icons/fileicon';
import SoundIcon from '../icons/sound';
import TextIcon from '../icons/text';
import ProfileIcon from '../icons/profile';

const projArray = [
    ['This Portfolio', 
    '#splash', 
    'https://github.com/Lawhornmatt/PurseReachSnow', 
    'Next.js, JSX, TypeScript, Tailwind',
    'profile-icon'
    ],
    ['FireKit Demo', 
    'https://svelte-fireship-vrcl.vercel.app/', 
    'https://github.com/Lawhornmatt/SvelteFireship', 
    'SvelteKit, Firebase, TypeScript, Tailwind, DaisyUI, Full-Stack Web App',
    'profile-icon'
    ],
    ['JukeBox', 
    'https://jukebox-project3.herokuapp.com/', 
    'https://github.com/Lawhornmatt/Jukebox-vite', 
    'MongoDB, Express, React, Node.js, Vite Dev Server, GraphQL, Full-Stack Web App',
    'sound-icon'
    ],
    ['JATE', 
    'https://lawhorn-jate-editor.herokuapp.com/', 
    'https://github.com/Lawhornmatt/PWA_TextEditor',
    'PWA (Progressive Web App)',
    'text-icon'
    ],
    ['RecipeIO', 
    'https://recipeio-project2.herokuapp.com/login', 
    'https://github.com/Lawhornmatt/RecipeIO',
    'Javascript, HTML, CSS, Express, Sequelize, MySQL, Bcrypt',
    'play-icon'
    ],
    ['Tech Blog', 
    'https://techblog-lawhornmatt.herokuapp.com/', 
    'https://github.com/Lawhornmatt/TechBlog',
    'Express, Sequelize, Handlebars, MVC, MySQL',
    'play-icon'
    ]];

function returnIcon(icon: string) {
    switch (icon){
        case 'sound-icon':
            return <SoundIcon/>;
        case 'text-icon':
            return <TextIcon/>;
        case 'profile-icon':
            return <ProfileIcon/>;
        default:
            return <PlayIcon/>;
    }
};

export default function ProjList() {
    return (
        projArray.map(([title, deployURL, repoURL, description, icon]) => (
            <div key={`projlist${title}`} className='col-span-2 sm:col-span-1 flex flex-row p-1 my-2 justify-between items-center rounded-md w-fill bg-robin'>
                <Link href={deployURL} className='flex flex-row grow pr-2 justify-between items-center'>

                    {returnIcon(icon)}

                    <div className='flex-1 pl-2'>
                        <h1 className='text-xl sm:text-2xl font-medium'>{title}</h1>
                        <p className='text-xs sm:text-sm font-normal italic'>{description}</p>
                    </div>
                </Link>

                <Link href={repoURL} className='flex flex-col items-center'>
                    <span className='absolute z-10 text-center text-xs italic font-semibold text-robin'>
                        REPO
                    </span>
                    <FileIcon/>
                </Link>
            </div>  
        ))
    )
};