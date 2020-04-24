import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js'


class Filters extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#filters');
    M.Sidenav.init(sidenav, {});
  }
  
  render() {
    return (
      <>
      <h5  data-target="filters" className="sidenav-trigger"><i className="material-icons">find_in_page</i>Filters</h5>
        <ul id="filters" className="sidenav  grey lighten-5">
          <li>
            <Link to='/'>Bedrooms</Link>
          </li>
          <li>
            <Link to='/about'>Bathrooms</Link>
          </li>
          <li>
            <Link to='/contact'>Area/m²</Link>
          </li>
          <li>
            <Link to='/posts'>Condition</Link>
          </li>
          <li>
            <Link to='/properties'>Price</Link>
          </li>
          <li>
            Extras
            <form action="#">
                <p>
                <label>
                    <input type="checkbox" />
                    <span>Pets</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>Lift</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>Ar conditioner</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>Garden</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>Pool</span>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" />
                    <span>Terrace</span>
                </label>
                </p>
            </form>
          </li>
        </ul>
      </>
    )
  } 
}

export default Filters