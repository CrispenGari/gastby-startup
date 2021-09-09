import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import { header, header__link__active } from "./Header.module.scss"
const Header = () => {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            languages
            title
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <div className={header}>
      <Link to="/" activeClassName={header__link__active}>
        Home
      </Link>
      <Link to="/about" activeClassName={header__link__active}>
        About
      </Link>
    </div>
  )
}

export default Header
