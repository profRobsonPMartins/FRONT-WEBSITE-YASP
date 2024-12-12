import React from "react";
import "../../styles/About.css";

const About = () => {
  return (
    <div className="services-container">
      <div className="services-left">
      <h2 className="section-title-h2">
       
      </h2>
        <ServiceItem
          icon="fas fa-chalkboard-teacher"
          title="Apoio Pedagógico"
          description="Oferecemos apoio pedagógico aos alunos com dificuldades de aprendizado."
          iconPosition="right"
        />
        <ServiceItem
          icon="fas fa-book-open"
          title="Biblioteca Escolar"
          description="Nossa biblioteca oferece acesso a livros e materiais didáticos."
          iconPosition="right"
        />
        <ServiceItem
          icon="fas fa-users"
          title="Atividades Extracurriculares"
          description="Atividades como esportes, música, e clubes de ciência."
          iconPosition="right"
        />
      </div>

      <div className="services-highlight">
        
        <p className="highlight-message">
          A escola <strong>E.E. Prof. Yolanda Araújo Silva Paiva</strong> conquistou o prêmio
          <strong>Top 70</strong> no estado de São Paulo!
        </p>
        <div className="certificate-icon">
          <i className="fas fa-certificate"></i>
        </div>
      </div>

      <div className="services-right">
      <h2 className="section-title-h2">

        
      </h2>
        <ServiceItem
          icon="fas fa-people-arrows"
          title="Integração Comunitária"
          description="Promovemos atividades para integração dos alunos com a comunidade."
          iconPosition="left"
        />
        <ServiceItem
          icon="fas fa-bus"
          title="Transporte Escolar"
          description="Transporte seguro e eficiente para alunos que residem em áreas distantes."
          iconPosition="left"
        />
        <ServiceItem
          icon="fas fa-briefcase"
          title="Orientação Vocacional"
          description="Orientação vocacional e acompanhamento educacional."
          iconPosition="left"
        />
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