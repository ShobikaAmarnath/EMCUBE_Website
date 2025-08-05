import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from '../Contact';
import ListBlock from "./ListBlock";
import { useVantaRings } from '../../hooks/useVantaRings';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import sanityClient from '../../sanityClient';
import { motion } from 'framer-motion';
import { BarChart3, Zap, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { waveItem, fadeSlide, containerVariants, itemVariants, titleVariants, checkIconVariants, fadeInUpVariants } from "../../animations/variants";
import { time_div, time_h2, time_p } from "../../animations/positions";

const AllServices = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const vantaRef = useVantaRings();
  const location = useLocation();

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

  useEffect(() => {
    if (!slug) return;
    const query = `
      *[_type == "services" && slug.current == $slug][0]{
        title,
        slug,
        overview,
        image{ asset->{url} },
        service[]{
          title,
          description,
          cards[]{
            title,
            description,
            image{ asset->{url} },
            benefits,
            offerings
          }
        },
        sections[]{
          title,
          slug,
          description,
          type,
          icon{ asset->{url} },
          content[]{
            ...,
            _type == "block" => {
              children[]{ text }
            }
          }
        }
      }
    `;
    sanityClient
      .fetch(query, { slug })
      .then((data) => setService(data))
      .catch(console.error);
  }, [slug]);

  if (!service) return <p className="text-center p-10"></p>;

  return (
    <>
      <Navbar />
      <div className="mt-28 min-h-screen">
        {/* Hero Section */}
        <div ref={vantaRef} className="relative text-white overflow-hidden h-[600px]">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col items-start text-left mb-6 mt-8">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm mr-4">
                  <BarChart3 className="w-16 h-16 text-indigo-300" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-semibold text-indigo-50 leading-relaxed max-w-4xl">
                {service.overview && service.overview[0]?.children?.map(child => child.text).join(' ')}
              </p>
            </div>
          </div>
        </div>

        {/* What is Section */}
        {service.sections?.find(sec => sec.title?.toLowerCase().startsWith('what is')) && (
          <div id={service.sections.find(sec => sec.title?.toLowerCase().startsWith('what is'))?.slug?.current} className="scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div {...time_div} variants={titleVariants}>
                  <motion.h2 className="text-4xl font-bold text-indigo-100 mb-6" {...time_h2}>
                    {service.sections.find(sec => sec.title?.toLowerCase().startsWith('what is'))?.title}
                  </motion.h2>
                  {service.sections.find(sec => sec.title?.toLowerCase().startsWith('what is'))?.content?.map((block, i) =>
                    block.children?.map((child, j) => (
                      <motion.p key={j} className="text-lg text-indigo-200 leading-relaxed mb-8" {...time_p}>
                        {child.text}
                      </motion.p>
                    ))
                  )}
                </motion.div>
                <div className="relative">
                  {service.image?.asset?.url && (
                    <motion.img
                      variants={fadeSlide}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={20}
                      src={service.image.asset.url}
                      alt={service.title}
                      className="mt-8 rounded-lg shadow-lg w-full h-auto"
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Benefits Section */}
        {service.sections?.find(sec => sec.title?.toLowerCase().includes('key benefits')) && (
          <div className="scroll-mt-24" id={service.sections.find(sec => sec.title?.toLowerCase().includes('key benefits'))?.slug?.current}>
            <div className="bg-white py-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" {...time_div} variants={titleVariants}>
                  <motion.h2 className="text-4xl font-bold text-gray-900 mb-4" {...time_h2}>
                    {service.sections.find(sec => sec.title?.toLowerCase().includes('key benefits'))?.title}
                  </motion.h2>
                  <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" {...time_p}>
                    {service.sections.find(sec => sec.title?.toLowerCase().includes('key benefits'))?.description ||
                      `Transform your ${service.title} processes with comprehensive capabilities...`}
                  </motion.p>
                </motion.div>
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {(service.sections.find(sec => sec.title?.toLowerCase().includes('key benefits'))?.content?.flatMap(block =>
                    block.children?.map(child => child.text)
                  ) || []).map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg group"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)"
                      }}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <motion.div
                            className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors"
                            variants={checkIconVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false }}
                          >
                            <motion.div
                              initial={{ rotate: 0 }}
                              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                            >
                              <CheckCircle className="w-5 h-5 text-indigo-600" />
                            </motion.div>
                          </motion.div>
                        </div>
                        <motion.p
                          className="text-gray-700 leading-relaxed"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {benefit}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Service Portfolio Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {service.service?.map((section, index) => (
            <React.Fragment key={index}>
              <motion.div className="text-center mb-16" {...time_div} variants={titleVariants}>
                <motion.h2 className="text-4xl font-bold text-indigo-50 mb-4" {...time_h2}>
                  {section.title}
                </motion.h2>
                <motion.p className="text-xl text-indigo-300 max-w-3xl mx-auto" {...time_p}>
                  {section.description}
                </motion.p>
              </motion.div>
              <div className="space-y-12">
                {section.cards?.map((card, idx) => {
                  const isReversed = idx % 2 !== 0;
                  const direction = isReversed ? 20 : -20;
                  return (
                    <div id={card.title?.toLowerCase().replace(/\s+/g, '-')} key={idx} className="scroll-mt-24">
                      <motion.div
                        variants={fadeSlide}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={direction}
                        className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col lg:flex`}
                      >
                        {/* Card Image Section */}
                        <div className="lg:w-2/5 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-50"></div>
                          {card.image?.asset?.url && (
                            <motion.img
                              src={card.image.asset.url}
                              alt={card.title}
                              variants={fadeSlide}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ amount: 0.8 }}
                              custom={direction}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                          <div className="relative z-10 p-8 lg:p-12 h-full bg-gradient-to-br from-black/50 to-black/20 flex flex-col justify-center">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                              {card.title?.split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                              ))}
                            </h3>
                            <div className="mt-6 h-1 w-24 bg-white/50 rounded-full"></div>
                          </div>
                        </div>
                        {/* Card Content Section */}
                        <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                          <div>
                            {card.benefits && card.benefits.length > 0 && (
                              <>
                                <h4 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
                                  <Shield className="w-5 h-5 mr-2" />
                                  Key Benefits
                                </h4>
                                <ListBlock items={card.benefits} direction={direction} />
                              </>
                            )}
                            {card.offerings && card.offerings.length > 0 && (
                              <>
                                <h4 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
                                  <Zap className="w-5 h-5 mr-2" />
                                  Offerings
                                </h4>
                                <ListBlock items={card.offerings} direction={direction} />
                              </>
                            )}
                          </div>
                          <div className="mt-8 pt-6 border-t border-gray-200">
                            <button
                              onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                  contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                            >
                              Learn More About {card.title}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div id="contact" className="scroll-mt-12">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default AllServices;