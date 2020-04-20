import React, {Component} from 'react'
import MapLocation from './MapLocation'

class CardItem extends Component {
  
  constructor() {
    super()
    this.state = {
      name:'Best Home',
      description: 'I am a very simple card. I am good at containing small bits of information.'
  } 
}

  render() {
      return ( 
        <>   
        <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src="assets/house1.jpg" alt="img"/>
              <span className="card-title">{this.state.name}</span>
              <a href="posts" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>  
      </div>
      <MapLocation />
      </>
    )
    }  
}

export default CardItem