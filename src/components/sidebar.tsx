'use client'
import { Lesson } from 'contentlayer/generated'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {
  lessons: Lesson[]
}

export default function Sidebar({ lessons }: Props) {
  const path = usePathname().split('/').at(-1)
  const isPathActive = (lesson: Lesson) =>
    lesson.titleURL === path || path === lesson._raw.flattenedPath

  return (
    <aside className="sticky top-20 h-min w-80">
      <ol className="grid gap-4 px-4">
        {lessons.map((lesson) => {
          return (
            <li
              key={lesson._id}
              className="flex text-base rounded-md overflow-hidden"
            >
              <Link
                className={`w-full py-1 pl-2 font-medium text-text/60 transition-colors hover:bg-accent/10 hover:text-blue-500 ${
                  isPathActive(lesson) && 'text-blue-500 bg-accent/10'
                } `}
                href={lesson.url}
              >
                {lesson.title}
              </Link>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}
