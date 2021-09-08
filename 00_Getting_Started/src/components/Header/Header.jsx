import * as React from "react"
import { Link } from "gatsby"

// import styles from "./header.module.css"
const Header = () => (
  <div className="header">
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">Home</Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        <Link to="/about">About</Link>
      </h1>
    </div>
  </div>
)

export default Header
