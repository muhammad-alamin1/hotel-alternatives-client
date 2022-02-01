import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a id="navbar-brand" className="navbar-brand" href="/">Hotel Alternatives</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul id="navbar-nav" className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Admin</Link>
                        </li>
                    </ul>
                    <div className="">
                        <button className="btn btn-success sign-up">Sign Up</button>
                        <button className="btn btn-success sign-in">Sign In</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
}
