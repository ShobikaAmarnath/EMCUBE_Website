import { ArrowRight, Check } from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      title: 'Oracle JD Edwards Solutions',
      subtitle: 'Complete ERP Implementation & Support',
      description: 'Transform your business operations with our comprehensive Oracle JD Edwards solutions. From implementation to optimization, we provide end-to-end services.',
      features: [
        'EnterpriseOne Implementation',
        'World Software Solutions',
        'Custom Development',
        'System Integration',
        'Performance Optimization',
        'Upgrade Services'
      ],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      ctaText: 'Explore JD Edwards'
    },
    {
      title: 'Cloud Services',
      subtitle: 'Scalable Cloud Infrastructure',
      description: 'Leverage the power of cloud computing with our comprehensive cloud services. Migrate, manage, and scale your applications in the cloud.',
      features: [
        'Cloud Migration',
        'Infrastructure as a Service',
        'Platform as a Service',
        'Cloud Security',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      ctaText: 'Discover Cloud Solutions'
    },
    {
      title: 'Managed Services',
      subtitle: '24/7 Application Support',
      description: 'Focus on your core business while we manage your critical applications. Our managed services ensure maximum uptime and performance.',
      features: [
        'Application Monitoring',
        'Proactive Maintenance',
        'Performance Tuning',
        'Security Updates',
        'Backup Management',
        'Technical Support'
      ],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      ctaText: 'Learn About Support'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our specialized services can transform your business operations 
            and drive sustainable growth
          </p>
        </div>
        
        {mainServices.map((service, index) => (
          <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:flex items-center gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="btn-primary flex items-center space-x-2">
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;