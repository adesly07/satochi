import React from 'react';
import './App.css';
function Actions() {
    return (
        <div className="action">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 actcont">
                        <h5>HOW IT WORKS</h5>
                        <h1>It's time to take action</h1>
                        <p>Satoshi offers you the unique chance to discover the companies that have your data and reclaim it.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 card">
                        <i className="bi bi-regex icon"></i>
                        <h4>Created with the latest technologies</h4>
                        <p>We ensure our code is not just efficient and robust, but also highly adaptable and intuitive for developers.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 card">
                        <i className="bi bi-person-workspace icon"></i>
                        <h4>Built by developers for developers</h4>
                        <p>You require not just a theme, but also exceptional tools to streamline the building and customization process.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 card">
                        <i className="bi bi-stars icon"></i>
                        <h4>Made for great first impressions</h4>
                        <p>Our theme is lighter and faster compared to the majority of themes available, delivering enhanced value for less.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Actions;
  