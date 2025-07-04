import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutUsItems = [
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Executive Leadership', href: '#leadership' },
    { name: 'Strategic Partnerships', href: '#partnerships' },
  ];

  const servicesItems = [
    
  { name: 'What is JD Edwards?', href: '#jd-edwards-what-is', category: 'Oracle JD Edwards' },
  { name: 'Key Benefits', href: '#jd-edwards-benefits', category: 'Oracle JD Edwards' },
  { name: 'JD Edwards Implementation', href: '#jde-implementation', category: 'Oracle JD Edwards' },
  { name: 'Support & Managed Services', href: '#jde-support', category: 'Oracle JD Edwards' },
  { name: 'Orchestrator & Automation', href: '#jde-orchestrator', category: 'Oracle JD Edwards' },
  { name: 'JD Edwards Mobile Access', href: '#jde-mobile', category: 'Oracle JD Edwards' },
  { name: 'Technical (CNC) Services', href: '#jde-cnc', category: 'Oracle JD Edwards' },

  { name: 'What is Oracle EPM?', href: '#epm-what-is', category: 'Oracle EPM / CPM' },
  { name: 'Key Benefits', href: '#epm-benefits', category: 'Oracle EPM / CPM' },
  { name: 'Planning & Budgeting', href: '#epm-planning', category: 'Oracle EPM / CPM' },
  { name: 'Financial Close & Consolidation', href: '#epm-consolidation', category: 'Oracle EPM / CPM' },
  { name: 'Account Reconciliation', href: '#epm-reconciliation', category: 'Oracle EPM / CPM' },
  { name: 'Narrative & Regulatory Reporting', href: '#epm-reporting', category: 'Oracle EPM / CPM' },
  { name: 'Data Management & Integration', href: '#epm-data', category: 'Oracle EPM / CPM' },

  { name: 'What is NetSuite?', href: '#netsuite-what-is', category: 'NetSuite' },
  { name: 'Key Benefits', href: '#netsuite-benefits', category: 'NetSuite' },
  { name: 'NetSuite Implementation', href: '#netsuite-implementation', category: 'NetSuite' },
  { name: 'Support & Customization', href: '#netsuite-support', category: 'NetSuite' },
  { name: 'Industry-Specific Solutions', href: '#netsuite-industries', category: 'NetSuite' },
  { name: 'NetSuite Mobile Access', href: '#netsuite-mobile', category: 'NetSuite' },
  { name: 'Planning & Reconciliation', href: '#netsuite-planning', category: 'NetSuite' },

  { name: 'What is Cloud Infrastructure?', href: '#cloud-what-is', category: 'Cloud / Infrastructure' },
  { name: 'Key Benefits', href: '#cloud-benefits', category: 'Cloud / Infrastructure' },
  { name: 'Cloud Consulting & Strategy', href: '#cloud-consulting', category: 'Cloud / Infrastructure' },
  { name: 'Migration to Oracle Cloud (OCI)', href: '#oci-migration', category: 'Cloud / Infrastructure' },
  { name: 'Infrastructure Management', href: '#cloud-management', category: 'Cloud / Infrastructure' },
  { name: 'DevOps & Automation', href: '#cloud-devops', category: 'Cloud / Infrastructure' },
  { name: 'Multi-Cloud Environments', href: '#multi-cloud', category: 'Cloud / Infrastructure' },

  { name: 'What is Enterprise Mobility?', href: '#mobility-what-is', category: 'Mobility Services' },
  { name: 'Key Benefits', href: '#mobility-benefits', category: 'Mobility Services' },
  { name: 'Mobile App Development', href: '#mobility-apps', category: 'Mobility Services' },
  { name: 'JD Edwards & NetSuite Mobile Apps', href: '#mobility-jde-netsuite', category: 'Mobility Services' },
  { name: 'Field Service Mobility', href: '#mobility-field', category: 'Mobility Services' },
  { name: 'App Modernization & Integration', href: '#mobility-modernization', category: 'Mobility Services' },

  { name: 'What is Oracle BI?', href: '#bi-what-is', category: 'Oracle BI' },
  { name: 'Key Benefits', href: '#bi-benefits', category: 'Oracle BI' },
  { name: 'Oracle Analytics Cloud (OAC)', href: '#bi-oac', category: 'Oracle BI' },
  { name: 'BI Publisher & OBIEE Reports', href: '#bi-publisher', category: 'Oracle BI' },
  { name: 'Data Visualization & Dashboards', href: '#bi-dashboards', category: 'Oracle BI' },
  { name: 'Self-Service BI', href: '#bi-self-service', category: 'Oracle BI' },

  { name: 'What is Oracle Database?', href: '#db-what-is', category: 'Oracle Database' },
  { name: 'Key Benefits', href: '#db-benefits', category: 'Oracle Database' },
  { name: 'Installation & Support', href: '#db-installation', category: 'Oracle Database' },
  { name: 'Database Tuning', href: '#db-tuning', category: 'Oracle Database' },
  { name: 'Backup & Recovery', href: '#db-backup', category: 'Oracle Database' },
  { name: 'Oracle Autonomous DB', href: '#db-autonomous', category: 'Oracle Database' },
  { name: 'Health Check & Optimization', href: '#db-health', category: 'Oracle Database' }


  ];

  const groupedServices = servicesItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const toggleServicesDropdown = () => {
    if (isMobile) {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    }
  };

  const DropdownMenu = ({ items, title }) => (
    <div className="dropdown relative">
      <button className="nav-link flex items-center space-x-1">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <div className="dropdown-menu">
        <div className="py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              EMcube Cloud
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu items={aboutUsItems} title="About Us" />
            <li
              style={{ position: 'relative', marker: 'none' }}
              onMouseEnter={() => !isMobile && setIsMegaMenuOpen(true)}
              onMouseLeave={() => !isMobile && setIsMegaMenuOpen(false)}
            >
              <Link
                to="#"
                style={{
                  alignItems: 'center',
                  gap: '5px',
                }}
                // className={location.pathname === '/services' ? 'active' : ''}
                onClick={toggleServicesDropdown}
              >
                Our Services
                {!isMobile && (
                  <span className="dropdown-arrow" style={{ fontSize: '12px' }}>
                    ▼
                  </span>
                )}
              </Link>

              {/* Desktop Mega Menu */}
              {!isMobile && isMegaMenuOpen && (
                <div
                  className="mega-menu-desktop"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-1000px',
                    backgroundColor: 'white',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '30px',
                    zIndex: 1001,
                    width: '1500px',
                    maxWidth: '90vw',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                      gap: '30px',
                    }}
                  >
                    {Object.entries(groupedServices).map(([category, items]) => (
                      <div key={category}>
                        <h3
                          style={{
                            color: 'rgb(28 24 103)',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginBottom: '15px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {category}
                        </h3>
                        {items.map((item) => (
                          <Link
                            to={item.href}
                            key={item.name}
                            style={{
                              display: 'block',
                              color: '#333',
                              marginBottom: '10px',
                              textDecoration: 'none',
                            }}
                            className="hover:text-primary-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile Services Menu */}
              {isMobile && isServicesDropdownOpen && (
                <div className="mobile-services-menu px-4 py-2">
                  {Object.entries(groupedServices).map(([category, items]) => (
                    <div key={category} className="mb-4">
                      <h4 className="font-semibold text-primary-600 mb-2">{category}</h4>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="text-gray-700 hover:text-primary-600">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                About Us
              </a>
              <button
                onClick={toggleServicesDropdown}
                className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
              >
                Services
              </button>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Products
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
