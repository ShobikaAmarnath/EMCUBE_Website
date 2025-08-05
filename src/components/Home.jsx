import { useState, useEffect } from 'react';
import './HomePage.css';
import './ServicesPage';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactSection from './Contact';
import ServicesGrid from './ServicesGrid';
import { motion } from 'framer-motion';
import { waveItem, titleVariants, fadeSlide } from '../animations/variants';
import { time_div, time_h2, time_p } from '../animations/positions';
import { fetchServices } from '../sanityClient';

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [services, setServices] = useState([]);
  const [flatServices, setFlatServices] = useState([]);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    percentage: 0,
    users: 0,
    growth: 0
  });

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Wait for DOM to render
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200); 
    }
  }, [location]);

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

  useEffect(() => {
    const getServices = async () => {
      const data = await fetchServices();
      setServices(data);
      setFlatServices(flattenServices(data));
    };
    getServices();
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
    });
    return allCards;
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
      <section id="about" className="about section-padding relative scroll-mt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50"></div>
        <div className="absolute top-0 right-0 w-100 h-96 bg-gradient-to-br from-[#ff6b9d]/10 to-[#f7971e]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#f7971e]/10 to-[#ff6b9d]/10 rounded-full blur-3xl"></div>

        <div className=" relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center">
            <motion.div
              {...time_div}
              variants={titleVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff6b9d] to-[#f7971e] bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider mb-4"
            >
              <div className="w-8 h-px bg-gradient-to-r from-[#ff6b9d] to-[#f7971e]"></div>
              About EMCube
              <div className="w-8 h-px bg-gradient-to-r from-[#ff6b9d] to-[#f7971e]"></div>
            </motion.div>
            <motion.h2
              className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'
              {...time_h2}
            >
              Building the Future of
              <span className="bg-gradient-to-r from-[#ff6b9d] to-[#f7971e] bg-clip-text text-transparent"> Enterprise Software</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-19 items-center">
            {/* Content Side */}
            <motion.div {...time_div} variants={titleVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.p
                  {...time_p}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  EMCube was founded with a single purpose — to simplify enterprise software for modern businesses.
                  Though still in our early phase, we are driven by a long-term vision to deliver smart, scalable,
                  and user-focused solutions that empower companies to operate more efficiently.
                </motion.p>
                <motion.p
                  {...time_p}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  Backed by years of conceptual work and
                  a passion for technology, we re laying the foundation for a product ecosystem built on integrity,
                  transparency, and real-world usability.
                </motion.p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Bootstrapped",
                    description: "Independently Built",

                  },
                  {
                    title: "Future-Ready",
                    description: "Vision-Driven",

                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="group"
                    variants={waveItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    custom={index}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className='text-2xl font-bold bg-gradient-to-r from-[#ff6b9d] to-[#f7971e] bg-clip-text text-transparent mb-2'>
                        {item.title}
                      </h3>
                      <p className='text-gray-600 font-medium'>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#ff6b9d]/20 to-[#f7971e]/20 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#f7971e]/20 to-[#ff6b9d]/20 rounded-3xl -rotate-12"></div>

              {/* Main Image Container */}
              <motion.div
                className="relative"
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                custom={20}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                    alt="Visionary tech workspace"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Additional Stats Cards */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-200/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#ff6b9d] to-[#f7971e] bg-clip-text text-transparent">
                      2019
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className=" text-center">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff6b9d]"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#f7971e]"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#f7971e]"></div>
            </div>
          </div>
        </div>
      </section>


      <section className="home-services-section text-center mb-16">
        <div className="container px-10 mt-10">
          <ServicesGrid
            services={flatServices}
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