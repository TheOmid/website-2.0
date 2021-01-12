import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li class="text-primary inline-block align-middle ml-3 md:ml-8 hover:text-secondary text-lg md:text-base">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header class="my-0 mx-auto max-w-5xl py-4 px-4 text-center md:text-justify">
        <Link to="/">
          <span class="text-gold font-bold text-2xl">{siteTitle}</span>
        </Link>
        
        <ul class="flex justify-center md:block md:float-right flex-wrap mt-4 md:mt-0">
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
