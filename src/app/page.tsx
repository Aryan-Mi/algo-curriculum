import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex-1 bg-background flex items-center justify-center text-2xl flex-col">
      <h1 className="text-6xl font-bold text-blue-700">Hero Section</h1>
      <Link href="/docs" className="bg-accent mt-16 py-4 px-10 rounded-full">
        <p className="text-background font-bold text-xl">GET STARTED</p>
      </Link>
    </main>
  )
}
