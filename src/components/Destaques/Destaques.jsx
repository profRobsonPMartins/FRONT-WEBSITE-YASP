import React from "react";
import "../../styles/Destaques.css";

const Destaques = () => {
  return (
    <section className="destaques-container" id="destaques">
      <div className="destaques-header">
        <h1>Destaques Acadêmicos</h1>
        <p>Parabéns aos alunos que se destacaram nas competições acadêmicas!</p>
      </div>
      <div className="destaques-cards">
        {/* 1 */}
        <div className="destaque-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Olimpíada de Matemática"
            className="destaque-image"
          />
          <div className="destaque-info">
            <h3>
              <i className="fa-solid fa-medal medalha-ouro"></i> Olimpíada de Matemática
            </h3>
            <p>
              Parabéns ao aluno João Silva, que conquistou a medalha de ouro na
              Olimpíada Brasileira de Matemática (OBMEP), destacando-se pelo seu
              talento e dedicação aos estudos.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="destaque-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Olimpíada de Astronomia"
            className="destaque-image"
          />
          <div className="destaque-info">
            <h3>
              <i className="fa-solid fa-medal medalha-prata"></i> Olimpíada de Astronomia
            </h3>
            <p>
              Maria Souza foi a grande vencedora da Olimpíada Brasileira de
              Astronomia e Astronáutica, representando nossa escola com grande
              brilho e paixão pela ciência..
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="destaque-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Olimpíada de Redação"
            className="destaque-image"
          />
          <div className="destaque-info">
            <h3>
              <i className="fa-solid fa-medal medalha-bronze"></i> Olimpíada de Redação
            </h3>
            <p>
              A aluna Ana Costa conquistou o primeiro lugar na Olimpíada Nacional
              de Redação, com seu texto premiado abordando temas de relevância
              social.
            </p>
          </div>
        </div>

        {/* 4 */}

        <div className="destaque-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Olimpíada de Matemática"
            className="destaque-image"
          />
          <div className="destaque-info">
            <h3>
              <i className="fa-solid fa-medal medalha-ouro"></i> Olimpíada de Matemática
            </h3>
            <p>
              Parabéns ao aluno João Silva, que conquistou a medalha de ouro na
              Olimpíada Brasileira de Matemática (OBMEP), destacando-se pelo seu
              talento e dedicação aos estudos.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="destaque-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Olimpíada de Astronomia"
            className="destaque-image"
          />
          <div className="destaque-info">
            <h3>
              <i className="fa-solid fa-medal medalha-prata"></i> Olimpíada de Astronomia
            </h3>
            <p>
              Maria Souza foi a grande vencedora da Olimpíada Brasileira de
              Astronomia e Astronáutica, representando nossa escola com grande
              brilho e paixão pela ciência.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="destaque-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Olimpíada de Redação"
            className="destaque-image"
          />
          <div className="destaque-info">
            <h3>
              <i className="fa-solid fa-medal medalha-bronze"></i> Olimpíada de Redação
            </h3>
            <p>
              A aluna  Ana Costa conquistou o primeiro lugar na Olimpíada Nacional
              de Redação, com seu texto premiado abordando temas de relevância
              social.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Destaques;
