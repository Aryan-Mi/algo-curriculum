'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

export default function LessonTitle({}: Props) {
  const path = usePathname()
  const lesson = path.split('/').at(-1)

  return <div>Lesson: {lesson}</div>
}
