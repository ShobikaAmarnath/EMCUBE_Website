import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/emcube img.png';
import servicesList from '../data/servicesList.json';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [sanityServices, setSanityServices] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSanityServices(servicesList);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!sanityServices) return <div className="h-28" />; // Return a placeholder with the same initial height

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-body-2 shadow-lg' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      {/* THIS IS THE CORRECTED LINE */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-height duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="EMcube Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center font-bond text-xl space-x-8">
            <a href="/#about" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
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
                <>
                  {/* Invisible bridge to prevent gap issues */}
                  <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                  
                  <div className={`fixed left-0 right-0 mx-auto max-w-7xl bg-background-main shadow-lg p-8 z-[1001] max-h-[80vh] overflow-y-auto rounded-b-lg ${isScrolled ? 'top-[50px]' : 'top-[80px]'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                      {sanityServices.map(service => (
                        <div key={service.slug.current}>
                          <h3
                            className="cursor-pointer text-primary-800 hover:text-hover-indigo transition-colors font-bold uppercase text-base mb-3"
                            onClick={() => {
                              navigate(`/services/${service.slug.current}`);
                              setIsMegaMenuOpen(false);
                            }}
                            role="button"
                            tabIndex={0}
                          >
                            {service.title}
                          </h3>
                          <ul className="space-y-2">
                            {service.sections?.map(sec => (
                              <li key={sec.slug?.current || sec.title}>
                                <a
                                  className="block text-text-body hover:text-hover-indigo transition-colors text-base"
                                  href={`/services/${service.slug.current}#${sec.slug.current}`}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                >
                                  {sec.title}
                                </a>
                              </li>
                            ))}
                            {service.service?.flatMap(section =>
                              section.cards?.map(card => (
                                <li key={card.slug?.current || card.title}>
                                  <a
                                    className="block text-text-body hover:text-hover-indigo transition-colors text-base"
                                    href={`/services/${service.slug.current}#${card.title.toLowerCase().replace(/\s+/g, '-')}`}
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
                </>
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
              className="text-text-body hover:text-primary-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background-main border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleAnchorClick('#about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-text-body hover:text-primary-600"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  navigate('/services');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-text-body hover:text-primary-600"
              >
                Services
              </button>
              <button
                onClick={() => handleAnchorClick('#products')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-text-body hover:text-primary-600"
              >
                Products
              </button>
              <button
                onClick={() => handleAnchorClick('#contact')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-text-body hover:text-primary-600"
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