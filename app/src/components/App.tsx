import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Hero from "./Hero/Hero"

const primaryHeader = "Hi, I'm Bartek"
const gitHubLink = <OutboundLink href="https://github.com/bartoszadamczyk">GitHub</OutboundLink>
const linkedInLink = <OutboundLink href="https://www.linkedin.com/in/bartoszadamczyk/">LinkedIn</OutboundLink>
const secondaryHeader = (
  <>
    Check out my {gitHubLink} and {linkedInLink} pages
  </>
)

const App = () => {
  return <Hero primaryHeader={primaryHeader} secondaryHeader={secondaryHeader} />
}

export default App
