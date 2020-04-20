import React from 'react'

const ContactForm = () => {
    return (
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="input_text" type="text" data-length="10"/>
              <label for="input_text">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
              <label for="textarea2">Your Message</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
}

export default ContactForm