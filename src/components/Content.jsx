import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Content({ section, animate }) {
  return (
    <div className={`content ${animate ? 'swipeEffect' : ''}`}>
      {section === 'home' && <Home />}
      {section === 'about' && <About />}
      {section === 'projects' && <Projects />}
      {section === 'contact' && <Contact />}
    </div>
  );
}

export default Content;
