import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <ul className="flex">
            <li className="mx-2"> <Link href="/">Home</Link> </li>
            <li className="mx-2"><Link href="/dashboard">Dashboard</Link></li>
            <li className="mx-2"><Link href="/calculator">Calculator</Link></li>
            <li className="mx-2"><Link href="/cari">Cari</Link></li>
      </ul>

        {children}
      </body>
    </html>
  )
}
