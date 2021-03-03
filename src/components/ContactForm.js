import React from "react";
import "../css/contactForm.css";
import SocialIcons from "../components/SocialIcons";

const ContactForm = () => {
  return (
    <div className="my-formy">
      {/* contact me */}

      <div className="form d-flex justify-content-center align-items-center login-box">
        <div className="col-lg-11 col-md-11 col-sm-9">
          <div className="col-lg-12 login-title">GET IN TOUCH</div>

          <div className="col-lg-12 text-left">
            <form
              action="https://formspree.io/f/mgepbjwj"
              //change action address on completion
              method="POST"
              className="form-elements col-lg-12"
            >
              <div className="form-group">
                <label htmlFor="name" className="form-control-label m-0">
                  YOUR NAME
                </label>
                <input name="name" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-control-label m-0">
                  YOUR EMAIL
                </label>
                <input name="email" type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-control-label m-0">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  type="message"
                  col="10"
                  rows="5"
                  className="form-control"
                  i
                ></textarea>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-3 p-0">
                <button type="submit" className="btn btn-outline-secondary">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* SOCIAL MEDIA LINKS */}

        <div className="social d-flex justify-content-center align-items-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
