'use client'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react'

type Props = {}

export default function Navbar({}: Props) {
  // type theme = 'light' | 'dark'
  // const [theme, setTheme] = useState<theme>('light')

  const toggleTheme = () => {
    const root = window.document.documentElement
    if (root.classList.contains('dark')) root.classList.remove('dark')
    else root.classList.add('dark')
  }

  return (
    <header className="bg-secondary">
      <nav className="mx-32 flex items-center justify-between py-3">
        <div className="flex items-center">
          <Logo className="text-primary" width="36" height="36" />
          <Link href="/" className="font-medium">
            02110 | Algorithms and Data Structures II
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="w-[22rem] rounded-lg bg-primary/25 py-1">
            <p className="select-none pl-4 text-left opacity-60">
              Search curriculum...
            </p>
          </button>
          <button onClick={toggleTheme}>
            <NavIcon props={{ icon: faSun }} />
          </button>
          <Link
            href="https://github.com/Aryan-Mi/algo-curriculum"
            target="_blank"
            className="font-medium"
          >
            <NavIcon props={{ icon: faGithub }} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

function NavIcon({ props }: { props: FontAwesomeIconProps }) {
  return (
    <>
      <FontAwesomeIcon className="text-2xl text-primary" {...props} />
    </>
  )
}
