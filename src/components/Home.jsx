import React, { useState, useEffect, useRef } from 'react';
import AboutServices from './ServicesGrid';
import './HomePage.css';
import './ServicesPage';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactSection from './Contact';
import ServicesGrid from './ServicesGrid';
import { updatedServices } from '../data/services';
import { motion } from 'framer-motion';
import { waveItem, titleVariants, fadeSlide } from '../animations/variants';
import { time_div, time_h2, time_p } from '../animations/positions';

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

  const handleClick = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleCardClick = (link) => {
    if (link) {
      window.location.href = link;
    }
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
              <button className="btn btn-primary" onClick={() => handleClick("#about")}>Get Started</button>
            </div>
          </div>

        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about section-padding bg-gray-50 scroll-mt-16">
        <div className="container">
          <div className="about-content">
            <motion.div {...time_div} variants={titleVariants} className="about-text">
              <motion.h2 className='text-4xl font-medium text-gray-950 mb-4' {...time_h2} >About EMCube</motion.h2>
              <motion.p {...time_p}>
                EMCube was founded with a single purpose — to simplify enterprise software for modern businesses.
                Though still in our early phase, we are driven by a long-term vision to deliver smart, scalable,
                and user-focused solutions that empower companies to operate more efficiently.
              </motion.p>
              <motion.p {...time_p}>
                Our focus is on building tools that are clean in design, powerful in capability, and adaptable
                to the evolving needs of small and mid-sized enterprises. Backed by years of conceptual work and
                a passion for technology, we’re laying the foundation for a product ecosystem built on integrity,
                transparency, and real-world usability.
              </motion.p>
              <div className="stats">
                {[
                  { title: "Bootstrapped", description: "Independently Built" },
                  { title: "Future-Ready", description: "Vision-Driven" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="stat"
                    variants={waveItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    custom={index}
                  >
                    <h3 className='text-4xl text-blue-900 mb-4'>{item.title}</h3>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>{item.description}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
            <div
              className="about-image"
            >
              <motion.img
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                custom={20}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Visionary tech workspace"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="home-services-section text-center mb-16">
        <div className="container px-10 mt-10">
          <ServicesGrid
            services={updatedServices.slice(0, 6)}
            onCardClick={handleCardClick}
          />
        </div>
      </section>


      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;