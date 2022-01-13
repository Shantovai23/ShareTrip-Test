import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import spin from "../images/spin.png";
import switchs from "../images/switch.png";
import { navData } from "../Data";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-custom">
            {navData.map((val, index) => (
              <NavLink to={`${val.to}`} key={index} className={val.name==='Bus'? 'active navlink' :'navlink'}>
                {val.name}
              </NavLink>
            ))}
          </Nav>

          <Nav>
            <div className="spin-section">
              <img src={spin} alt="Spin" className="spin-img" />
              <NavLink to="/spin" className="spin-text">
                Spin To Win
              </NavLink>
              {/* I did not find any switch as looks like mention that in figma,thats why i used it like as an img */}
              <img src={switchs} alt="Switch" className="switch" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
