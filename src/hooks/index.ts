import { usePosts } from './use-posts'
import { UseSiteMeata } from './use-site-meta'
interface Post {
  id: string
  title: string
  slug: string
  twitterDescription: string
  description: string
  keywords: string[]
  category: string[]
  featuredImage: any
  body: any
}
interface File {
  fluid: any
  id: string
  title: string
}
export type { Post, File }
export { usePosts, UseSiteMeata }
