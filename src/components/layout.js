/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="bg-body bg-cover flex flex-col">
      <div class="flex-grow flex-shrink-0">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div class="my-0 mx-auto max-w-5xl py-6 px-4">
          <main class="overflow-hidden">{children}</main>
        </div>
      </div>
      <footer class="bg-accent-1 border-t border-accent-2 bg-footer flex-shrink-0 py-4 text-center tracking-tight">
        <div class="flex justify-center items-center mb-2">
          <a
            class="hover:text-secondary ml-6"
            rel="noreferrer"
            target="_blank"
            href="https://linkedin.com/in/omid-shahidi"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>

          <a
            class="hover:text-secondary ml-6"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/u_omid"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>

          <a
            class="hover:text-secondary ml-6"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/TheOmid"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>

          <a
            class="hover:text-secondary ml-6"
            rel="noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/22fgjchkktikjz2zpeg62uydq?si=WpA5Qsk9S4GJrzcTHihAeQ"
          >
            <FontAwesomeIcon icon={faSpotify} size="lg" />
          </a>

          <a
            class="hover:text-secondary ml-6"
            rel="noreferrer"
            target="_blank"
            href="mailto: omidsh@umich.edu"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>

        <div>
          © Omid Shahidi, {new Date().getFullYear()}.
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
