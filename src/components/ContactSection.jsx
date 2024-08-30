import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <>
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="section-heading">
              <h6>| Contact Us</h6>
              <h2>Get In Touch With Our Agents</h2>
            </div>
            <p>
              When you really need to download free CSS templates, please remember
              our website TemplateMo. Also, tell your friends about our website.
              Thank you for visiting. There is a variety of Bootstrap HTML CSS
              templates on our website. If you need more information, please contact
              us.
            </p>

            {/* This row will hold both the text-boxes and the form */}
            <div className="row contact-content">
              {/* Text and Boxes Section */}
              <div className="text-and-boxes">
                <div className="item phone">
                  <img
                    src="/assets/images/phone-icon.png"
                    alt=""
                    style={{ maxWidth: 52 }}
                  />
                  <h6>
                    010-020-0340
                    <br />
                    <span>Phone Number</span>
                  </h6>
                </div>
                <div className="item email">
                  <img
                    src="/assets/images/email-icon.png"
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
              {/* Contact Form Section */}
              <div className="con-f">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="full-name">
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

                    <div className="full-name">
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

                    <div className="full-name">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="subject"
                        name="subject"
                        id="subject"
                        placeholder="Subject..."
                        autoComplete="on"
                      />
                    </div>

                    <div className="full-name">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                    </div>

                    <div className="full-name">
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
      </div>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
  style={{
    width: "100vw",   // عرض الخريطة بنسبة 80% من عرض الشاشة
    height: "100vh",  // ارتفاع الخريطة بنسبة 50% من ارتفاع الشاشة
    border: 0,
    borderRadius: 10,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)"
  }}
  allowFullScreen={true}
/>

    </>
  );
};

export default ContactSection;
