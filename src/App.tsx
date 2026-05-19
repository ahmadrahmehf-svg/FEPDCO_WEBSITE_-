import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Principles from './components/Principles';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-dark font-dm">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Principles />
      <Services />
      <Gallery />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
