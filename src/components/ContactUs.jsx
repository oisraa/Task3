import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <>
    <div class="contact section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Contact Us</h6>
            <h2>Get In Touch With Our Agents</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-7">
      
        <div className="row">
          <div className="col-lg-6">
            <div className="item phone">
              <img
                src="assets/images/phone-icon.png"
                alt=""
                style={{ maxWidth: 52 }}
              />
              <h6>
                010-020-0340
                <br />
                <span>Phone Number</span>
              </h6>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item email">
              <img
                src="assets/images/email-icon.png"
                alt=""
                style={{ maxWidth: 52 }}
              />
              <h6>
                info@villa.co
                <br />
                <span>Business Email</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <form id="contact-form" action="" method="post">
          <div className="row">
            <div className="col-lg-12">
              
                <label htmlFor="name">Full Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Name..."
                  autoComplete="on"
                  required=""
                />
             
            </div>
            <div className="col-lg-12">
              
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  placeholder="Your E-mail..."
                  required=""
                />
             
            </div>
            <div className="col-lg-12">
            
                <label htmlFor="subject">Subject</label>
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder="Subject..."
                  autoComplete="on"
                />
             
            </div>
            <div className="col-lg-12">
       
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
          
            </div>
            <div className="col-lg-12">
              
                <button
                  type="submit"
                  id="form-submit"
                  className="orange-button"
                >
                  Send Message
                </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
 
</div>



  </>
  )
}

export default ContactUs