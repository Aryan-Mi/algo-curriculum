import Link from 'next/link'
type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className="sticky top-20 h-min w-80">
      <ol className="grid gap-4 px-4">
        {sidebar_lessons.map((lesson) => {
          return (
            <li
              key={lesson.title}
              className="rounded-md py-1 pl-2 text-base font-medium text-text/60 transition-colors hover:bg-accent/10 hover:text-blue-500"
            >
              <Link className="" href={`/docs/${lesson.href}`}>
                {lesson.title}
              </Link>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

// ! TEMPORARY STATIC DATA
const sidebar_lessons = [
  { title: 'General Info', href: 'general-info' },
  { title: 'Divide & conquer', href: 'divide-and-conquer' },
  { title: 'Dynamic Programming', href: 'dynamic-programming' },
  { title: 'Network Flow', href: 'network-flow' },
  { title: 'Amortized-Analysis', href: 'amortized-analysis' },
]
