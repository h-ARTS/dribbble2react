/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "../Navbar"
import Header from "../Header"
import Footer from "../Footer"
import styled from 'styled-components'
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

  const Container = styled.div`
    margin: 0 auto;
    width: 960px;
    padding: 0 15px;
  `

  return (
    <Container>
      <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
