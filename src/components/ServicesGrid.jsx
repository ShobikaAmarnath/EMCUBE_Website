import { useEffect } from 'react';
import { time_div, time_h2, time_p } from '../animations/positions';
import { titleVariants, waveItem } from '../animations/variants';
import { motion } from 'framer-motion';
import { RefreshCw, LineChart, Lock } from 'lucide-react';

const ServicesGrid = ({ services, onCardClick }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const elements = document.querySelectorAll('.service-card-container');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [services]);

  return (
    <>
      <h2 className="text-4xl font-bold text-brand-magenta my-10 text-center">Our Services</h2>

      {/* CORRECTED CONTAINER: Switched back to flexbox for better justification */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {services.map((item, index) => (
          // Sizing is now controlled here for the flex container
          <div
            key={item.slug || index}
            id={`service-${item.slug}`}
            className="service-card-container w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-6rem)] xl:w-[calc(25%-1.5rem)] opacity-0"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
            }}
          >
            <div
              className="service-card group h-full flex flex-col bg-background-main rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with Learn More on hover */}
              <div
                className="relative w-full aspect-w-4 aspect-h-3 bg-background-subtle overflow-hidden cursor-pointer" // <-- ASPECT RATIO & BG aDDED
                onClick={() => {
                  const targetUrl = item.type === 'sub' && item.parent && item.slug
                    ? `/services/${item.parent}#${item.slug}`
                    : `/services/${item.slug}`;
                  onCardClick(targetUrl);
                }}
              >
                {item.image?.asset?.url ? (
                  <img
                    src={item.image.asset.url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110" // <-- OBJECT-CONTAIN & PADDING
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <span className="text-text-muted">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    className="px-5 py-2 text-sm font-medium text-text-white rounded-full bg-gradient-to-r from-primary-500 to-accent-purple-500 hover:from-accent-purple-500 hover:to-primary-500 transform hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Content */}
              <div
                className="flex flex-col flex-1 p-5 justify-between cursor-pointer"
                onClick={() => {
                  const targetUrl = item.type === 'sub' && item.parent && item.slug
                    ? `/services/${item.parent}#${item.slug}`
                    : `/services/${item.slug}`;
                  onCardClick(targetUrl);
                }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-3 leading-snug transition-all duration-500 group-hover:text-primary-600 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed cursor-pointer">
                    {item.overview &&
                      (Array.isArray(item.overview)
                        ? item.overview
                          .map(block =>
                            block.children?.map(child => child.text).join(' ')
                          )
                          .join(' ')
                        : item.overview)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose EMcube Section */}
      <div className="why-choose-section">
        <div className="container">
          <h2 className="section-title text-brand-magenta">Why Choose EMcube Cloud?</h2>
          <div className="benefits-grid">
            {[
              { icon: '🏆', title: 'Certified Experts', text: 'Our team consists of Oracle-certified professionals with extensive industry experience.' },
              { icon: '🎯', title: 'Proven Methodology', text: 'We follow industry best practices and proven methodologies to ensure successful project delivery.' },
              { icon: '🚀', title: 'Rapid Implementation', text: 'Our accelerated approach reduces time-to-value and minimizes business disruption.' },
              { icon: '💡', title: 'Innovation Focus', text: 'We leverage the latest technologies to modernize your environment.' },
            ].map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-text-main mb-2">{benefit.title}</h3>
                <p className="text-text-muted">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Integration Section */}
      <div className="text-text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...time_div} variants={titleVariants}>
            <motion.h2 className="text-4xl font-bold mb-4" {...time_h2}>
              Seamless Integration Capabilities
            </motion.h2>
            <motion.p className="text-xl text-accent-indigo-100 max-w-3xl mx-auto" {...time_p}>
              Our solutions integrate with your existing systems for unified performance management.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="text-center p-6 bg-background-main/10 rounded-xl backdrop-blur-sm" variants={waveItem} initial="hidden" whileInView="visible" viewport={{ amount: 0.6 }} custom={0}>
              <RefreshCw className="w-12 h-12 mx-auto mb-4 text-accent-indigo-300" />
              <h3 className="text-xl font-semibold mb-3">ERP Integration</h3>
              <p className="text-accent-indigo-100">Connect with Oracle JD Edwards, NetSuite, SAP, and other ERP systems.</p>
            </motion.div>
            <motion.div className="text-center p-6 bg-background-main/10 rounded-xl backdrop-blur-sm" variants={waveItem} initial="hidden" whileInView="visible" viewport={{ amount: 0.6 }} custom={1}>
              <LineChart className="w-12 h-12 mx-auto mb-4 text-accent-purple-300" />
              <h3 className="text-xl font-semibold mb-3">Real-time Data</h3>
              <p className="text-accent-purple-100">Live data feeds from HCM, CRM, and external data sources.</p>
            </motion.div>
            <motion.div className="text-center p-6 bg-background-main/10 rounded-xl backdrop-blur-sm" variants={waveItem} initial="hidden" whileInView="visible" viewport={{ amount: 0.6 }} custom={2}>
              <Lock className="w-12 h-12 mx-auto mb-4 text-secondary-100" />
              <h3 className="text-xl font-semibold mb-3">Secure APIs</h3>
              <p className="text-secondary-100">REST APIs and secure file uploads with enterprise-grade security.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;