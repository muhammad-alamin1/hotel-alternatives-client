import './room.css';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import home from '../../../images/home3.jpg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const homes = [
  {
        id: 1,
        img: home,
        address: `DRETA DE L'EIXAMPLE`,
        description: 'Majolica, Barcelona',
        price: 17989
    },
    {
        id: 2,
        img: home,
        address: 'SPRINGS',
        description: 'The 1968, East Hampton',
        price: 21343
    },
    {
        id: 3,
        img: home,
        address: 'NEW YORK',
        description: 'A sign of the time United State',
        price: 33323
    },
    {
        id: 4,
        img: home,
        address: 'WALES',
        description: 'TyLog, United Kingdom',
        price: 76832
    },
    {
        id: 5,
        img: home,
        address: 'LONDON',
        description: 'School Ties, England',
        price: 23325
    },
]

export default function Room() {
  return <div>
      <div className="container">
          <hr/>
        <div style={{'marginTop': '40px'}}>
            <span><i>The end of endless scrolling</i></span>
            <br/>
            <h5>Book your dream stay today</h5>
        </div>
        <div id="home">
          <Carousel responsive={responsive}>
            {
              homes.map(home =>(
                  <div className="cards">
                      <div className="card">
                      <a href="#">
                      <img className="card-img-top" src={home.img} alt="home" />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">{home.address}</h5>
                        <p className="card-text">{home.description}</p>
                        <br />
                        <small>FROM</small>
                        <p>BDT <strong><i>{home.price}</i></strong>  PER DAY</p>
                      </div>
                    </div>
                  </div>
              ))
            }
          </Carousel>
        </div>
      </div>
  </div>;
}
