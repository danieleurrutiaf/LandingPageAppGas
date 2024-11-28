import React from 'react';
import './Features.scss';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2>Características de la app</h2>
        <ul>
          <li>
            <span className="feature-icon"></span>
           Intuitiva y facil de usar
          </li>
          <li>
            <span className="feature-icon"></span>
            Cifrado de Contraseña
          </li>
          <li>
            <span className="feature-icon"></span>
            Gestión de Profuctos
          </li>
          <li>
            <span className="feature-icon"></span>
            Geolocalización del repartidor
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
