const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://bartoszadamczyk.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      }
    },
    "gatsby-plugin-remove-serviceworker"
  ]
}
