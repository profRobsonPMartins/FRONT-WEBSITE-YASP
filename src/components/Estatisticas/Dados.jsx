import React from "react";
import '../../styles/Dados.css'

const Dados = () => {
    return(
        <section className="statistics-section">
            <h2 className="section-title">Estatísticas da Escola</h2>
            <p className="section-description">
                A nossa escola oferece uma educação de qualidade com uma equipe altamente capacitada e infraestrutura de ponta, buscando sempre o melhor para nossos alunos e a comunidade escolar.
            </p>
            <div className="statistics-grid">
                <div className="stat-card">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>85%</h3> {/* Ajustado com um valor de taxa de graduados */}
                    <p>Taxa de Graduação</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-briefcase"></i>
                    <h3>31+</h3> {/* Número de professores certificados */}
                    <p>Professores Certificados</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-university"></i>
                    <h3>1</h3> {/* Apenas uma unidade de campus escolar */}
                    <p>Campus Escolar</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-users"></i>
                    <h3>358</h3> {/* Total de alunos */}
                    <p>Alunos</p>
                </div>
            </div>
        </section>
    )
}

export default Dados;
