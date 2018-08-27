import React from 'react'
import Link from 'gatsby-link'
import Project from '../components/project';
import NavigationBar from '../components/navigationBar';
import Bar from '../components/bar';

const ProjectsPage = () => (
  <div>
    <Bar></Bar>
    <NavigationBar projectsIsActive={true} ></NavigationBar>
    <div className="Main">
        <div className="Left">
            <div className= "Rectangle"></div>
            <h1><Link to="/">Gustavo <br></br> Nascimento</Link></h1>   
        </div>

        <div className="Projects">
          <Project title="#04 Sentiance" image="https://cl.ly/3dbf8e4a45a3/Sentiance.png" link="/Sentiance"/>
          <Project title="#03 Bookizy" image="https://cl.ly/149f92fd80df/Bookizy.png" link="/Bookizy"/>
          <Project title="#02 Immoweb" image="https://cl.ly/e69d2f9922d0/Immoweb.jpg" link="/Immoweb"/>
          <Project title="#01 Dilemme" image="https://cl.ly/bf6d89c19bd8/Dilemme.png" link="/Dilemme"/>
        </div>
    </div>
  </div>
)

export default ProjectsPage
