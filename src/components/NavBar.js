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
      <div  data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></div>
        <Link to='/' className="brand-logo">Logo</Link>
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