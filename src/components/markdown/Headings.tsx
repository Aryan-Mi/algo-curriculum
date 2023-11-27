import React from 'react'
const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

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
  const styling = { className: 'font-bold text-xl text-blue-700' }
  return React.createElement(level, { ...styling, ...rest }, children)
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
  console.log('MDX Components', mdxComponents.h1.toString())
  return mdxComponents
}

const MDXHeadings = createMDXHeadings()
export default MDXHeadings
