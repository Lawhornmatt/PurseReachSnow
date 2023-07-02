import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-screen pl-4 pr-32 font-medium text-4xl">
      <div className= "w-48 flex-none">
        hello 
      </div>
      <div>
        <h1 className="flex-1 font-bold text-6xl">Matthew Lawhorn</h1>
        <p>Full-stack Developer interested in data science & geology, open source software, and building better online communities</p>
      </div>
    </main>
  )
}
