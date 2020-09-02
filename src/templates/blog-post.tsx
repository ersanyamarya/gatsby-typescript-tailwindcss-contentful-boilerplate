import React from 'react'
import { Layout } from '../components'

import tw, { styled } from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Post } from '../hooks'

function getPost(node: any): Post {
  return {
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    slug: node.slug,
    twitterDescription: node.twitterDescription.twitterDescription,
    description: node.description.description,
    keywords: node.keywords,
    category: node.category,
    content: node.content.childContentfulRichText.html,
  }
}

const FeaturedImage = styled(Image)`
  ${tw`sm:w-9/12 mx-auto rounded overflow-hidden shadow-lg`}
`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BlogPosts({ data }): JSX.Element {
  const { title, featuredImage, content } = getPost(data.contentfulPost)
  return (
    <Layout>
      <div>
        <FeaturedImage fluid={featuredImage} />
        <h1>{title} </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    contentfulPost(id: { eq: $id }) {
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
`
