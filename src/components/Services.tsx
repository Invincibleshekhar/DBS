import { 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Globe, 
  Users, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {

  const services = [
    {
      id: 'custom-software',
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'Legacy System Modernization']
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services to enhance scalability, reliability, and cost-effectiveness.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Implementation', 'Multi-Cloud Strategy']
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Robust security measures to protect your digital assets and maintain business continuity.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response']
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
    },
    {
      id: 'data-analytics',
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data Warehousing', 'Business Intelligence', 'Data Visualization', 'Predictive Analytics']
    },
    {
      id: 'digital-transformation',
      icon: Globe,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Consulting']
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT guidance to align technology with your business goals and objectives.',
      features: ['Technology Strategy', 'Architecture Design', 'Vendor Selection', 'Project Management']
    },
    {
      id: 'managed-it',
      icon: BarChart3,
      title: 'Managed IT Services',
      description: '24/7 IT support and maintenance to keep your systems running smoothly and efficiently.',
      features: ['Help Desk Support', 'System Monitoring', 'Backup Solutions', 'Network Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth 
            and enhance operational efficiency across all sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link 
                to={`/service/${service.id}`}
                className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your business objectives 
              and stay ahead of the competition.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;