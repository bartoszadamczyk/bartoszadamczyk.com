import React from "react"
import Hero from "./Hero/Hero"

const primaryHeader = "Hi, I'm Bartek"
const gitHubLink = <a href="https://github.com/bartoszadamczyk">GitHub</a>
const linkedInLink = <a href="https://www.linkedin.com/in/bartoszadamczyk/">LinkedIn</a>
const secondaryHeader = (
  <>
    Check out my {gitHubLink} and {linkedInLink} pages
  </>
)

const App = () => {
  return <Hero primaryHeader={primaryHeader} secondaryHeader={secondaryHeader} />
}

export default App
