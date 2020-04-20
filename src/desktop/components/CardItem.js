import React, {Component} from 'react'
import '../../App.css'
import MapLocation from '../../components/MapLocation'

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
        <div class="card">
        <img src="assets/house1.jpg" class="card-img-top" alt="img"/>
        <div class="card-body">
          <h5 class="card-title">{this.state.name}</h5>
          <p class="card-text">{this.state.description}</p>
          <a href="/posts" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <MapLocation />
      </>
    )
    }  
}

export default CardItem