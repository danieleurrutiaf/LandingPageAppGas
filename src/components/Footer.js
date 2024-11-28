import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>AppGas</h2>
        </div>
        
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} AppGas. Todos los derechos reservados.</p>
          <p>Contacto: info@AppGas.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
