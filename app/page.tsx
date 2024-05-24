import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
     
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
         
          <ul className="flex">
            <li className="mx-2"> <Link href="/">Home</Link> </li>
            <li className="mx-2"><Link href="/dashboard">Dashboard</Link></li>
            <li className="mx-2">Settings</li>
          </ul>

        </div>
    </main>
  )
}
