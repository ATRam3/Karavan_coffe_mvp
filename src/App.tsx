import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Menu from './components/Menu';
import CateringEvents from './components/CateringEvents';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { assets } from './data/assets';

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
        <Hero imageUrl={assets.insideCafe} />
        <Featured />
        <Menu />
        <CateringEvents />
        <About imageUrl={assets.goodEnvTables} />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
