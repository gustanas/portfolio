import React from 'react'
import Link from 'gatsby-link'
import Metadata from '../components/metadata';
import NavigationBar from '../components/navigationBar';
import Bar from '../components/bar';

const ProjectDetails = () => (
  <div>
    <Bar></Bar>
    <NavigationBar projectsIsActive={true} ></NavigationBar>
    <div className="ProjectDetails">
      <div className="Header">
          <div className= "Logo"></div>
          <h1><Link to="/">Gustavo <br></br> Nascimento</Link></h1>
      </div>
    
      <div className="Content">
          <Metadata company="Bookizy" website="" year="2016" keywords={[ 
          'Swift', 
          'Auto Layout',
          'Go', 
          'PostgreSQL']} />

          <div className="Details"> 
          <img src="https://cl.ly/149f92fd80df/Bookizy.png" />

          <p>
            Bookizy is a social and professional platform that allows users to arrange activities with friends or to book an appointment with their doctor, hairdresser or other professionals. 
          </p>

          <p>
            I worked remotely as the lead developer and single-handedly implemented the first version of the iOS app (Swift) and the backend (Go). I implemented a real time chat system and coordinated the project with the Android team.
          </p>

          <p>
            I had the opportunity to open source some of the libraries used in the project along the way. You'll be able to find them on my <a href="https://github.com/gustanas">Github</a> page.
          </p>
          </div>
      </div>
    </div>
  </div>
)

export default ProjectDetails