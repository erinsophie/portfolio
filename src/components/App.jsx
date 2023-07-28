import { useState, useEffect } from 'react';
import '../styles/App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Background from './Background';
import Projects from './Projects';

function App() {
  const [section, setSection] = useState('home');
  const [animate, setAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [section]);

  return (
    <div className="container">
      <Background />

      <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-nav-btn">
        <i className={menuOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>
      </button>

      <div className={`content ${animate ? 'swipeEffect' : ''}`}>
        {section === 'home' && <Home />}
        {section === 'about' && <About />}
        {section === 'projects' && <Projects />}
        {section === 'contact' && <Contact />}
      </div>

      <nav className={`links ${menuOpen ? 'active' : ''}`}>
        <a
          href="#"
          onClick={() => {
            setSection('home');
            setMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => {
            setSection('about');
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a
          href="#"
          onClick={() => {
            setSection('projects');
            setMenuOpen(false);
          }}
        >
          Projects
        </a>
        <a
          href="#"
          onClick={() => {
            setSection('contact');
            setMenuOpen(false);
          }}
        >
          Contact
        </a>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
