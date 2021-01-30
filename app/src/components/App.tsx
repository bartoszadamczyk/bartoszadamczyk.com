import React from "react"
import Hero from "./Hero/Hero"

const primaryHeader = "Hi, I'm Bartek"
const secondaryHeader = (
  <>
    Checkout my <a href="https://github.com/bartoszadamczyk">GitHub</a> and{" "}
    <a href="https://www.linkedin.com/in/bartoszadamczyk/">LinkedIn</a> pages
  </>
)

const App = () => {
  return <Hero primaryHeader={primaryHeader} secondaryHeader={secondaryHeader} />
}

export default App
