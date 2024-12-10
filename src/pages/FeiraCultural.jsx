import React from "react";
import "../styles/FeiraCultural.css";
import imgCultural01 from "../components/img/Feira Cultural 1.svg"
import imgCultural02 from "../components/img/feira-cultural-02.svg"
import imgCultural03 from "../components/img/feira-cultural-05.svg"
import imgMaracatuCultural01 from "../components/img/maracatu-01.svg"
const FeiraCultural = () => {
  return (
    <section className="feira-container">
      <div className="feira-header">
        <h1>Feira Cultural: Fortalecendo a Cultura Local</h1>
        <p>
          Realizada na Escola Estadual Prof. Yolanda Araújo Silva Paiva em 
          <strong> 09 de novembro de 2024.</strong>
        </p>
      </div>
      <article className="feira-article">
        <img
          src={imgCultural01}
          alt="Feira Cultural"
          className="feira-image"
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A <strong>Feira Cultural</strong> realizada no dia <strong>09 de novembro de 2024</strong> na Escola Estadual Prof. Yolanda Araújo Silva Paiva foi um evento significativo que celebrou as diversas manifestações culturais da nossa região, com ênfase nas tradições locais e afro-brasileiras.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O evento contou com apresentações de <strong>fandango caiçara</strong>, um ritmo musical tradicional da cultura caiçara, que encantou o público com sua dança e música autêntica. Além disso, a cultura afro-brasileira foi homenageada com apresentações de <strong>maracatu</strong>, que trouxeram à tona a rica história e herança africana presente na nossa comunidade.
        </p>
        <img
          src={imgCultural02}
          alt="Fandango Caiçara"
          className="feira-image"
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O evento também apresentou projetos educativos e culturais voltados para o fortalecimento da identidade local, incentivando os alunos e a comunidade a preservarem e valorizarem as tradições que formam a base cultural da nossa região. Diversas oficinas e atividades práticas permitiram que os participantes se envolvessem diretamente com as manifestações culturais, como a confecção de instrumentos musicais típicos e a aprendizagem de danças tradicionais.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O maracatu, com sua rica tradição e simbolismo, fez a conexão entre passado e presente, permitindo que todos os participantes experimentassem um pouco da história viva da nossa cultura afro-brasileira. O evento foi uma verdadeira celebração de nossa diversidade cultural e um importante passo para o fortalecimento do nosso patrimônio imaterial.
        </p>
        <img
          src={imgMaracatuCultural01}
          alt="Maracatu"
          className="feira-image"
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Escola Estadual Prof. Yolanda Araújo Silva Paiva parabeniza todos os envolvidos, especialmente os alunos e professores, que contribuíram para a realização de um evento tão significativo para nossa comunidade. O fortalecimento da cultura local é fundamental para a construção de uma sociedade mais rica, diversa e consciente de sua história.
        </p>
      </article>
    </section>
  );
};

export default FeiraCultural;