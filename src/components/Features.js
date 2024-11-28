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
            Facil de usar
          </li>
          <li>
            <span className="feature-icon"></span>
            Contraseña encriptada
          </li>
          <li>
            <span className="feature-icon"></span>
            Gestión de Profuctos
          </li>
          <li>
            <span className="feature-icon"></span>
            Ve tu pedido en tiempo real
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
