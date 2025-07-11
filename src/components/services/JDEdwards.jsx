import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ListBlock from "./ListBlock";

import {
  Server,
  Settings,
  RefreshCw,
  Database,
  Cloud,
  Cog,
  Link,
  HeadphonesIcon,
  // CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  // Users,
  // TrendingUp,
  // Clock,
  // Award
} from 'lucide-react';

const JDEdwards = () => {
  const services = [
    {
      id: 1,
      title: "JD Edwards Consulting",
      icon: <Server className="w-8 h-8" />,
      offerings: [
        "ERP strategy planning & advisory",
        "Business process alignment",
        "Technical & functional gap analysis",
        "Roadmapping for upgrades & enhancements",
        "Module-specific consulting (Finance, Distribution, Manufacturing, etc.)"
      ],
      benefits: [
        "Reduced risk and cost during implementation or upgrades",
        "Enhanced ERP usability and adoption",
        "Optimized performance of existing JD Edwards systems"
      ],
      gradient: "from-blue-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      id: 2,
      title: "JD Edwards Managed Services",
      icon: <Settings className="w-8 h-8" />,
      offerings: [
        "24/7 JD Edwards application support",
        "Performance tuning and system optimization",
        "User administration and security",
        "Database and infrastructure support",
        "Patch & release management"
      ],
      benefits: [
        "Predictable costs with SLA-driven models",
        "Reduced system downtime",
        "Free up internal IT teams for innovation"
      ],
      gradient: "from-indigo-500 to-indigo-700",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 3,
      title: "JD Edwards Upgrade",
      icon: <RefreshCw className="w-8 h-8" />,
      offerings: [
        "Upgrade assessments and impact analysis",
        "Data migration and validation",
        "Custom code retrofitting",
        "Functional testing & user training"
      ],
      benefits: [
        "Proven methodologies (9.x, 9.2, and beyond)",
        "Minimally disruptive go-lives",
        "Upgrade + Cloud migration strategy (if needed)"
      ],
      gradient: "from-purple-500 to-purple-700",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
    },
    {
      id: 4,
      title: "JD Edwards Implementation",
      icon: <Database className="w-8 h-8" />,
      offerings: [
        "End-to-end implementation planning",
        "Configuration & customization",
        "Master data management",
        "Reporting and analytics setup",
        "Post-go-live support and training"
      ],
      benefits: [
        "Agile implementation methodology",
        "Quick ROI through process automation",
        "Cross-functional expertise in JDE Financials, SCM, HCM, and more"
      ],
      gradient: "from-green-500 to-green-700",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 5,
      title: "Lift, Shift & Manage",
      icon: <Cloud className="w-8 h-8" />,
      offerings: [
        "Cloud readiness assessment",
        "Infrastructure provisioning",
        "Application re-hosting and data migration",
        "Continuous monitoring and support"
      ],
      benefits: [
        "Hybrid deployment models (private, public, OCI, Azure, AWS)",
        "Certified cloud and ERP experts",
        "Secure and compliant infrastructure"
      ],
      gradient: "from-teal-500 to-teal-700",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      id: 6,
      title: "JD Edwards Orchestrator",
      icon: <Cog className="w-8 h-8" />,
      offerings: [
        "Orchestrator strategy & use case definition",
        "Orchestration design, development & testing",
        "Integration with third-party systems (IoT, mobile, etc.)",
        "Orchestrator training for IT and business users"
      ],
      benefits: [
        "Real-time data exchange with other apps",
        "Reduced manual interventions",
        "Smart alerts, workflows, and automation"
      ],
      gradient: "from-orange-500 to-orange-700",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80"
    },
    {
      id: 7,
      title: "JD Edwards Integrations",
      icon: <Link className="w-8 h-8" />,
      offerings: [
        "Salesforce, NetSuite, SAP, legacy systems",
        "Web services, APIs, and middleware",
        "Real-time or batch-based integrations",
        "EDI and trading partner enablement"
      ],
      benefits: [
        "Eliminate data silos",
        "Unified customer and supply chain experience",
        "Faster time-to-insight"
      ],
      gradient: "from-red-500 to-red-700",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      id: 8,
      title: "Smart Help",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      offerings: [
        "Flexible ticket-based or hourly models",
        "Functional & technical assistance",
        "Knowledge transfer & mentorship",
        "Covers development, configuration, reporting & more"
      ],
      benefits: [
        "Cost-effective, scalable support",
        "Quick access to niche JDE skills",
        "Great for SMBs and short-term projects"
      ],
      gradient: "from-pink-500 to-pink-700",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
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

  const fadeSlide = {
    hidden: (customX = 0) => ({
      opacity: 0,
      x: customX,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Server className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                JD Edwards Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive JD Edwards solutions from implementation to innovation.
                Unlock your ERPs full potential with our expert consulting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Get Started Today
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our JD Edwards Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic consulting to hands-on implementation, we provide end-to-end JD Edwards services
              tailored to your business needs.
            </p>
          </div>

          <div className="space-y-12">
            {items.map((service, index) => {
              const isReversed = index % 2 !== 0;
              const direction = isReversed ? 20 : -20;
              return (
                <div id={service.src} className="scroll-mt-24">
                  <motion.div
                  key={service.id}
                  variants={fadeSlide}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={direction}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  {/* Service Header with Image */}
                  <div className={`lg:w-2/5 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 p-8 lg:p-12 h-full bg-gradient-to-br from-black/50 to-black/20 flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-white/30 rounded-2xl mr-4 backdrop-blur-md shadow-lg">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {service.title.split(' ').map((word, i) => (
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
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* What We Offer */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-blue-600" />
                          What We Offer
                        </h4>
                        <ListBlock items={service.offerings} />
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-green-600" />
                          Key Benefits
                        </h4>
                        <ListBlock items={service.benefits} />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <button className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center`}>
                        Learn More About {service.title}
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
      </div>
      <Footer />
    </>
  );
}

export default JDEdwards;