import React from "react"
import { Layout } from "../components"
import { usePosts } from "../hooks"
import Image from "gatsby-image"
export default function Blog(): JSX.Element {
  return (
    <Layout>
      <h1>All the posts </h1>
      <h2>Blog</h2>
      <pre>{JSON.stringify(usePosts(), null, 2)}</pre>
      {usePosts().map(post => (
        <div key={post.id}>
          <Image fluid={post.featuredImage} />
        </div>
      ))}
    </Layout>
  )
}
