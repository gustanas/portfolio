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
        <Metadata company="Sentiance" website="www.sentiance.com" year="2016-2018" keywords={[
          'SDK',
          'Objective-C', 
          'Core Location',
          'Core Motion',
          'Core Data', 
          'NSOperation', 
          'Jenkins',
          'Instruments',
          'XCTest']} />

        <div className="Details"> 
        <img src="https://cl.ly/3dbf8e4a45a3/Sentiance.png" />

        <p>
        Sentiance develops a mobile SDK which interprets sensor data in real-time to infer user location, transport mode and base-level activity.
        </p>

        <p>The company turns these IOT sensor data into rich insights about people’s behavior and real-time context. Their SDK is used by +100K users. 
        </p>

        <p>
         My task was to accurately track the user location in the background. I stored and uploaded sensor data with low battery impact (~5% daily). I increased the test coverage by 50% and then refactored the whole SDK.
        </p>
        <p>
         I also had to conduct international clients support calls and interviewed dozens of candidates.
        </p>

        </div>
    </div>
  </div>
)

export default ProjectDetails