import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div id="box">
      <span>
      <img src="../images/facebook.png" className="icons" alt="Facebook icon" width="30px"/>
      <img src="../images/insta.png" className="icons" alt="Instagram icon" width="30px"/>
      <img src="../images/tiktok.png" className="icons" alt="Tiktok icon" width="30px"/>
      </span>
      <span id="right">&copy; J Eagles and A Colbert, 2023</span>
    </div>
  )
}

export default Footer