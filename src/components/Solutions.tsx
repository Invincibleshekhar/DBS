import React from 'react';
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Landmark, 
  Factory,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Solutions = () => {
  const scrollToSolutionDetails = () => {
    const element = document.getElementById('solution-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise-grade solutions for large organizations and corporations.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['ERP Systems', 'CRM Integration', 'Workflow Automation', 'Enterprise Security'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Heart,
      title: 'Healthcare Technology',
      description: 'HIPAA-compliant healthcare solutions to improve patient care and operational efficiency.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical Imaging', 'Patient Management'],
      color: 'from-green-600 to-green-700'
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Innovative EdTech solutions to enhance learning experiences and educational outcomes.',
      image: 'https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Information Systems', 'E-Learning Platforms'],
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Comprehensive e-commerce platforms to drive online sales and customer engagement.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Customer Analytics'],
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: Landmark,
      title: 'Government Solutions',
      description: 'Secure and compliant solutions for government agencies and public sector organizations.',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Digital Government Services', 'Citizen Portals', 'Document Management', 'Compliance Systems'],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Factory,
      title: 'Manufacturing Solutions',
      description: 'Industry 4.0 solutions to optimize manufacturing processes and supply chain management.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['IoT Integration', 'Production Monitoring', 'Quality Control', 'Supply Chain Optimization'],
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized technology solutions tailored to meet the unique challenges 
            and requirements of different industry sectors.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={scrollToSolutionDetails}
                  className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with organizations across various sectors. Contact us to discuss 
              how we can create customized solutions for your specific industry needs.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;