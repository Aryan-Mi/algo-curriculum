import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { resolveURLPath } from './src/contentslayer/utils'

export const Lesson = defineDocumentType(() => ({
  name: 'Lesson',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    titleURL: { type: 'string' },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: resolveURLPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Lesson],
})
