import React from "react";
import "../styles/Caicaras.css";
import imgCaicarasEvento01 from "../components/img/Caiçaras 1.svg"
import imgCaicarasEvento02 from "../components/img/caicaras-04.svg"
import imgCaicarasEvento03 from "../components/img/Pinturas- Caiçaras 1.svg"

const Caicaras = () => {
    return (
        <section className="caicaras-container">
            <div className="caicaras-header">
                <h1>Evento Cultural: A Cultura Caiçara</h1>
                <p>
                    Realizado na Escola Estadual Prof. Yolanda Araújo Silva Paiva em
                    <strong> 15 de março de 2024.</strong>
                </p>
            </div>
            <article className="caicaras-article">
                <img
                    src={imgCaicarasEvento01}
                    alt="Evento Cultura Caiçara"
                    className="caicaras-image"
                />
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No dia <strong>15 de março de 2024</strong>, a Escola Estadual Prof. Yolanda Araújo Silva Paiva promoveu um evento enriquecedor sobre a <strong>cultura caiçara</strong>, destacando as tradições, história e contribuições desse grupo cultural para a região.
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O evento contou com palestras, apresentações artísticas e debates conduzidos por especialistas locais e educadores, oferecendo aos alunos e à comunidade escolar uma imersão nas práticas culturais caiçaras. Temas como culinária tradicional, artesanato e manifestações folclóricas foram amplamente abordados, proporcionando um aprendizado significativo sobre a importância da preservação dessa cultura.
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entre os destaques do evento, os alunos puderam participar de oficinas práticas, como a confecção de redes de pesca e a preparação de pratos típicos. Essas atividades permitiram uma interação direta com os elementos culturais, promovendo uma valorização das raízes locais.
                </p>
                <img
                    src={imgCaicarasEvento02}
                    alt="Culinária Caiçara"
                    className="caicaras-image"
                />
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A iniciativa reforçou o papel da escola como um espaço de integração cultural e educacional, alinhado às diretrizes de ensino da Secretaria de Educação do Estado de São Paulo. A valorização das culturas locais é essencial para fortalecer o senso de identidade e pertencimento dos alunos.
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A direção da escola agradece a todos os envolvidos, incluindo professores, alunos e a comunidade local, que contribuíram para o sucesso deste evento memorável. Juntos, celebramos e preservamos a riqueza da cultura caiçara!
                </p>
            </article>
        </section>
    );
};

export default Caicaras;