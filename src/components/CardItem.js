import React, {Component} from 'react'

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
        <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src="assets/house1.jpg"/>
              <span className="card-title">{this.state.name}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
    }  
}

export default CardItem