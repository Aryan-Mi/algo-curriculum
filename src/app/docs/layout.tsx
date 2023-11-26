import Sidebar from '@/components/sidebar'
import { allLessonsAsc } from '@/app/utils/content'

const lessonLinks = allLessonsAsc.map((lesson) => ({
  ref: lesson.title,
  link: lesson.url,
}))

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <main className="flex h-[350vh] bg-background">
      <Sidebar lessonLinks={lessonLinks} />
      <section className="flex-[2_2_0%] text-3xl">{children}</section>
    </main>
  )
}
