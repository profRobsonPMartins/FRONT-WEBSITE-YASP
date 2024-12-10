
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Hero.css"; // Adicione estilos personalizados aqui

import img01 from '../components/img/salaYasp2024.svg';
import img02 from '../components/img/laboratorioYasp2024.svg';
import img03 from '../components/img/entrada-yasp-certificate.svg';

const Hero = () => {

    const settings = {
        dots: true, // Ativar os dots para navegação
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    const slides = [
        {
            img: img03, 
            title: "Construindo um Futuro Melhor",
            text: "Aqui, o aprendizado transforma vidas.",
        },
        {
            img: img01,
            title: "Inclusão e Oportunidades para Todos",
            text: "Acreditamos no poder da educação inclusiva e gratuita.",
        },
        {
            img: img02,
            title: "Educação de Qualidade para Todos",
            text: "Na nossa escola, cada estudante tem a oportunidade de aprender.",
        },
    ];

    return (
        <section className="hero-slider">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.img} alt={slide.title} className="slide-image" />
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                            <div className="hero-buttons">
                                <button className="btn-primary">Entre em Contato</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Hero;
