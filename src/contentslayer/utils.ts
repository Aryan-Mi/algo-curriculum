import { Lesson } from '.contentlayer/generated'

export function resolveURLPath(lesson: Lesson) {
  const prefix = '/docs/'

  if (!lesson.titleURL) {
    return prefix.concat(lesson._raw.flattenedPath)
  }

  const pathSplit = lesson._raw.flattenedPath.split('/')
  pathSplit.pop()
  pathSplit.push(lesson.titleURL)

  return prefix + pathSplit.join('/')
}
