
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Hero.css"; // Adicione estilos personalizados aqui

import img01 from '../components/img/salaYasp2024.svg';
import img02 from '../components/img/laboratorioYasp2024.svg';
import img03 from '../components/img/corredorYasp2024.svg';

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
            img: img01, 
            title: "Construindo um Futuro Melhor",
            text: "Aqui, o aprendizado transforma vidas. Junte-se a nós e faça parte de uma jornada de crescimento.",
        },
        {
            img: img02,
            title: "Inclusão e Oportunidades para Todos",
            text: "Acreditamos no poder da educação inclusiva e gratuita. Juntos, abrimos portas para um futuro cheio de oportunidades.",
        },
        {
            img: img03,
            title: "Educação de Qualidade para Todos",
            text: "Na nossa escola, cada estudante tem a oportunidade de aprender, crescer e conquistar seu futuro.",
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
                                <button className="btn-primary">Sign Up</button>
                                <button className="btn-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Hero;
