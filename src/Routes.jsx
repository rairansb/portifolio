import React, { Component } from 'react';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

class AppRoutes extends Component {
  render() {
    return (
      <>
        <Header />
        <Home id="home" />
        <About id="about" />
        <Projects id="projetcts" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Footer />
      </>
    );
  }
}

export default AppRoutes;
