import React from 'react';
import '../../styles/News.css'; // Arquivo CSS para estilização
import img01 from '../img/salaYasp2024.svg'; 
import imgUSP from '../img/usp-cidade-universitaria-1536x868-1 1.svg'
import imgLicenciaturaCampo from '../img/Lecampo-inscricoes-abertas-2-semestre-Captura-de-tela-2024-10-16-144900 1.svg'
import imgEmancicla from '../img/dignidade-menstrual.svg'

const News = () => {
  const articles = [
    {
      title: 'Inscrição para o Enem-USP',
      description: 'As inscrições começaram no dia 27 de Novembro e termina dia 20 de Dezembro.',
      img: imgUSP,
      time: 'Há 3 dias',
    },
    {
      title: 'Licenciatura em Educação do Campo – Ciências da Natureza.',
      description: 'Ficam abertas até o dia 16 de novembro as inscrições para o processo seletivo do curso de Licenciatura em Educação do Campo – Ciências da Natureza, ofertado pelo Setor Litoral da Universidade Federal do Paraná (UFPR). ',
      img: imgLicenciaturaCampo,
      time: 'Há 1 semana',
    },
    {
      title: 'EmanCicla',
      description: 'O EmanCicla tem o propósito de naturalizar o diálogo sobre o ciclo menstrual e a menstrua-ção, contribuindo para a dignidade menstrual. Duas alunas ganharam bolsa R$500 reais.',
      img: imgEmancicla,
      time: 'Há 2 semanas',
    },
    {
      title: 'Concurso de Redação: Cidadania e Democracia',
      description: 'Alunos de todos os anos podem participar do concurso de redação com o tema "Cidadania e Democracia". Os melhores trabalhos serão premiados e expostos na biblioteca.',
      img: img01,
      time: 'Há 5 dias',
    },
    {
      title: 'Matrículas Abertas para 2025',
      description: 'A escola está com matrículas abertas para o ano letivo de 2025. Pais e responsáveis devem comparecer à secretaria escolar com a documentação necessária.',
      img: img01,
      time: 'Há 1 semana',
    },
    {
      title: 'Dia da Família na Escola',
      description: 'Convidamos todos os pais e familiares para um dia especial na escola com atividades, palestras e apresentações culturais, reforçando a parceria entre família e escola.',
      img: img01,
      time: 'Há 3 semanas',
    }
  ];

  return (
    <section className="news-section">
      <h2 className="section-title">Últimas Notícias</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.img} alt={article.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <p className="news-time"><i className="icon-calendar"></i> {article.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">Ver Todas as Notícias</button>
    </section>
  );
};

export default News;

// https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/usp-abre-inscricoes-para-processo-seletivo-que-usa-a-nota-do-enem/

// https://www.gov.br/saude/pt-br/campanhas-da-saude/2024/dignidade-menstrual