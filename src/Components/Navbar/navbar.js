import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.png";
import underline from "../../assets/underline.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import togle from "../../assets/togle.svg";
import close_menu from "../../assets/close_menu.svg";

const Navbar = () => {
  // Changed to uppercase 'Navbar'
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openmenu = () => {
    menuRef.current.style.right = "0";
  };

  const closemenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo2} alt="Website Logo" />
      <img
        src={togle}
        onClick={openmenu}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-Menu">
        <img
          src={close_menu}
          onClick={closemenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#service">
            <p onClick={() => setMenu("service")}>Service</p>
          </AnchorLink>
          {menu === "service" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
      <div className="nav-Connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar; // Make sure to export the component with the correct name
