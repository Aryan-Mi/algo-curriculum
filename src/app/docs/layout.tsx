import Sidebar from '@/components/sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <main className="flex h-[350vh] bg-background">
      <Sidebar />
      <section className="flex-[2_2_0%] text-3xl">{children}</section>
    </main>
  )
}
