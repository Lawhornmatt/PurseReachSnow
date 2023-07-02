import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className= "z-20 flex flex-col fixed top-0 left-0">
            <Link className= "w-48 text-center flex-none" href='/'>
                Home
            </Link>
            <Link className= "bg-midnight w-48 text-center flex-none" href='/profile'>
                Profile
            </Link>
        </nav>
    )
}