import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'Strategic Partnerships', href: '#partnerships' }
  ];

  const servicesItems = [
    { name: 'Oracle JD Edwards', href: '#jd-edwards' },
    { name: 'Cloud Services', href: '#cloud-services' },
    { name: 'Mobility Solutions', href: '#mobility' },
    { name: 'Oracle BI Services', href: '#oracle-bi' },
    { name: 'Database Services', href: '#database' },
    { name: 'Help & Support', href: '#support' },
    { name: 'NetSuite', href: '#netsuite' },
    { name: 'CX Cloud', href: '#cx-cloud' }
  ];

  const advisoryItems = [
    { name: 'ERP Assessment', href: '#erp-assessment' },
    { name: 'Cybersecurity & Risk Management', href: '#cybersecurity' },
    { name: 'Business Transformation Services', href: '#transformation' }
  ];

  const managedServicesItems = [
    { name: 'JD Edwards', href: '#managed-jd-edwards' },
    { name: 'NetSuite Support', href: '#netsuite-support' },
    { name: 'Cloud EPM', href: '#cloud-epm' }
  ];

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
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
            <DropdownMenu items={servicesItems} title="Services" />
            <DropdownMenu items={advisoryItems} title="Advisory" />
            <DropdownMenu items={managedServicesItems} title="Managed Services" />
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
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
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">About Us</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Services</a>
              <a href="#advisory" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Advisory</a>
              <a href="#managed-services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Managed Services</a>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Products</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;