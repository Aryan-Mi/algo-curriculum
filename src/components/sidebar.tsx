import Link from 'next/link'
type Props = {
  lessonLinks: { ref: string; link: string }[]
}

export default function Sidebar({ lessonLinks }: Props) {
  return (
    <aside className="sticky top-20 h-min w-80">
      <ol className="grid gap-4 px-4">
        {lessonLinks.map((lesson) => {
          return (
            <li
              key={lesson.ref}
              className="flex text-base rounded-md overflow-hidden"
            >
              <Link
                className="w-full py-1 pl-2 font-medium text-text/60 transition-colors hover:bg-accent/10 hover:text-blue-500"
                href={lesson.link}
              >
                {lesson.ref}
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
