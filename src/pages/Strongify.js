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
          <Metadata company="Strongify" website="www.strongify.app" year="2018" keywords={[
            'Swift 4', 
            'Core Data', 
            'Animation', 
            'Marketing',
            'Fabric'
        ]} />

          <div className="Details"> 
          <img src="https://cl.ly/3dbf8e4a45a3/Sentiance.png" />

          <p>
            I have never been satisfied with any of the existing workout tracker apps out there. They are all over complicated and require too much input from me.
          </p>

          <p>
            My goal was to create a gym tracker that is easy to understand and fast to use during a workout.
            I single-handedly implemented the app and markeked it myself. It works on Swift 4 and rely on Core Data for data persistence.
          </p>

          <p>
            Meet Strongify:
            With Strongify, create the gym routine you deserve and keep track of your progress over time.
          </p>
          </div>
      </div>
    </div>
  </div>
)

export default ProjectDetails