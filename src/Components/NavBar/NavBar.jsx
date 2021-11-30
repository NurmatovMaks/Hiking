import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="cssmenu">
        <ul>
          <li className="active">
            <Link to="/">
              <span>Hiking.kg</span>
            </Link>
          </li>
          <li className="has-sub">
            <a href="#">
              <span>Category</span>
            </a>
            <ul>
              <li className="has-sub">
                <a href="#">
                  <span>Item 1</span>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <span>Sub Item</span>
                    </a>
                  </li>
                  <li className="last">
                    <a href="#">
                      <span>Sub Item</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a href="#">
                  <span>Item 2</span>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <span>Sub Item</span>
                    </a>
                  </li>
                  <li className="last">
                    <a href="#">
                      <span>Sub Item</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="archive.html">
              <span>Archive</span>
            </a>
          </li>
          <li>
            <a href="single.html">
              <span>About</span>
            </a>
          </li>
          <li className="last">
            <a href="contact.html">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
