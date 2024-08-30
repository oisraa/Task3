import React from 'react'
import './VideoSection.css'
const VideoSection = () => {
  return (
   <>
   <>
  <div className="video section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="section-heading text-center">
            <h6>| Video View</h6>
            <h2>Get Closer View &amp; Different Feeling</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="video-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="video-frame">
            <img src="assets/images/video-frame.jpg" alt="" />
            <a href="https://youtube.com" target="_blank">
              <i className="fa fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="fun-facts">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-4">
                <div className="counter">
                <h2>
                   34
                   
                    </h2>
                  <p className="count-text ">
                    Buildings
                    <br />
                    Finished Now
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="counter">
                <h2>
                    12
                   
                    </h2>
                  <p className="count-text ">
                    Years
                    <br />
                    Experience
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="counter">
                  <h2>
                    24
                   
                    </h2>
                  
                  <p className="count-text ">
                    Awwards
                    <br />
                    Won 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

   </>
  )
}

export default VideoSection