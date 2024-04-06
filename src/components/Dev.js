import React from 'react';
import './App.css';
import shot1 from './images/shot-1.png';
import shot2 from './images/shot-2.png';
function Dev() {
    return (
        <div className="dev">
            <div className="container">
                <div className="row prosta">
                    <div className=" col-lg-6 prof">
                        <h1>23k+</h1>
                        <p>Create a professional-looking website without having to spend hours or even days designing and coding it.</p>
                    </div>
                    <div className="col-lg-6 startup">
                        <h1>Devs and startups are already using <span>Webpixels</span></h1>
                    </div>
                </div>
                <div className="row spe">
                    <div className="speed col-lg-6">
                        <h5>SPEED</h5>
                        <h1>Build a new website in hours, not weeks</h1>
                        <p>
                            Instead of starting from scratch, you can use our template to quickly create a professional-looking website without having to spend hours or even days designing and coding
                        </p>
                        <p><i className="bi bi-check speche"></i>Quickly create a professional-looking website</p>
                        <p><i className="bi bi-check speche"></i>Well designed elements and pages</p>
                        <p><i className="bi bi-check speche"></i>Professional-looking website quickly and affordably</p>
                    </div>
                    <div className="speimg col-lg-6">
                        <img src={shot1} alt='Shot1'/>
                    </div>
                </div>
                <div className="row cust">
                    <div className="custimg col-lg-6">
                        <img src={shot2} alt='Shot2'/>
                    </div>
                    <div className="customize col-lg-6">
                        <h5>CUSTOMIZATION</h5>
                        <h1>We focus on making everything customizable</h1>
                        <p>Change the colors, fonts, and images to suit your brand and style. This allows you to create a website that is unique and reflects your business, without having to know how to code or design from scratch.
                        </p>
                        <p><i className="bi bi-check custche"></i>Quickly create a professional-looking website</p>
                        <p><i className="bi bi-check custche"></i>Well designed elements and pages</p>
                        <p><i className="bi bi-check custche"></i>Professional-looking website quickly and affordably</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Dev;
  