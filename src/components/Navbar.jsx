import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { servicesByCategory, servicesItems } from '../data/services';
import logo from '../assets/figma.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to stored hash after navigation
    const storedHash = sessionStorage.getItem('scrollToHash');
    if (location.pathname === '/' && storedHash) {
      const el = document.querySelector(storedHash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.removeItem('scrollToHash');
        }, 100); // wait a bit for DOM to render
      }
    }
  }, [location]);


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

  const handleAnchorClick = (hash) => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToHash', hash);
      navigate('/');
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
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
            <button
              key={index}
              onClick={() => handleAnchorClick(item.href)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}
    >
      <div className="mx-[30px] lg:mx-auto container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              <img src={logo} alt="EMcube Logo" className="h-16 w-14" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu items={aboutUsItems} title="About Us" />

            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                to="/services"
                className={`nav-link flex items-center gap-1 ${location.pathname === '/services' ? 'active' : ''}`}
              >
                Our Services
                <ChevronDown className="w-4 h-4" />
              </Link>

              {isMegaMenuOpen && (
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
                        <h3
                          className="text-indigo-800 font-bold text-md uppercase mb-3 cursor-pointer"
                          onClick={() => navigate(href)}
                        >
                          {category}
                        </h3>
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
            </div>

            <button onClick={() => handleAnchorClick('#products')} className="nav-link">
              Products
            </button>
            <button onClick={() => handleAnchorClick('#contact')} className="nav-link">
              Contact
            </button>
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
              <button
                onClick={() => handleAnchorClick('#about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
              >
                About Us
              </button>

              <button
                onClick={() => {
                  navigate('/services');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
              >
                Services
              </button>

              <button
                onClick={() => handleAnchorClick('#products')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
              >
                Products
              </button>

              <button
                onClick={() => handleAnchorClick('#contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
