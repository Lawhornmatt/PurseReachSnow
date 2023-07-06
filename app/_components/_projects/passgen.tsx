import Link from 'next/link';

export default function PassGen() {
    return (
        <Link href='' className='col-span-2 flex flex-row justify-between items-center rounded-md w-fill bg-robin'>
            
        {/* Wraps SVG Icon */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.25rem" height="2.25rem" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>

        <h1 className='text-xl'>Password Generator</h1>

        <div className='flex flex-col px-1 text-center rounded-md text-xs bg-cymru text-mint'>
          <p>R</p>
          <p>E</p>
          <p>P</p>
          <p>O</p>
        </div>
      </Link>  
    )
  };