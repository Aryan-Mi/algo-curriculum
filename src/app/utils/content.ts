import { allLessons } from 'contentlayer/generated'
import { compareAsc, compareDesc } from 'date-fns'

export const allLessonsAsc = allLessons.sort((a, b) =>
  compareAsc(new Date(a.date), new Date(b.date)),
)

export const allLessonsDesc = allLessons.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date)),
)
