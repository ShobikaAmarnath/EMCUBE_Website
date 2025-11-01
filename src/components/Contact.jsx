import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contact from '../data/contact.json';
import servicesList from '../data/servicesList.json';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: contact.phoneNumbers,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: contact.emails,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: contact.address.split('\n'),
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background-subtle scroll-mt-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main mb-4">Get In Touch</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Ready to transform your business? Contact our experts to discuss your requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-text-main mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary-600 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-text-muted">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-background-main p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-body mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border-form rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-main"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-body mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border-form rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-main"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-body mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border-form rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-main"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-body mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-border-form rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-main">
                  <option>Select a service</option>
                  {servicesList.map((service, index) => (
                    <option key={index} value={service.slug.current}>
                      {service.title}
                    </option>
                  ))}
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-body mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-border-form rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-text-main"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;