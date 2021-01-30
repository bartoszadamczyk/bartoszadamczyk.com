import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Hero from "../components/Hero/Hero"
import "antd/dist/antd.css"

const primaryHeader = "404 Not Found"
const secondaryHeader = (
  <>
    Check out my <Link to="/">homepage</Link>
  </>
)

const NotFound = () => {
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>404 Not Found</title>
        <html lang="en" />
        <meta name="description" content="404 Not Found" />
      </Helmet>
      <Hero primaryHeader={primaryHeader} secondaryHeader={secondaryHeader} />
    </>
  )
}

export default NotFound
