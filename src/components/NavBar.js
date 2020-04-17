import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
  
  render() {
    return (
      <nav>
      <div className="nav-wrapper black">
        <Link to="/" className="brand-logo">Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
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
      </div>
    </nav>
    )
  } 
}

export default NavBar