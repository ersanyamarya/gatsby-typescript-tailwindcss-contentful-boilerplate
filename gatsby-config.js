// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  siteMetadata: {
    title: ` Gatsby Typescript Tailwindcss Contentful Boilerplate`,
    siteUrl: `https://ersanyamarya.github.io/gatsby-typescript-tailwindcss-contentful-boilerplate/`,
    description: `Gatsby Boilerplate with Typescript`,
  },
  pathPrefix: '/gatsby-typescript-tailwindcss-contentful-boilerplate',
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    '@contentful/gatsby-transformer-contentful-richtext',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
