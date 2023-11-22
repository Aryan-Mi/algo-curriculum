'use client'
import Logo from '@/assets/logo.svg'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Navbar({}) {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  function toggleTheme() {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
    console.log('Theme', theme)
  }

  return (
    <header className="border-b-2 border-b-text/10 bg-background">
      <nav className="mx-32 flex items-center justify-between py-3">
        <div className="flex items-center">
          <Logo className="text-accent" width="36" height="36" />
          <Link href="/" className="font-medium">
            02110 | Algorithms and Data Structures II
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="w-[22rem] rounded-lg bg-text/20 py-1">
            <p className="select-none pl-4 text-left opacity-60">
              Placeholder...
            </p>
          </button>
          <button onClick={toggleTheme}>
            <NavIcon props={{ icon: isDark ? faMoon : faSun }} />
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
      <FontAwesomeIcon
        // fa-fw forces icons to be the same width
        className="fa-fw fa-lg text-text/70 transition-colors hover:text-text"
        {...props}
      />
    </>
  )
}
