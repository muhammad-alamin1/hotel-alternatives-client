import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return <div className="container">
      <div className="row">
          <div className="location d-flex col-md-3">
            <FontAwesomeIcon id="location" icon={faMapMarkerAlt} />
              <div className="">
                  <small><i>H#0F4(3rd floor), Road #07</i></small> <br/>
                  <small><i>New DOHS, Mohakhali, Dhaka, Bangladesh</i></small>
              </div>
          </div>
          <div className="company col-md-3">
              <h6><strong>Company</strong></h6>
                <Link to="#" className='links'>Our Story</Link><br/>
                <Link to="#" className='links'>Journal</Link><br/>
                <Link to="#" className='links'>Careers</Link>
          </div>
          <div className="contact col-md-3">
              <h6><strong>Contact</strong></h6>
              <Link to="#" className='links'>Partnerships</Link><br/>
              <Link to="#" className='links'>FAQ</Link><br/>
              <Link to="#" className='links'>Get in touch</Link>
          </div>
          <div className="social col-md-3">
              <h6><strong>Social</strong></h6>
              <Link to="#"><FontAwesomeIcon className="social-link" icon={faFacebook} /></Link>
              <Link to="#"><FontAwesomeIcon className="social-link" icon={faInstagram} /></Link>
              <Link to="#"><FontAwesomeIcon className="social-link" icon={faLinkedin} /></Link>
              <Link to="#"><FontAwesomeIcon className="social-link" icon={faYoutube} /></Link>
          </div>
      </div>
      <div id="copy-right">
          <p>&copy; Copyright Hotel Alternatives {new Date().getFullYear()}</p>
          <span><Link to="#">Terms</Link> | <Link to="#">Privacy Policy</Link></span>
      </div>
  </div>;
}
