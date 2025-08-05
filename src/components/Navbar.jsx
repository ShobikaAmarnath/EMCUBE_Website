import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo 2.png';
import { fetchServices } from '../sanityClient';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sanityServices, setSanityServices] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchSanityServices = async () => {
      try {
        const services = await fetchServices();
        setSanityServices(services);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };
    fetchSanityServices();
  })

  if (!sanityServices) return <p className="text-center p-10"></p>;

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ' backdrop-blur-sm'}`}
    >
      <div className="mx-[30px] lg:max-w-full container-custom">
        <div className={`flex justify-between items-center ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="EMcube Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center font-bond text-xl space-x-8">

            <a href='/#about' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              About Us
            </a>

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
                    // left: '-1000px',
                    backgroundColor: 'white',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '30px',
                    zIndex: 1001,
                    // width: '1500px',
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
                    {sanityServices.map(service => (
                      <div key={service.slug.current}>
                        <h3
                          className="text-indigo-800 font-bold text-md uppercase mb-3 cursor-pointer hover:text-indigo-600 transition-colors"
                          onClick={() => {
                            navigate(`/services/${service.slug.current}`);
                            setIsMegaMenuOpen(false);
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          {service.title}
                        </h3>
                        <ul>
                          {/* What is / Key Benefits */}
                          {service.sections?.map(sec => (
                            <li key={sec.slug?.current || sec.title}>
                              <a
                                className="block text-gray-700 mb-2 hover:text-indigo-600 transition-colors"
                                href={
                                  service.slug?.current && sec.slug?.current
                                    ? `/services/${service.slug.current}#${sec.slug.current}`
                                    : "#"
                                }
                                onClick={() => setIsMegaMenuOpen(false)}
                              >
                                {sec.title}
                              </a>
                            </li>
                          ))}
                          {/* Sub services */}
                          {service.service?.flatMap(section =>
                            section.cards?.map(card => (
                              <li key={card.slug?.current || card.title}>
                                <a
                                  className="block text-gray-700 mb-2 hover:text-indigo-600 transition-colors"
                                  href={
                                    service.slug?.current && card.title
                                      ? `/services/${service.slug.current}#${card.title.toLowerCase().replace(/\s+/g, '-')}`
                                      : "#"
                                  }
                                  onClick={() => setIsMegaMenuOpen(false)}
                                >
                                  {card.title}
                                </a>
                              </li>
                            ))
                          )}
                        </ul>
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
