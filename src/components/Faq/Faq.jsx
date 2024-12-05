import React, { useState } from 'react';
import '../../styles/Faq.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais são os horários de aula?',
      answer: 'As aulas começam às 7h30 e terminam às 12h30 para o período da manhã. No período da tarde, iniciam às 13h30 e vão até 18h30.',
    },
    {
      question: 'Como posso acessar o boletim escolar do meu filho?',
      answer: 'O boletim escolar pode ser acessado pelo portal do aluno com o login e senha fornecidos pela secretaria da escola.',
    },
    {
      question: 'Quais documentos são necessários para a matrícula?',
      answer: 'Para a matrícula, são necessários certidão de nascimento, RG, comprovante de residência, e histórico escolar.',
    },
    {
      question: 'Como funcionam os cursos técnicos oferecidos?',
      answer: 'Os cursos técnicos são oferecidos no contraturno das aulas regulares e contam com disciplinas práticas e teóricas para formação profissional.',
    },
    {
      question: 'Há transporte escolar disponível?',
      answer: 'Sim, a escola oferece transporte escolar para algumas regiões. Verifique na secretaria se a sua área é coberta pelo serviço.',
    },
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
 