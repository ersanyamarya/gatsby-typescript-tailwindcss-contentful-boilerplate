// import { graphql, useStaticQuery } from 'gatsby'
import { SimpleAccordianDataSchema } from '.'

// import { Query } from '../types/generated'

export function useFaqs(): SimpleAccordianDataSchema[] {
  // const data: Query = useStaticQuery(graphql`
  //   query {
  //     allContentfulPost {
  //       nodes {
  //         id
  //         slug
  //         title
  //         twitterDescription {
  //           twitterDescription
  //         }
  //         publishedOn
  //         keywords
  //         category
  //         description {
  //           description
  //         }

  //         featuredImage {
  //           fluid {
  //             sizes
  //             aspectRatio
  //             base64
  //             src
  //             srcSet
  //             srcSetWebp
  //             srcWebp
  //             tracedSVG
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // return data.allContentfulPost.nodes.map(node => ({
  //   id: node.id,
  //   featuredImage: node.featuredImage.fluid,
  //   title: node.title,
  //   slug: node.slug,
  //   twitterDescription: node.twitterDescription.twitterDescription,
  //   description: node.description.description,
  //   keywords: node.keywords,
  //   category: node.category,
  // }))
  return [
    {
      id: 'one',
      title: 'This is a question',
      description:
        'Ea voluptate anim id officia duis reprehenderit consectetur sint amet ipsum dolor aute. Nisi magna aliqua consequat dolore sint cupidatat esse mollit pariatur aliqua consequat. Mollit cupidatat eu sunt officia pariatur incididunt ad.',
      open: true,
    },
    {
      id: 'two',
      title: 'This is a question',
      description:
        'Ea voluptate anim id officia duis reprehenderit consectetur sint amet ipsum dolor aute. Nisi magna aliqua consequat dolore sint cupidatat esse mollit pariatur aliqua consequat. Mollit cupidatat eu sunt officia pariatur incididunt ad.',
      open: false,
    },
    {
      id: 'three',
      title: 'This is a question',
      description:
        'Ea voluptate anim id officia duis reprehenderit consectetur sint amet ipsum dolor aute. Nisi magna aliqua consequat dolore sint cupidatat esse mollit pariatur aliqua consequat. Mollit cupidatat eu sunt officia pariatur incididunt ad.',
      open: false,
    },
    {
      id: 'four',
      title: 'This is a question',
      description:
        'Ea voluptate anim id officia duis reprehenderit consectetur sint amet ipsum dolor aute. Nisi magna aliqua consequat dolore sint cupidatat esse mollit pariatur aliqua consequat. Mollit cupidatat eu sunt officia pariatur incididunt ad.',
      open: false,
    },
    {
      id: 'five',
      title: 'This is a question',
      description:
        'Ea voluptate anim id officia duis reprehenderit consectetur sint amet ipsum dolor aute. Nisi magna aliqua consequat dolore sint cupidatat esse mollit pariatur aliqua consequat. Mollit cupidatat eu sunt officia pariatur incididunt ad.',
      open: false,
    },
    {
      id: 'six',
      title: 'This is a question',
      description:
        'Ea voluptate anim id officia duis reprehenderit consectetur sint amet ipsum dolor aute. Nisi magna aliqua consequat dolore sint cupidatat esse mollit pariatur aliqua consequat. Mollit cupidatat eu sunt officia pariatur incididunt ad.',
      open: false,
    },
  ]
}
