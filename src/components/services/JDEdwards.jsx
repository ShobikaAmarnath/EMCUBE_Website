import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles.css";
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
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const JDEdwards = () => {
  const services = [
    {
      id: 1,
      title: "JD Edwards Consulting",
      icon: <Server className="w-8 h-8" />,
      description: "Oracle JD Edwards (JDE) is a robust and flexible ERP solution, but unlocking its full potential requires the right guidance. Our JD Edwards Consulting Services are designed to align your ERP system with your business goals through deep domain expertise, tailored strategies, and value-driven roadmaps.",
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
      gradient: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "JD Edwards Managed Services",
      icon: <Settings className="w-8 h-8" />,
      description: "Maintain peak ERP performance with our flexible JD Edwards Managed Services. Whether you're running JDE on-premise or in the cloud, Emcube provides continuous monitoring, proactive issue resolution, and scalable support.",
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
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      id: 3,
      title: "JD Edwards Upgrade",
      icon: <RefreshCw className="w-8 h-8" />,
      description: "Upgrading your JD Edwards ERP system ensures compliance, security, and access to the latest Oracle innovations. We simplify the upgrade journey to minimize business disruption.",
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
      gradient: "from-purple-500 to-purple-700"
    },
    {
      id: 4,
      title: "JD Edwards Implementation",
      icon: <Database className="w-8 h-8" />,
      description: "Whether you're implementing JD Edwards for the first time or rolling out a new module, our implementation services deliver predictable outcomes, on time and on budget.",
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
      gradient: "from-green-500 to-green-700"
    },
    {
      id: 5,
      title: "Lift, Shift & Manage",
      icon: <Cloud className="w-8 h-8" />,
      description: "Transition your on-premise JD Edwards system to the cloud or a managed environment with zero data loss and minimal downtime.",
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
      gradient: "from-teal-500 to-teal-700"
    },
    {
      id: 6,
      title: "JD Edwards Orchestrator",
      icon: <Cog className="w-8 h-8" />,
      description: "Unlock the power of automation and real-time integrations using JD Edwards Orchestrator. Emcube helps businesses streamline workflows and boost efficiency with smart orchestration.",
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
      gradient: "from-orange-500 to-orange-700"
    },
    {
      id: 7,
      title: "JD Edwards Integrations",
      icon: <Link className="w-8 h-8" />,
      description: "We connect JD Edwards seamlessly with your broader IT landscape—CRM, SCM, eCommerce, PLM, and more—for 360° process visibility and control.",
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
      gradient: "from-red-500 to-red-700"
    },
    {
      id: 8,
      title: "Smart Help",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      description: "Smart Help is our unique support model offering on-demand access to certified JDE experts—no long-term contracts, just the help you need, when you need it.",
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
      gradient: "from-pink-500 to-pink-700"
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "500+", label: "JDE Implementations" },
    { icon: <Users className="w-6 h-6" />, value: "50+", label: "Certified Experts" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support Available" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "99.9%", label: "Uptime Guarantee" }
  ];

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
                Unlock your ERP's full potential with our expert consulting services.
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

          {/* Stats Section */}
          <div className="relative border-t border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-white/10 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
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
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;
              const direction = isReversed ? 20 : -20;
              return (
                <motion.div
                key={service.id}
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={direction}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
              >
                {/* Service Header */}
                <div className={`lg:w-2/5 p-8 lg:p-12 bg-gradient-to-br ${service.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-white/20 rounded-xl mr-4 backdrop-blur-sm">
                        {service.icon}
                      </div>
                      <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {service.title}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg leading-relaxed opacity-95">
                      {service.description}
                    </p>
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
              );
})}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your JD Edwards Experience?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Emcube Cloud Private Limited is your trusted partner for comprehensive JD Edwards services—from implementation to innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Download Service Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default JDEdwards;