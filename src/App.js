import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Componentes do site
import Header from './components/Header/Header';
import Dados from './components/Estatisticas/Dados';
import Events from './components/Eventos/Events';
import FAQ from './components/Faq/Faq';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Pages
import Hero from './pages/Hero';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Dados />
            <Events />
            <FAQ />
            <News />
            <Contact />
          </>
        } />
        {/* <Route path='/matematica' element={<MathContent />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
