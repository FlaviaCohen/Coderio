import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact">
        <a href="https://github.com/FlaviaCohen" target="_blank">
        <FaGithub />
          /FlaviaCohen
        </a>
      </div>
      <div className="contact">
        <a href="https://www.linkedin.com/in/FlaviaCohen/" target="_blank">
        <FaLinkedinIn />
          /FlaviaCohen
        </a>
      </div>
      <div className="contact">
        <a href="mailto: flaviacohen1988@gmail.com" target="_blank">
        <HiOutlineMail />
          Send me an email!
        </a>
      </div>
    </div>
  );
};

export default Footer;
