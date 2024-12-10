import React from 'react';
import '../../styles/Localizacao.css';

const Localizacao = () => {
  return (
    <section className="localizacao">
      <h2 className="localizacao__titulo">Localização</h2>
      <div className="localizacao__info">
        <p>Escola Estadual Prof. Yolanda Araújo Silva Paiva</p>
        <p>R. Francisco Chaves, 180 - Centro</p>
        <p>Cananéia - SP, 11990-000</p>
      </div>
      <iframe
        className="localizacao__mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5239489869876!2d-47.92860022414786!3d-24.903340477371382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cebca6b5c6d6ff%3A0xe6811ea91b213a37!2sR.%20Francisco%20Chaves%2C%20180%20-%20Centro%2C%20Canan%C3%A9ia%20-%20SP%2C%2011990-000!5e0!3m2!1spt-BR!2sbr!4v1686014978431!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa da Escola"
      ></iframe>
    </section>
  );
};

export default Localizacao;