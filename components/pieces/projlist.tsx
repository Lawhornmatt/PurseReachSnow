import Link from 'next/link';
import FileIcon from '../icons/fileicon';
import RepoButton from '../pieces/repobutton';

const projArray = [
    ['JukeBox', 
    'https://jukebox-project3.herokuapp.com/', 
    'https://github.com/Lawhornmatt/Jukebox-vite', 
    'React App, Vite Dev Server, MERN stack, GraphQL, MongoDB',
    // SoundIcon()
    ],
    ['JATE', 
    'https://lawhorn-jate-editor.herokuapp.com/', 
    'https://github.com/Lawhornmatt/PWA_TextEditor',
    'JWA (Progressive Web App)',
    // TextIcon()
    ],
    ['RecipeIO', 
    'https://recipeio-project2.herokuapp.com/login', 
    'https://github.com/Lawhornmatt/RecipeIO',
    'Javascript, HTML, CSS, Express, Sequelize, MySQL, Bcrypt',
    // FileIcon()
    ],
    ['Tech Blog', 
    'https://techblog-lawhornmatt.herokuapp.com/', 
    'https://github.com/Lawhornmatt/TechBlog',
    '',
    // FileIcon()
    ]];

export default function ProjList() {
    return (
        projArray.map(([title, deployURL, repoURL, description, icon]) => (
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
        ))
    )
};