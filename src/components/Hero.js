import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
function Hero() {
    return (
        <div className="hero">
            <div className="hero-container center-text">
                   <h3 className="text-head">We are shopfy,</h3> 
                   <p className="text-para">
                       you will get a awesome vibe with our coffee..
                   </p>
                   <div className="hero-button">
                       <button className="hero-button-text">
                       <Link to="/Collections" className="link-decor">
                       Discover Our Collections
                   </Link>
                       </button>
                   
                   </div>
                  
            </div>
           
        </div>
    )
}

export default Hero
