import { useState, useEffect } from 'react';
import './ServicesPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import ServicesGrid from './ServicesGrid';
import servicesList from '../data/servicesList.json';

const ServicesPage = () => {
  const defaultCategory = 'oracle-jd-edwards' || 'all';
  const [activeCategory, setActiveCategory] = useState(defaultCategory);  
  const [isVisible, setIsVisible] = useState({});
  const [isAtTop, setIsAtTop] = useState(true);
  const [services, setServices] = useState([]);
  const [flatServices, setFlatServices] = useState([]);

  useEffect(() => {
  setServices(servicesList);
  setFlatServices(flattenServices(servicesList));
}, []);

  const flattenServices = (services) => {
    const allCards = [];
    services.forEach(service => {
      // Main service card
      allCards.push({
        type: 'main',
        title: service.title,
        slug: service.slug?.current,
        overview: service.overview,
        image: service.image,
        parent: null,
      });
      // Sub topic cards
      service.service?.forEach(section => {
        section.cards?.forEach(card => {
          allCards.push({
            type: 'sub',
            title: card.title,
            slug: card.slug?.current || `${card.title?.toLowerCase().replace(/\s+/g, '-')}`,
            overview: card.description,
            image: card.image,
            parent: service.slug?.current,
            parentTitle: service.title,
          });
        });
      });
    });
    return allCards;
  };

  const handleServiceClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  const UpArrow = () => (
    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );

  const filteredServices =
    activeCategory === 'all'
      ? flatServices
      : flatServices.filter(item =>
        item.slug === activeCategory ||
        item.parent === activeCategory
      );

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

        {/* Interactive Category Filter */}
        <div className="filter-section">
          <div className="container">
            <h2 className="filter-title">Explore Our Services</h2>
            <div className="filter-tabs">
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`filter-tab ${activeCategory === service.slug.current ? 'active' : ''}`}
                  onClick={() => setActiveCategory(service.slug.current)}
                >
                  <span className="tab-text">{service.title}</span>
                </button>
              ))}
              <button
                className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span className="tab-text">All Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <ServicesGrid
          services={filteredServices}
          onCardClick={handleServiceClick}
        />

        <Contact />
        <Footer />
      </div>

      {/* Scroll Arrow Indicator */}
      {isAtTop ? (
        ""
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