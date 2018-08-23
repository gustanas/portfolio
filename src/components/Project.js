import React from 'react'
import Link from 'gatsby-link'
import './Project.css'

const Project = props => (
	<div className="Project">
		<h3><Link to={props.link}>{props.title}</Link></h3>
		<img src={props.image} />
	</div>
)

export default Project