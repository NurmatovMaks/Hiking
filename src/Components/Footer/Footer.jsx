import React from "react";

const Footer = () => {
  return (
    // <section class="">
    <div className="box-text">
      <div className="header">
        <h2>Contact Me</h2>
        <p className="intro">
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming
          <br />
          id quod mazim placerat facer possim assum.
        </p>
      </div>
      <div className="content">
        <div className="subscribe-form">
          <form role="form" id="contactForm" data-toggle="validator">
            <div className="row">
              <div className="column sm-1-3">
                <div className="wrap-col">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Email"
                    required="required"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="column sm-1-3">
                <div className="wrap-col">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required="required"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="column sm-1-3">
                <div className="wrap-col">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter Your Subject"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column full">
                <div className="wrap-col">
                  <textarea id="message" placeholder="Message"></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column full">
                <div className="wrap-col">
                  <button
                    className="button button-skin button-subscribe"
                    type="submit"
                    name="Submit"
                  >
                    Send
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default Footer;
