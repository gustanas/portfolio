import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Main">
        <div className="Left">
            <div className= "Rectangle">     </div>
            <h1>Gustavo <br></br> Nascimento</h1>
        </div>
        <div className="Right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <Link to="/projects">Projects</Link>
        </div>
    </div>
  </div>
)

export default IndexPage
