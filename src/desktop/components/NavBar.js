import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">Logo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/about' className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to='/contact' className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to='/posts' className="nav-link">Show Posts</Link>
      </li>
      <li className="nav-item">
        <Link to='/properties' className="nav-link">Properties</Link>
      </li>
    </ul>
  </div>
</nav>
    )
  } 
}

export default NavBar