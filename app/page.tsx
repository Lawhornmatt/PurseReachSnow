import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-screen sm:pl-16 sm:pt-32 sm:pr-32 sm:font-medium sm:text-4xl">
      <div className= "hidden xsml:block w-56 flex-none">
        {/* This div saves space for the inital nav bar */}
      </div>
      <div>
        <h1 className="flex-1 font-bold text-6xl">Matthew Lawhorn</h1>
        <p>Full-stack Developer interested in data science & geology, open source software, and building better online communities</p>
      </div>
    </main>
  )
}
