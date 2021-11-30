import React from "react";
import "./assets/Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="wrap-header">
        {/* Main Header */}
        <div className="main-header">
          <div className="zerogrid">
            <div className="row">
              <div className="hero-heading">
                <span>hiking.kg</span>
                <div className="tl"></div>
                <div className="tr"></div>
                <div className="br"></div>
                <div className="bl"></div>
              </div>
              <div className="heading-text">
                <h2>Enjoy with ass</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  <br />
                  sed diam nonumy eirmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
