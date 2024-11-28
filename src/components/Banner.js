import React from 'react';
import './Banner.scss';


const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Tu galón a tus puestas</h1>
        <p>Pide tu galón a domicilio</p>
        <a href="#subscribe" className="banner-button">Ver más</a>
      </div>
    </section>
  );
};

export default Banner;
