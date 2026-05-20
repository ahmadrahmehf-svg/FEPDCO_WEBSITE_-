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
import Seo from './components/Seo';

export default function App() {
  return (
    <>
      <Seo />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-mint focus:text-navy-dark focus:font-semibold"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-navy-dark font-dm">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Stats />
          <About />
          <Principles />
          <Services />
          <Gallery />
          <Projects />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
