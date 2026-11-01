import { useState } from 'react';
import { ArrowUpRight, Menu, X } from './icons';
import { profile } from '../data/content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="topbar">
    <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Amlan Prateek Panda — back to top"><span className="mark">A<span>.</span></span><span className="wordmark-name">{profile.name}</span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
      {['about', 'experience', 'projects', 'skills', 'leadership'].map((section) => <a key={section} href={`#${section}`} onClick={closeMenu}>{section === 'leadership' ? 'Activities' : section[0].toUpperCase() + section.slice(1)}</a>)}
      <a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
    </nav>
  </header>;
}
