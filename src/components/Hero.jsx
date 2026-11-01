import { ArrowDownRight, ArrowUpRight, Code2, Github, Linkedin, Sparkles } from './icons';
import { hero, profile } from '../data/content';

export default function Hero() {
  const [introPrefix, introSuffix] = hero.intro.split(profile.name);
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> {hero.eyebrow}</div>
      <h1>Building useful<br />things with <span className="gradient-text">code<span className="period">.</span></span></h1>
      <p className="hero-intro">{introPrefix}<strong>{profile.name}</strong>{introSuffix}</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a><a className="button button-quiet" href={profile.resume} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={16} /></a></div>
      <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={18} /></a><span className="social-divider" /><span className="mono muted">ROURKELA, IN</span></div>
    </div>
    <div className="hero-visual"><div className="visual-grid" /><div className="orbit orbit-large" /><div className="orbit orbit-small" /><div className="profile-card"><div className="card-top"><span className="mini-label">CURRENT FOCUS</span><span className="live-pulse" /></div><div className="code-window"><div className="window-dots"><i /><i /><i /></div><div className="code-line"><span className="line-no">01</span><span className="code-purple">const</span>&nbsp; builder = {'{'}</div><div className="code-line indent"><span className="line-no">02</span>focus: <span className="code-green">'AI + software'</span>,</div><div className="code-line indent"><span className="line-no">03</span>mindset: <span className="code-green">'build & learn'</span>,</div><div className="code-line indent"><span className="line-no">04</span>ship: <span className="code-orange">true</span></div><div className="code-line"><span className="line-no">05</span>{'}'};</div><div className="code-cursor" /></div><div className="card-bottom"><span><span className="status-dot" /> Building something new</span><span className="mono">v.2026</span></div></div><div className="float-chip chip-ai"><Sparkles size={15} /><span>AI / RAG</span></div><div className="float-chip chip-dev"><Code2 size={15} /><span>Full-stack</span></div><div className="visual-caption mono">IDEAS → SYSTEMS → IMPACT</div></div>
    <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
  </section>;
}
