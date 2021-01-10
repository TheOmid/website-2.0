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
           <label for="menu-toggle" class="cursor-pointer md:hidden block float-right align-middle">
             <svg class="fill-current text-gold" xmlns="http://www.w3.org/2000/svg" width="24" height="26.8" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
             <input class="hidden" type="checkbox" id="menu-toggle" />
           </label>
        <Link to="/">
          <span class="text-gold font-bold text-xl">{siteTitle}</span>
        </Link>
        
        <ul class="float-right">
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
