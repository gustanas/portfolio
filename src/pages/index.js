import React from 'react'
import Link from 'gatsby-link'

import resume from '../pages/GustavoNascimento.pdf'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false


library.add(fab, faEnvelope)



const IndexPage = () => (
  <div>
    <div className="Main">
        <div className="Left">
            <div className= "Rectangle">     </div>
            <h1>Gustavo <br></br> Nascimento</h1>
        </div>
        <div className="Right">
          
          <p>Hi there! I'm Gustavo, I design and build iOS apps. Originally from Brazil, I grew up and studied in Belgium (and a little in Japan, too).</p>
            
          <p>I helped different companies across Europe and Asia, my code has run on hundreds of thousands of devices. You can find some of my work <Link to="/projects">here</Link>. </p>
          
          <p>Software should be painless, the developer's job is to transform the difficult into the easy. </p>

          <p>I am available for contract work, feel free to take a look at my <a href={resume}>resume</a></p> 

          <em>Experience, learn, teach, repeat.</em>
          
          <div className="Icons">
            <a href="https://twitter.com/gusta_nas"><FontAwesomeIcon icon={['fab', 'twitter']} size="sm"/></a>
            
            <a href="https://github.com/gustanas"><FontAwesomeIcon icon={['fab', 'github']} size="sm"/></a>

            <a href="https://www.linkedin.com/in/gustavo-nascimento/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="sm"/></a>

            <a href="mailto:gusta.nas@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="sm"/></a>
          </div>
        </div>
    </div>
  </div>
)

export default IndexPage
