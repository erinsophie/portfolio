import { useState, useEffect } from 'react';
import '../styles/App.css';
import Background from './Background';
import MobileBtn from './MobileBtn';
import Content from './Content';
import Links from './Links';
import Footer from './Footer';

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
      <MobileBtn setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Content section={section} animate={animate} />
      <Links
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setSection={setSection}
      />
      <Footer />
    </div>
  );
}

export default App;
