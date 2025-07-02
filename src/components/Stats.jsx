import { useEffect, useState } from 'react';
import { Users, Globe, Headphones, Award } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      number: '50+',
      label: 'Countries Served',
      description: 'Worldwide Customers'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '500+',
      label: 'Expert Consultants',
      description: 'Multi-Skilled Employees'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      number: '24/7',
      label: 'Support Available',
      description: 'Global Support'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '1000+',
      label: 'Projects Delivered',
      description: 'Successful Implementations'
    }
  ];

  return (
    <section id="stats-section" className="section-padding stats-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Global Impact</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Trusted by organizations worldwide for their digital transformation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-white/80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;