import Image from 'next/image'
import SectionProfile from './SectionProfile'
import Link from 'next/link'


export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    
         <SectionProfile />
        </div>
    </main>
  )
}
