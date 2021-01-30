import React from "react"
import { Helmet } from "react-helmet"
import App from "../components/App"
import "antd/dist/antd.css"

const Home = () => {
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>Bartosz Adamczyk</title>
        <html lang="en" />
        <meta name="description" content="About Bartosz Adamczyk" />
      </Helmet>
      <App />
    </>
  )
}

export default Home
