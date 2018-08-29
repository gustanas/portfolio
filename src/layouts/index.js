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
    <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content="Hi there! I'm Gustavo, I design and build iOS apps." />
    <meta name="keywords" content="iOS, developer, Swift, Objective-C, Cocoa, Xcode, Gustavo, Nascimento" />

    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-79159071-2"></script>
    <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-79159071-2');
    `}
    </script>


    </Helmet>
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
