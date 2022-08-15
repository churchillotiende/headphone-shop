import React from 'react';
// import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/fa';
import InstagramIcon from '@material-ui/icons/Instagram';  
import TwitterIcon from '@material-ui/icons/Twitter';  

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 oteemedia  All rights reserverd</p>
      <p className="icons">
        <InstagramIcon />
        <TwitterIcon />
      </p>
    </div>
  )
}

export default Footer;