import React from 'react'

const ContactForm = () => {
  
  function sendEmail() {
    const email = document.getElementById('email').value
    const msg = document.getElementById('msg').value

    if(email !== "" & msg !== ""){
      alert('Thank you!Your email has been sent!')
    }
  }

  return (
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" data-length="10" required/>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="msg" className="materialize-textarea" data-length="120" required></textarea>
              <label for="msg">Your Message</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={sendEmail}>Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
}

export default ContactForm