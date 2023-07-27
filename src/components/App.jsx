import { useState, useEffect } from 'react';
import '../styles/App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Background from './Background';

function App() {
  const [section, setSection] = useState('home');
  const [animate, setAnimate] = useState(false);

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

      <div className={`content ${animate ? 'swipeEffect' : ''}`}>
        {section === 'home' && <Home />}
        {section === 'about' && <About />}
        {section === 'projects' && <Projects />}
        {section === 'contact' && <Contact />}
      </div>

      <nav className="links">
        <a href="#" onClick={() => setSection('home')}>
          Home
        </a>
        <a href="#" onClick={() => setSection('about')}>
          About
        </a>
        <a href="#" onClick={() => setSection('projects')}>
          Projects
        </a>
        <a href="#" onClick={() => setSection('contact')}>
          Contact
        </a>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
