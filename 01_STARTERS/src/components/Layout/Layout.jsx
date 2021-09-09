import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "../../../styles/styles.css"
const Layout = ({ children, pageTitle }) => {
  return (
    <div className="layout">
      <head>
        <title>{pageTitle ?? "my app"}</title>
      </head>
      <Header />
      <div className="app">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
