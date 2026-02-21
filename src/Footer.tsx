import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">© 2026 Emon-ProCoder7. All rights reserved.</div>
        <div className="policy-links">
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/refund-policy">Refund Policy</a> |
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;