import Sidebar from '@/components/sidebar'
import { getAllLessonsAsc } from '@app/utils/content'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  const lessons = getAllLessonsAsc()

  return (
    <main className="flex h-[350vh] bg-background">
      <Sidebar lessons={lessons} />
      <section className="flex-[2_2_0%] text-3xl">{children}</section>
    </main>
  )
}
