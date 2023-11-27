import React from 'react'
const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
import { twMerge } from 'tailwind-merge'

type DefaultHeading = React.HTMLAttributes<HTMLHeadingElement>
type HeadingProp = React.HTMLAttributes<HTMLHeadingElement> & {
  level: (typeof headingLevels)[number]
}
type MDXComponent = {
  [K in (typeof headingLevels)[number]]: ({
    children,
    ...rest
  }: DefaultHeading) => React.ReactElement
}

function Heading({ level, children, ...rest }: HeadingProp) {
  const baseStyle = 'font-normal text-base text-blue-500'
  const headingStyling = {
    h1: 'font-bold text-2xl text-blue-500',
    h2: 'font-bold text-xl text-blue-600',
    h3: 'text-lg font-medium text-blue-500',
    h4: 'text-blue-500',
    h5: '',
    h6: '',
  }

  return React.createElement(
    level,
    { className: twMerge(baseStyle, headingStyling[level]), ...rest },
    children,
  )
}

function createMDXHeadings() {
  const mdxComponents = headingLevels.reduce((acc, level) => {
    acc[level] = ({ children, ...rest }: DefaultHeading) => (
      <Heading {...rest} level={level}>
        {children}
      </Heading>
    )
    return acc
  }, {} as MDXComponent)
  return mdxComponents
}

const MDXHeadings = createMDXHeadings()
export default MDXHeadings
