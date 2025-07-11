import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { servicesByCategory, servicesItems } from '../data/services'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
        <div className="flex justify-between items-center h-16 .px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              EMcube Cloud
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu items={aboutUsItems} title="About Us" />
            <div
              style={{ position: 'relative', marker: 'none' }}
              onMouseEnter={() => !isMobile && setIsMegaMenuOpen(true)}
              onMouseLeave={() => !isMobile && setIsMegaMenuOpen(false)}
            >
              <Link
                to="/services"
                style={{
                  alignItems: 'center',
                  gap: '5px',
                }}
                className={location.pathname === '/services' ? 'active' : ''}
                onClick={() => {
                  toggleServicesDropdown();
                  setIsMegaMenuOpen(!isMegaMenuOpen);
                }}
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
                    top: '110%',
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
                    {servicesByCategory.map(({ category, href, items }) => (
                      <div key={category}>
                        <h3 className="text-indigo-800 font-bold text-md uppercase mb-3 cursor-pointer" onClick={() => navigate(`${href}`)}>{category}</h3>
                        {items.map((item) => (
                          <a
                            key={item}
                            href={`${href}#${item.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                            className="block text-gray-700 mb-2 hover:text-indigo-600 transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            {item}
                          </a>
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
            </div>

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
              {isMobileMenuOpen ? <X className="w-12 h-6" /> : <Menu className="w-12 h-6" />}
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
