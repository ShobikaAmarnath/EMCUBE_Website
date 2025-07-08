import { useState, useEffect } from 'react';
import './ServicesPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState({});

  const services = [
    {
      id: 1,
      title: "JD Edwards EnterpriseOne Implementation",
      category: "implementation",
      description: "Complete end-to-end implementation of JD Edwards EnterpriseOne with customized modules tailored to your business needs.",
      features: ["Financial Management", "Supply Chain", "Manufacturing", "Project Management", "Human Capital Management"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🚀"
    },
    {
      id: 2,
      title: "JD Edwards Cloud Migration",
      category: "cloud",
      description: "Seamlessly migrate your JD Edwards systems to the cloud with zero downtime and enhanced security.",
      features: ["Oracle Cloud Infrastructure", "Hybrid Cloud Setup", "Security Enhancement", "Performance Optimization", "Cost Reduction"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "☁️"
    },
    {
      id: 3,
      title: "JD Edwards Upgrade Services",
      category: "upgrade",
      description: "Upgrade your existing JD Edwards systems to the latest version with minimal business disruption.",
      features: ["Version Upgrade", "Tools Release Update", "Application Update", "Platform Migration", "Testing & Validation"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "⬆️"
    },
    {
      id: 4,
      title: "JD Edwards Support & Maintenance",
      category: "support",
      description: "24/7 comprehensive support and maintenance services to keep your JD Edwards systems running smoothly.",
      features: ["24/7 Technical Support", "System Monitoring", "Performance Tuning", "Issue Resolution", "Preventive Maintenance"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🛠️"
    },
    {
      id: 5,
      title: "JD Edwards Integration Services",
      category: "integration",
      description: "Integrate JD Edwards with third-party applications and modern technologies for enhanced functionality.",
      features: ["API Integration", "EDI Solutions", "Database Integration", "Legacy System Integration", "Real-time Data Sync"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔗"
    },
    {
      id: 6,
      title: "JD Edwards Development & Customization",
      category: "development",
      description: "Custom development and modifications to extend JD Edwards functionality according to your business requirements.",
      features: ["Custom Forms & Reports", "Business Function Development", "Workflow Automation", "Mobile Applications", "User Interface Enhancement"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💻"
    },
    {
      id: 7,
      title: "JD Edwards Training & Consulting",
      category: "consulting",
      description: "Comprehensive training programs and expert consulting to maximize your JD Edwards investment.",
      features: ["End-user Training", "Administrator Training", "Best Practices Consulting", "Process Optimization", "Change Management"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📚"
    },
    {
      id: 8,
      title: "JD Edwards Security & Compliance",
      category: "security",
      description: "Ensure your JD Edwards systems meet industry security standards and compliance requirements.",
      features: ["Security Assessment", "Role-based Access Control", "Data Encryption", "Audit Trail Management", "Compliance Reporting"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🔒"
    },
    {
      id: 9,
      title: "JD Edwards Business Intelligence",
      category: "analytics",
      description: "Transform your JD Edwards data into actionable insights with advanced analytics and reporting solutions.",
      features: ["Real-time Dashboards", "Custom Reports", "Data Visualization", "Predictive Analytics", "Performance Metrics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📊"
    },
    {
      id: 10,
      title: "JD Edwards Mobile Solutions",
      category: "mobile",
      description: "Extend JD Edwards functionality to mobile devices with responsive applications and offline capabilities.",
      features: ["Mobile Applications", "Responsive Design", "Offline Functionality", "Push Notifications", "Cross-platform Support"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "📱"
    },
    {
      id: 11,
      title: "JD Edwards Performance Optimization",
      category: "optimization",
      description: "Optimize your JD Edwards systems for maximum performance, scalability, and efficiency.",
      features: ["Performance Tuning", "Database Optimization", "System Monitoring", "Capacity Planning", "Resource Management"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "⚡"
    },
    {
      id: 12,
      title: "JD Edwards Disaster Recovery",
      category: "recovery",
      description: "Comprehensive disaster recovery planning and implementation to ensure business continuity.",
      features: ["Backup Solutions", "Recovery Planning", "Business Continuity", "Risk Assessment", "Testing & Validation"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🛡️"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'implementation', name: 'Implementation', icon: '🚀' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' },
    { id: 'support', name: 'Support', icon: '🛠️' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'consulting', name: 'Consulting', icon: '📚' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'analytics', name: 'Analytics', icon: '📊' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

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
    <Navbar />
    <div className="services-page">
      {/* Header Section */}
      {/* <div className="services-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="main-title">
              <span className="gradient-text">EMcube Cloud</span> JD Edwards Solutions
            </h1>
            <p className="subtitle">
              Comprehensive JD Edwards services designed to transform your business operations 
              and drive digital excellence across your enterprise.
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Implementations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Interactive Category Filter */}
      <div className="filter-section">
        <div className="container">
          <h2 className="filter-title">Explore Our Services</h2>
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`service-card ${isVisible[`service-${service.id}`] ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-bullet">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-actions">
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-secondary">Get Quote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact/>
      <Footer />
    </div>
    </>
  );
};

export default ServicesPage;