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

      <div className="flex flex-wrap justify-center gap-8 lg:px-14 mt-10">
        {services.map((item, index) => (
          <div
            key={item.slug}
            id={`service-${item.slug}`}
            className={`service-card group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden flex-none 
                  w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-6rem)]
                  transform transition-all duration-500 ease-out 
                  hover:scale-105 hover:shadow-2xl
                  opacity-0 animate-fadeInUp items-center`}
            style={{
              animationDelay: `${index * 0.15}s`,
              animationFillMode: "forwards"
            }}
          >
            {/* Image with Learn More on hover */}
            <div
              className="relative w-50 h-40 overflow-hidden cursor-pointer"
              onClick={() => {
                if (item.type === 'sub' && item.parent && item.slug) {
                  onCardClick(`/services/${item.parent}#${item.slug}`);
                } else {
                  onCardClick(`/services/${item.slug}`);
                }
              }}
            >
              {item.image?.asset?.url && (
                <img
                  src={item.image.asset.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* Learn More Button on Hover */}
              <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  className="px-5 py-2 text-sm font-medium text-white rounded-full 
                       bg-gradient-to-r from-blue-500 to-purple-500
                       hover:from-purple-500 hover:to-blue-500 
                       transform hover:scale-110 transition-all duration-300 shadow-md"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Content with Flash-card animation */}
            <div className="flex flex-col flex-1 p-5 justify-between transform transition-all duration-500 group-hover:translate-y-2 group-hover:scale-[1.02]">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug transition-all duration-500 group-hover:text-blue-600">
                  {item.type === 'sub'
                    ? `${item.title}`
                    : item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-700">
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
