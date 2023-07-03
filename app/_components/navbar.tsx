import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className= "z-20 w-full flex flex-col xsml:fixed top-1 xsml:w-1/3 xsml:left-1">


            <Link className= "bg-virid text-mint w-full h-16 text-4xl mb-1 mr-1 text-center flex items-center justify-center" href='#splash'>
                <span className= "tracking-logo">MT</span><span>L</span>
            </Link>

            {[
               ['Projects', '#projects'],
               ['Skills',   '#skills'],
               ['Bio',      '#bio'],
               ['Resumé',   '#resume'],
               ['Contact',  '#contact'],
             ].map(([title, url]) => (
               <Link href={url} className="bg-leaf w-full h-16 text-3xl mb-1 mr-1 text-center flex items-center justify-center"><span className="sm:tracking-navbar">{title}</span></Link>
            ))}

        </nav>
    )
};