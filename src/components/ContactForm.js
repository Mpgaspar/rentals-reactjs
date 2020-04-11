import React from 'react'

const ContactForm = () => {
    return (
        <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="input_text" type="text" data-length="10"/>
              <label for="input_text">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
              <label for="textarea2">Your Message</label>
            </div>
          </div>
        </form>
      </div>
    )
}

export default ContactForm