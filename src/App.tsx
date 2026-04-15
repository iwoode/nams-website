import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import About from './components/About';
import Staff from './components/Staff';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Charter from './components/Charter';
import EnrollmentCounter from './components/EnrollmentCounter';
import News from './components/News';
import Gallery from './components/Gallery';
import Downloads from './components/Downloads';

// Scroll to hash on navigation (e.g., /#about)
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

// Homepage component combining all sections
function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <EnrollmentCounter />
      <About />
      <Staff />
      <Events />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Header />
        <main>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/charter" element={<Charter />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/downloads" element={<Downloads />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;