import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Lesson = defineDocumentType(() => ({
  name: 'Lesson',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (lesson) => `/docs/${lesson._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Lesson],
})
