import React from 'react';
import './footer.scss'

const Footer = () =>{
  return(
    <footer className="footer">
      <div className="footer__center">
        <a className="footer__links" href="/">運営会社 </a>
        <a className="footer__links" href="/">個人情報保護について</a>
        <p className="footer__text">©2016 Sample</p>
        <a className="footer__button-pagetop" href="#top"> </a>
      </div>
    </footer>
  )
}

export default Footer