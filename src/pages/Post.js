import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


// Components
import MapLocation from '../components/MapLocation'

class Post  extends Component {
    state = {
        post: null
    }
    
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => {
            this.setState({
                post: res.data
            })
            console.log(res.data)
          })
          
    }
  
    render() {
      const post = this.state.post ? (
        <>
        <div className="row">
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                    <img src="https://www.boxhouse.es/wp-content/uploads/2020/01/casas-contenedor-de-lujo-precio-box-house-336-300x300.jpeg" alt="img"/>
                    <span className="card-title">{this.state.post.title}</span>
                    </div>
                    <div className="card-content">
                    <p>{this.state.post.body}</p>
                    <div className="row">
                    <h6 className="col s6">{this.state.post.userId} Bdrs</h6>
                    <h6 className="col s6">120m²</h6>
                    </div>
                    <div className="row">
                        <h5 className="col s6">Price: €{this.state.post.id}</h5>
                        <Link to="/contact"><h6 className="col s6"><i className="small material-icons">email</i><strong>Contact</strong></h6></Link>       
                    </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className="container row col s12">
          <MapLocation /> 
        </div>
        </>
      ) : (
          <>
          <div className="center">Loading Posts...</div>
          <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
          </>
      )

      return (
          <div className="container">
              { post }
          </div>
      )
  }     
}

export default Post
