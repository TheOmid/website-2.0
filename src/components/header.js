import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li class="text-primary inline-block align-middle md:ml-8 hover:text-secondary">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header class="my-0 mx-auto max-w-5xl py-6 px-4">
        <Link to="/">
          <span class="text-gold font-bold text-xl text-center">{siteTitle}</span>
        </Link>
        <ul class="float-right align-middle">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About Me</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
