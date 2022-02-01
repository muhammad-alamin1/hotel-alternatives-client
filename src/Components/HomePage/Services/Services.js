import './services.css';
import React from 'react';
import service from '../../../images/service1.webp';
import service2 from '../../../images/service2.webp';
import service3 from '../../../images/service3.webp';

export default function Services() {
  return <div>
      <div className="container">
          <hr />
          <div className="row service-item">
              <div className="service-left col-md-6">
                  <img src={service} alt="service" />
                  <p><small><i>Don't worry, our Home Critic will be gone by the time you arrive.</i></small></p>
              </div>
              <div className="service-right service-side-desc col-md-5" >
                  <div className="">
                      <h1>01</h1>
                      <h3>The only place you’ll find all the best homes</h3>
                      <p>We've done the hard work for you. We review every single home available in each of our destinations and select the top 3% in each price bracket.</p>
                  </div>
              </div>
          </div>
          <div className="row service-item">
            <div className="service-right service-side-desc col-md-6" >
                  <div className="">
                      <h1>02</h1>
                      <h3>Selected through the world's most rigorous vetting process</h3>
                      <p>Our Home Critics review thousands of homes and put the best to the test, obsessing over every last detail.</p>
                  </div>
              </div>
              <div className="service-left col-md-6">
                  <img src={service2} alt="service" />
                  <p><small><i>Here's Home Critic Wilfred. He believes "stickler" is a compliment.</i></small></p>
              </div>
          </div>
          <div className="row service-item">
              <div className="service-left col-md-6">
                  <img src={service3} alt="service" />
                  <p><small><i>When you trust an algorithm to find your vacation home, consider how <br/> much fun an algorithm would be on vacation.</i></small></p>
              </div>
              <div className="service-right service-side-desc col-md-5" >
                  <div className="">
                      <h1>03</h1>
                      <h3>With our expert team just a phone call away</h3>
                      <p>Remember when real people who knew what they were doing helped you plan your trips away? That was lovely. It still is. No hidden numbers or call centres, we're here to help.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>;
}
