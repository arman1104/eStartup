import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MoveUp } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <p>
        ©Copyright <span>eStartup</span> All Rights Reserved
      </p>
      <div className="footer-icon-container">
        <FaXTwitter size={"2.2rem"} />
        <IoLogoFacebook size={"2.2rem"} />
        <FaInstagramSquare size={"2.2rem"} />
        <FaLinkedin size={"2.2rem"} />
      </div>
      <div className="moveup-arrow">
        <MoveUp size={"1.5rem"} />
      </div>
    </div>
  );
};

export default Footer;
