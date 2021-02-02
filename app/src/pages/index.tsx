import React from "react"
import { Helmet } from "react-helmet"
import App from "../components/App"
import "antd/dist/antd.css"

const Home = () => {
  return (
    <>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <title>Hi, I&#39;m Bartek</title>
        <html lang="en" />
        <meta name="description" content="Hi, I'm Bartek" />
      </Helmet>
      <App />
    </>
  )
}

export default Home
