import React from 'react'
import { Layout } from '../components'
import { usePosts } from '../hooks'
import tw, { styled } from 'twin.macro'

import Image from 'gatsby-image'

const Card = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg`}
`
const Title = styled.h1`
  ${tw`font-bold text-2xl mb-2`}
`
export default function Blog(): JSX.Element {
  return (
    <Layout>
      <Title>All the posts </Title>
      {usePosts().map(post => (
        <Card key={post.id}>
          <Image tw="max-w-sm rounded overflow-hidden shadow-lg" fluid={post.featuredImage} />
          <div tw="px-6 py-4">
            <Title>{post.title}</Title>
            <p tw="text-gray-700 text-base">{post.description}</p>
          </div>
          <div tw="px-6 pt-4 pb-2">
            {post.keywords.map(keyword => (
              <span
                key={keyword}
                tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </Layout>
  )
}
