const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://bartoszadamczyk.com"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "About Bartosz Adamczyk",
        short_name: "Bartosz Adamczyk",
        description: "About Bartosz Adamczyk",
        lang: "en",
        display: "standalone",
        icon: "static/favicon.svg",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#fff"
      }
    },
    "gatsby-plugin-offline"
  ]
}
