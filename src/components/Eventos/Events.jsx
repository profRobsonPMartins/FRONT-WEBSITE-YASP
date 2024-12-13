import React from "react";
import {  useNavigate } from "react-router-dom";
import '../../styles/Events.css'
import img01 from '../img/salaYasp2024.svg'
import imgFeiraCultural from '../img/Feira Cultural 1.svg'
import imgCaicaras from '../img/Caiçaras 1.svg'
import imgCombateAbuso from '../img/Faça Bonito 1.svg'
import imgMeninasSol from '../img/Meninas do Sol 1.svg'
import imgSarauLiterario from '../img/Sarau Literário 1.svg'
import imgEscolaVerao from '../img/Escola de Verão 1.svg'

const Events = () => {

    const navigate = useNavigate();

    const events = [
        {
            date: '09',
            month: 'Novembro',
            time: '7:00 pm',
            title: 'Feira Cultural',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: imgFeiraCultural,
            route: '/feira-cultural',
        },
        {
            date: '18',
            month: 'Maio',
            time: '7:00 pm',
            title: 'Combate ao Abuso Sexual',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: imgCombateAbuso,
            route: '/combate-abuso-sexual',
        },
        {
            date: '15',
            month: 'Março',
            time: '7:00 pm',
            title: 'Caiçaras',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: imgCaicaras,
            route: '/caicaras',
        },
        {
            date: '03',
            month: 'Dezembro',
            time: '17:30 pm',
            title: 'Meninas do Sol',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: imgMeninasSol,
            route: '/meninas-sol',
        },
        {
            date: '31',
            month: 'Outubro',
            time: '19:00 pm',
            title: 'Sarau de Literatura Poética',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: imgSarauLiterario,
            route: '/sarau-literario',
        },
        {
            date: '29',
            month: 'janeiro',
            time: '7:00 pm',
            title: 'Escola de Verão',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: imgEscolaVerao,
            route: '/caicaras',
        },
    ]
    return (
        <section className="events-section">
            <h2 className="section-title-events">
                Eventos
            </h2>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <img src={event.img} alt={event.title} className="event-image" />
                        <div className="event-info">
                            <div className="event-date">
                                <span className="event-day">{event.date}</span>
                                <span className="event-month">{event.month}</span>
                            </div>
                        </div>
                        <div className="event-details">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-time">{event.time}</p>
                            <p className="event-speaker"><i className="icon-person"></i>{event.speaker}</p>
                            <button
                                className="event-button-events"
                                onClick={() => navigate(event.route)}
                            >
                                Ver mais
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-calendar-btn"><a href="https://atendimento.educacao.sp.gov.br/knowledgebase/article/SED-07925/pt-br" target="_blank">Calendário 2025</a></button>
        </section>
    )
}

export default Events;