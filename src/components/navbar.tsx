'use client'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <header className="bg-secondary">
      <nav className="mx-40 flex items-center justify-between py-1">
        <div className="flex items-center">
          <Logo className="text-primary" width="48" height="48" />
          <Link href="/" className="font-medium">
            02110 | Algorithms and Data Structures II
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <button className="w-[22rem] rounded-lg bg-primary/25 py-1">
            <p className="select-none pl-4 text-left opacity-60">
              Search curriculum...
            </p>
          </button>
          <button onClick={() => console.log('toggle theme')}>Toggle</button>
          <Link href="/" className="font-medium">
            Github
          </Link>
        </div>
      </nav>
    </header>
  )
}
