import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-section">
          <div className="footer-about">
            <h2 className="footer-title">Escola Estadual Prof. Yolanda Araújo Silva Paiva</h2>
            <p>
              Bem-vindo à nossa escola! Nos dedicamos a oferecer uma educação de qualidade para formar cidadãos críticos e atuantes.
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Direção: (13) 3851-1871
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Secretaria: (13) 3851-1216
            </p>
            <p>
              <i className="fas fa-envelope"></i> e03591a@educacao.sp.gov.br
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Disciplinas</h3>
            <ul>
              <li><a href="https://www.educacao.sp.gov.br/matematica" target="_blank">Matemática</a></li>
              <li><a href="https://www.educacao.sp.gov.br/portugues" target="_blank">Português</a></li>
              <li><a href="https://www.educacao.sp.gov.br/fisica" target="_blank">Física</a></li>
              <li><a href="https://www.educacao.sp.gov.br/quimica" target="_blank">Química</a></li>
              <li><a href="https://www.educacao.sp.gov.br/historia" target="_blank">História</a></li>
              <li><a href="https://www.educacao.sp.gov.br/geografia" target="_blank">Geografia</a></li>
              <li><a href="https://www.educacao.sp.gov.br/biologia" target="_blank">Biologia</a></li>
              <li><a href="https://www.educacao.sp.gov.br/ingles" target="_blank">Inglês</a></li>
              <li><a href="https://www.educacao.sp.gov.br/educacao-fisica" target="_blank">Educação Física</a></li>
              <li><a href="https://www.educacao.sp.gov.br/arte" target="_blank">Arte</a></li>
              <li><a href="https://www.educacao.sp.gov.br/filosofia" target="_blank">Filosofia</a></li>
              <li><a href="https://www.educacao.sp.gov.br/sociologia" target="_blank">Sociologia</a></li>
            </ul>

          </div>
          <div className="footer-links">
            <h3 className="footer-title">Serviços</h3>
            <ul>
              <li>Matrículas</li>
              <li>Horários de Atendimento</li>
              <li>Calendário Escolar</li>
              <li>Biblioteca</li>
              <li>Eventos e Projetos</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Links Úteis</h3>
            <ul>
              <li>Plataforma SP Educação</li>
              <li>Provas e Avaliações</li>
              <li>Regulamento Escolar</li>
              <li>Política de Privacidade</li>
              <li>Portal do Aluno</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1DpX181Q83/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/ee_profa_yolanda_a_s_paiva/profilecard/?igsh=MTJxOHVvZzl1azZzNA==">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <div className="copy">
          <p>
            © 2024 Escola Estadual Prof. Yolanda Araújo Silva Paiva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;