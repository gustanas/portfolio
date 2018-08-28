import React from 'react'
import Link from 'gatsby-link'
import './NavigationBar.css'
import resume from '../pages/GustavoNascimento.pdf'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homeIsActive: false,
            projectsIsActive: false
          }
        
        if (this.props.homeIsActive) {
            this.state.homeIsActive = true
        }

        if (this.props.projectsIsActive) {
            this.state.projectsIsActive = true
        }

        if (this.props.contactIsActive) {
            this.state.contactIsActive = true
        }
    
    }

    render() {
        
        return (
            <div className="NavigationBar">  
            <div className={this.state.homeIsActive ? 'Active' : 'NotActive'}>
            <h2><Link to="/">Home</Link></h2>
            </div>
            <div className={this.state.projectsIsActive ? 'Active' : 'NotActive'}>
            <h2><Link to="/projects">Projects</Link></h2>
            </div>
            <div className={this.state.contactIsActive ? 'Active' : 'NotActive'}>
            <h2><a href="mailto:gusta.nas@gmail.com">Contact</a></h2>
            </div>
            <div className={this.state.contactIsActive ? 'Active' : 'NotActive'}>
            <h2><a href={resume} target="_blanck">Resume</a></h2>
            </div>
            </div>
        )
      }
}

export default NavigationBar