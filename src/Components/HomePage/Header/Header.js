import './header.css';
import React from 'react';
import pierre from '../../../images/pierre-chatel.png';

export default function Header() {
    return <div className="container" id="header">
        <div className="row">
            <div className="header-left col-md-6">
                <h1>“A new global quality mark for vacation homes”</h1>
                <p>We've done the hard work for you. We review every single home available in each of our destinations and select the top 3% in each price bracket.</p>
                <button className="btn btn-success">Booking</button>
            </div>
            <div className="header-right col-md-6">
                <img src={pierre} alt="home" />
            </div>
        </div>
    </div>;
}
