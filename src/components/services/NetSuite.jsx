import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from '../Contact'
import ListBlock from './ListBlock';
import { useVantaRings } from '../../hooks/useVantaRings';
import { motion } from 'framer-motion';
import {
    BarChart3,
  TrendingUp,
  Shield,
  Database,
  FileText,
  Settings,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Clock,
  Users,
  Globe,
  Award,
  Brain,
  Layers,
  PieChart,
  Calculator,
  BookOpen,
  Lock,
  RefreshCw,
  LineChart,
  Box,
  LifeBuoy,
  Wrench,
  ShieldCheck,
  Undo2,
  LayoutGrid,
  Repeat,
  ShoppingBag,
  Utensils,
  HeartPulse,
} from 'lucide-react';

import { waveItem, fadeSlide, containerVariants, itemVariants, titleVariants, checkIconVariants, fadeInUpVariants } from '../../animations/variants';
import { time_div, time_h2, time_p } from '../../animations/positions';

const NetSuite = () => {

  const vantaRef = useVantaRings();

  const benefits = [
    "Unified platform for financial planning, budgeting, and forecasting",
    "Faster and more accurate financial closes and reconciliations",
    "Real-time insights into financial and operational performance",
    "Scalable cloud solution with built-in analytics and reporting",
    "Enhanced compliance with regulatory and audit requirements",
    "Integration with ERP systems like Oracle JD Edwards, NetSuite, and SAP"
  ];

  const netsuiteItems = [
  {
    id: 1,
    title: "What is NetSuite ERP?",
    icon: <Box className="w-8 h-8" />,
    description:
      "Oracle NetSuite is a unified cloud ERP solution combining financials, CRM, eCommerce, and more. It helps businesses streamline operations and gain real-time visibility.",
    features: [
      "Financial, Inventory, CRM & HR modules",
      "Unified cloud platform",
      "Real-time dashboards and reporting",
    ],
    gradient: "from-yellow-400 to-orange-500",
    bgPattern: "bg-yellow-50",
  },
  {
    id: 2,
    title: "NetSuite Support",
    icon: <LifeBuoy className="w-8 h-8" />,
    description:
      "We provide reliable NetSuite support to resolve issues, enhance functionality, and ensure smooth operation tailored to your business.",
    features: [
      "Issue resolution and admin support",
      "Custom scripts, workflows, and dashboards",
      "Release management and testing",
    ],
    gradient: "from-green-400 to-green-600",
    bgPattern: "bg-green-50",
  },
  {
    id: 3,
    title: "Implementation & Consulting",
    icon: <Wrench className="w-8 h-8" />,
    description:
      "Emcube offers full-cycle NetSuite implementation and consulting to deliver a risk-free ERP transformation experience.",
    features: [
      "Business analysis & configuration",
      "Workflow automation & scripting",
      "Go-live & post-implementation support",
    ],
    gradient: "from-purple-500 to-indigo-600",
    bgPattern: "bg-purple-50",
  },
  {
    id: 4,
    title: "NetSuite Health Check",
    icon: <ShieldCheck className="w-8 h-8" />,
    description:
      "Optimize your NetSuite environment with our detailed audit and improvement roadmap, ensuring performance and security.",
    features: [
      "System & script performance review",
      "Roles, permissions, and data integrity",
      "Comprehensive audit reports",
    ],
    gradient: "from-rose-500 to-pink-600",
    bgPattern: "bg-rose-50",
  },
  {
    id: 5,
    title: "Rescue Project Recovery",
    icon: <Undo2 className="w-8 h-8" />,
    description:
      "If your NetSuite project is underperforming, we assess, re-align, and recover your ERP system for faster ROI.",
    features: [
      "Root cause & solution re-architecture",
      "Data reconciliation and retraining",
      "Transparent recovery roadmap",
    ],
    gradient: "from-gray-500 to-slate-700",
    bgPattern: "bg-gray-50",
  },
  {
    id: 6,
    title: "Planning and Budgeting",
    icon: <LayoutGrid className="w-8 h-8" />,
    description:
      "Plan, model, and forecast with confidence using NetSuite’s planning tools tailored for collaborative financial management.",
    features: [
      "Driver-based forecasting",
      "Scenario and what-if modeling",
      "ERP data integration",
    ],
    gradient: "from-blue-400 to-cyan-600",
    bgPattern: "bg-cyan-50",
  },
  {
    id: 7,
    title: "Account Reconciliation",
    icon: <Repeat className="w-8 h-8" />,
    description:
      "Speed up your month-end close with NetSuite’s reconciliation automation for faster, error-free finance reporting.",
    features: [
      "Auto-match and reconciliation rules",
      "Exception tracking and approval flow",
      "Audit-ready logs and traceability",
    ],
    gradient: "from-pink-400 to-red-500",
    bgPattern: "bg-pink-50",
  },
  {
    id: 8,
    title: "NetSuite for Retail",
    icon: <ShoppingBag className="w-8 h-8" />,
    description:
      "Enable unified commerce across in-store, eCommerce, and back-office with NetSuite’s retail-specific capabilities.",
    features: [
      "Omnichannel order management",
      "CRM and loyalty integration",
      "Inventory visibility and POS",
    ],
    gradient: "from-fuchsia-500 to-violet-600",
    bgPattern: "bg-violet-50",
  },
  {
    id: 9,
    title: "NetSuite for Food & Beverage",
    icon: <Utensils className="w-8 h-8" />,
    description:
      "Support compliance, reduce waste, and streamline production for food & beverage businesses with NetSuite.",
    features: [
      "Lot tracking & batch control",
      "Shelf life & expiry tracking",
      "FDA compliance & forecasting",
    ],
    gradient: "from-lime-400 to-green-500",
    bgPattern: "bg-lime-50",
  },
  {
    id: 10,
    title: "NetSuite for Healthcare & Life Sciences",
    icon: <HeartPulse className="w-8 h-8" />,
    description:
      "We provide NetSuite implementations tailored for healthcare and life sciences companies focusing on compliance, financial control, and visibility.",
    features: [
      "Clinical trial expense tracking",
      "Inventory & procurement control",
      "Regulatory compliance reports",
    ],
    gradient: "from-sky-500 to-indigo-500",
    bgPattern: "bg-sky-50",
  },
];

  const items = netsuiteItems.map(item => ({
    ...item,
    src: item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  }));

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div ref={vantaRef} className="relative text-white overflow-hidden h-[600px]">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
            {/* <div className="text-center"> */}
            <div className="flex flex-col items-start text-left mb-6 mt-16 ">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm mr-4">
                  <BarChart3 className="w-16 h-16 text-indigo-300" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                  Oracle EPM / CPM
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-4xl">
                Enterprise Performance Management to drive smarter decisions and streamline financial processes
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* What is Oracle EPM Section */}
        <div id="what-is-oracle-epm" className='scroll-mt-16'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div {...time_div} variants={titleVariants}>
                <motion.h2 className="text-4xl font-bold text-gray-900 mb-6" {...time_h2}>
                  What is Oracle EPM?
                </motion.h2>
                <motion.p className="text-lg text-gray-700 leading-relaxed mb-8" {...time_p}>
                  Oracle Enterprise Performance Management (EPM) is a suite of cloud-based tools designed to help businesses model,
                  plan, and streamline their financial processes. EPM supports enterprise-wide planning, budgeting, forecasting,
                  consolidation, and performance analysis — enabling smarter decision-making across finance and operations.
                </motion.p>
                <motion.p className="text-lg text-gray-700 leading-relaxed" {...time_p}>
                  It is often referred to as Corporate Performance Management (CPM) when used to align business strategy with execution.
                </motion.p>
              </motion.div>
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="text-center"
                        variants={waveItem}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.6 }}
                        custom={i}
                      >
                        {i === 0 && (
                          <>
                            <Brain className="w-12 h-12 mx-auto mb-3 text-indigo-200" />
                            <h3 className="font-semibold mb-2">Smart Planning</h3>
                            <p className="text-sm text-indigo-100">AI-driven insights</p>
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <Layers className="w-12 h-12 mx-auto mb-3 text-purple-200" />
                            <h3 className="font-semibold mb-2">Unified Platform</h3>
                            <p className="text-sm text-purple-100">All-in-one solution</p>
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <PieChart className="w-12 h-12 mx-auto mb-3 text-indigo-200" />
                            <h3 className="font-semibold mb-2">Real-time Analytics</h3>
                            <p className="text-sm text-indigo-100">Live dashboards</p>
                          </>
                        )}
                        {i === 3 && (
                          <>
                            <Globe className="w-12 h-12 mx-auto mb-3 text-purple-200" />
                            <h3 className="font-semibold mb-2">Cloud Native</h3>
                            <p className="text-sm text-purple-100">Scalable & secure</p>
                          </>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section with Animations */}
        <div className="scroll-mt-12" id="key-benefits">
          <div className="bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                {...time_div}
                variants={titleVariants}
              >
                <motion.h2
                  className="text-4xl font-bold text-gray-900 mb-4"
                  {...time_h2}
                >
                  Key Benefits of Oracle EPM
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 max-w-3xl mx-auto"
                  {...time_p}
                >
                  Transform your financial processes with comprehensive performance management capabilities
                </motion.p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {benefits.map((benefit, index) => (
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

              {/* Animated Call to Action */}
              <motion.div
                className="mt-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
              >
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div className="text-center mb-16" {...time_div} variants={titleVariants}>
            <motion.h2 className="text-4xl font-bold text-gray-900 mb-4" {...time_h2}>
              Oracle EPM Service Portfolio
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" {...time_p}>
              Comprehensive solutions for every aspect of enterprise performance management
            </motion.p>
          </motion.div>

          <div className="space-y-12">
            {items.map((item, index) => {
              const isReversed = index % 2 !== 0;
              const direction = isReversed ? 20 : -20;
              return (
                <div id={item.src} className='scroll-mt-24'>
                  <motion.div
                    key={item.id}
                    variants={fadeSlide}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={direction}
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      } flex flex-col lg:flex`}
                  >
                    {/* Service Header with Image */}
                    <div className={`lg:w-2/5 relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50`}></div>
                      <motion.img
                        variants={fadeSlide}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.8 }}
                        custom={direction}
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="relative z-10 p-8 lg:p-12 h-full bg-gradient-to-br from-black/50 to-black/20 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="p-4 bg-white/30 rounded-2xl mr-4 backdrop-blur-md shadow-lg">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                          {item.title.split(' ').map((word, i) => (
                            <span key={i} className="block">
                              {word}
                            </span>
                          ))}
                        </h3>
                        <div className="mt-6 h-1 w-24 bg-white/50 rounded-full"></div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="lg:w-3/5 p-8 lg:p-12">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-indigo-600" />
                          Key Features
                        </h4>
                        <ListBlock items={item.features} direction={direction} />
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <button
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className={`bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}
                        >
                          Learn More About {item.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>

                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-20 mb-20">
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
      </div>
      <div id="contact" className='scroll-mt-12'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default NetSuite;