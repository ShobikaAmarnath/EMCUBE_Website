import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";
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
  LineChart
} from 'lucide-react';

const OracleEPM = () => {

  const vantaRef = useVantaRings();

  const benefits = [
    "Unified platform for financial planning, budgeting, and forecasting",
    "Faster and more accurate financial closes and reconciliations",
    "Real-time insights into financial and operational performance",
    "Scalable cloud solution with built-in analytics and reporting",
    "Enhanced compliance with regulatory and audit requirements",
    "Integration with ERP systems like Oracle JD Edwards, NetSuite, and SAP",
    "Reduced manual work and improved collaboration across departments"
  ];

  const services = [
    {
      id: 1,
      title: "Planning & Budgeting",
      icon: <Target className="w-8 h-8" />,
      features: [
        "Assumption-driven planning models",
        "Workforce, capital, and financial planning modules",
        "Built-in approval workflows and audit trails",
        "Excel Smart View and web-based input interfaces"
      ],
      gradient: "from-blue-500 to-blue-700",
      bgPattern: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" // Financial planning
    },
    {
      id: 2,
      title: "Financial Close & Consolidation",
      icon: <Calculator className="w-8 h-8" />,
      features: [
        "Automated data validation and intercompany eliminations",
        "Consolidation across multiple currencies and subsidiaries",
        "Standardized close templates and checklists",
        "Integration with Oracle and non-Oracle ERPs"
      ],
      gradient: "from-indigo-500 to-indigo-700",
      bgPattern: "bg-indigo-50",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" // Financial data
    },
    {
      id: 3,
      title: "Account Reconciliation",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Automated matching rules and workflows",
        "Dashboard for tracking reconciliation status",
        "Compliance features for audit and control",
        "Risk-based classification of accounts"
      ],
      gradient: "from-purple-500 to-purple-700",
      bgPattern: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80" // Accounting
    },
    {
      id: 4,
      title: "Narrative & Regulatory Reporting",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Collaborative report creation with version control",
        "Integration of real-time data from EPM/ERP",
        "Report bursting, audit trail, and role-based access",
        "Ideal for board books, investor reports, and regulatory filings"
      ],
      gradient: "from-green-500 to-green-700",
      bgPattern: "bg-green-50",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" // Business reports
    },
    {
      id: 5,
      title: "Data Management & Integration",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Data loading from ERP, HCM, CRM, and external sources",
        "Mapping, transformation, and validation rules",
        "Integration with Oracle Data Management and Data Integration tools",
        "Supports REST APIs and flat file uploads"
      ],
      gradient: "from-teal-500 to-teal-700",
      bgPattern: "bg-teal-50",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" // Data integration
    }
  ];

  const items = services.map(item => ({
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const checkIconVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-32" id="what-is-oracle-epm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Oracle EPM?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Oracle Enterprise Performance Management (EPM) is a suite of cloud-based tools designed to help businesses model,
                plan, and streamline their financial processes. EPM supports enterprise-wide planning, budgeting, forecasting,
                consolidation, and performance analysis — enabling smarter decision-making across finance and operations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It is often referred to as Corporate Performance Management (CPM) when used to align business strategy with execution.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Brain className="w-12 h-12 mx-auto mb-3 text-indigo-200" />
                    <h3 className="font-semibold mb-2">Smart Planning</h3>
                    <p className="text-sm text-indigo-100">AI-driven insights</p>
                  </div>
                  <div className="text-center">
                    <Layers className="w-12 h-12 mx-auto mb-3 text-purple-200" />
                    <h3 className="font-semibold mb-2">Unified Platform</h3>
                    <p className="text-sm text-purple-100">All-in-one solution</p>
                  </div>
                  <div className="text-center">
                    <PieChart className="w-12 h-12 mx-auto mb-3 text-indigo-200" />
                    <h3 className="font-semibold mb-2">Real-time Analytics</h3>
                    <p className="text-sm text-indigo-100">Live dashboards</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-3 text-purple-200" />
                    <h3 className="font-semibold mb-2">Cloud Native</h3>
                    <p className="text-sm text-purple-100">Scalable & secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section with Animations */}
        <div className="bg-white py-20 overflow-hidden" id="key-benefits">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={titleVariants}
            >
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Key Benefits of Oracle EPM
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
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

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Oracle EPM Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of enterprise performance management
            </p>
          </div>

          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                id={item.src}
              >
                {/* Service Header with Image */}
                <div className={`lg:w-2/5 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`}></div>
                  <img
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
                    <div className="grid gap-4">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <button className={`bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}>
                      Learn More About {item.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Seamless Integration Capabilities
              </h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Oracle EPM integrates with your existing systems for unified performance management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <RefreshCw className="w-12 h-12 mx-auto mb-4 text-indigo-300" />
                <h3 className="text-xl font-semibold mb-3">ERP Integration</h3>
                <p className="text-indigo-100">Connect with Oracle JD Edwards, NetSuite, SAP, and other ERP systems</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <LineChart className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <h3 className="text-xl font-semibold mb-3">Real-time Data</h3>
                <p className="text-purple-100">Live data feeds from HCM, CRM, and external data sources</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <Lock className="w-12 h-12 mx-auto mb-4 text-teal-300" />
                <h3 className="text-xl font-semibold mb-3">Secure APIs</h3>
                <p className="text-teal-100">REST APIs and secure file uploads with enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OracleEPM;