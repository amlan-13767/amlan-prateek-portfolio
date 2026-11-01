import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return <div className="site-shell"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><Header /><main id="main"><Hero /><Metrics /><About /><Experience /><Projects /><Skills /><Activities /><Recognition /></main><Contact /><Footer /></div>;
}
