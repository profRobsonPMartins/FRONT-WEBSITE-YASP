import React from "react";
import "../../styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title-h2">
        Sobre nós
        {/* <span className="icon-graduation">
          <i className="fas fa-graduation-cap"></i>
        </span> */}
      </h2>
      <div className="services-container">
        <div className="services-left">
          <ServiceItem
            icon="fas fa-chalkboard-teacher"
            title="Apoio Pedagógico"
            description="Oferecemos apoio pedagógico aos alunos com dificuldades de aprendizado, 
            com aulas de reforço e orientação individualizada."
            iconPosition="right"
          />
          <ServiceItem
            icon="fas fa-book-open"
            title="Biblioteca Escolar"
            description="Nossa biblioteca oferece acesso a livros, materiais didáticos e atividades
             para o incentivo à leitura."
            iconPosition="right"
          />
          <ServiceItem
            icon="fas fa-users"
            title="Atividades Extracurriculares"
            description="A escola oferece atividades extracurriculares como esportes, música,
             teatro e clubes de ciência para o desenvolvimento integral dos alunos."
            iconPosition="right"
          />
        </div>

        <div className="services-highlight">
          <p className="highlight-message">
            <strong>E.E. Prof. Yolanda Araújo Silva Paiva</strong> conquistou o prêmio
            <strong> Escola Top 70 - Ensino Médio </strong> no estado de São Paulo!
          </p>
          <div className="certificate-icon">
            <i className="fas fa-certificate"></i>
          </div>
        </div>


        <div className="services-right">
          <ServiceItem
            icon="fas fa-people-arrows"
            title="Integração Comunitária"
            description="A escola promove atividades para integração dos alunos com a comunidade local,
             com projetos sociais e visitas de voluntários."
            iconPosition="left"
          />
          <ServiceItem
            icon="fas fa-bus"
            title="Transporte Escolar"
            description="Oferecemos transporte escolar seguro e eficiente para alunos que moram em áreas 
            distantes da escola."
            iconPosition="left"
          />
          <ServiceItem
            icon="fas fa-bus"
            title="Orientação Vocacional"
            description="Realizamos orientação vocacional e acompanhamento dos alunos na escolha de 
            suas futuras carreiras e caminhos educacionais."
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, description, iconPosition }) => (
  <div
    className={`service-item ${iconPosition === "right" ? "icon-right" : "icon-left"
      }`}
  >
    {iconPosition === "left" && (
      <div className="service-icon">
        <i className={icon}></i>
      </div>
    )}
    <div className="service-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    {iconPosition === "right" && (
      <div className="service-icon">
        <i className={icon}></i>
      </div>
    )}
  </div>
);

export default About;