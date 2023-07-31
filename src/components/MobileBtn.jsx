function MobileBtn({ setMenuOpen, menuOpen }) {
  return (
    <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-nav-btn">
      <i className={menuOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}></i>
    </button>
  );
}

export default MobileBtn;
