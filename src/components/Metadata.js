import React from 'react'
import Link from 'gatsby-link'
import './Metadata.css'

class Metadata extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const keywords = this.props.keywords.map((keyword) => { 
            return (    
              <h2>{keyword}</h2>
            );
          });

        return (
            <div className="Metadata">  
            <h1>{this.props.company}</h1>
            <h2>{this.props.website}</h2>
            
            <br></br>
            <h1>Year</h1>
            <h2>{this.props.year}</h2>
            <br></br>

            <h1>Keywords</h1>
            {keywords}
            </div>
        )
      }
}

export default Metadata