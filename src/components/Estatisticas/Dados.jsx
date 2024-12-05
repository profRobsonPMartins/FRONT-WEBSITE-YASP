import React from "react";
import '../../styles/Dados.css'

const Dados = () =>{
    return(
        <section className="statistics-section">
            <h2 className="section-title">Estatisticas da escola</h2>
            <p className="section-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus, laboriosam facilis rem tempore ducimus voluptate vero dolor error in quia ratione. Voluptatum eligendi alias accusamus delectus fugit qui neque.
            </p>
            <div className="statistics-grid">
                <div className="stat-card">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>97%</h3>
                    <p>Graduates</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-briefcase"></i>
                    <h3>30+</h3>
                    <p>Certified Teachears</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-university"></i>
                    <h3>8</h3>
                    <p>Students Campuses</p>
                </div>
                <div className="stat-card">
                    <i className="fas fa-users"></i>
                    <h3>6510</h3>
                    <p>Students</p>
                </div>
            </div>
        </section>
    )
}

export default Dados;