import { useEffect, useState } from 'react';
// import './ServicesPage.css';

const ServicesGrid = ({ services, onCardClick }) => {
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <>
      <h2 className="text-4xl font-bold text-[#e737ac] my-10 text-center">Our Services</h2>
      <div className="services-grid lg:px-14 mt-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={`service-${service.id}`}
            className={`service-card benefit-card animate-on-scroll `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-image" onClick={() => onCardClick(service.link)}>
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-actions justify-center">
                <button className="btn btn-primary" onClick={() => onCardClick(service.link)}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose EMcube Section */}
      <div className="why-choose-section">
        <div className="container">
          <h2 className="section-title text-[#e737ac]">Why Choose EMcube Cloud for JD Edwards?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Certified Experts</h3>
              <p>Our team consists of Oracle-certified JD Edwards professionals with extensive industry experience.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Proven Methodology</h3>
              <p>We follow industry best practices and proven methodologies to ensure successful project delivery.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Rapid Implementation</h3>
              <p>Our accelerated implementation approach reduces time-to-value and minimizes business disruption.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovation Focus</h3>
              <p>We leverage the latest technologies and innovations to modernize your JD Edwards environment.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
