import { Cloud, Database, Shield, Zap, Users, Cog } from 'lucide-react';

const AboutServices = () => {
  const services = [
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Oracle JD Edwards',
      description: 'Complete ERP solutions with implementation, customization, and optimization services for enhanced business performance.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration services, and managed cloud solutions for modern enterprises.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including risk assessment, compliance, and threat management.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Business Intelligence',
      description: 'Advanced analytics, reporting, and data visualization solutions for data-driven decision making.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Managed Services',
      description: '24/7 monitoring, maintenance, and support services for your critical business applications.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: 'Digital Transformation',
      description: 'End-to-end transformation services to modernize your business processes and technology stack.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive enterprise solutions designed to accelerate your digital transformation 
            and drive business growth through innovative technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4">
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;