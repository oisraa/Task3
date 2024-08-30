import React from 'react'
import './TopBar.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const TopBar = () => {


    return (
   
          <div className="all-topbar">
            <div className="container">
              <div className="row">
                <div className="row-contain">
                  <ul className="info">
                    <li>
                      <i className="fas fa-envelope" /> info@company.com
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" /> Sunny Isles Beach, FL 33160
                    </li>
                  </ul>
                </div>
                <div className="row-icons">
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/minthu" target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

 
    );
};



export default TopBar