import React from "react";
import logo from "../../../assets/logo.png";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img src={logo} className="h-12" alt="logo"></img>
          <p>
            <span className="text-red-600 text-2xl">MotoLand</span>
            <br />
            Trusted service in town since 2000
          </p>
        </div>
        <div>
          <span className="text-lg text-white">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/Shahidu60727289">
              <BsTwitter className="text-white text-xl" />
            </a>
            <a href="https://www.facebook.com/sony.jaman.1/">
              <BsFacebook className="text-white text-xl" />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram className="text-white text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
