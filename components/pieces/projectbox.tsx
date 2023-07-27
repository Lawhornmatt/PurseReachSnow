import Link from 'next/link';

import RepoButton from '../pieces/repobutton';

/*
Maybe Solution here:
https://www.developerway.com/posts/react-component-as-prop-the-right-way
*/

export default function ProjBox(title:string, deployURL:string, repoURL:string, description:string, icon:Element) {
    return (
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
    )
};