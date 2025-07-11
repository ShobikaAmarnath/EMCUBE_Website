
import React, { useState, useEffect, useRef } from 'react';
import AboutServices from './AboutServices';

import './HomePage.css';
// import Stats from './Stats';
import './ServicesPage';
import Footer from './Footer';

import './Navbar';
import Navbar from './Navbar';


//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    percentage: 0,
    users: 0,
    growth: 0
  });

  // Animate numbers on mount
  useEffect(() => {
    const animateNumber = (key, targetValue, duration = 2000) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * targetValue);

        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: current
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    // Start animations after 1 second
    const timer = setTimeout(() => {
      animateNumber('percentage', 87);
      animateNumber('users', 142);
      animateNumber('growth', 23);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCardMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className="homepage">

      <Navbar />

      {/* Hero Section */}
      <section className='hero'>
        <div className="circuit-board"></div>

        {/* Matrix Rain Effect */}
        <div className="matrix-rain">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((left, index) => (
            <div
              key={index}
              className="matrix-column"
              style={{
                left: `${left}%`,
                animationDelay: `${index * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Network Layer */}
        <div className="network-layer">
          <div className="connection-node" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
          <div className="connection-node" style={{ top: '60%', left: '25%', animationDelay: '1s' }} />
          <div className="connection-node" style={{ top: '40%', left: '75%', animationDelay: '2s' }} />
          <div className="connection-node" style={{ top: '80%', left: '85%', animationDelay: '3s' }} />

          <div className="connection-beam" style={{ top: '25%', left: '18%', width: '200px', transformOrigin: 'left', animationDelay: '1s' }} />
          <div className="connection-beam" style={{ top: '65%', left: '28%', width: '350px', transformOrigin: 'left', animationDelay: '3s' }} />
          <div className="connection-beam" style={{ top: '45%', left: '45%', width: '250px', transformOrigin: 'left', animationDelay: '5s' }} />
        </div>

        {/* Holographic Elements */}
        <div className="hologram" style={{ top: '10%', right: '10%', animationDelay: '0s' }} />
        <div className="hologram" style={{ bottom: '15%', left: '10%', animationDelay: '5s' }} />

        {/* Data Visualization Cards */}
        <div className="data-viz">
          <div
            className={`dashboard-card ${hoveredCard === 0 ? 'hovered' : ''}`}
            style={{ top: '15%', left: '5%', animationDelay: '0s' }}
            onMouseEnter={() => handleCardMouseEnter(0)}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="chart-lines">
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
            </div>
            <div className="metric-number">{animatedNumbers.percentage}%</div>
          </div>

          <div
            className={`dashboard-card ${hoveredCard === 1 ? 'hovered' : ''}`}
            style={{ top: '55%', right: '5%', animationDelay: '3s' }}
            onMouseEnter={() => handleCardMouseEnter(1)}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="chart-lines">
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
            </div>
            <div className="metric-number">{animatedNumbers.users}K</div>
          </div>

          <div
            className={`dashboard-card ${hoveredCard === 2 ? 'hovered' : ''}`}
            style={{ bottom: '10%', left: '50%', animationDelay: '6s' }}
            onMouseEnter={() => handleCardMouseEnter(2)}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="chart-lines">
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
            </div>
            <div className="metric-number">+{animatedNumbers.growth}%</div>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Transform Your Business with EMcube Cloud Private Limited.</h1>
            <p className="hero-description">
              Streamline operations, boost productivity, and drive growth with our comprehensive
              enterprise resource planning platform designed for modern businesses.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          {/* <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Business Technology" 
          />
        </div> */}
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About EMcube</h2>
              <p>
                With over two decades of experience in enterprise software solutions, TechFlow ERP
                has been at the forefront of digital transformation, helping businesses of all sizes
                optimize their operations and achieve sustainable growth.
              </p>
              <p>
                Our platform combines the power of artificial intelligence, cloud computing, and
                intuitive design to deliver a comprehensive ERP solution that adapts to your unique
                business needs.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Countries</p>
                </div>
                <div className="stat">
                  <h3>99.9%</h3>
                  <p>Uptime</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Analytics Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <Stats/>
      </section> */}
      {/* <ServicesPage/> */}
      <AboutServices />


      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Ready to transform your business? Contact us today to schedule a demo and see how TechFlow ERP can revolutionize your operations.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>info@techflowerp.com</p>
                </div>
                <div className="contact-item">
                  <h4>Phone</h4>
                  <p>+1 (55      5) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h4>Address</h4>
                  <p>123 Business District, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="form-container">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5"></textarea>
                </div>
                <button className="btn btn-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;