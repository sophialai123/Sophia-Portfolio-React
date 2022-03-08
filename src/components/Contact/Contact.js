import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"

function Contact(props) {
  return (
    <div id="Contact" className='contact'>
      <h1>Get In Touch</h1>
      <p>I am open to new opportunities!</p>

      <a href='mailto:sophia852686@gmail.com'>
        <button>Say Hello 👋</button>
      </a>

    </div>
  );
}

export default Contact;

