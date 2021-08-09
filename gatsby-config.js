module.exports = {
  siteMetadata: {
    title: 'Christoph Paltzer',
    author: 'Christoph Paltzer',
    description: 'Christoph Paltzer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Christoph Paltzer',
        short_name: 'Christoph Paltzer',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/Initials.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
