import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Componentes do site
import Header from './components/Header/Header';
import About from './components/About/About';
import Dados from './components/Estatisticas/Dados';
import Events from './components/Eventos/Events';
import FAQ from './components/Faq/Faq';
import News from './components/News/News';
import Galeria from './components/Galeria/Galeria';
import Destaques from './components/Destaques/Destaques';
import Contact from './components/Contact/Contact';
import Localizacao from './components/Localizacao/Localizacao';
import Footer from './components/Footer/Footer';

// Pages
import Hero from './pages/Hero';
import FeiraCultural from './pages/FeiraCultural';
import CombateAbuso from './pages/CombateAbusoSexual';
import Caicaras from './pages/Caicaras';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <About />
            <Dados />
            <Events />
            <FAQ />
            <News />
            <Galeria />
            <Destaques />
            <Contact />
            <Localizacao />
          </>
        } />
        <Route path='/feira-cultural' element={<FeiraCultural />} />
        <Route path='/combate-abuso-sexual' element={<CombateAbuso />} />
        <Route path='/caicaras' element={<Caicaras />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
