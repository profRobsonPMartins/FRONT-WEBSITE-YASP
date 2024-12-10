import React from 'react';
import '../../styles/News.css'; // Arquivo CSS para estilização
import imgUSP from '../img/usp-novo.svg';
import imgLicenciaturaCampo from '../img/lecampo-novo.svg';
import imgEmancicla from '../img/dignidade-menstrual.svg';
import imgLgpd from '../img/lgpd.svg'
import imgEnem from '../img/enem-2024.svg'
import imgProvaoPaulista from '../img/provao-paulista.svg'

const News = () => {
  const articles = [
    {
      title: 'Inscrição para o Enem-USP',
      description: 'As inscrições para o processo seletivo da USP, que utiliza a nota do ENEM, começaram no dia 27 de Novembro e vão até o dia 20 de Dezembro. O processo é voltado para candidatos que desejam ingressar em cursos de graduação da Universidade de São Paulo.',
      img: imgUSP,
      time: 'Há 3 dias',
      link: 'https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/usp-abre-inscricoes-para-processo-seletivo-que-usa-a-nota-do-enem/',
    },
    {
      title: 'Licenciatura em Educação do Campo – Ciências da Natureza.',
      description: 'Ficam abertas até o dia 16 de novembro as inscrições para o processo seletivo do curso de Licenciatura em Educação do Campo – Ciências da Natureza, ofertado pelo Setor Litoral da Universidade Federal do Paraná (UFPR).',
      img: imgLicenciaturaCampo,
      time: 'Há 1 semana',
      link: 'https://www.ufpr.br/portalufpr/',
    },
    {
      title: 'EmanCicla',
      description: 'O EmanCicla tem o propósito de naturalizar o diálogo sobre o ciclo menstrual e a menstruação, contribuindo para a dignidade menstrual. Duas alunas ganharam bolsa R$500 reais.',
      img: imgEmancicla,
      time: 'Há 2 semanas',
      link: 'https://www.gov.br/saude/pt-br/campanhas-da-saude/2024/dignidade-menstrual',
    },
    {
      title: 'Você sabe o que é a LGPD?',
      description: 'A LGPD regula o tratamento de dados pssoais, garantindo maior privacidade e segurança. Empresas devem obter consentimentos antes de usar informações sensíveis e respeitar os direitos dos cidadãos.',
      img: imgLgpd,
      time: 'Há 3 dias',
      link: 'https://www.gov.br/mds/pt-br/acesso-a-informacao/governanca/integridade/campanhas/lgpd',
    },
    {
      title: 'Enem 2024.',
      description: 'O Exame nacional do Ensino Médio (ENEM) é uma das portas de entrada para o ensino superior no Brasil. Em 2024, ele traz foco em atualidades.',
      img: imgEnem,
      time: 'Há 1 semana',
      link: 'https://enem.inep.gov.br/participante/#!/',
    },
    {
      title: 'Provão Paulista',
      description: 'A Prova Paulista é uma avaliação que serve para diagnosticar o aprendizado dos alunos e contribuir para a melhoria do ensino.',
      img: imgProvaoPaulista,
      time: 'Há 2 semanas',
      link: 'https://sed.educacao.sp.gov.br/',
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
              {article.link && (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link-btn"
                >
                  Leia Mais
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn"><a href="https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/" target="_blank">Ver Todas as Notícias</a></button>
    </section>
  );
};

export default News;