import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './images/logo-light.svg';
import heroimg from './images/hero-img-1.png';
function Hero() {
    return (
        <div className="container-fluid cont">
            <div className="row">
                <div className="container">
                    <div className="menu offset-md-1 col-xl-10 align-items-center">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <Link to ="/" className="navbar-brand">
                                    <img src={logo} alt="Satoshi" className="d-inline-block align-text-top"/>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to ="/" className="nav-link active" aria-current="page" href="#">Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to ="/" className="nav-link" href="#">Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to ="/" className="nav-link" href="#">Trade</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to ="/" className="nav-link" href="#">Stake</Link>
                                        </li>
                                    </ul>

                                    <div className="navside">
                                        <div className="side">Signin</div>
                                        <div className="side">Get Started</div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    
                    </div>
                </div>
                <div className="container hero">
                    <div className="row content">
                        <div className="col-lg-6">
                            <h1>Build Professional Dashboards, Faster than Ever.</h1>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-lg-5">
                            <p>With our intuitive tools and expertly designed components, you'll have the power to create professional dashboards quicker than ever.</p>
                        </div>
                        <div className="col-lg-7 but">
                            <ul>
                                <li className="side1">Purchase now</li>
                                <li className="side2">Explore more</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row heroimg">
                    <div className="col-12">
                        <img src={heroimg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Hero;
  