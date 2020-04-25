import React, { Component } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js'


class Filters extends Component {
  componentDidMount() {
    const priceInpt = document.querySelector('#priceInpt');
    M.Range.init(priceInpt, {});

    let sidenav = document.querySelector('#filters');
    M.Sidenav.init(sidenav, {}); 
  }


  render() {
    return (
      <>
        <br/>
        <form action="#">
        <div>Max Price(€):</div>
          <p class="range-field">
            <input  type="range" id="priceInpt" min="0" max="100" />
          </p>
        </form>
        <h5 data-target="filters" className="sidenav-trigger"><i className="material-icons">find_in_page</i>Filters</h5>
        <ul id="filters" className="sidenav  grey lighten-5">
          <li>
          <div><strong>Bedrooms:</strong></div>
          <form action="#">
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio" checked />
                <span>0</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio" />
                <span>1</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>2</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio"/>
                <span>+3</span>
              </label>
            </p>
          </form>
          </li>
          <li>
          <div><strong>Bathrooms:</strong></div>
          <form action="#">
              <p>
                <label>
                  <input class="with-gap" name="group2" type="radio" checked />
                  <span>1</span>
                </label>
              </p>
              <p>
                <label>
                  <input class="with-gap" name="group2" type="radio" />
                  <span>+2</span>
                </label>
              </p>
          </form>
          </li>
          <li>
            <div><strong>Condition:</strong></div>
            <form action="#">
              <p>
                <label>
                  <input class="with-gap" name="group3" type="radio" checked />
                  <span>good</span>
                </label>
              </p>
              <p>
                <label>
                  <input class="with-gap" name="group3" type="radio" />
                  <span>new</span>
                </label>
              </p>
              <p>
                <label>
                  <input class="with-gap" name="group3" type="radio" />
                  <span>rustic</span>
                </label>
              </p>
              <p>
                <label>
                  <input class="with-gap" name="group3" type="radio" />
                  <span>reformed</span>
                </label>
              </p>
            </form>
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