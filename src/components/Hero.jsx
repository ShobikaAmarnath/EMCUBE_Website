import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container-custom text-center text-text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Your Business with
            <span className="text-accent-yellow"> Oracle JD Edwards</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-text-light max-w-3xl mx-auto">
            Leading provider of Oracle JD Edwards solutions, cloud services, and enterprise transformation.
            Accelerate your digital journey with our expert consulting and managed services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-background-main text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-background-hover transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-text-white text-text-white px-8 py-4 rounded-lg font-semibold hover:bg-background-main hover:text-primary-600 transition-all duration-200">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-success" />
              <span className="text-lg">25+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-success" />
              <span className="text-lg">Global Reach</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-success" />
              <span className="text-lg">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background-main rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;