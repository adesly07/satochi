import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 project">
                        <h4>Let's talk about your project.</h4>
                        <h4>front-end, back-end, and much more at</h4>
                        <Link to="/" className="mailto">hello@company.com </Link><span className="mailto"><i className="bi-arrow-right"></i></span>
                    </div>
                    <div className="btt">
                        <button className="btn">Get In Touch</button>
                    </div>
                    <div className="icons">
                        <i className="bi-twitter icon"></i>
                        <i className="bi-google icon"></i>
                        <i className="bi-github icon"></i>
                        <i className="bi-youtube icon"></i>
                     </div>
                    <div className="copyright">
                        <h6>© Copyright 2023 Webpixels - Designed by SMY Tech.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;
  