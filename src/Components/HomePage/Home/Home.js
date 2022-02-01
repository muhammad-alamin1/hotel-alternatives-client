import './home.css';
import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import HomeService from '../HomeService/HomeService';
import Services from '../Services/Services';
import Room from '../Room/Room';
import Footer from '../Footer/Footer';

export default function Home() {
    return <div id="home">
        <Navbar />
        <Header />
        <HomeService />
        <Services />
        <Room />
        <Footer />
    </div>;
}
