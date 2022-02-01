import './homeservice.css';
import React from 'react';
import ReactCardCarousel from "react-card-carousel";
import home from '../../../images/pierre-chatel.png';
import home1 from '../../../images/home1.jpg';
import home2 from '../../../images/home2.jpg';
import home3 from '../../../images/home3.jpg';
import home4 from '../../../images/home4.jpg';
import home5 from '../../../images/home5.jpg';

const containerStyle = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
}

const cardStyle = {
    height: "400px",
    width: "400px",
    background: "#fff",
    color: "#000",
    fontFamily: "sans-serif",
    borderRadius: "10px",
    boxSizing: "border-box",
    overflow: 'hidden'
}

// demo data
const homes = [
    {
        id: 1,
        img: home4,
        address: `DRETA DE L'EIXAMPLE`,
        description: 'Majolica, Barcelona',
        price: 17989
    },
    {
        id: 2,
        img: home5,
        address: 'SPRINGS',
        description: 'The 1968, East Hampton',
        price: 21343
    },
    {
        id: 3,
        img: home1,
        address: 'NEW YORK',
        description: 'A sign of the time United State',
        price: 33323
    },
    {
        id: 4,
        img: home2,
        address: 'WALES',
        description: 'TyLog, United Kingdom',
        price: 76832
    },
    {
        id: 5,
        img: home3,
        address: 'LONDON',
        description: 'School Ties, England',
        price: 23325
    },
]

export default function HomeService() {
    return <div className="container" id="home-service">
        <hr></hr>
        <div className="row">
            <div className="home-service-left col-md-5">
                <h2>We don't list a lot of <br /> homes. Just the <br /> right ones.</h2>
                <p>Just 3% of homes in each destination win the luxury living, the new global quality standard for vacation homes.</p>
            </div>
            <div className="home-service-right col-md-7">
                <div style={containerStyle}>
                    <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
                        {
                            homes.map(home =>(
                                <div style={cardStyle}>
                            <a href='/'>
                                <img src={home.img} alt="home" />
                            </a>
                            <div id="desc">
                                <strong>{home.address}</strong>
                                <h6>{home.description}</h6>
                                <br />
                                <span>From</span>
                                <p>BDT <strong>{home.price}</strong> PER DAY</p>
                            </div>
                        </div>
                            ))
                        }
                    </ReactCardCarousel>
                </div>
            </div>
        </div>
    </div>;
}
