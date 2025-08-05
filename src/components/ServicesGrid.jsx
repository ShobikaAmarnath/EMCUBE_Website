import { useEffect, useState } from 'react';
import { time_div, time_h2, time_p } from '../animations/positions';
import { titleVariants, waveItem } from '../animations/variants';
import { motion } from 'framer-motion';
import { RefreshCw, LineChart, Lock } from 'lucide-react';

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
        {services.map((item, index) => (
          <div
            key={item.slug}
            id={`service-${item.slug}`}
            className={`service-card benefit-card animate-on-scroll`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="service-image"
              onClick={() => {
                if (item.type === 'sub' && item.parent && item.slug) {
                  onCardClick(`/services/${item.parent}#${item.slug}`);
                } else {
                  onCardClick(`/services/${item.slug}`);
                }
              }}
            >
              {item.image?.asset?.url && (
                <img src={item.image.asset.url} alt={item.title} />
              )}
            </div>
            <div className="service-content">
              <h3 className="service-title">
                {item.type === 'sub' ? `${item.title} (${item.parentTitle})` : item.title}
              </h3>
              <p className="service-description">
                {item.overview &&
                  (Array.isArray(item.overview)
                    ? item.overview.map(block => block.children?.map(child => child.text).join(' ')).join(' ')
                    : item.overview)
                }
              </p>
              <div className="service-actions justify-center">
                <button className="btn btn-primary"
                  onClick={() => {
                    if (item.type === 'sub' && item.parent && item.slug) {
                      onCardClick(`/services/${item.parent}#${item.slug}`);
                    } else {
                      onCardClick(`/services/${item.slug}`);
                    }
                  }}
                >
                  Learn More
                </button>
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

      {/* Integration Section */}

      <div className=" text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...time_div} variants={titleVariants}>
            <motion.h2 className="text-4xl font-bold mb-4" {...time_h2}>
              Seamless Integration Capabilities
            </motion.h2>
            <motion.p className="text-xl text-indigo-100 max-w-3xl mx-auto" {...time_p}>
              Oracle EPM integrates with your existing systems for unified performance management
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                variants={waveItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.6 }}
                custom={i}
              >
                {i === 0 && (
                  <>
                    <RefreshCw className="w-12 h-12 mx-auto mb-4 text-indigo-300" />
                    <h3 className="text-xl font-semibold mb-3">ERP Integration</h3>
                    <p className="text-indigo-100">
                      Connect with Oracle JD Edwards, NetSuite, SAP, and other ERP systems
                    </p>
                  </>
                )}
                {i === 1 && (
                  <>
                    <LineChart className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                    <h3 className="text-xl font-semibold mb-3">Real-time Data</h3>
                    <p className="text-purple-100">
                      Live data feeds from HCM, CRM, and external data sources
                    </p>
                  </>
                )}
                {i === 2 && (
                  <>
                    <Lock className="w-12 h-12 mx-auto mb-4 text-teal-100" />
                    <h3 className="text-xl font-semibold mb-3">Secure APIs</h3>
                    <p className="text-teal-100">
                      REST APIs and secure file uploads with enterprise-grade security
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
