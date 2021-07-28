import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header>
      <nav>
        <h2>{data.site.siteMetadata.title}</h2>
        <ul>
          <li>
            <Link to="/">top</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
