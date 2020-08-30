import { graphql, useStaticQuery } from 'gatsby'

import { Query } from '../types/generated'
export interface Post {
  id: string
  title: string
  slug: string
  twitterDescription: string
  description: string
  keywords: string[]
  category: string[]
  featuredImage: any
  content?: string
}
export function usePosts(): Post[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulPost {
        nodes {
          id
          slug
          title
          twitterDescription {
            twitterDescription
          }
          publishedOn
          keywords
          category
          description {
            description
          }
          featuredImage {
            fluid {
              sizes
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
          content {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  `)
  return data.allContentfulPost.nodes.map(node => ({
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    slug: node.slug,
    twitterDescription: node.twitterDescription.twitterDescription,
    description: node.description.description,
    keywords: node.keywords,
    category: node.category,
    content: node.content.childContentfulRichText.html,
  }))
}
