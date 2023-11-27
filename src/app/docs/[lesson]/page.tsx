// import { getLesson } from '@app/utils/content'
import { formatDate, getLesson } from '@/app/utils/content'
import { Lesson, allLessons } from 'contentlayer/generated'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

type Props = {
  params: { lesson: string }
}

export const generateStaticParams = async () =>
  allLessons.map((lesson) => ({
    lesson: lesson.titleURL || lesson._raw.flattenedPath,
  }))

export const generateMetadata = ({ params }: Props) => {
  const lesson = getLesson(params.lesson)
  return { title: lesson.title }
}

export default function Lesson({ params }: Props) {
  const lesson = getLesson(params.lesson)
  return <LessonCard lesson={lesson} />
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  const MDXContent = useMDXComponent(lesson.body.code)

  return (
    <div className="mt-4 text-lg">
      <h2 className="mb-1 text-xl text-blue-700 dark:text-blue-400">
        {lesson.title}
      </h2>
      <time dateTime={lesson.date} className="mb-2 block text-xs text-text/70">
        {formatDate(lesson.date)}
      </time>
      <MDXContent components={mdxComponents} />
    </div>
  )
}

// TODO: refactor and move
const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-bold text-xl text-blue-700">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-bold text-lg text-blue-600">{children}</h2>
  ),
}
