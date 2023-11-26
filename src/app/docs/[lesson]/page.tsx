// import LessonTitle from './lesson-title'
import { allLessons, Lesson } from 'contentlayer/generated'
import { allLessonsAsc } from '@app/utils/content'
import { compareAsc, format, parseISO } from 'date-fns'
import Link from 'next/link'

type Props = {}

export default function Lesson({}: Props) {
  return (
    <>
      {/* <LessonTitle /> */}
      <div>
        {allLessonsAsc.map((lesson, idx) => (
          <LessonCard key={idx} {...lesson} />
        ))}
      </div>
    </>
  )
}

function LessonCard(lesson: Lesson) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={lesson.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {lesson.title}
        </Link>
      </h2>
      <time dateTime={lesson.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(lesson.date), 'LLLL d, yyyy')}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: lesson.body.html }}
      />
    </div>
  )
}
