import React from 'react'

function Footer() {
    return (
      <footer class="page-footer font-small alert-dark pt-4">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
          </div>
          <hr class="clearfix w-100 d-md-none pb-3"/>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!"><img src="assets/facebook.png" alt="logo"/></a>
              </li>
              <li>
                <a href="#!"><img src="assets/instagram.png" alt="logo"/></a>
              </li>
              <li>
                <a href="#!"><img src="assets/twitter.png" alt="logo"/></a>
              </li>
              <li>
                <a href="#!"><img src="assets/youtube.png" alt="logo"/></a>
              </li>
            </ul>
          </div> 
      </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2020 Copyright
      </div>
    </footer>
    )
}

export default Footer;