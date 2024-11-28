import React from 'react';
import './PreFooter.scss';


const PreFooter = () => {
  return (
    <section className="pre-footer">
      <div className="pre-footer-content">
        <h2>No te pierdas los próximos descuentos en nuestra app</h2>
        <p>Inicia sesion y ten hasta un 5% de descuento en tus 5 primeros pedidos.</p>
        <form className="subscription-form">
          <input type="email" placeholder="Tu email..." required />
          <button type="submit">Iniciar sesion</button>
        </form>
      </div>
    </section>
  );
};

export default PreFooter;