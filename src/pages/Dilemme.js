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
        <Metadata company="Dilemme" website="" year="2014-2015" keywords={[
          'Swift', 
          'Auto Layout', 
          'Storyboard', 
          'Parse SDK',
          'Facebook SDK',
          'Sketch']} />

        <div className="Details"> 
        <img src="https://cl.ly/bf6d89c19bd8/Dilemme.png" />

        <p>Dilemme is a fashion voting app and it was the first app I developped and designed.
        </p>

        <p>
        I was accepted in a startup accelerator program thanks to it. I was selected as one of the 8 finalists out of 50 teams.
        </p>

        <p>
          I was relying on Parse SDK for the backend and unfortunately had to discontinue the app when Parse was shut down. Nevertheless, it was a very fun project and I was able to experiment a lot with animations and Sketch:
        </p>

        
        </div>
    </div>
  </div>
)

export default ProjectDetails