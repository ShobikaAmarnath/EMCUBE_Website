import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";
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
    //   src: `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      icon: <Target className="w-8 h-8" />,
      description: "Oracle EPM's Planning & Budgeting Cloud Service (PBCS) enables organizations to develop accurate, driver-based budgets and forecasts. It provides tools for modeling scenarios, automating calculations, and collaborating across teams.",
      features: [
        "Assumption-driven planning models",
        "Workforce, capital, and financial planning modules", 
        "Built-in approval workflows and audit trails",
        "Excel Smart View and web-based input interfaces"
      ],
      gradient: "from-blue-500 to-blue-700",
      bgPattern: "bg-blue-50"
    },
    {
      id: 2,
      title: "Financial Close & Consolidation",
    //   src: `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      icon: <Calculator className="w-8 h-8" />,
      description: "Oracle Financial Consolidation and Close Cloud (FCCS) simplifies the entire close process from data collection to final reporting.",
      features: [
        "Automated data validation and intercompany eliminations",
        "Consolidation across multiple currencies and subsidiaries",
        "Standardized close templates and checklists", 
        "Integration with Oracle and non-Oracle ERPs"
      ],
      gradient: "from-indigo-500 to-indigo-700",
      bgPattern: "bg-indigo-50"
    },
    {
      id: 3,
      title: "Account Reconciliation",
    //   src: `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      icon: <Shield className="w-8 h-8" />,
      description: "Oracle Account Reconciliation Cloud Service (ARCS) streamlines and automates the account reconciliation process, reducing risk and ensuring transparency.",
      features: [
        "Automated matching rules and workflows",
        "Dashboard for tracking reconciliation status",
        "Compliance features for audit and control",
        "Risk-based classification of accounts"
      ],
      gradient: "from-purple-500 to-purple-700",
      bgPattern: "bg-purple-50"
    },
    {
      id: 4,
      title: "Narrative & Regulatory Reporting",
    //   src: `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      icon: <FileText className="w-8 h-8" />,
      description: "Oracle's Narrative Reporting allows finance teams to combine narrative commentary with financial data to create dynamic and compliant reports.",
      features: [
        "Collaborative report creation with version control",
        "Integration of real-time data from EPM/ERP",
        "Report bursting, audit trail, and role-based access",
        "Ideal for board books, investor reports, and regulatory filings"
      ],
      gradient: "from-green-500 to-green-700",
      bgPattern: "bg-green-50"
    },
    {
      id: 5,
      title: "Data Management & Integration",
    //   src: `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
      icon: <Database className="w-8 h-8" />,
      description: "Oracle EPM includes robust data integration capabilities for managing metadata and transactional data across various systems.",
      features: [
        "Data loading from ERP, HCM, CRM, and external sources",
        "Mapping, transformation, and validation rules",
        "Integration with Oracle Data Management and Data Integration tools",
        "Supports REST APIs and flat file uploads"
      ],
      gradient: "from-teal-500 to-teal-700",
      bgPattern: "bg-teal-50"
    }
  ];

  const items = services.map(item => ({
  ...item,
  src: item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}));


  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "50%", label: "Faster Financial Close" },
    { icon: <Users className="w-6 h-6" />, value: "90%", label: "Improved Collaboration" },
    { icon: <Clock className="w-6 h-6" />, value: "75%", label: "Time Savings" },
    { icon: <Award className="w-6 h-6" />, value: "99.9%", label: "Data Accuracy" }
  ];

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
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <BarChart3 className="w-16 h-16 text-indigo-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Oracle EPM / CPM
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Enterprise Performance Management to drive smarter decisions and streamline financial processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Started Today
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Schedule Demo
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
                  <div className="text-indigo-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What is Oracle EPM Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 mt-32" id="what-is-oracle-epm">
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

      {/* Key Benefits Section */}
      <div className="bg-white py-20" id="key-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Oracle EPM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your financial processes with comprehensive performance management capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
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
          {/* {services.map((service, index) => ( */}
            {items.map((item, index) => (
            <div 
              key={item.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Service Header */}
              <br/> <br/><br/> <br/><br/> <br/>
              <div className={`lg:w-2/5 p-8 lg:p-12 bg-gradient-to-br ${item.gradient} text-white relative overflow-hidden`} 
              id={item.src} >
                {console.log(item.src)}
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white/20 rounded-xl mr-4 backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.title}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg leading-relaxed opacity-95">
                    {item.description}
                  </p>
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
          {/* ))} */}
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Financial Performance?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Emcube Cloud Private Limited helps you implement and optimize Oracle EPM for maximum business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-xl">
                Schedule Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Download EPM Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OracleEPM;