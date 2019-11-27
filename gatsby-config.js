/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Storyfolio`,
    url: `https://katmh.com/storyfolio`,
    description: `TBD`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`
      }
    }
  ]
}
