import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-crema px-4 py-2 font-semibold text-roast focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Featured />
        <Menu />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
