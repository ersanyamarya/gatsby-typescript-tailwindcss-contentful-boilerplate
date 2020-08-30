// import { resolve } from 'path'
// import { usePosts } from '../src/hooks'
// import { CreatePagesArgs } from 'gatsby'

// const createPages = ({ actions }: CreatePagesArgs): void => {
//   const { createPage } = actions
//   const blogPost = resolve(`./src/templates/blog-post.tsx`)
//   const posts = usePosts()

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1]
//     const next = index === 0 ? null : posts[index - 1]
//     createPage({
//       path: post.slug,
//       component: blogPost,
//       context: {
//         ...post,
//         previous,
//         next,
//       },
//     })
//   })
// }

// export default createPages
