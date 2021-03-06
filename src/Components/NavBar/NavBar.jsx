import React, { useContext, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Button, IconButton, MenuItem, AccountCircle } from "@mui/material";
import { Link } from "react-router-dom";
import SignUpModal from "../authmodal/SignUpModal";
import SignInModal from "../authmodal/SignInModal";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import iconFavorit from "../../images/icons/iconNavbar.png";

const NavBar = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = React.useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const navigate = useNavigate();
  const { user, logOut, adminEmail } = useContext(authContext);

  let profile;
  if (user) {
    profile = (
      <li className="last" style={{ color: "#000" }}>
        <a
          href="http://localhost:3000/"
          color="inherit"
          onClick={() => logOut()}
          style={{
            fontFamily: "Francois One, sans-serif",
            letterSpacing: "1px",
            fontSize: "16px",
          }}
        >
          Log Out
        </a>
      </li>
    );
    {
    }
  } else {
    profile = (
      <>
        <li className="last" style={{ color: "#000" }}>
          <a
            color="inherit"
            onClick={handleShowLogin}
            style={{
              fontFamily: "Francois One, sans-serif",
              letterSpacing: "1px",
              fontSize: "16px",
            }}
          >
            Sign In
          </a>
        </li>
        <li className="last" style={{ color: "#000" }}>
          <a
            color="inherit"
            onClick={handleShow}
            style={{
              fontFamily: "Francois One, sans-serif",
              letterSpacing: "1px",
              fontSize: "16px",
            }}
          >
            Sign Up
          </a>
        </li>
      </>
    );
  }

  let temp;
  if (user.email === adminEmail) {
    temp = (
      <li className="last" style={{ color: "#000" }}>
        <a href="/admin">Admin</a>
      </li>
    );
  }

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
          <li>
            <a href="single.html" style={{ marginTop: "-7px" }}>
              <img
                src={iconFavorit}
                style={{ width: "30px", height: "30px" }}
                alt=""
              />
            </a>
          </li>
          {temp}
          {profile}
        </ul>
      </div>
      <SignUpModal handleClose={handleClose} show={show} />
      <SignInModal handleCloseLogin={handleCloseLogin} showLogin={showLogin} />
    </>
  );
};

export default NavBar;
