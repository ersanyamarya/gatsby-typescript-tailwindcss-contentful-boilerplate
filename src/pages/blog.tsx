import React from 'react'
import { Layout } from '../components'
import { usePosts, Post } from '../hooks'
import tw, { styled } from 'twin.macro'

import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Card = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg sm:mx-1 mb-12`}/* &:first-of-type {
    ${tw`md:ml-0 `}
  } */
`
const Title = styled.span`
  ${tw`font-bold text-2xl mb-2`}
`

function getPosts(posts: Post[]) {
  posts = [...posts, ...posts, ...posts, ...posts]
  return posts.map(post => (
    <Card key={post.id}>
      <Image tw="max-w-sm rounded-lg overflow-hidden shadow-lg" fluid={post.featuredImage} />
      <div tw="px-6 py-4">
        <Title>{post.title}</Title>
        <p tw="text-gray-700 text-base">
          {post.description} <br />
          <Link to={`/blog/${post.slug}`} tw="text-teal-800 hover:text-gray-500">
            continue reading ...
          </Link>
        </p>
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
  ))
}
export default function Blog(): JSX.Element {
  return (
    <Layout>
      <h1>All the posts </h1>
      <div tw="block md:flex sm:flex-wrap justify-around">{getPosts(usePosts())}</div>
    </Layout>
  )
}
