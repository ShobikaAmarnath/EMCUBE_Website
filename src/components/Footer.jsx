import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { client, fetchServices } from '../sanityClient';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const [contact, setContact] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const query = `
          *[_type == "contactDetails"][0]{
            footerAbout,
            emails,
            phoneNumbers,
            address
          }
        `;
        const data = await client.fetch(query);
        setContact(data);

        const servicesData = await fetchServices();
        setServices(servicesData);
      } catch (err) {
        console.error('Failed to fetch footer details:', err);
      }
    };

    fetchContactDetails();
  }, []);

  if (!contact) return null;

  const addressLines = contact.address?.split('\n') || [];

  return (
    <footer className="text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_2fr] gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">EMcube Cloud</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {contact.footerAbout}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 lg:text-center">Quick Links</h4>
            <ul className="space-y-2 lg:text-center">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 lg:text-center">Services</h4>
            <ul className="space-y-2 lg:text-center">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={`/services/${service.slug.current}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-gray-300">
                  {addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Phone(s) */}
              {contact.phoneNumbers?.map((phone, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{phone}</span>
                </div>
              ))}

              {/* Email(s) */}
              {contact.emails?.map((email, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* <div className="flex flex-col md:flex-row justify-between items-center"> */}
            <p className="text-gray-400 text-sm text-center">
              © 2019 EMcube Cloud Private Limited. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;