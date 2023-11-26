// import { getLesson } from '@app/utils/content'
import { formatDate, getLesson } from '@/app/utils/content'
import { Lesson } from 'contentlayer/generated'

type Props = {
  params: { lesson: string }
}

export default function Lesson({ params }: Props) {
  const lesson = getLesson(params.lesson)
  return (
    <>
      <LessonCard lesson={lesson} />
    </>
  )
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="mt-4">
      <h2 className="mb-1 text-xl text-blue-700 dark:text-blue-400">
        {lesson.title}
      </h2>
      <time dateTime={lesson.date} className="mb-2 block text-xs text-text/70">
        {formatDate(lesson.date)}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: lesson.body.html }}
      />
    </div>
  )
}
