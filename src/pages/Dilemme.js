import React from 'react'
import Link from 'gatsby-link'
import Metadata from '../components/metadata';

const ProjectDetails = () => (
  <div className="ProjectDetails">
    <div className="Header">
        <div className= "Logo"></div>
        <h1><Link to="/">Gustavo <br></br> Nascimento</Link></h1>
    </div>

    <div className="Content">
        <Metadata company="Gengo" website="www.gengo.com" keywords={['Objective-C', 
        'Swift', 
        'Core Data', 
        'NSOperation', 
        'XCTest']} />

        <div className="Details"> 
        <img src="https://cl.ly/bf6d89c19bd8/Dilemme.png" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        </div>
    </div>
  </div>
)

export default ProjectDetails