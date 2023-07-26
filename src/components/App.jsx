import { useState } from 'react';
import '../styles/App.css';
import Home from './Home';
import About from './About';

function App() {
  const [section, setSection] = useState('home');

  return (
    <div className="container">
      
      <div className="content">
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
    </div>
  );
}

export default App;
