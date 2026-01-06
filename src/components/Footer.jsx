import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import contact from '../data/contact.json';
import servicesList from '../data/servicesList.json';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const addressLines = contact.address?.split('\n') || [];

  return (
    <footer className="text-text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_2fr] gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-text-white mb-4">EMCUBE Cloud</h3>
            <p className="text-text-footer-link mb-6 leading-relaxed">
              {contact.footerAbout}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-icon hover:text-text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-icon hover:text-text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-icon hover:text-text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-text-footer-link hover:text-text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <a href={`/services/${service.slug.current}`} className="text-text-footer-link hover:text-text-white transition-colors duration-200">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-text-icon mt-1" />
                <div className="text-text-footer-link">
                  {addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Phone(s) */}
              {contact.phoneNumbers?.map((phone, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-text-icon" />
                  <span className="text-text-footer-link">{phone}</span>
                </div>
              ))}

              {/* Email(s) */}
              {contact.emails?.map((email, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-text-icon" />
                  <span className="text-text-footer-link">{email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-dark mt-12 pt-8">
          <p className="text-text-icon text-sm text-center">
            © 2019 EMCUBE Cloud Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;