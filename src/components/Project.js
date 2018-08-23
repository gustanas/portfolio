import React from 'react'
import Link from 'gatsby-link'
import './Project.css'

const Project = props => (
	<div className="Project">
		<h3><Link to={props.link} target="_blank">{props.title}</Link></h3>
		<Link to={props.link} target="_blank"><img src={props.image}/></Link>
	</div>
)

export default Project