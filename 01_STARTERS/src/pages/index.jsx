import React from "react"
import Layout from "../components/Layout/Layout"

const Home = () => {
  return (
    <Layout>
      <div>Hello world</div>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <p key={i.toString()}>{i}</p>
        ))}
    </Layout>
  )
}

export default Home
