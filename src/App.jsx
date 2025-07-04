import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Stats from './components/Stats';

// import ServicesSection from './components/ServicesSection';
// import Contact from './components/Contact';
import Home from './components/Home';
// import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
    <Home/>
      {/* <Navbar /> */}
      {/* <Hero /> */}
  
      {/* <AboutServices /> */}
      {/* <ServicesSection /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;