import React from "react";
import '../../styles/Events.css'
import img01 from '../img/salaYasp2024.svg'

const Events = () => {

    const events = [
        {
            date: '09',
            month: 'Novembro',
            time: '7:00 pm',
            title: 'Feira Cultural',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: img01,
        },
        {
            date: '18',
            month: 'Maio',
            time: '7:00 pm',
            title: 'Combate ao Abuso Sexual',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: img01,
        },
        {
            date: '15',
            month: 'Março',
            time: '7:00 pm',
            title: 'Caiçaras',
            speaker: 'E. E. Prof. Yolanda Araújo Silva Paiva',
            img: img01,
        },
    ]
    return (
        <section className="events-section">
            <h2 className="section-title">
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
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-calendar-btn">View Event Calendar</button>
        </section>
    )
}

export default Events;