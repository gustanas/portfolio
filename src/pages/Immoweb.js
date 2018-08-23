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
        <Metadata company="Immoweb" website="www.immoweb.be" year="2015-2016" keywords={[
        'Swift', 
        'Core Data', 
        'Localization', 
        'Jenkins',
        'XCTest',
        'XCUITest']} />

        <div className="Details"> 
        <img src="https://cl.ly/e69d2f9922d0/Immoweb.jpg" />

        <p>Immoweb is the Belgian real estate platform. Their app is one of the most downloaded app in the country.
        </p>

        <p>
        While I was there, I increased the test coverage by 15% while reducing the crash rates to less than 0.4%.
        </p>

        <p>
        I also put a lot of work on improving the continuous integration environment (Jenkins) and created many different automated UI tests.
        </p>

        <p>All these led to better rankings on the App Store and a more stable app.
        </p>
        </div>
    </div>
  </div>
)

export default ProjectDetails