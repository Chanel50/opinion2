import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="container1">
      <h1 className="brand">
        <span>Opinion</span>
      </h1>
<br />
      <div className="wrapper">
       
        <div className="company-info">
          <h2>contactez nous</h2>

          <ul>
            <li>
              <i className="fa fa-road"></i> 44 Rue Ali Heddad,Alger
            </li>
            <li>
              <i className="fa fa-phone"></i> (555) 555-5555
            </li>
            <li>
              <i className="fa fa-envelope"></i> opinion@info.com
            </li>
          </ul>
        </div>
        {/* End .company-info */}

        {/* CONTACT FORM */}
        <div className="contact">
          

          <form id="contact-form">
            <p>
              <label>Nom</label>
              <input type="text" name="name" id="name" required />
            </p>

            <p>
              <label>Prénom</label>
              <input type="text" name="company" id="company" />
            </p>

            <p>
              <label>E-mail </label>
              <input type="email" name="email" id="email" required />
            </p>

            <p>
              <label>Téléphone</label>
              <input type="text" name="phone" id="phone" />
            </p>

            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message"></textarea>
            </p>

            <p className="full">
            <a href="/Notfaund" className="btnn">Envoyer</a>
              
            </p>
          </form>
          {/* End #contact-form */}
        </div>
        {/* End .contact */}
      </div>
      {/* End .wrapper */}
    </div>
    /* End .container */
  );
};

export default Contact;

  
