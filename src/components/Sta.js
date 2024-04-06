import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Sta() {
    return (
        <div className="started">
            <div className="container">
                <div className="row get">
                    <div className="col-12 col-md-12 col-lg-12 ready">
                        <h1>Ready to get started?</h1>
                        <p>Save time and money while getting more productive than ever before. Kickstart your development process now.</p>
                        <Link to="/" className="btn">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Sta;
  