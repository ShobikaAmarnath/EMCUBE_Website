import { useState, useEffect } from 'react';
import './ServicesPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import { updatedServices, categories } from '../data/services';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const [isAtTop, setIsAtTop] = useState(true);

  const handleServiceClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  const DownArrow = () => (
    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  const UpArrow = () => (
    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );

  const filteredServices = activeCategory === 'all'
    ? updatedServices
    : updatedServices.filter(service => service.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    });

    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
      const handleScroll = () => {
        setIsAtTop(window.scrollY < 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <Navbar />
      <div className="services-page">
        {/* Header Section */}

        {/* Interactive Category Filter */}
        <div className="filter-section">
          <div className="container">
            <h2 className="filter-title">Explore Our Services</h2>
            <div className="filter-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="tab-icon">{category.icon}</span>
                  <span className="tab-text">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`service-card ${isVisible[`service-${service.id}`] ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="service-image" onClick={() => handleServiceClick(service.link)}>
                    <img src={service.image} alt={service.title} onClick={() => handleServiceClick(service.link)} />
                    <div className="service-overlay">
                      <div className="service-icon">{service.icon}</div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-actions justify-center">
                      <button className="btn btn-primary" onClick={() => handleServiceClick(service.link)}>Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>

      {/* Scroll Arrow Indicator */}
      {isAtTop ? (
        <button
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-indigo-600 p-3 rounded-full shadow-lg z-50"
          onClick={() =>
            document.querySelector(".services-grid-section")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <DownArrow />
        </button>
      ) : (
        <button
          className="fixed bottom-8 right-8 bg-indigo-600 p-3 rounded-full shadow-lg z-50 hover:scale-110 transition-transform animate-bounce"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <UpArrow />
        </button>
      )}
    </>
  );
};

export default ServicesPage;