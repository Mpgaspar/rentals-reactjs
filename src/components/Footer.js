import React from 'react'

function Footer() {
    return (
        <footer className="page-footer black">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <p className="white-text">Terms&Conditions</p>
              <p className="grey-text text-lighten-4">Privacy Policy</p>
              
            </div>
            <div className="col l4 offset-l2 s12">
              <h6 className="white-text">Follow us on Social Media</h6>
              <ul className="footer-links">
                <li><a className="grey-text text-lighten-3" href="#!"><img src="assets/facebook.png" alt="logo"/></a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><img src="assets/instagram.png" alt="logo"/></a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><img src="assets/twitter.png" alt="logo"/></a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><img src="assets/youtube.png" alt="logo"/></a></li>
              </ul>
              
            </div>
          </div>
        </div>
        <p className="grey-text text-lighten-4 footer-copyright container">© 2020 Copyright</p>
      </footer>
    )
}

export default Footer;