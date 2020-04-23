import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js'


class NavBar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  
  render() {
    return (
      <nav className="nav-wrapper black"> 
      <div  data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></div>
        <Link to='/' className="brand-logo"><img className="logo" src="https://images.vexels.com/media/users/3/147093/isolated/preview/2d9c25ee1fbffdae2909164e858648d1-bot--n-de-inicio-de-instagram-by-vexels.png" alt="img"/></Link>
        <ul id="slide-out" className="sidenav  grey lighten-5">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/posts'>Show Posts</Link>
          </li>
          <li>
            <Link to='/properties'>Properties</Link>
          </li>
        </ul>
      </nav>
    )
  } 
}

export default NavBar