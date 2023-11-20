import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algorithm Curriculum',
  description: 'Generated by create next app',
}

interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-background`}>{children}</body>
    </html>
  )
}
