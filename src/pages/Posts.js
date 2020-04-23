import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: [ ]
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(res => {
               this.setState({
                   posts: res.data.slice(0,10)
               })   
           })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="row">
                      <div className="col s12 m6">
                        <div className="card" key={post.id}>
                          <div className="card-image">
                            <img src="assets/house1.jpg" alt="img"/>
                            <span className="card-title">{post.title}</span>
                            <Link to={`/posts/${post.id}`} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                          </div>
                          <div className="card-content">
                            <p>{post.body}</p>
                          </div>
                        </div>
                      </div>  
                    </div>
                )
            })
        ) : (
            <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        )

        return (
            <div className="container">
            <h4 className="center">Properties</h4>
            {postList}
            </div>
        )
    }
}

export default Posts

