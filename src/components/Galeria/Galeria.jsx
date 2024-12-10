import React from "react";
import "../../styles/Galeria.css";
import imgGaleria01 from '../img/Caiçaras 1.svg'
import imgGaleria02 from '../img/Pinturas- Caiçaras 1.svg'
import imgGaleria03 from '../img/mesa-caicara.svg'
import imgGaleria04 from "../img/imgCulturalFabinho.svg"
import imgGaleria05 from "../img/feira-cultural-02.svg"
import imgGaleria06 from "../img/feira-cultural-05.svg"
import imgGaleria07 from "../img/maracatu-01.svg"
import imgGaleria08 from "../img/bateria-01.svg"
import imgGaleria09 from "../img/Maquetes - Caiçara 1.svg"

const Galeria = () => {
  return (
    <section className="galeria-container">
      <div className="galeria-header">
        <h1>Galeria de Eventos</h1>
        <p>Confira os melhores momentos de eventos realizados na Escola Estadual Prof. Yolanda Araújo Silva Paiva.</p>
      </div>
      <div className="galeria-grid">
        <div className="galeria-item">
          <img
            src={imgGaleria01}
            alt="Evento 1"
            className="galeria-image"
          />
          <p className="galeria-caption">Evento de Cultura Caiçara - 15/03/2024</p>
        </div>

        <div className="galeria-item">
          <img
            src={imgGaleria05}
            alt="Evento 2"
            className="galeria-image"
          />
          <p className="galeria-caption">Feira Cultural - 09/11/2024</p>
        </div>

        <div className="galeria-item">
          <img
            src={imgGaleria09}
            alt="Evento 3"
            className="galeria-image"
          />
          <p className="galeria-caption">Feira Cultural - 09/11/2024</p>
        </div>
        <div className="galeria-item">
          <img
            src={imgGaleria02}
            alt="Evento 1"
            className="galeria-image"
          />
          <p className="galeria-caption">Evento de Cultura Caiçara - 15/03/2024</p>
        </div>
        <div className="galeria-item">
          <img
            src={imgGaleria06}
            alt="Evento 2"
            className="galeria-image"
          />
          <p className="galeria-caption">Feira Cultural - 09/11/2024</p>
        </div>
        <div className="galeria-item">
          <img
            src={imgGaleria07}
            alt="Evento 3"
            className="galeria-image"
          />
          <p className="galeria-caption">Feira Cultural - 09/11/2024</p>
        </div>
        <div className="galeria-item">
          <img
            src={imgGaleria03}
            alt="Evento 1"
            className="galeria-image"
          />
          <p className="galeria-caption">Evento de Cultura Caiçara - 15/03/2024</p>
        </div>
        <div className="galeria-item">
          <img
            src={imgGaleria04}
            alt="Evento 2"
            className="galeria-image"
          />
          <p className="galeria-caption">Feira Cultural - 09/11/2024</p>
        </div>
        <div className="galeria-item">
          <img
            src={imgGaleria08}
            alt="Evento 3"
            className="galeria-image"
          />
          <p className="galeria-caption">Feira Cultural - 09/11/2024</p>
        </div>
        {/* Adicione mais itens conforme necessário */}
      </div>
      
    </section>
  );
};

export default Galeria;