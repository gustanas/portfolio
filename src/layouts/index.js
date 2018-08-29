import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './fontawesome.css'
import './index.css'
import './projects.css'
import './projectDetails.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "Hi there! I'm Gustavo, I design and build iOS apps." },
        { name: 'keywords', content: 'iOS, developer, Swift, Objective-C, Cocoa, Xcode, Gustavo, Nascimento' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
