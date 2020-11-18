import { usePosts } from './use-posts'
import { UseSiteMeata } from './use-site-meta'
import { useFaqs } from './use-faqs'

interface Post {
  id: string
  title: string
  slug: string
  twitterDescription: string
  description: string
  keywords: string[]
  category: string[]
  featuredImage: any
  body?: any
}
interface File {
  fluid: any
  id: string
  title: string
}

interface SimpleAccordianDataSchema {
  id: string
  title: string
  description: string
  open: boolean
}
export type { Post, File, SimpleAccordianDataSchema }
export { usePosts, UseSiteMeata, useFaqs }
