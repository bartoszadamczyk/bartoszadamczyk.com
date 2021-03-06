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
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-VTDERGQJS7"
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0
        },
        pluginConfig: {
          head: true
        }
      }
    },
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
        name: "Hi, I'm Bartek",
        short_name: "Hi, I'm Bartek",
        description: "Hi, I'm Bartek",
        lang: "en",
        display: "standalone",
        icon: "static/favicon.svg",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff"
      }
    },
    "gatsby-plugin-remove-serviceworker"
  ]
}
