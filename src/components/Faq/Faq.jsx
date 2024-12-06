import React, { useState } from 'react';
import '../../styles/Faq.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais documentos são necessários para a matrícula?',
      answer: 'São necessários cópias do RG e CPF dos alunos e responsável, cópia da certidão de nascimento, histórico escolar original, cópia da carteira de vacina e uma cópia da vacina de COVID-19.',
    },
    {
      question: 'Qual é o início e término das aulas?',
      answer: 'O início das aulas será no dia 03/02 e o término no dia 12/12.',
    },
    {
      question: 'Quem pode trazer e retirar o aluno da escola?',
      answer: 'Apenas o responsável ou alguém indicado pelo responsável pode trazer e retirar o aluno da escola.',
    },
    {
      question: 'Qual a importância de fazer o Enem?',
      answer: 'O Enem é um dos principais meios para o ingresso em universidades públicas e privadas, além de ser utilizado por muitas instituições para a oferta de bolsas de estudo e financiamentos estudantis. Realizar o Enem é uma ótima oportunidade para o estudante avaliar seu conhecimento e garantir acesso a uma formação superior de qualidade.',
    },
    {
      question: 'Por que é importante que os pais compareçam nas reuniões bimestrais?',
      answer: 'A participação dos pais nas reuniões bimestrais é fundamental para acompanhar o desenvolvimento escolar dos filhos, entender as necessidades educacionais e manter uma boa comunicação com os professores. São apenas 5 reuniões por ano, mas elas são essenciais para garantir que os pais estejam cientes do desempenho acadêmico e das metas escolares.',
    },
    {
      question: 'O que fazer caso o aluno não possa comparecer à aula?',
      answer: 'Caso o aluno não possa comparecer à aula, os responsáveis devem justificar a ausência através do portal do aluno ou diretamente com a secretaria, para que as faltas sejam registradas adequadamente.'
    }

  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-toggle-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
