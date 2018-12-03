import React from 'react'
import Link from 'gatsby-link'
import './Project.css'


const Project = props => (
	<div className="Project">
		<Link to={props.link} target="_blank">
		<h3>{props.title}</h3>
		<div className="Image">
			<img src={props.image}/>
			<h1>{props.number}</h1>
		</div>
		</Link>
	</div>
)

export default Project