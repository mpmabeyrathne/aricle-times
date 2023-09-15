import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import logo from "../images/logo/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <h2>Tricle Times</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam
          dicta numquam ad eius sapiente, nihil veritatis debitis, expedita
          voluptas, itaque aspernatur modi eaque eveniet libero voluptatem
          excepturi. Debitis, quam? aperiam.
        </p>
      </div>
      <div className="signUp-container">
        <div className="signUp-Section">
          <h2>Join with us</h2>
          <div className="email-section">
            <label> Email : </label>
            <input type="email" />
          </div>
          <div className="password-section">
            <label> Password : </label>
            <input type="password" />
          </div>
          <button>Submit</button>
          <div className="footer-icons">
            <AiFillLinkedin />
            <AiFillInstagram />
            <BsTwitter />
            <BiLogoFacebookCircle />
            <GrMail />
          </div>
        </div>
        <div className="footer-buttons">
          <button>Space Science</button>
          <button>Entertaintment</button>
          <button>New inventions</button>
        </div>
        <div className="footer-logo">
          <img src={logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
            vel quo fugiat quas inventore sit, nam vitae? Harum vel accusamus
            voluptatibus at quasi recusandae magni illum nam accusantium labore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
