import * as React from "react"
import Footer from "../Footer/Footer"

import Header from "../Header/Header"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <head>
        <title>Hello</title>
      </head>
      <div className="layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
