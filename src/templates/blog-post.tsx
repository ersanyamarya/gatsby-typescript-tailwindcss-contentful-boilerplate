import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'
import { Post } from '../hooks'
import Image from 'gatsby-image'

const HtmlComment = text => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<!-- ${text} -->`,
    }}
  />
)

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
const Button = styled.button`
  ${tw`bg-blue-900 hover:bg-blue-800 text-white p-2 rounded`}
`
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function BlogPosts({ data }): JSX.Element {
  const { title, featuredImage, content } = getPost(data.contentfulPost)
  console.log(HtmlComment(content))

  return (
    <Layout>
      <Button>Activate</Button>
      <div>
        <Image tw="max-w-lg rounded overflow-hidden shadow-lg" fluid={featuredImage} />
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
