import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Navbar />
      <Hero />
      <Marquee
        tone="dark"
        speed={34}
        items={['Software Engineer', 'QA & Testing', 'Full-Stack', 'Cloud Computing', 'Machine Learning']}
      />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Marquee
        tone="light"
        speed={30}
        items={['Let’s work together', 'Open to work']}
      />
      <Footer />
    </div>
  );
};

export default App;
