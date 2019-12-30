import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";

import "./Footer.css";

const Footer: React.FC = () => (
  <div className='footer'>
    <span className='footerLogo'>
      themovie<span className='boldText'>box</span>
    </span>
    <span className='designedName'>Designed by Milan Houter. All rights reserver.</span>
    <div className='underscore' />
    <div className='infoLinks'>
      <Link className='infoLink' to='about'>
        About
      </Link>
      <Link className='infoLink' to='movies'>
        Movies
      </Link>
      <Link className='infoLink' to='ratings'>
        Ratings
      </Link>
      <Link className='infoLink' to='contact'>
        Contact
      </Link>
    </div>

    <div className='footerImgLinks'>
      <Link className='imgLink' to='facebook'>
        <FaFacebookF />
      </Link>
      <Link className='imgLink' to='pinterest'>
        <FaPinterestP />
      </Link>
      <Link className='imgLink' to='twitter'>
        <FaTwitter />
      </Link>
      <Link className='imgLink' to='instagram'>
        <FaInstagram />
      </Link>
    </div>
  </div>
);

export default withRouter(Footer);
