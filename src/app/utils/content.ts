import { allLessons } from 'contentlayer/generated'
import { compareAsc, compareDesc, format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'

function getAllLessonsDesc(lessons = allLessons) {
  return lessons.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}
function getAllLessonsAsc(lessons = allLessons) {
  return lessons.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
}

function getLesson(input: string) {
  const lesson = allLessons.find(
    (lesson) =>
      lesson.titleURL === input || input === lesson._raw.flattenedPath,
  )
  if (!lesson) throw notFound()
  return lesson
}

function formatDate(date: string) {
  return format(parseISO(date), 'LLLL d, yyyy')
}

export { getAllLessonsDesc, getAllLessonsAsc, getLesson, formatDate }
