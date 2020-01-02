import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footerWrapper">
      <span className="footerLogo">
        themovie<span className="boldText">box</span>
      </span>
      <div className="linksText">
        <Link to="about" className="link">
          About
        </Link>
        <Link to="movies" className="link">
          Movies
        </Link>
        <Link to="ratings" className="link">
          Ratings
        </Link>
        <Link to="contact" className="link">
          Contact
        </Link>
      </div>
    </div>
    <hr className="underscore" />
    <div className="imgLinks">
      <span className="desigend">Designed by Milan Houter. All rights reserved.</span>
      <div className="wrapperImgLinks">
        <Link to="facebook" className="imgLink">
          <FaFacebookF />
        </Link>
        <Link to="pinterest" className="imgLink">
          <FaPinterestP />
        </Link>
        <Link to="twitter" className="imgLink">
          <FaTwitter />
        </Link>
        <Link to="instagram" className="imgLink">
          <FaInstagram />
        </Link>
      </div>
    </div>
  </div>
);

export default withRouter(Footer);
