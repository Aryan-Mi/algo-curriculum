import { Lesson } from 'contentlayer/generated'
import Link from 'next/link'
type Props = {
  lessons: Lesson[]
}

export default function Sidebar({ lessons }: Props) {
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
                className="w-full py-1 pl-2 font-medium text-text/60 transition-colors hover:bg-accent/10 hover:text-blue-500"
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
