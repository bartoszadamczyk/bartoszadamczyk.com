import React from "react"
import "./Hero.scss"

type Hero = {
  primaryHeader: string
  secondaryHeader: JSX.Element
}

const Hero = ({ primaryHeader, secondaryHeader }: Hero) => {
  return (
    <div className="Hero">
      <div className="inner">
        <h1>{primaryHeader}</h1>
        <h2>{secondaryHeader}</h2>
      </div>
    </div>
  )
}

export default Hero
