import React from 'react';
import { Link, Route} from "react-router-dom";
import AboutUs from '../navigation/AboutUs';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-inner-wrapper">
                    <div className="left-nav">
                        <span className="red">
                            Essentialism
                        </span>
                    </div>
                    <div className="right-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}