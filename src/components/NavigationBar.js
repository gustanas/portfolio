import React from 'react'
import Link from 'gatsby-link'
import './NavigationBar.css'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homeIsActive: false
          }
        
        if (this.props.homeIsActive) {
            this.state.homeIsActive = true
        }

        if (this.props.projectsIsActive) {
            this.state.homeIsActive = true
        }
    
    }

    render() {
        
        return (
            <div className="NavigationBar">  
            <div className={this.state.homeIsActive ? 'Active' : 'NotActive'}>
            <h2>Home</h2>
            </div>
            <div className={this.state.projectsIsActive ? 'Active' : 'NotActive'}>
            <h2>Projects</h2>
            </div>
            <div className={this.state.projectsIsActive ? 'Active' : 'NotActive'}>
            <h2>Contact</h2>
            </div>
            </div>
        )
      }
}

export default NavigationBar