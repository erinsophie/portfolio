function Links({ menuOpen, setMenuOpen, setSection }) {
  const links = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <nav className={`links ${menuOpen ? 'active' : ''}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          onClick={() => {
            setSection(link.section);
            setMenuOpen(false);
          }}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

export default Links;
